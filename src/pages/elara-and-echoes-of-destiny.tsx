import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/screen/Section';

import { getAlbum } from '@/content';

export default function Elara() {
  const album = getAlbum('elara');
  if (!album) {
    return null;
  }
  return (
    <>
      <Seo
        templateTitle='Elara and Echoes of Destiny'
        date={album.releaseDateISO}
        image={album.imagePath}
      />
      <Section.Album {...album}>
        <h2>Elara and Echoes of Destiny</h2>
        <p>
          To broaden my portfolio and prove my versatility as a composer, I came
          up with a fictional fantasy platform adventure video game
          (Metroidvania-like) with heart-wrenching story about a little forest
          creature saving an uncharted world from villainous creatures.
        </p>
        <p>
          I named her <b>Elara</b> and tried to capture the essence of her
          story, the setting and emotional tone of the game in the music. The
          soundtrack is divided into eight tracks, each of which seems to
          describe a piece of her story. My goal was to choose different styles,
          emotional tunings and instrument variation to showcase the dynamics of
          such a thematic soundtrack.
        </p>
        <ul>
          <li>
            <b>
              1.&ensp;<mark>Elara, The Guardian</mark>
            </b>
            <br />
            Main theme, introduction of the heroine of our story.
          </li>
          <li>
            <b>
              2.&ensp;<mark>Story of the Enchanted Grove, Part I</mark>
            </b>
            <br />
            The first entry into the plot of the game. We are introduced to the
            Enchanted Grove and its inhabitants, where the heroine grew up.
          </li>
          <li>
            <b>
              3.&ensp;<mark>Willow Roots</mark>
            </b>
            <br />
            The game section is opening up. The heroine&apos;s first steps take
            her through the nearby forest, overcoming the first obstacles and
            meeting an early enemies.
          </li>
          <li>
            <b>
              4.&ensp;<mark>Story of the Enchanted Grove, Part II</mark>
            </b>
            <br />
            The heroine successfully returns home and she meets her first
            sidekick, who will help her in solving the puzzles later on. Some
            more secrets and echoes of her dark past are revealed.
          </li>
          <li>
            <b>
              5.&ensp;<mark>Quest of Sacrifice</mark>
            </b>
            <br />
            The first very dangerous journey to the unknown lands, full of new
            and deadly enemies.
          </li>
          <li>
            <b>
              6.&ensp;<mark>Kunai Mountain and Icy Shards</mark>
            </b>
            <br />
            The heroine&apos;s journey takes her to the top of Kunai Mountain,
            where, in addition to deadly enemies, she must also battle with
            harsh climate and cold. Finally, she discovers icy crystal shards
            that unlock her new abilities and power.
          </li>
          <li>
            <b>
              7.&ensp;<mark>Escape the Threats</mark>
            </b>
            <br />
            Boss-fight. Encounter with a giant dreadful enemy. Thanks to her new
            abilities and powers, only our heroine and her sidekick will be able
            to defeat this threat.
          </li>
          <li>
            <b>
              8.&ensp;<mark>Whisper of the Destiny</mark>
            </b>
            <br />
            The concluding chant that wraps up the plot of our story.
          </li>
        </ul>
      </Section.Album>
      <Section.Contact showSocials={false} />
    </>
  );
}
