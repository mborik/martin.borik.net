/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { writeFileSync } from 'fs';
import { join } from 'path';

import { fetchPodcast } from '../lib/player';

const prebuildFetchPodcastFeed = async () => {
  const podcastData = (await fetchPodcast()) as any;
  delete podcastData.isInitialized;
  writeFileSync(
    join(process.cwd(), 'src', 'ssr', 'podcast-feed-cache.ts'),
    `export default ${JSON.stringify(podcastData, null, 2)} as const;`,
  );
};

prebuildFetchPodcastFeed();
