interface Props {
    video: {
      id: string;
      title: string;
      thumbnail: string;
      channelTitle: string;
    };
  }
  
  export default function VideoCard({ video }: Props) {
    return (
      <div className="border rounded p-4 shadow">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="mt-2 font-semibold text-lg">{video.title}</h2>
        <p className="text-sm text-gray-600">{video.channelTitle}</p>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-1 inline-block"
        >
          Watch on YouTube
        </a>
      </div>
    );
  }
  