'use client';
import VideosContent from '@/Components/common/videosContent';
import videosData from '@/data/videosData';
import { getPortfolios } from '@/services/portfolio';
import { useEffect, useState } from 'react';

function Portfolio({ lng, ...props }) {
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function fetchAll() {
      const tempVideos = await getPortfolios({ lng, limit: 10, page: 1 });
      setVideos(tempVideos);
    }
    fetchAll();
  }, [lng]);

  return <VideosContent lng={lng} videos={videos} />;
}

export default Portfolio;
