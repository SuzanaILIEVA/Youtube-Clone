import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

const Comments = ({ data }) => {
  console.log(data);
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data?.commentsCount}</h2>
      <input
        className="w-full border-b bg-transparent outline-none mb-5 p-2"
        type="text"
        placeholder="Yorum Ekleyiniz."
      />

      {data?.data.map((i, index) => (
        <div key={index} className="flex gap-2 items-center px-1 py-4">
          <img src={i.authorThumbnail[0].url} className="rounded-full" alt="" />

          <div className="flex flex-col gap-2">
            <h5 className="flex gap-4 items-center">
              <span className="font-semibold">{i.authorText}</span>
              <span className="text-sm text-gray-400">
                {i.publishedTimeText}
              </span>
            </h5>
            <p>{i.textDisplay}</p>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 hover:bg-gray-700 rounded p-1">
                <AiFillLike />
                <span>{i.likesCount}</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-gray-700 rounded p-2 px-3">
                <AiFillDislike />
              </div>

              <span className="flex items-center gap-2 hover:bg-gray-700 rounded p-1">
                Yanıtla
              </span>
            </div>

            {i.replyCount > 0 && (
              <div className="flex items-center gap-2 text-blue-500 hover:bg-[#11263D] w-fit p-2 rounded cursor-pointer">
                <TiArrowSortedDown />
                {i.replyCount} Yanıt
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
