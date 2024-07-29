import Link from 'next/link';
import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getAlbum } from '@/content';

export default function Neobios() {
  const album = getAlbum('neobios');
  const { href: ulHref } = getAlbum('umbra-linea') ?? { href: '/umbra-linea' };
  if (!album) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Neobios'
        date={album.releaseDateISO}
        image={album.imagePath}
      />
      <Section.Album {...album}>
        <h2>Neobios</h2>
        <p>
          Neobios is the title of my second full-length album, which is designed
          to contain songs with a&nbsp;<b>space theme</b> and a&nbsp;story to
          tie them all together.
        </p>
        <p>
          The album has been in the making for a&nbsp;very long time, since
          November 2007. Proof of that is that I&nbsp;managed to move
          2&nbsp;times, change jobs, get happily married and have a&nbsp;child
          during its creation. It&apos;s clear that over so many years one
          can&apos;t always stick to a&nbsp;theme and so, as
          a&nbsp;side-product, the <Link href={ulHref}>Umbra&nbsp;Linea</Link>{' '}
          came out. Nevertheless, I&nbsp;feel that I&nbsp;have managed to keep
          the overall theme of the album as I&nbsp;wanted it to be.
        </p>
        <p>
          I&apos;m fully aware that I haven&apos;t created something that would
          interest publishers and that would ever be played on the radio. Truth
          be told, there&apos;s probably too much commercial music around. On
          the other hand, I&nbsp;feel that there is a&nbsp;lack of music that
          people can enjoy, relax with, or specificaly music that would helps
          them to take a&nbsp;nap and get away from the troubles of everyday
          life. Neobios comes with exactly that mission - it is the soundtrack
          to a&nbsp;story that has not been filmed or published in book form.
        </p>
        <p>
          The story that would tie the songs of the album together was shaping
          up in my head. Because it is not overly obvious, it is instead hidden
          in the music and only revealed in hints by the pseudo-Latin titles,
          I&nbsp;decided to write this short guide to the story. It&apos;s not
          about sort of enforcing my ideas, rather just to evoke an mood that
          your imagination can be carried away by...
        </p>
        <blockquote>
          <p className='!leading-normal'>
            In the future, several generations away, the existence of
            a&nbsp;planetary system in the constellation Alpha Centauri will be
            definitively confirmed. This will happen mainly after
            a&nbsp;reconnaissance satellite suddenly flies back into our solar
            system at tremendous speed, transmitting sequences of data that are
            soon to be decoded as detailed information about the planetary
            system at the center of the tri-star Alpha Centauri and its
            inhabitants, as the first real and friendly contact of
            a&nbsp;distant extraterrestrial civilization. It will also confirm
            speculations about planets with atmospheres similar to our own. The
            governments of the world thus decide to embark on humanity&apos;s
            most ambitious space programme: <b>Neobios</b> - an exploratory
            peaceful expedition to a&nbsp;planetary system more than four light
            years away. After decades of preparation, overcoming technical
            obstacles and challenges, the story of the search for new life on
            other worlds begins...
          </p>
          <ul className='mt-4 !text-lg'>
            <li>
              <strong>
                1.&ensp;
                <mark>
                  <b>Univiator</b>
                </mark>
              </strong>
              &ensp;[space traveller]
              <br />
              The Neobios program is at the beginning of its long journey - the
              construction of mankind&apos;s greatest and most advanced creation
              has been completed in Earth orbit - a&nbsp;spacecraft that will be
              able to travel more than four light-years and carry several
              generations of crew, the founders of a&nbsp;new civilization.
            </li>
            <li>
              <strong>
                2.&ensp;
                <mark>
                  <b>Heliosys</b>
                </mark>
              </strong>
              &ensp;[solar system]
              <br />
              The largest space craft has embarked on its journey, travelling
              through the Solar&nbsp;System, past planets that seemed so far
              away - all the wonders of our Solar&nbsp;System appear close at
              hand.
            </li>
            <li>
              <strong>
                3.&ensp;
                <mark>
                  <b>Anodus Abyssus</b>
                </mark>
              </strong>
              &ensp;[into the depths of space]
              <br />
              Humanity celebrates another giant step! We&apos;re approaching the
              edge of the Solar System, where we will have to face for the first
              time all the unexplored phenomena at the boundary of the
              heliosphere. But the first complications arise with the passing of
              the termination wave, the effect of the subsonic particle flux in
              the heliopause, and overcoming the pressure of interstellar
              radiation - engines fail, navigation systems fail, and the
              connection to Earth definitely breaks down. After years of
              struggling, researching and adapting to the conditions of the
              heliopause, we finally emerge from our heliosphere into
              a&nbsp;very dense interstellar cloud.
            </li>
            <li>
              <strong>
                4.&ensp;
                <mark>
                  <b>Proximalis</b>
                </mark>
              </strong>
              &ensp;[closer to the centre]
              <br />
              Project Neobios is sailing at tremendous speed towards the centre
              of the triple star Alpha Centauri. Decades are passing...
              <br />
              Flying past the mythical star Proxima Centauri, we finally reach
              our destination.
            </li>
            <li>
              <strong>
                5.&ensp;
                <mark>
                  <b>SIGMA 98</b>
                </mark>
              </strong>
              <br />
              The first attempt of contacting the extra-terrestrial civilization
              that brought us here has been successful and our diplomatic
              expedition is learning the local climate, habits, and most
              importantly, a&nbsp;new language on their planet. A&nbsp;study of
              their stellar maps has also revealed another planet in their
              system with almost identical environmental conditions and
              atmosphere to Earth, and empty (uninhabited by beings of higher
              intelligence), which they have marked with a&nbsp;symbol similar
              to our Greek letter Sigma and the identification number 98. Space
              probes were immediately dispatched to explore the planet that
              could become our new home.
            </li>
            <li>
              <strong>
                6.&ensp;
                <mark>
                  <b>Aeternum</b>
                </mark>
              </strong>
              &ensp;[eternity]
              <br />
              After many years of exploration and preparation, the settlement of
              the planet SIGMA 98 has begun. A&nbsp;land base and defensive
              walls against local animal predators are being built. Raw
              materials are being extracted and processed, new homes and civil
              buildings are being constructed. The new inhabitants will be
              forever waking up in their new homeland.
            </li>
            <li>
              <strong>
                7.&ensp;
                <mark>
                  <b>Lacrima</b>
                </mark>
              </strong>
              &ensp;[teardrop]
              <br />
              Remembering all the people we left behind on Earth, but especially
              the previous generations of crews who started and ran the Neobios
              project so many years ago, and who we must farewell as time goes
              on.
            </li>
            <li>
              <strong>
                8.&ensp;
                <mark>
                  <b>Neobios</b>
                </mark>
              </strong>
              &ensp;[a new life]
              <br />
              The birth of the first human on a&nbsp;new planet is
              a&nbsp;turning point that began a&nbsp;whole new chapter in the
              history of humanity, but especially of the <i>Sigemans</i>, who
              continue to settle, domesticate and adapt to new conditions for
              life - new species of farm animals appear, in addition to those
              whose embryos we brought with us from Earth and brought to life.
              New colonies, villages and, later, towns are established.
            </li>
            <li>
              <strong>
                9.&ensp;
                <mark>
                  <b>Delphinidae</b>
                </mark>
              </strong>
              &ensp;[dolphins]
              <br />
              The Universe is showing us one of its great mysteries: in the
              oceans of <i>Sigma</i>, some species of dolphin have been
              discovered exactly as we know them from Earth. A&nbsp;strange link
              between the two planets is being revealed by another intelligent
              creature from Earth, which seems to have predestined the path of
              human civilisation.
            </li>
          </ul>
        </blockquote>
      </Section.Album>
      <Section.Contact showSocials={false} />
    </>
  );
}
