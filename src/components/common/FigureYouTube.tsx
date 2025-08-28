import React from 'react';

interface FigureYouTubeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  youtubeCode: string;
  caption: string;
  isCaptionVisible?: boolean;
  figureClass?: string;
}

export const FigureYouTube = ({
  children,
  youtubeCode,
  caption,
  isCaptionVisible = false,
  figureClass,
  ...props
}: FigureYouTubeProps) => {
  return (
    <div
      {...props}
      className={`figure-paragraph${props.className ? ` ${props.className}` : ''}`}
    >
      <figure className={`${figureClass || ''} print:hidden`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeCode}&amp;controls=1&amp;hd=1`}
          title={caption}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          {...{
            /* avoid React warnings */
            frameBorder: '0',
          }}
        ></iframe>
        {isCaptionVisible && <figcaption>{caption}</figcaption>}
      </figure>
      {children}
    </div>
  );
};
