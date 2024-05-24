import millify from "millify";
import React, { useState } from "react";

const VideoInfo = ({ video }) => {
  // console.log(video);

  const [expand, setExpand] = useState(false);

  const text = expand
    ? video.description
    : video.description.slice(0, 300) + "...daha fazla";
  // console.log(text);

  return (
    <div
      // onClick={() => setExpand(expand ? false : true)} aciksa kapat,kapaliysa ac demek icin uzun yol 
      onClick={() => setExpand(!expand)}
      className="mt-4 bg-[#272727] rounded-md p-2 cursor-pointer hover:bg-opacity-75"
    >
      <div className="flex gap-4 mb-2">
        <p className="font-bold">{millify(video.viewCount)} Görüntülenme</p>
        <p className="font-bold">
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <p >
        {text.split("\n").map((line,i) => (
          <span key={i}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
