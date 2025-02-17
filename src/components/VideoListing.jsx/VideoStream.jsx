import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../../../redux/subjectSlice";

function VideoStream() {
  const { link, url } = useParams();
  const dispatch = useDispatch();

  const { videoById, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchVideoById({ url }));
  }, [dispatch, url]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const video = videoById?.find((item) => item.id == link);
  const isYouTube = video?.video_url?.includes("youtube.com") ?? false;

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!video) return <p>No video found.</p>;

  return (
    <div className="pl-[20px] pr-[20px] mt-[20px]">
      <div className="w-[100%] h-[500px] bg-orange-300 flex justify-center items-center relative">
        {isYouTube ? (
          <iframe
            width="100%"
            height="100%"
            src={video.video_url.replace("watch?v=", "embed/")}
            title={video.title}
            allowFullScreen
          ></iframe>
        ) : (
          <video ref={videoRef} width="100%" height="100%" controls>
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {!isYouTube && (
        <button
          onClick={togglePlayPause}
          className="mt-2 bg-violet-600 text-white px-5 py-2 rounded-md shadow-md"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      )}
      <div className="lg:h-[400px]  sm:h-[100%] w-[100%] shadow-2xl p-[50px] flex flex-col gap-[20px]">
        <h1 className="text-3xl sm:text-center lg:text-left font-bold">{video?.title}</h1>
        <p className="text-gray-600">{video?.description}</p>
        <div >
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
