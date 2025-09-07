import * as React from 'react';

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink = ({
  children,
  href,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='nofollow noreferrer'
      {...props}
      className={`ext${props.className ? ` ${props.className}` : ''}`}
    >
      {children}
    </a>
  );
};
