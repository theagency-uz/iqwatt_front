'use client';
import VideosContent from '@/Components/common/videosContent';
import videosData from '@/data/videosData';
import { getPortfolios } from '@/services/portfolio';
import { useEffect, useState } from 'react';

const LIMIT = 10;

function Portfolio({ lng, ...props }) {
  const [videos, setVideos] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [moreLoading, setMoreLoading] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      const tempVideos = await getPortfolios({ lng, limit: LIMIT, page: 1 });
      // setVideos(tempVideos.data);
      setTotalCount(tempVideos.meta.pagination.total);
    }
    fetchAll();
  }, [lng]);

  async function handleMore() {
    setMoreLoading(true);
    const tempVideos = await getPortfolios({
      lng,
      limit: LIMIT,
      page: Math.ceil(videos.length / LIMIT) + 1,
    });

    if (tempVideos?.data?.length > 0) {
      setVideos((v) => [...v, ...tempVideos.data]);
    }

    setMoreLoading(false);
  }

  return (
    <VideosContent
      lng={lng}
      videos={videos}
      handleMore={handleMore}
      hasMore={totalCount > videos?.length}
      moreLoading={moreLoading}
    />
  );
}

export default Portfolio;
