import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    const {searchParams} = new URL(req.url);
    const query = searchParams.get("q") || "fitness";
    const apiKey = process.env.YOUTUBE_API_KEY;

    try{
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: `${query} #shorts`,
        maxResults: 12,
        type: 'video',
        key: apiKey,
      },
    });
        const videos = response.data.items.map((item:any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            channelTitle: item.snippet.channelTitle,
          }));
        return NextResponse.json(videos);
    }catch(err){
        console.error("API Error:",err);
        return NextResponse.json({error: "Failed to fetch videos"}, {status: 500});
    }
}