import React from "react";
import Video from "../video/Video";
import Playlist from "../video/Playlist";
const index = () => {
  return (
    <div className="max-w-[1330px] m-auto min-h-[calc(100vh-80px)] w-full px-[15px]  py-10 lg:flex ">
      <Video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      <Playlist />
    </div>
  );
};

export default index;
