import Link from 'next/link';
import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getAlbum } from '@/content';

export default function UmbraLinea() {
  const album = getAlbum('umbra-linea');
  const { href: neobiosHref } = getAlbum('neobios') ?? { href: '/neobios' };
  if (!album) {
    return null;
  }
  return (
    <>
      <Seo templateTitle='Umbra Linea' />
      <Section.Album {...album}>
        <h2>Umbra Linea</h2>
        <p>
          This experimental piece was created as a&nbsp;side-product of work on
          my second, conceptual, thematic, long-playing{' '}
          <Link href={neobiosHref}>
            album&nbsp;<b>Neobios</b>
          </Link>
          .<br />
          The birth was very long and complex - it gradually took shape from
          fragments, ideas and motifs that didn&apos;t conceptally fit into the
          upcoming album. It begins with the film&apos;s opening orchestral
          sequence, moving through a&nbsp;more dynamic section that slowly dims
          into a quiet orchestral passage. This is soon interrupted by
          a&nbsp;suspenseful motif that gradually shifts and the piece climaxes
          with a&nbsp;harder rock section.
        </p>
        <p>
          The title <b>Umbra Linea</b> could be loosely translated as &quot;the
          edge of darkness&quot;. I&apos;m trying to raise questions in the
          listener&apos;s mind as to where is the boundary of what he or she
          considers musically dark. I&nbsp;myself went through so many different
          periods and moods during the period in which the piece was written
          that all of these feelings mixed within me to create a&nbsp;diverse,
          experimental cluster of music.
        </p>
        <blockquote>
          With this composition I&nbsp;wanted to pay tribute to the brilliant
          album <b>Amarok</b>, which Mike Oldfield produced in 1990 to make
          a&nbsp;rough cut for all the commercialism he was pushed into with his
          contract with Virgin &quot;under his throat&quot;. In spite of all
          that, the result was an hour-long composition pieced together from
          snippets of various motifs so that none could be cut into a&nbsp;promo
          single. The album was eventually released in a&nbsp;smaller number of
          copies and with almost zero commercial acclaim, but for orthodox fans
          and devotees of alternative music it remains TOP up today.
        </blockquote>
      </Section.Album>
      <Section.Contact showSocials={false} />
    </>
  );
}
