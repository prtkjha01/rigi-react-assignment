"use client";
import React, { FC } from "react";
import { videos } from "../../utils/constants";

const Video: FC<{ video: any; isLast: boolean }> = ({ video, isLast }) => {
  const { title, subtitle } = video;
  return (
    <div
      className={`flex gap-3 p-2 pb-4  mb-2  ${
        !isLast && "border-b border-gray-300"
      } `}
    >
      <img
        src={video.thumb}
        className="w-[150px] aspect-[14/9] rounded-lg"
        alt=""
      />
      <div className="info mt-1">
        <div className="title font-semibold">{title}</div>
        <div className="subtitle text-xs mt-1 text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
};

const Playlist: FC<{ handleSetVideo: Function }> = ({ handleSetVideo }) => {
  return (
    <>
      <div className="playlist-container max-h-[calc(100vh-200px)] overflow-y-scroll w-full lg:w-[30%] mt-10 lg:mt-0 pt-0 p-5">
        {videos.map((video, index) => (
          <div
            key={video.sources}
            className="cursor-pointer"
            onClick={() => {
              //   console.log(video.sources);

              handleSetVideo(video);
            }}
          >
            <Video video={video} isLast={index === videos.length - 1} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Playlist;
