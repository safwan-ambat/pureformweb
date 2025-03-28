import React, { useState, useRef, useEffect } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  thumbnailImage?: string; // Optional as YouTube provides thumbnails
  autoplay?: boolean;
  loop?: boolean;
  responsive?: boolean;
  borderRadius?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  thumbnailImage,
  loop = true,
  responsive = true,
  borderRadius = '1rem'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // YouTube URL parameters
  // When playing the video with controls
  const playbackUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1${loop ? '&loop=1&playlist=' + videoId : ''}`;
  
  // For hover preview
  const backgroundUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0${loop ? '&loop=1&playlist=' + videoId : ''}`;
  
  // Use YouTube's thumbnail if none provided
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailToUse = thumbnailImage || defaultThumbnail;

  // Load video and start playing when hovered
  useEffect(() => {
    if (isHovered && iframeRef.current && !isPlaying) {
      // Update the src attribute to include autoplay=1
      const currentSrc = iframeRef.current.src;
      if (!currentSrc.includes('autoplay=1')) {
        iframeRef.current.src = currentSrc.replace('autoplay=0', 'autoplay=1');
      }
    }
  }, [isHovered, isPlaying]);

  // Handle immediate play when clicked anywhere
  const playVideo = () => {
    // Ensure we're not already playing
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  // Add click event listener to the entire container
  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener('click', playVideo);
      return () => {
        element.removeEventListener('click', playVideo);
      };
    }
  }, []);

  if (responsive) {
    return (
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-pointer"
        style={{ 
          paddingTop: '56.25%', /* 16:9 Aspect Ratio */
          borderRadius 
        }}
        onMouseEnter={() => !isPlaying && setIsHovered(true)}
        onMouseLeave={() => !isPlaying && setIsHovered(false)}
      >
        {isPlaying ? (
          // Full video with controls when clicked
          <iframe
            src={playbackUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ borderRadius }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        ) : (
          <>
            {/* Background video when hovered */}
            <iframe
              ref={iframeRef}
              src={backgroundUrl}
              className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{ borderRadius }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube Video Background"
            ></iframe>
            
            {/* Thumbnail image when not hovered */}
            <div 
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              style={{
                borderRadius,
                backgroundImage: `url(${thumbnailToUse})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            
            {/* Play button overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
              <div onClick={playVideo} className="bg-black bg-opacity-50 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Non-responsive version
  return (
    <div 
      ref={containerRef}
      className="relative cursor-pointer"
      style={{ width: '640px', height: '360px', borderRadius }}
      onMouseEnter={() => !isPlaying && setIsHovered(true)}
      onMouseLeave={() => !isPlaying && setIsHovered(false)}
    >
      {isPlaying ? (
        // Full video with controls when clicked
        <iframe
          src={playbackUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          style={{ borderRadius }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      ) : (
        <>
          {/* Background video when hovered */}
          <iframe
            ref={iframeRef}
            src={backgroundUrl}
            className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ borderRadius }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube Video Background"
          ></iframe>
          
          {/* Thumbnail image when not hovered */}
          <div 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{
              borderRadius,
              backgroundImage: `url(${thumbnailToUse})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          {/* Play button overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            <div className="bg-black bg-opacity-50 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-white" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default YouTubeEmbed;