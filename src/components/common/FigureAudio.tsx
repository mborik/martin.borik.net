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
  return (
    <div
      {...props}
      className={`figure-paragraph${props.className ? ` ${props.className}` : ''}`}
    >
      <figure className={`${figureClass || ''} print:hidden`}>
        <audio
          controls
          controlsList='nodownload nofullscreen'
          src={src}
        ></audio>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {children}
    </div>
  );
};
