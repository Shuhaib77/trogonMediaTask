import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../../../redux/subjectSlice";

function VideoStream() {
  const { link } = useParams();
  const dispatch = useDispatch();
  const { videoById, loading } = useSelector((state) => state.data);

  useEffect(() => {
    if (link) {
      dispatch(fetchVideoById({ link }));
    }
  }, [dispatch, link]);

  const video = videoById?.find((item) => item.id == link);

  if (loading) return <div className="p-5">Loading...</div>;
  if (!video) return <div className="p-5">No video found</div>;

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&modestbranding=1&rel=0&iv_load_policy=3&controls=0&fs=1`
      : "";
  };

  const getVimeoEmbedUrl = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match
      ? `https://player.vimeo.com/video/${match[1]}?autoplay=1&background=1&byline=0&title=0&portrait=0`
      : "";
  };

  let embedUrl = "";
  if (video.video_type === "YouTube") {
    embedUrl = getYouTubeEmbedUrl(video.video_url);
  } else if (video.video_type === "Vimeo") {
    embedUrl = getVimeoEmbedUrl(video.video_url);
  }

  return (
    <div className="px-5 mt-5">
      <div className="w-full h-[500px] bg-gray-900 flex justify-center items-center relative">
        {embedUrl ? (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title={video.title}
            
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="p-5 text-white">Invalid video URL</div>
        )}
      </div>

      <div className="lg:h-[400px] sm:h-auto w-full shadow-2xl p-10 flex flex-col gap-5 bg-white">
        <h1 className="text-3xl font-bold">{video?.title}</h1>
        <p className="text-gray-600">{video?.description}</p>
        <div className="flex gap-3">
          <button className="bg-black text-white p-4 rounded-md flex items-center gap-2">
            <i className="fa-solid fa-download"></i> DOWNLOAD
          </button>
          <button className="bg-black text-white p-4 rounded-md flex items-center gap-2">
            <i className="fa-regular fa-circle-question"></i> DOUBTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoStream;
