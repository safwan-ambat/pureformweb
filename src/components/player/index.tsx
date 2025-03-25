import React, { useState, useRef, useEffect } from 'react';

interface VimeoEmbedProps {
  videoId: string;
  thumbnailImage: string; // Thumbnail to show when not hovering
  autoplay?: boolean;
  loop?: boolean;
  responsive?: boolean;
  borderRadius?: string;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({
  videoId,
  thumbnailImage,
  loop = true,
  responsive = true,
  borderRadius = '1rem'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Background playback URL without controls
  // We use background=1 to make it play in the background without controls
  // muted=1 to mute the video by default (most browsers require this for autoplay)
  const backgroundUrl = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=0&loop=${loop ? 1 : 0}&title=0&byline=0&portrait=0&muted=1`;
  
  // Regular playback URL with controls (when clicked)
  const playbackUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;

  // Load video and start playing when hovered
  useEffect(() => {
    if (isHovered && iframeRef.current) {
      // Update the src attribute to include autoplay=1
      const currentSrc = iframeRef.current.src;
      if (!currentSrc.includes('autoplay=1')) {
        iframeRef.current.src = currentSrc.replace('autoplay=0', 'autoplay=1');
      }
    }
  }, [isHovered]);

  // Handle click to play video
  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  if (responsive) {
    return (
      <div 
        className="relative w-full overflow-hidden"
        style={{ 
          paddingTop: '56.25%', /* 16:9 Aspect Ratio */
          borderRadius 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoClick} // Simplified click handler
      >
        {isPlaying ? (
          // Full video with controls when clicked
          <iframe
            src={playbackUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ borderRadius }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video Player"
          ></iframe>
        ) : (
          <>
            {/* Background video when hovered */}
            <iframe
              ref={iframeRef}
              src={backgroundUrl}
              className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{ borderRadius }}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Vimeo Video Background"
            ></iframe>
            
            {/* Thumbnail image when not hovered */}
            <div 
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              style={{
                borderRadius,
                backgroundImage: `url(${thumbnailImage})`,
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
  }

  // Non-responsive version
  return (
    <div 
      className="relative"
      style={{ width: '640px', height: '360px', borderRadius }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick} // Simplified click handler
    >
      {isPlaying ? (
        // Full video with controls when clicked
        <iframe
          src={playbackUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          style={{ borderRadius }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video Player"
        ></iframe>
      ) : (
        <>
          {/* Background video when hovered */}
          <iframe
            ref={iframeRef}
            src={backgroundUrl}
            className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ borderRadius }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo Video Background"
          ></iframe>
          
          {/* Thumbnail image when not hovered */}
          <div 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{
              borderRadius,
              backgroundImage: `url(${thumbnailImage})`,
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

export default VimeoEmbed;