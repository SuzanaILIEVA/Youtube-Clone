import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../Utils/Api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "../../Components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  //**  1) Arama parametrelerine erisim icin kullaniriz
  const [searchParams] = useSearchParams();

  //** 2) url'deki "v" isimi verdigimiz id parametresine eristik
  const id = searchParams.get("v");
  // console.log(id);

  //** 3) id'si bilinen videonun bilgilerini api'den aldik
  useEffect(() => {
    //video detay icin istek atildi
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    //video yorumlari icin istek atildi
    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]); // id'ye gore istek attik id her degistiginde istek atilsin diye bapimlilik dizinine yazdik

  // console.log(video);

  return (
    <div className="detail-page overflow-auto h-screen">

<div>
      {/**video icerik kismi  */}
      <div className="h-[50vh] lg-h-[60vh] rounded-md overflow-hidden">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>

{/**eger video hemen gelmesse yada yoksa  */}
      {!video && <p>Yukleniyor...</p>  }

{/** video varsa */}      
    {video && (
      <>
      <h1 className="text-xl font-bold my-3">{video.title}</h1>
      
      <ChannelInfo video={video}/>

      <VideoInfo video={video}/>

      <Comments data={comments}/>
      </>
    )}

</div>


{/****  ilgili videolar kismi **** */}
    <div className="flex flex-col gap-5 p-1 cursor-pointer">
      {video?.relatedVideos.data.map((item) => 
        item.type === "video" && <VideoCard key={item.videoId} video={item} isRow={true}/>
      )}
    </div>
    </div>
  );
};

export default VideoDetail;
