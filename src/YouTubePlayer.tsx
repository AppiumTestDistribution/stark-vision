import { useState } from "react";

const YouTubePlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-12">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
            <div className="text-gray-200">Loading video...</div>
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
          src="https://www.youtube-nocookie.com/embed/SOWxNVmNvVw"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
        />
      </div>
    </div>
  );
};

export default YouTubePlayer;
