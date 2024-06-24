import Image from 'next/image';
import * as React from 'react';

import { RampGradient } from '@/components/common';
import { BackButon } from '@/components/common/BackButton';
import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

export default function Chilled() {
  return (
    <>
      <Seo />
      <section id='album'>
        <BackButon />
        <article>
          <aside>
            <div className='AlbumContainer'>
              <div className='AlbumCover'>
                <Image
                  src='/images/covers/chilled.jpg'
                  alt='Chilled album cover'
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <summary>
              released: <time dateTime='2007-08-14'>14th August 2007</time>
            </summary>
          </aside>
          <div className='AlbumCopy'>
            <h2>album: Chilled</h2>
            <p>
              I&apos;ve been creating the album since about the end of 2004. It
              is genrically diverse and thematically colorful. The 45+ minute
              composition is composed of eight movements, focusing on the
              emotional side of the music rather than the simple entertainment
              form. I will be happy for any listener who finds this music
              engaging and moving, and I&apos;ll be even happier if he or she
              identifies with the emotions I&apos;ve put into the music.
            </p>
            <p>
              The piece is a musical storyline dedicated to the four basic Earth
              elements and the two space ones. These elements are accompanied by
              motifs that evoke something in me. Dreamy newage motifs are
              alternated with jazz-rock elements, in the same way that acoustic
              instruments are alternated with synthetic ones. The backbone of
              this composition is the varying tempo with a combination of
              unusual time signatures and rhythms...
            </p>
            <ul>
              <li>
                <mark>
                  <time>00:00</time> - <b>well come</b>
                </mark>
                <br />
                The first, opening movement was accompanied by my inner anxiety.
                The orchestral arrangements are soon replaced by a minimalist
                atmosphere in 7/8 time signature and strong tense piano solos.
              </li>
              <li>
                <mark>
                  <time>03:40</time> - <b>fire</b>
                </mark>
                <br />
                The second movement, wrapped melancholy and emotions that used
                to burn us. After a balladic guitar opening, the motif breaks
                into a 5/4 time signature in a jazz-rock atmosphere that
                climaxes towards the end, to finally fade away in a dissonant
                piano.
              </li>
              <li>
                <mark>
                  <time>08:16</time> - <b>water</b>
                </mark>
                <br />
                The third movement, which (in contrast to the previous ones) is
                full of tranquility. Initially swaying on waves of 7/4 time
                signature and softly hammering piano, but later sinking into a
                synthetic waltzing anthemic ode.
              </li>
              <li>
                <mark>
                  <time>15:37</time> - <b>earth</b>
                </mark>
                <br />
                At first a purely orchestral piece with Gregorian chants, later
                on with ethno percussion, downtempo drums and a closing climax
                with a guitar solo.
              </li>
              <li>
                <mark>
                  <time>22:32</time> - <b>wind</b>
                </mark>
                <br />A more mellow movement focusing mostly on guitars of
                various kinds, irregular beats and hidden melancholy.
              </li>
              <li>
                <mark>
                  <time>29:10</time> - <b>elements</b>
                </mark>
                <br />
                Grand finale! We&apos;ll return to the main motif from the
                beginning of Chilled, but in an upbeat mood that gradually
                builds up to the blissful climax.
              </li>
              <li>
                <mark>
                  <time>33:06</time> - <b>sun</b>
                </mark>
                <br />
                Soothing and atmospheric, a synth-piano piece with a subtle
                ambient beat layered with burning pads.
              </li>
              <li>
                <mark>
                  <time>36:13</time> - <b>moon</b>
                </mark>
                <br />
                During my composing process, I&apos;ve teamed up with the indie
                music producer Michal &quot;Vulture&quot; Šup. I discovered the
                &quot;discarded&quot; motif in his archive and with his
                permission I used it as a backing track for introducing
                melancholic part. Later on, I teamed up with my good friend
                Pavel Kappler, who found a fitting vocalist and recorded her
                lead vocal on lyrics Maggie Kubova. In the second half of the
                track I moved away from this motif, breaking it into a 7/4 time
                signature and a jazz-rock club atmosphere.
              </li>
            </ul>
            <p>
              The bonus part of the album consists of 3 separate tracks of
              contemporary genres, designed to evoke the moods of everyday life,
              wrapped in appropriate ambient sounds. These tracks are ranging in
              style from dreamy chillout (with vocal improvisation), or
              soft-house that gradually breaks and becomes ambient, and the last
              track is pure 00&apos;s downtempo.
            </p>
          </div>
        </article>
        <RampGradient fill='url(#to-light)' />
      </section>
      <Section.Contact />
    </>
  );
}
