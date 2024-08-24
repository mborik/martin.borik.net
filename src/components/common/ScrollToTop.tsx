import React from 'react';

interface ScrollToTopProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  top?: number;
  smooth?: boolean;
  className?: string;
}

const scrollToTop = (smooth: boolean = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
};

export const ScrollToTop = ({
  children,
  top,
  smooth = false,
  className = '',
  ...props
}: ScrollToTopProps) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const currentTop =
        top ||
        Math.min(
          document.documentElement.clientHeight || Infinity,
          window.innerHeight || Infinity,
        ) >> 1;
      setVisible(document.documentElement.scrollTop >= currentTop);
    };
    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [top]);

  return (
    <>
      {visible && (
        <button
          className={`ScrollToTop${className ? ` ${className}` : ''}`}
          onClick={() => scrollToTop(smooth)}
          aria-hidden='true'
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};
