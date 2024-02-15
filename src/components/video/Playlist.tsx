"use client";
import React, { FC, useState, useRef } from "react";
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
        alt="thumbnail"
      />
      <div className="info mt-1">
        <div className="title font-semibold">{title}</div>
        <div className="subtitle text-xs mt-1 text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
};

const Playlist: FC<{ handleSetVideo: Function }> = ({ handleSetVideo }) => {
  const [playlist, setPlaylist] = useState(videos);

  const dragVideo = useRef<number>(0);
  const draggedOverVideo = useRef<number>(0);

  const handleSort = () => {
    const playlistClone = [...playlist];
    const temp = playlistClone[dragVideo.current];
    playlistClone[dragVideo.current] = playlistClone[draggedOverVideo.current];
    playlistClone[draggedOverVideo.current] = temp;
    setPlaylist(playlistClone);
  };

  return (
    <>
      <div className="playlist-container max-h-[calc(100vh-200px)] overflow-y-scroll w-full lg:w-[30%] mt-10 lg:mt-0 pt-0 p-5">
        {playlist.map((video, index) => (
          <div
            key={video.sources}
            className="cursor-pointer"
            draggable
            onDragStart={() => (dragVideo.current = index)}
            onDragEnter={() => (draggedOverVideo.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => {
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
