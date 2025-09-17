import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import YouTubePlayer from './YouTubePlayer';

const VideosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-['Open Sans']">
      <NavBar />
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Watch Stark Vision in Action</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <YouTubePlayer videoId="dQw4w9WgXcQ" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <YouTubePlayer videoId="L_LUpnjgPso" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
