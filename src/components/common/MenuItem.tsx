import Link from 'next/link';
import * as React from 'react';

interface IconBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  key: string;
  title: string;
  href: string;
  external?: boolean;
  description?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MenuItem: React.FC<IconBaseProps> = ({
  children,
  key,
  title,
  href,
  external,
  description,
  onClick,
  ...props
}) => {
  return (
    <div key={key} className='MenuItem' {...props}>
      {children ? <div className='MenuItem__icon'>{children}</div> : null}
      <div className='MenuItem__texts'>
        {external ? (
          <a href={href} target='_blank' rel='noreferrer' onClick={onClick}>
            {title}
          </a>
        ) : (
          <Link href={href} onClick={onClick}>
            {title}
          </Link>
        )}
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
};
