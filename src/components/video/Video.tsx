"use client";
import React, { FC, useEffect, useState, useRef } from "react";

const Video: FC<{ video: any }> = ({ video }) => {
  //   console.log(video);
  const [videoData, setVideoData] = useState(video);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    setVideoData(video);
  }, [video]);

  useEffect(() => {
    // Update video source when the video prop changes
    setVideoData((prevVideo: any) => ({
      ...prevVideo,
      sources: video.sources,
    }));

    // Pause and reset video when source changes
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [video.sources]);
  return (
    <>
      <div className="video-container w-full lg:w-[70%]">
        <video ref={videoRef} className="w-full h-auto rounded-lg" controls>
          <source src={videoData.sources} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <div className="info mt-5">
          <div className="title text-3xl font-semibold">{videoData.title}</div>
          <div className="subtitle text-gray-400">{videoData.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default Video;
