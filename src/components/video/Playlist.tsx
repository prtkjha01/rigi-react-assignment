import React, { FC } from "react";
import { videos } from "../../utils/constants";

const Video: FC<{ video: any }> = ({ video }) => {
  const { title, subtitle } = video;
  return (
    <div className="flex gap-3 p-2 pb-4 cursor-pointer mb-2 border-b border-gray-300">
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

const Playlist = () => {
  return (
    <>
      <div className="playlist-container max-h-[calc(100vh-80px)] overflow-y-scroll w-full lg:w-[30%] mt-10 lg:mt-0 p-5 pb-20">
        {videos.map((video) => (
          <Video key={video.sources[0]} video={video} />
        ))}
      </div>
    </>
  );
};

export default Playlist;
