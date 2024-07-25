import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Release } from '@/store';

type Props = {
  list: Release[];
};
export const PortfolioCards: React.FC<Props> = ({ list }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center self-center gap-6'>
      {list.map(({ id, title, href, imagePath, badges }) => (
        <Link key={id} href={href} className='PortfolioCard'>
          <div className='relative flex-initial'>
            <div className='PortfolioCard__blur'>
              <Image
                src={imagePath}
                alt={`${id} border`}
                width={204}
                height={204}
                quality={25}
              />
            </div>
            <Image
              src={imagePath}
              alt={title}
              width={200}
              height={200}
              className='shadow-inset-border'
            />
          </div>
          <h6>{title}</h6>
          <div className='PortfolioCard__badges'>
            {badges.map((badge) => (
              <span key={badge}>
                <mark>#{badge}</mark>
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};
