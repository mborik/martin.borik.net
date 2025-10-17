import React from 'react';

interface FigureAudioProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  src: string;
  caption?: string;
  figureClass?: string;
}

export const FigureAudio = ({
  children,
  src,
  caption,
  figureClass,
  ...props
}: FigureAudioProps) => {
  const handlePlay = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    const audioNodes = document.getElementsByTagName('audio');
    for (let i = 0; i < audioNodes.length; i++) {
      if (audioNodes[i] !== event.currentTarget && !audioNodes[i].paused) {
        audioNodes[i].pause();
        audioNodes[i].currentTime = 0;
      }
    }
  };

  return (
    <div
      {...props}
      className={`figure-paragraph embedded-media${props.className ? ` ${props.className}` : ''}`}
    >
      <figure className={figureClass || ''}>
        <audio
          onPlay={handlePlay}
          controls
          controlsList='nodownload nofullscreen'
          src={src}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {children}
    </div>
  );
};
