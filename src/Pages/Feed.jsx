import { useContext } from "react";
import SideBar from "../Components/SideBar";
import { VideoContext } from "../Context/VideoContext";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader"

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);
  console.log(isLoading);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader/>
        ) : error ? (
          <p>error</p>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
