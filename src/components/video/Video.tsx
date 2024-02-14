"use client";
import React, { FC } from "react";

const Video: FC<{ src: string }> = ({ src }) => {
  return (
    <>
      <div className="video-container w-full lg:w-[70%]">
        <video
          className="w-full h-auto rounded-lg"
          controls
          preload="none"
          autoPlay
        >
          <source src={src} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Video;
