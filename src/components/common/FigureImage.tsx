import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { renderToString } from 'react-dom/server';

const MediaSource = ({ mediaSource }: { mediaSource?: string }) =>
  mediaSource && (
    <div className='media-source'>
      <span className='media-source-icon'>i</span>
      <span className='media-source-text'>zdroj: {mediaSource}</span>
    </div>
  );

interface ZoomableImageProps {
  image: StaticImageData;
  caption: string | React.ReactNode;
  mediaSource?: string;
  isCaptionVisible?: boolean;
  altText?: string;
  imgClass?: string;
}

const ZoomableImage = ({
  image,
  altText = 'Obrázok',
  caption,
  mediaSource,
  isCaptionVisible,
  imgClass,
}: ZoomableImageProps) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const layoutId = image.src.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '');

  const handleEsc = React.useCallback(
    (event: KeyboardEvent) => event.key === 'Escape' && setIsZoomed(false),
    [],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleEsc, false);
    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, [handleEsc]);

  React.useEffect(() => {
    document.documentElement.style.overflow = isZoomed ? 'hidden' : '';
  }, [isZoomed]);

  return (
    <>
      <motion.figure
        layout
        layoutId={layoutId}
        className={`${imgClass} zoomable`}
      >
        <Image
          src={image}
          alt={altText}
          onClick={() => setIsZoomed(true)}
          blurDataURL={image.blurDataURL}
        />
        {isCaptionVisible && <figcaption>{caption}</figcaption>}
        <MediaSource mediaSource={mediaSource} />
      </motion.figure>
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className='lightbox'
            initial='hidden'
            exit='hidden'
            animate='visible'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div
              className='close-backdrop'
              onClick={() => setIsZoomed(false)}
            />
            <motion.div layout layoutId={layoutId} className='lightbox-content'>
              <Image src={image} alt={altText} />
              <div>{caption}</div>
              {mediaSource && <small>zdroj: {mediaSource}</small>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface FigureImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  image: StaticImageData;
  caption: string | React.ReactNode;
  mediaSource?: string;
  isCaptionVisible?: boolean;
  isZoomable?: boolean;
  imgClass?: string;
}

export const FigureImage = ({
  children,
  image,
  caption,
  mediaSource,
  isCaptionVisible = false,
  isZoomable = false,
  imgClass,
  ...props
}: FigureImageProps) => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 768px), print').matches);
    }
  }, []);

  const altText =
    typeof caption === 'string'
      ? caption
      : renderToString(caption).replace(/<\/?[^>]+(>|$)/g, '') || '';

  return (
    <div
      {...props}
      className={`figure-paragraph${props.className ? ` ${props.className}` : ''}`}
    >
      {isZoomable && isDesktop ? (
        <ZoomableImage
          image={image}
          altText={altText}
          caption={caption}
          mediaSource={mediaSource}
          isCaptionVisible={isCaptionVisible}
          imgClass={imgClass}
        />
      ) : (
        <figure className={imgClass}>
          <Image src={image} alt={altText} blurDataURL={image.blurDataURL} />
          {isCaptionVisible && <figcaption>{caption}</figcaption>}
          <MediaSource mediaSource={mediaSource} />
        </figure>
      )}
      {children}
    </div>
  );
};
