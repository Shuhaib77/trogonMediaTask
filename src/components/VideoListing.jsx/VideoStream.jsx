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
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&modestbranding=1&rel=0&iv_load_policy=3&controls=0&fs=1&enablejsapi=1`
      : "";
  };
  const getVimeoEmbedUrl = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? `https://player.vimeo.com/video/${match[1]}` : "";
  };
  let embedUrl = "";
  if (video.video_type === "YouTube") {
    embedUrl = getYouTubeEmbedUrl(video.video_url);
  } else if (video.video_type === "Vimeo") {
    embedUrl = getVimeoEmbedUrl(video.video_url);
  }

  return (
    <div className="pl-[20px] pr-[20px] mt-[20px]">
      <div className="w-[100%] h-[500px] bg-orange-300 flex justify-center items-center relative">
        {embedUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="p-5">Invalid video URL</div>
        )}
      </div>

      <div className="lg:h-[400px] sm:h-[100%] w-[100%] shadow-2xl p-[50px] flex flex-col gap-[20px]">
        <h1 className="text-3xl sm:text-center lg:text-left font-bold">{video?.title}</h1>
        <p className="text-gray-600">{video?.description}</p>
        <div>
          <button className="bg-white shadow-black p-[20px] rounded-md shadow-2xl">
            <i className="fa-solid fa-download fa-2xl" style={{ color: "#000000" }}></i> DOWNLOAD
          </button>
          <button className="bg-white shadow-black p-[20px] rounded-md shadow-2xl ml-[5px] lg:mt-0 sm:mt-10px">
            <i className="fa-regular fa-circle-question fa-2xl" style={{ color: "#000000" }}></i> DOUBTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoStream;
