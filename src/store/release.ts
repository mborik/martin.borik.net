export const toReleaseDate = (isoDate: string) => {
  const releaseDateISO = new Date(isoDate);
  return {
    releaseDateISO,
    releaseDate: releaseDateISO.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
};

export interface Release {
  id: string;
  title: string;
  href: string;
  imagePath: string;
  badges: string[];
  releaseDate: string;
  releaseDateISO: Date;
  numberOfTracks?: number;
  duration?: string;
  mastering?: string;
  link?: {
    bandcamp?: string;
    soundcloud?: string;
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    youtubeMusic?: string;
    amazonMusic?: string;
    deezer?: string;
    tidal?: string;
  };
  stickyPlayer?: boolean;
  bandcampEmbed?: string;
  youtubeEmbed?: string;
}
