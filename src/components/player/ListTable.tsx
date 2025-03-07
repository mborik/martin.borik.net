import Image from 'next/image';
import { Episode } from 'podparse';
import { useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { config } from '@/lib/config';
import { formatTime } from '@/lib/formatTime';
import { HOWLER_STATE, usePlayerStore } from '@/lib/player';

export const ListTable = () => {
  const { isInitialized, currentList } = usePlayerStore();
  if (!(isInitialized && currentList?.length)) return null;
  return (
    <div className='flex h-auto flex-col overflow-y-auto text-gray-400'>
      <table className='h-full w-full table-auto'>
        <TableHead />
        <TableBody list={currentList} />
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className='border-b border-black/10 text-white/40'>
      <tr>
        <th
          scope='col'
          className='hidden md:block px-3 py-4 text-left text-sm font-medium'
        >
          #
        </th>
        <th
          scope='col'
          className='px-14 md:px-5 py-4 text-left text-sm font-medium'
        >
          Epizóda
        </th>
        <th
          scope='col'
          className='hidden md:block py-4 px-2 text-left text-sm font-medium'
        >
          Dĺžka
        </th>
      </tr>
    </thead>
  );
};

const TableBody = ({ list }: { list: Episode[] }) => {
  return (
    <tbody className='w-full'>
      {list.map((track, index) => (
        <TableRow key={track.guid} track={track} index={index} />
      ))}
    </tbody>
  );
};

type TableRowProps = { track: Episode; index: number };
const TableRow = ({ track, index }: TableRowProps) => {
  const { episode: episodeNumber, title, image, duration } = track;
  const [isHovering, setHovering] = useState<null | number>(null);
  const { isPlaying, currentEpisode, isLoaded, setCurrentEpisode } =
    usePlayerStore();
  const fmtDuration = formatTime(duration);
  const isCurrent = track.guid === currentEpisode?.guid;

  return (
    <tr
      onMouseEnter={() => setHovering(index)}
      onMouseLeave={() => setHovering(null)}
      onClick={() => {
        if (!(isPlaying && isCurrent)) setCurrentEpisode(track, true);
      }}
      className={`group w-full cursor-pointer ${
        currentEpisode?.guid === track.guid
          ? 'bg-accent-glow'
          : 'hover:bg-background-800'
      } border-b border-black/10 transition duration-300 ease-in-out`}
    >
      <td className='hidden whitespace-nowrap p-4 text-sm font-light text-white-200 md:block md:pt-8'>
        {episodeNumber}
      </td>
      <td className='whitespace-nowrap p-4 text-sm font-light'>
        <div className='flex items-center gap-5'>
          <div className='relative'>
            <Image
              src={config.thumbnail}
              layout='fixed'
              width={64}
              height={64}
              className='hidden md:block rounded-lg'
              alt={title}
            />

            <div
              className={`${
                isPlaying && currentEpisode?.guid === track.guid
                  ? 'flex'
                  : 'hidden'
              } absolute inset-0 z-30 m-auto ml-3 md:ml-auto items-center justify-center self-center rounded-full group-hover:flex`}
            >
              <TrackTableCell
                index={index}
                isHovering={isHovering}
                track={track}
              />
            </div>
          </div>
          <div className='flex items-center w-full ml-6 -mr-3 md:m-0'>
            <div className='space-y-1 flex-1'>
              <div className='list-table-title-truncate'>{title}</div>
              <div className='md:hidden text-xs text-white-400 flex w-full justify-between flex-row'>
                <div>{`#${episodeNumber}`}</div>
                <div>{fmtDuration}</div>
              </div>
            </div>

            <div className='relative m-0 -mt-4 md:ml-4 md:mt-0 h-4 w-4 right-5 md:right-auto'>
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
      <td className='hidden md:block whitespace-nowrap p-4 text-xs font-light text-white-400 tabular-nums'>
        {fmtDuration}
      </td>
    </tr>
  );
};

const TrackTableCell = ({
  index,
  track,
  isHovering,
}: {
  index: number;
  track: Episode;
  isHovering: number | null;
}) => {
  const { currentEpisode, isPlaying, setCurrentEpisode, togglePlay } =
    usePlayerStore();
  const isCurrent = track.guid === currentEpisode?.guid;
  const isIndex = index === isHovering;

  if (isIndex) {
    if (isPlaying && isCurrent)
      return (
        <button
          className='rounded-full bg-background-900 p-2'
          onClick={togglePlay}
        >
          <MdPause className='h-4 w-4 text-white' />
        </button>
      );
    return (
      <button
        className='rounded-full bg-background-900 p-2'
        onClick={() => {
          setCurrentEpisode(track, true);
        }}
      >
        <MdPlayArrow className='h-4 w-4 text-white' />
      </button>
    );
  }

  return null;
};
