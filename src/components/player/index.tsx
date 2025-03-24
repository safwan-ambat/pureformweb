import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

interface VimeoPlayerProps {
  videoId: string;
  width?: number;
  height?: number;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId, width = 640, height = 360 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (containerRef.current && !playerRef.current) {
      playerRef.current = new Player(containerRef.current, {
        id: parseInt(videoId),
        width,
        height,
      });
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [videoId, width, height]);

  return <div ref={containerRef} className="vimeo-player"></div>;
};

export default VimeoPlayer;