
const YouTubePlayer = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/SOWxNVmNvVw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        style={{ height: '315px' }}
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
