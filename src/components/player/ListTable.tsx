import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { config } from '@/lib/config';
import { formatTime } from '@/lib/formatTime';
import { Episode, HOWLER_STATE, usePlayerStore } from '@/lib/player';

export const ListTable = () => {
  const { isInitialized, currentList } = usePlayerStore();
  if (!(isInitialized && currentList?.length)) return null;
  return (
    <div className='list-table'>
      <table>
        <TableHead />
        <TableBody list={currentList} />
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope='col' className='table-head-th-col1'>
          #
        </th>
        <th scope='col' className='table-head-th-col2'>
          Epizóda
        </th>
        <th scope='col' className='table-head-th-col3'>
          Dĺžka
        </th>
      </tr>
    </thead>
  );
};

const TableBody = ({ list }: { list: Episode[] }) => {
  return (
    <tbody>
      {list.map((track) => (
        <TableRow key={track.guid} track={track} />
      ))}
    </tbody>
  );
};

const TableRow = ({ track }: { track: Episode }) => {
  const router = useRouter();
  const { isPlaying, currentEpisode, isLoaded } = usePlayerStore();
  const [isSkeleton, setIsSkeleton] = React.useState(true);

  const { episode: episodeNumber, title, image, duration } = track;
  const fmtDuration = formatTime(duration);

  return (
    <tr
      onClick={() => track?.slug && router.push(`/${track.slug}`)}
      className={`table-row group ${
        currentEpisode?.guid === track.guid
          ? 'bg-accent-glow'
          : 'hover:bg-background-800'
      }`}
    >
      <td className='table-row-td-col1'>{episodeNumber}</td>
      <td className='table-row-td-col2'>
        <div className='table-row-td-col2-div1'>
          <div className='relative'>
            <div
              className={`table-row-td-col2-div1-image${isSkeleton ? ' skeleton' : ''}`}
            >
              <Image
                className=''
                src={image?.url || config.thumbnail}
                alt={title}
                width={64}
                height={64}
                onLoad={() => setIsSkeleton(false)}
              />
              {isSkeleton && <div className='skeleton-overlay' />}
            </div>

            <div
              className={`${
                isPlaying && currentEpisode?.guid === track.guid
                  ? 'flex'
                  : 'hidden'
              } table-row-td-col2-div1-trackcell group-hover:flex`}
            >
              <TrackTableCell track={track} />
            </div>
          </div>
          <div className='table-row-td-col2-div2'>
            <div className='table-row-td-col2-div2-title'>
              <div className='table-row-td-col2-div2-title-truncate'>
                {title}
              </div>
              <div className='table-row-td-col2-div2-title-mobile'>
                <div>{`#${episodeNumber}`}</div>
                <div>{fmtDuration}</div>
              </div>
            </div>

            <div className='table-row-td-col2-div2-bar'>
              {isPlaying &&
                (isLoaded === HOWLER_STATE.LOADED && currentEpisode?.guid) ===
                  track.guid &&
                Array.from(Array(5).keys()).map((item, index) => (
                  <span className='bar' key={index} />
                ))}
            </div>
          </div>
        </div>
      </td>
      <td className='table-row-td-col3'>{fmtDuration}</td>
    </tr>
  );
};

const TrackTableCell = ({ track }: { track: Episode }) => {
  const { currentEpisode, isPlaying, setCurrentEpisode, togglePlay } =
    usePlayerStore();
  const isCurrent = track.guid === currentEpisode?.guid;

  if (isPlaying && isCurrent)
    return (
      <button
        className='track-table-cell-btn'
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      >
        <MdPause className='track-table-cell-icon' />
      </button>
    );
  return (
    <button
      className='track-table-cell-btn'
      onClick={(e) => {
        e.stopPropagation();
        setCurrentEpisode(track, true);
      }}
    >
      <MdPlayArrow className='track-table-cell-icon' />
    </button>
  );
};
