'use client';
import { useState } from 'react';
import axios from 'axios';
import VideoCard from '@/components/VideoCard';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  const searchVideos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/search?q=${query}`);
      setVideos(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI Video Recommender</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Enter topic (e.g., fitness, cooking)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={searchVideos}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </main>
  );
}
