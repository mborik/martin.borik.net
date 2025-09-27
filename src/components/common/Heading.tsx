import * as React from 'react';
import { FaHashtag } from 'react-icons/fa';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  id: string;
}

export const Heading = ({ children, as, id, ...props }: HeadingProps) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const Tag: React.ElementType = as ?? 'h3';
  return (
    <Tag
      {...props}
      id={id}
      onPointerLeave={() => isCopied && setIsCopied(false)}
    >
      <a
        href={`#${id}`}
        title='kopírovať odkaz na túto sekciu'
        className={isCopied ? 'copied' : ''}
        onClick={(e) => {
          e.preventDefault();
          const element =
            e.currentTarget?.parentElement ?? document.getElementById(id);
          const hash = `#${id}`;
          if (element && typeof window !== 'undefined') {
            window.history.pushState(null, '', hash);
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            window.navigator.clipboard.writeText(window.location.href);
          }
          setIsCopied(true);
        }}
      >
        <FaHashtag />
      </a>
      {children}
    </Tag>
  );
};
