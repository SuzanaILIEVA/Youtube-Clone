import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  // console.log(video);
  return (
    <div className="flex justify-between">
      {/**sol taraf */}
      <div className="flex gap-3">
        <img
          src={video.channelThumbnail[0].url}
          alt=""
          className="rounded-full w-12 h-12"
        />
        <div>
          <h4 className="font-bold">{video.channelTitle}</h4>
          <p className="text-gray-400">{video.subscriberCountText}</p>
        </div>

        <button className="bg-white text-black h-9 p-2 text-center rounded-full hover:bg-gray-400 transition">
          Abone Ol
        </button>
      </div>

      {/**sag taraf */}
      <div className="flex items-center gap-3 bg-[#272727] rounded-full cursor-pointer">
        <div className="py-2 px-6 border-r">
          <AiFillLike />
        </div>
        <div className="py-2 px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
