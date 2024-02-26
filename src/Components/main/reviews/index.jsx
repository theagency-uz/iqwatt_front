"use client";
import VideosContent from "@/Components/common/videosContent";
import videosData from "@/data/videosData";
import { useState } from "react";

function Reviews({ lng, ...props }) {
  const [videos, setVideos] = useState(videosData);
  return <VideosContent lng={lng} videos={videos} />;
}

export default Reviews;
