'use client';

import { useState, useEffect, useRef } from 'react';

interface ProjectViewerProps {
  projectUrl: string;
  title: string;
}

const ProjectViewer: React.FC<ProjectViewerProps> = ({ projectUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (iframeRef.current?.requestFullscreen) {
        iframeRef.current.requestFullscreen().catch(err => {
          console.error(`无法进入全屏模式: ${err.message}`);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-gray-50 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={toggleFullscreen}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            {isFullscreen ? '退出全屏' : '全屏'}
          </button>
        </div>
      </div>
      <div className="flex-1 relative w-full h-full min-h-[500px]">
        <iframe
          ref={iframeRef}
          src={projectUrl}
          className="absolute inset-0 w-full h-full border-0"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          allow="accelerometer; camera; microphone; gamepad"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProjectViewer; 