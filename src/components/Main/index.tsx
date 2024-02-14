"use client";
import React, { useState } from "react";
import Video from "../video/Video";
import Playlist from "../video/Playlist";
import { videos } from "../../utils/constants";
const index = () => {
  // const [src, setSrc] = useState("");
  const [video, setVideo] = useState({
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitle: "By Blender Foundation",
    thumb:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
  });
  const handleSetVideo = (vid: any) => {
    setVideo(vid);
  };
  return (
    <div className="max-w-[1330px] m-auto min-h-[calc(100vh-80px)] w-full px-[15px]  py-10 lg:flex ">
      <Video video={video} />
      <Playlist handleSetVideo={handleSetVideo} />
    </div>
  );
};

export default index;
