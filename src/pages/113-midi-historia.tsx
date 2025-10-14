import * as React from 'react';

import {
  EpisodeWrapper,
  FigureAudio,
  FigureEpisodeLogo,
  FigureImage,
  FigureYouTube,
  Heading,
} from '@/components/common';

export default function S01E13() {
  return (
    <EpisodeWrapper episode={13}>
      <FigureEpisodeLogo episode={13} figureClass='right-20rem'>
        <h2>Ako sa zrodilo MIDI</h2>
        <p>
          V predošlých epizódach o&nbsp;tvorbe hudby sme si hovorili
          o&nbsp;dávnych časoch, keď sa pípalo na akustickom meniči pomocou
          jedného bitu, neskôr sa zvuk vytváral privádzaním hodnôt na registre
          programovateľných zvukových generátorov, ľudovo péesgéčok
          a&nbsp;hovorili sme si aj o&nbsp;revolúcii zvuku počítačov, takzvanej
          pulzno-kódovej modulácii, ktorou sa nám počítače ozývajú dodnes.
        </p>
        <p>
          Samostatnou kapitolou v&nbsp;tvorbe hudby na počítačoch je MIDI. Táto
          skratka sa ako niť tiahne celú túto dobu popri pípajúcich
          a&nbsp;šuštiacich počítačoch, popri pomalých 8-bitoch či výkonnejších
          16-bitoch. Na výkone počítača totiž MIDI až tak nezáleží, pretože sa
          nespolieha na to, že zvuk bude vyludzovať daný počítač.
        </p>
      </FigureEpisodeLogo>
      <Heading id='historia-midi'>História MIDI</Heading>
      <FigureImage
        src='/res/s01e13/cv_gate_dcb.jpg'
        caption='historické CV/gate a DCB rozhrania'
        figureClass='left-20rem'
        width={375}
        height={580}
        isCaptionVisible
      >
        <p>
          Už v&nbsp;dobách dávno minulých sa moderné technológie začali dostávať
          k&nbsp;hudobníkom. Prechod od tranzistorov k&nbsp;integrovaným obvodom
          a&nbsp;prvým procesorom v&nbsp;70. rokoch sa odrazil aj na hudobných,
          presnejšie klávesových nástrojoch. Od elektrických pián a&nbsp;organov
          sme sa ako ľudstvo posunuli k&nbsp;syntezátorom. Prirodzene sa objavil
          dopyt aj po nejakom programovaní týchto syntezátorov, zaznamenávaniu
          nahraných sekvencií, alebo prepájaniu synťakov navzájom. Okrem
          takzvaných bicích mašín sa tak začali objavovať prvé sekvencery
          &ndash; šikovné škatuľky, ktoré hudobníkovi umožnia zaznamenať, čo na
          synťáku nahrá a&nbsp;následne prehrať.. napríklad na koncerte.
        </p>
        <p>
          Problém začal byť v&nbsp;tom, že to prepájanie nástrojov nemalo žiaden
          štandard &ndash; jednotný spôsob zapojenia. Nástroj jednej výrobnej
          línie či inej značky preto nemusel vedieť komunikovať
          s&nbsp;konkrétnym sekvencerom, nebodaj sekvencerom inej značky.
          Vznikalo tak množstvo rôznych rozhraní, na ktorých sa podieľali hlavne
          spoločnosti Oberheim a&nbsp;Roland &ndash; od analógových rozhraní{' '}
          <b>CV/gate</b> či <b>DIN-sync</b>, až po prvé digitálne rozhrania, ako
          napríklad <b>DCB</b> (Digital Control Bus) od spoločnosti Roland.
        </p>
      </FigureImage>
      <Heading as='h4' id='standardizacia'>
        Štandardizácia
      </Heading>
      <p>
        A keď už spomínam Roland, tak práve <b>Ikutaro Kakehaši</b>, prezident
        spoločnosti Roland v&nbsp;roku 1981 začal svoj boj o&nbsp;štandardizáciu
        hudobného protokolu, ktorého absencia podľa neho bránila rastu
        elektronického hudobného priemyslu. Diskutoval o&nbsp;tom s&nbsp;
        <b>Tomom Oberheimerom</b>, ktorý vyvíjal vlastné rozhranie Oberheim
        System, ale toto rozhranie Kakehaši považoval za ťažkopádne
        a&nbsp;nepáčila sa mu jeho uzavretosť. Oslovil preto <b>Davea Smitha</b>
        , prezidenta spoločnosti <b>Sequential Circuits</b>, aby vytvorili
        jednoduchšiu a&nbsp;lacnejšiu alternatívu. Smith aj Kakehaši boli
        presvedčení, že novo-vzniknuté rozhranie si musí osvojiť každý výrobca,
        inak to nemá zmysel.
      </p>
      <blockquote>
        A&nbsp;toto je zlomový moment technologických dejín, pretože to, čo
        nasledovalo sa dá považovať za prvé open-source konzorcium a&nbsp;prvú
        technológiu s&nbsp;otvorenými zdrojmi a&nbsp;špecifikáciou.
      </blockquote>
      <p>
        Smith začal o&nbsp;tomto koncepte presviedčať ďalšie americké
        spoločnosti, Kakehaši zas rokoval s&nbsp;japonskými spoločnosťami
        Yamaha, Korg a&nbsp;Kawai. Zástupcovia všetkých týchto spoločností sa
        v&nbsp;októbri 1981 stretli, aby prediskutovali túto ich myšlienku.
        Základ nového rozhrania položil práve Dave Smith a&nbsp;jeho inžinier
        Chet Wood zo spoločnosti Sequential Circuits. Vychádzali
        z&nbsp;rozhrania Roland DCB a&nbsp;na tomto stretnutí predstavili
        dokument so špecifikáciou, ktorá popisuje{' '}
        <b>USI &ndash; Universal Synthesizer Interface</b>, čiže univerzálne
        rozhranie, ktoré by umožňovalo komunikáciu medzi zariadeniami rôznych
        výrobcov. O&nbsp;štandarde následne všetci horlivo diskutovali,
        vylepšovali a&nbsp;prispôsobovali &ndash; každý pre svoje použitie. Do
        konzorcia sa pridávajú ďalšie a&nbsp;ďalšie spoločnosti
        a&nbsp;v&nbsp;nasledujúcich rokoch uzákoňujú štandard tohto rozhrania.
      </p>
      <p>
        Píše sa rok 1983 a&nbsp;na medzinárodnej výstave NAMM Show
        v&nbsp;Chicagu Dave Smith šokuje osadenstvo predstavením hardvérového
        rozhrania, ktorým prepojí nové syntezátory Prophet-600 a&nbsp;Roland
        Jupiter-6, oba podporujúce toto nové rozhranie. To už nazývajú novým
        názvom, ktorý sa odpútava od slova &bdquo;synthesizer&rdquo;
        a&nbsp;používa všeobecnejšie pomenovanie &bdquo;hudobný nástroj&rdquo;
        &ndash; <b>Musical Instrument Digital Interface</b>, v&nbsp;skratke{' '}
        <b>MIDI</b>.
      </p>
      <FigureImage
        src='/res/s01e13/midi_fathers.jpg'
        caption='Dave Smith, Bob Moog, Ikutaro Kakehaši, Tom Oberheim - otcovia MIDI (1991)'
        mediaSource='Tom Oberheim, tomoberheim.com'
        width={1400}
        height={800}
        isCaptionVisible
        isZoomable
      />
      <Heading id='ako-midi-funguje'>Ako MIDI funguje?</Heading>
      <p>
        Komunikácia medzi zariadeniami pomocou MIDI prebieha cez takzvané
        správy, ktorými sa dorozumievajú.
      </p>
      <p>
        Tými najdôležitejšími sú správy časových hodín, ktorými sa zariadenia
        navzájom synchronizujú. Tie prichádzajú 24&times; za štvrťovú notu, čím
        si cieľové zariadenie vie ľahko vypočítať rýchlosť a&nbsp;keď sa to
        doplní správami o&nbsp;aktuálnej pozícií v&nbsp;skladbe v&nbsp;podobe
        úderov a&nbsp;taktov, tak sú zariadenia navzájom naladené{' '}
        <i>&bdquo;na rovnakú vlnu&rdquo;</i>.
      </p>
      <p>
        Samotné hudobné dáta sú potom posielané v&nbsp;takzvaných{' '}
        <b>kanálových správach</b>, ktoré sa zjednodušene nazývajú{' '}
        <b>&bdquo;eventy&rdquo;</b>, alebo <b>udalosti</b>. Kanálov je 16
        a&nbsp;v&nbsp;každom môže hrať niečo iné. Každý event má svoj typ
        a&nbsp;príslušné parametre. Najdôležitejšími sú <b>Note On</b> a&nbsp;
        <b>Note Off</b> eventy, aby sme vedeli, kedy a&nbsp;ktorá klávesa bola
        stlačená alebo pustená a&nbsp;hlavne akou silou, anglicky
        &bdquo;velocity&rdquo;.
      </p>
      <FigureImage
        src='/res/s01e13/midi1_specs.jpg'
        caption='MIDI predstavené v časopise Electronics & Music Maker (máj 1984)'
        mediaSource='muzines.co.uk'
        figureClass='right-32rem !-mt-4 opaque-ms'
        width={1000}
        height={680}
        isCaptionVisible
        isZoomable
      >
        <p>
          To ešte môže dopĺňať <b>Aftertouch</b> event, ktorý hovorí
          o&nbsp;sile, ktorou hráč dotlačil už stlačenú klávesu alebo{' '}
          <b>Pitchbend</b> event, ktorý doslova ohýba výšku hrajúcich tónov
          (pomocou toho známeho kolieska naľavo od klaviatúry).
        </p>
        <p>
          Patch, či presnejšie <b>Program Change</b> event zas vyberá nástroj,
          ktorým sa v&nbsp;danom kanáli bude hrať a&nbsp;nakoniec, celá škála
          rôznych efektov a&nbsp;nastavení sa ovláda pomocou{' '}
          <b>Control Change</b> eventu, takzvané <b>MIDI CC</b>&hellip;
        </p>
        <p>
          Týchto zopár jednoduchých správ základnej špecifikácie{' '}
          <b>MIDI&nbsp;1.0</b> zabezpečuje, že rôzne nástroje môžu spolupracovať
          na fundamentálnej úrovni a&nbsp;dokážu pri správnom používaní
          rozozvučiť hoc aj celý orchester.
        </p>
        <p>Dôležité však je to správne použitie, že? Iste vám napadlo, že:</p>
      </FigureImage>
      <ul>
        <li>
          ako budeme vedieť, ktoré číslo nastaviť pre zvuk špecifického
          hudobného nástroja?
        </li>
        <li>ako budeme ovládať hlasitosť či výraz nástrojov?</li>
        <li>
          ako zaznamenávať stláčanie pedálov piána či nastavovať rôzne efekty?
        </li>
        <li>a&nbsp;budú tomu rozumieť aj iné synťáky?</li>
      </ul>
      <Heading as='h4' id='general-midi'>
        General MIDI
      </Heading>
      <FigureImage
        src='/res/s01e13/general_midi_logo.svg'
        caption='logo General MIDI'
        figureClass='right-10rem hidden md:block'
        width={200}
        height={150}
      >
        <p>
          Správne! Na všetky tieto otázky totiž odpovedá rozšírenie tejto
          základnej špecifikácie &ndash; takzvané <b>General MIDI</b>, ktorého
          finálna podoba bola oznámená v&nbsp;roku 1991. Táto rozšírená
          špecifikácia od všetkých kompatibilných MIDI nástrojov vyžaduje, aby
          spĺňali určitý súbor vlastností, napríklad aby boli schopné hrať aspoň
          24 nôt súčasne, alebo aby kanál číslo 10 vyhradili pre biciu súpravu
          a&nbsp;perkusie.
        </p>
      </FigureImage>
      <p>
        Čo je dôležitejšie, General MIDI priraďuje špecifické definície
        k&nbsp;viacerým parametrom a&nbsp;riadiacim správam, ktoré neboli nijako
        špecifikované v&nbsp;MIDI 1.0. Napríklad priradením a&nbsp;pomenovaním
        128-ich konkrétnych nástrojov a&nbsp;zvukov ku každému
        z&nbsp;programových čísel, a&nbsp;tiež špecifickej definícii asi
        päťdesiatich zvukov bubnov a&nbsp;perkusií pre každú notu bicej súpravy
        v&nbsp;kanáli 10. Definuje sa tu aj množstvo ovládacích príkazov
        (spomínané MIDI CC), napríklad pre moduláciu zvuku, hlasitosť
        a&nbsp;výraz nástroja, stereo-váhu či pedále piána. To všetko pomáha
        zabezpečiť, aby prehrávanie medzi rôznymi zariadeniami kompatibilnými
        s&nbsp;touto špecifikáciou bolo konzistentné.
      </p>
      <FigureAudio
        src='/res/s01e13/george_stone_canyon.mp3'
        caption='George Stone - Trip Through the Grand Canyon (1991)'
        figureClass='left-24rem'
      >
        <p>
          Vypočujte si ukážku skladby{' '}
          <b>&bdquo;Trip Through the Grand Canyon&rdquo;</b>, ktorú skomponoval{' '}
          <b>George Stone</b> a&nbsp;bola pod názvom <code>CANYON.MID</code>{' '}
          súčasťou systému Windows už od verzie 3.0.
        </p>
      </FigureAudio>
      <FigureImage
        src='/res/s01e13/roland_sc55.jpg'
        caption='Roland SC-55'
        figureClass='right-20rem'
        width={920}
        height={400}
        isZoomable
      >
        <p>
          Spoločnosť Roland si špecifikáciu General MIDI, na ktorej úzko
          spolupracovali ihneď osvojuje a&nbsp;ešte v&nbsp;tom istom roku,
          v&nbsp;roku 1991 prichádzajú s&nbsp;prvým General MIDI zvukovým
          modulom <b>Roland SC-55</b>, prvým zo série <b>Roland Sound Canvas</b>
          . Obsahuje stovky nástrojov z&nbsp;ich elektronických nástrojov
          a&nbsp;na dlhé roky tak zadefinujú zvuk MIDI a&nbsp;potvrdzujú
          nesporný význam špecifikácie General MIDI.
        </p>
        <FigureAudio
          src='/res/s01e13/mitsuru_sakaue_jcycle.mp3'
          caption='Mitsuru Sakaue - J-Cycle (1994)'
          figureClass='right-20rem md:!-mt-4'
        >
          <p>
            Celú škálu schopností Roland Sound Canvas si môžeme vypočuť
            v&nbsp;nasledujúcej ukážke demonštračnej skladby <b>J-Cycle</b>,
            ktorú v&nbsp;roku 1994 skomponoval výnimočný <b>Mitsuru Sakaue</b>,
            dlhoročný spolupracovník spoločnosti Roland.
          </p>
        </FigureAudio>
      </FigureImage>
      <FigureYouTube
        youtubeCode='RbikwV0HbZs?si=1axKIcbWaZpDzca2&amp;start=36'
        caption='úvod epizódy Mr. Bean v podaní Roland SC (1993)'
        figureClass='left-24rem'
        isCaptionVisible
      >
        <p>
          Inak, zo zaujímavosti si spomeňte, ako znela televízna hudba
          a&nbsp;zvučky začiatkom 90. rokov. Určite budete počuť Roland Sound
          Canvas. 🙂
        </p>
        <p>
          Jasne to počuť v&nbsp;hudobných doprovodoch medzi scénami
          v&nbsp;britskom komediálnom seriáli &bdquo;Mr.&nbsp;Bean&rdquo;, ale
          aj zvučky Českého či Slovenského rozhlasu či televízie boli týmto
          špecifickým zvukom poznačené ešte aj po roku 2000.
        </p>
      </FigureYouTube>
      <FigureImage
        src='/res/s01e13/yamaha_xg.jpg'
        caption='detail čipu s bankou nástrojov Yamaha XG'
        figureClass='right-20rem'
        width={1000}
        height={800}
        isCaptionVisible
        isZoomable
      >
        <Heading as='h4' id='yamaha-xg'>
          Yamaha XG
        </Heading>
        <p>
          Na konci 90. rokov ešte od tohto konzorcia prichádza špecifikácia{' '}
          <b>General MIDI Level 2</b>, ktorá má za cieľ štandardizovať všetko,
          čím sa od protokolu vychýlili spoločnosti Roland a&nbsp;hlavne Yamaha,
          s&nbsp;ich rozšírením <b>Yamaha XG</b>. Polyfónia sa tak rozširuje na
          aspoň 32 súbežne hrajúcich nôt, možnosť až 2 kanálov vyhradených pre
          bicie a&nbsp;perkusie, pričom si bolo možné vyberať z&nbsp;desiatky
          rôznych bicích sád alebo elektrofonických bicích a&nbsp;rozširuje sa
          aj paleta nástrojov a&nbsp;každý z&nbsp;pôvodných 128-ich nástrojov
          môže mať voliteľne iný zvukový charakter, alebo artikuláciu, pretože
          XG malo už v&nbsp;tej dobe 480 rôznych zvukov nástrojov.
        </p>
      </FigureImage>
      <p>
        Tá zvukovo najpostrehnuteľnejšia zmena však prišla{' '}
        <b>s&nbsp;rozšírením MIDI&nbsp;CC príkazov</b>, ktoré umožnili ovládanie
        efektových jednotiek. Okrem vibráta a&nbsp;tremola tu bol dostupný{' '}
        <b>pásmový filter</b> a&nbsp;<b>rezonancia</b>, ale aj pokročilé
        a&nbsp;konfigurovateľné efekty <b>reverb</b>, <b>chorus</b>, či{' '}
        <b>delay</b>. Dnes už toto všetko, my hudobníci, považujeme za bežné
        v&nbsp;súčasných digitálnych zvukových staniciach, ale mať tieto
        možnosti dostupné v&nbsp;90. rokoch v&nbsp;niektorom z&nbsp;ranných
        softvérových MIDI sekvenceroch na vašom Atari&nbsp;ST, PC či Macintoshi
        pripojenom ku takémuto General&nbsp;MIDI rozhraniu &ndash; tak to muselo
        byť fenomenálne.
      </p>
      <FigureImage
        src='/res/s01e13/yamaha_mu80.jpg'
        caption='zvukový modul Yamaha MU80 (1994)'
        figureClass='left-32rem'
        width={920}
        height={210}
        isCaptionVisible
        isZoomable
      >
        <p>
          Nasledujúca ukážka veľmi výstižne predvádza, čo sa s&nbsp;týmito
          možnosťami dalo zvukovo dosiahnuť. Nech sa páči, skladba{' '}
          <code>AMBIENT.MID</code>, ktorú v&nbsp;roku 1996 zložil Sam Sketty pre
          rozšírenie Yamaha XG.
        </p>
        <FigureAudio
          src='/res/s01e13/sam_sketty_ambient.mp3'
          caption='Sam Sketty - Ambient (1996)'
          figureClass='right-20rem'
        >
          <p className='clear-left'>
            Takže, krátky úvod do MIDI máme za sebou. V&nbsp;nasledujúcej
            epizóde sa vrátime k&nbsp;počiatkom &ndash; späť do 80. rokov
            &ndash; kde sa MIDI začalo prepájať s&nbsp;počítačmi&hellip;
          </p>
        </FigureAudio>
      </FigureImage>
    </EpisodeWrapper>
  );
}
