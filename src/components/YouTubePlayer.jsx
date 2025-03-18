import React, { useState } from "react";

const YouTubePlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState(null);

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = extractVideoId(videoUrl);
    setVideoId(id);
  };

  return (
    <div className="text-center p-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Masukkan URL YouTube..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-2 w-64 border border-gray-500 rounded"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Tampilkan Video
        </button>
      </form>

      {videoId && (
        <div className="mt-4">
          <iframe
            width="560"
            height="315"
            src={\`https://www.youtube.com/embed/\${videoId}\`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubePlayer;
