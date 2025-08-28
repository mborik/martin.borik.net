import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { renderToString } from 'react-dom/server';

interface FigureImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  image: StaticImageData;
  caption: string | React.ReactNode;
  isCaptionVisible?: boolean;
  imgClass?: string;
}

export const FigureImage = ({
  children,
  image,
  caption,
  isCaptionVisible = false,
  imgClass,
  ...props
}: FigureImageProps) => {
  const altText =
    typeof caption === 'string'
      ? caption
      : renderToString(caption).replace(/<\/?[^>]+(>|$)/g, '') || '';
  return (
    <figure {...props}>
      <Image src={image} alt={altText} className={imgClass} />
      {isCaptionVisible && <figcaption>{caption}</figcaption>}
      {children}
    </figure>
  );
};
