import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Episode, usePlayerStore } from '@/lib/player';

interface RelatedProps extends React.HTMLAttributes<HTMLDivElement> {
  episode: Episode;
}

export const Related = ({ episode, ...props }: RelatedProps) => {
  const { currentList } = usePlayerStore();
  const [isSkeleton, setIsSkeleton] = React.useState(true);

  if (!episode?.related?.length || !currentList?.length) return null;

  const related = episode.related.slice();
  const nextEpisodeNumber = related.shift();
  const nextEpisode = currentList?.find(
    (ep) => ep.shortId === nextEpisodeNumber,
  );

  return (
    <footer {...props}>
      {nextEpisode && (
        <>
          <h4>Nasledujúca epizóda:</h4>
          <div className='next-episode'>
            {nextEpisode?.image && (
              <Link
                href={`/${nextEpisode.slug}`}
                className={`image${isSkeleton ? ' skeleton' : ''}`}
              >
                <Image
                  src={nextEpisode.image?.url}
                  alt={nextEpisode.title}
                  width='128'
                  height='128'
                  onLoad={() => setIsSkeleton(false)}
                />
                {isSkeleton && <div className='skeleton-overlay' />}
              </Link>
            )}
            <aside>
              <Link href={`/${nextEpisode.slug}`}>
                #{nextEpisode.episode}: {nextEpisode.baseTitle}
              </Link>
              <div>{nextEpisode.description}</div>
            </aside>
          </div>
        </>
      )}
      {related.length > 0 && (
        <div className='related-episodes'>
          <h4>Ďalšie odporúčané epizódy:</h4>
          <ul>
            {related.flatMap((rel: number) => {
              const relatedEpisode = currentList?.find(
                (ep) => rel === ep.shortId,
              );
              if (!relatedEpisode) return [];
              return [
                <li key={relatedEpisode.shortId}>
                  <Link href={`/${relatedEpisode.slug}`}>
                    #{relatedEpisode.episode}: {relatedEpisode.baseTitle}
                  </Link>
                  <small>{relatedEpisode.description}</small>
                </li>,
              ];
            })}
          </ul>
        </div>
      )}
    </footer>
  );
};
