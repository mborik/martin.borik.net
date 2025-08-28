import * as React from 'react';

import {
  EpisodeLink,
  EpisodeWrapper,
  ExternalLink,
  FigureAudio,
  FigureImage,
  FigureYouTube,
} from '@/components/common';

export default function S01E05() {
  return (
    <EpisodeWrapper episode={5}>
      <h2>Keď hernej hudbe vládol sampling</h2>
      <p>
        V predošlej epizóde sme si hovorili o&nbsp;dávnych časoch 8-bitov, kde
        sa pípalo, kmitalo, alebo sa zvuk vyludzoval privádzaním správnych
        hodnôt na registre PSG čipov. Novú kapitolu v&nbsp;tvorbe hudby na
        počítačoch však zaznamenala <b>pulzno-kódová modulácia</b>, ktorá síce
        bola vymyslená pre telekomunikačné účely už pred 100 rokmi, ale nás bude
        zaujímať práve obdobie, kedy sa PCM objavilo začiatkom 80. rokov
        s&nbsp;príchodom 16-bitových počítačov a&nbsp;vtedy výchádzajúcou
        hviezdou &ndash; Audio CD.
      </p>
      <FigureImage
        src='/res/s01e05/pcm_quantization.jpg'
        caption='princíp kvantizácie zvukovej vzorky pri pulzo-kódovej modulácii'
        mediaSource='Wikimedia Commons, CC BY-SA 3.0'
        figureClass='right-24rem opaque-ms'
        width={625}
        height={469}
        isZoomable
      >
        <h4>Trocha teórie na úvod</h4>
        <p>
          Pulzno-kódová modulácia je{' '}
          <b>metóda prevodu analógového zvukového signálu na digitálny</b>. Deje
          sa to tak, že sa intentiza analógového zvukového signálu odčítava
          v&nbsp;každom jeho bode danej vzorkovacej frekvencie, pričom táto
          intenzita je rozdelená do istého počtu úrovní hlasitostí, čiže odborne{' '}
          <b>&bdquo;kvantovaná&rdquo;</b>. Hodnota nameranej úrovne hlasitosti
          je zapísaná do počítača a&nbsp;vzniká <b>&bdquo;sample&rdquo;</b>{' '}
          <i>(angl. &lsquo;sæmpl&rsquo;)</i>, čiže <b>zvuková vzorka</b>.
        </p>
        <p>
          Neskôr môže byť prečítaná a&nbsp;digitálno-analógový prevodník
          z&nbsp;toho dokáže vyskladať <i>skoro</i> pôvodný zvukový
          signál&hellip; Prečo <i>skoro</i>? Lebo pri nízkej vzorkovacej
          frekvencii sa kvalita zhoršuje a&nbsp;môžu sa vo zvuku objaviť aj
          artefakty, ktoré v&nbsp;pôvodnom zvuku neboli &ndash; to sa volá{' '}
          <b>&bdquo;aliasing&rdquo;</b>. Taktiež, pri nízkom rozsahu úrovní
          hlasitostí sa do signálu zanesie počuteľný{' '}
          <b>&bdquo;kvantizačný šum&rdquo;</b>, čo sú tiež artefakty tvoriace
          nepríjemné digitálne ševelenie.
        </p>
      </FigureImage>
      <p>Dobre, teórie na úvod už hádam stačilo&hellip;</p>
      <h3>PCM na počítačoch</h3>
      <p>
        Natíska sa otázka, že prečo sa tento spôsob tvorby zvuku a&nbsp;hudby
        objavil v&nbsp;plnej miere až s&nbsp;príchodom 16-bitov? Na to je veľmi
        jednoduchá odpoveď. Na prehrávanie zvukových vzoriek z&nbsp;počítača je
        treba mať dosť pamäte a&nbsp;potrebná je aj dostatočná rýchlosť
        procesora, ktorý by taký objem dát dokázal posielať na výstup. Prípadne
        by musel mať počítač k&nbsp;dispozícii rozhranie, ktoré bude mať priamy
        prístup do pamäte a&nbsp;samé si tak načítavať a&nbsp;spracúvať dátový
        tok.
      </p>
      <p>
        To s&nbsp;8-bitovými a&nbsp;rannými 16-bitovými mikropočítačmi veľmi
        neprichádzalo do úvahy a&nbsp;aj keď sa už tam objavili rôzne finty,
        kedy sa prehrávali (zväčša krátke) zvukové vzorky, tak počítač
        v&nbsp;tom čase nedokázal robiť nič iné, len ľudovo{' '}
        <i>&bdquo;lopatovať&rdquo;</i> zvukové dáta.
      </p>
      <FigureAudio
        src='/res/s01e05/sabrina.mp3'
        caption='"Sabrina", ZX 128 demo, Br0mba (1989)'
        figureClass='left-20rem'
      >
        <p>
          Inak aj tá vzorkovacia frekvencia a&nbsp;rozlíšenie boli tak nízke, že
          výsledná kvalita bola otrasná a&nbsp;človek musel pri počúvaní silno
          zapojiť predstavivosť. 🙂
        </p>
        <p>
          Asi aj sami počujete, že toto nie je niečo, čo by sme radi počúvali.
          Navyše tým, že počítač počas prehrávania len ťažko dokáže robiť aj
          čosi iné, tak je to v&nbsp;hernom segmente, ale aj na demoscéne
          prakticky nevyužiteľné.
        </p>
      </FigureAudio>
      <h3>Paula, dcéra kráľovnej Amigy</h3>
      <p>
        Ako som už spomínal{' '}
        <EpisodeLink episode={2}>v&nbsp;druhej epizóde</EpisodeLink>, zlom vo
        vnímaní zvuku, jeho kvalite ale aj samotnej tvorbe hudby na počítači
        dátujeme do druhej polovice 80. rokov, keď sa objavili prvé Amigy. Ich
        zvukový čip <b>Paula</b> mal 4 zvukové kanály (dva znejúce naľavo, dva
        zas napravo). Každý kanál umožňoval prehrávať na rozličnej vzorkovacej
        frekvencii 8-bitové zvukové vzorky (čiže mali 256 úrovní hlasitosti).
      </p>
      <FigureImage
        src='/res/s01e05/amiga_500_paula.jpg'
        caption='detail čipu Paula v Amige 500'
        mediaSource='amigafrance.com'
        figureClass='right-20rem'
        width={800}
        height={450}
        isCaptionVisible
        isZoomable
      >
        <p>
          Paula má priamy prístup do pamäte, z&nbsp;ktorej prehráva zvukové
          vzorky, ľudovo nazývané &bdquo;sample&rdquo;, v&nbsp;jednotlivých
          kanáloch, ktoré sa následne mixujú do digitálno-analógového prevodníka
          na výstupe. Čipu tak iba určujeme, kde sa v&nbsp;pamäti sampel
          nachádza, v&nbsp;ktorom kanály ho prehrať a&nbsp;ako rýchlo či hlasno.
          Procesor sa o&nbsp;nič nestará a&nbsp;má všetok voľný čas na hru či
          demo efekty.
        </p>
        <p>
          Vypočujte si úvodnú skladbu hry &bdquo;Led Storm&rdquo; z&nbsp;pera
          Tima Follina:
        </p>
      </FigureImage>
      <FigureAudio
        src='/res/s01e05/tim_follin_led_storm.mp3'
        caption='"Led Storm - Tune 1", Tim Follin (1988)'
        figureClass='left-20rem'
      >
        <p className='-mt-4'>
          No čo poviete, neznie to fantasticky?
          <br />
          Na rok 1988 to bola revolúcia, aj keď, ak to porovnáme s&nbsp;kvalitou
          Audio CD, ktoré má 256&times; viac úrovní hlasitostí
          a&nbsp;mnohonásobne vyššiu vzorkovaciu frekvenciu, takže je to &ndash;
          samozrejme, ako my mladí hovoríme <i>&bdquo;lo-fi&rdquo;</i>.
        </p>
      </FigureAudio>
      <p>
        Nutné je však poznamenať, že sa kvalita postupne zvyšovala ďalším
        vývojom počítačov a&nbsp;zvukových periférií, ale čo je dôležité:
      </p>
      <blockquote>
        Princíp práce so zvukom postavenom na pulzno-kódovej modulácii evolučne
        vyhral a&nbsp;takýmto spôsobom vyludzujú zvuk všetky dnešné počítače,
        mobily, smart hodinky, či dokonca aj váš robotický vysavač. 😉
      </blockquote>
      <h3>Hudobné trackery</h3>
      <p>
        S týmto milníkom na poli počítačovej hudby súvisí aj príchod novej
        hviezdy, ktorá umožnila tisícom nových tvorcov začať ich dráhu hudobníka
        a&nbsp;stačil im k&nbsp;tomu ich počítač &ndash;{' '}
        <b>&bdquo;Music trackers&rdquo;</b> alebo hudobné trackery.
      </p>
      <p>
        Táto nová vlna softvérových hudobných editorov prišla s&nbsp;vizuálnou
        podobou programovania hudby vertikálnym zápisom, ktorý si môžete
        predstaviť ako Excel. Každý stĺpec znamená jeden zvukový kanál, ten
        plynie po riadkoch určenou rýchlosťou a&nbsp;v&nbsp;danom čase určujete
        aký zvuk má byť zahraný akým tónom, hlasitosťou či inými efektami
        a&nbsp;ich parametrami.
      </p>
      <FigureImage
        src='/res/s01e05/chris_huelsbeck.jpg'
        caption='Chris Hűlsbeck pri svojom Commodore 64'
        mediaSource='namelessalgorithm.com'
        figureClass='right-20rem opaque-ms'
        width={420}
        height={270}
        isCaptionVisible
      >
        <p>
          Aby sme sa dopátrali k&nbsp;prvému trackeru, aj keď ešte
          nepoužívajúcom sample, musíme sa presunúť do jesene 1986. Vtedy iba
          17-ročný <b>Chris Hűlsbeck</b> sa zapojil do hudobnej súťaže nemeckého
          časopisu venovaného počítaču Commodore 64. Vytvoril si na tento účel
          vlastný hudobný program zvaný <b>Soundmonitor</b>, puristický hudobný
          editor, kde zvukový čip SID programujete v&nbsp;hexadecimálnych kódoch
          usporiadaných do riadkov a&nbsp;stĺpcov reprezentujúcich zvukové
          kanály. Bol to však prvý nástroj, ktorý sa aspoň trocha priblížil aj
          ďalším tvorcom, ktorí takto mohli začať skladať vlastnú hudbu.
        </p>
        <FigureImage
          src='/res/s01e05/soundmonitor_listing.jpg'
          caption={`výpis programu Soundmonitor otlačený v časopise "64'er"`}
          mediaSource='namelessalgorithm.com'
          figureClass='left-20rem opaque-ms'
          width={1000}
          height={1491}
          isZoomable
        >
          <FigureImage
            src='/res/s01e05/soundmonitor.png'
            caption='Soundmonitor'
            mediaSource='namelessalgorithm.com'
            figureClass='right-20rem lg:!-mt-4'
            className='dark'
            width={320}
            height={200}
          >
            <p>
              Tento Soundmonitor totiž poskytol všetkým a&nbsp;bol otlačený
              v&nbsp;spomínanom časopise ako výpis programu, ktorí ste si mohli
              opísať a&nbsp;uložiť.
            </p>
            <p>
              A&nbsp;ako inak, Chris nakoniec túto súťaž vyhral svojou skladbou
              &bdquo;Shades&rdquo;:
            </p>
            <FigureAudio
              src='/res/s01e05/chris_huelsbeck_shades.mp3'
              caption='Chris Hűlsbeck - Shades (1986)'
              className='flex w-auto clear-right'
            />
            <p>
              Chris Huelsbeck sa neskôr stal celosvetovo známy svojimi hernými
              soundtrackmi, najmä ku sérii hier Turrican. O&nbsp;Chrisovi by sa
              dal natočiť samostatný diel, a&nbsp;našťastie to namiesto mňa
              urobili omnoho lepšie v&nbsp;
              <ExternalLink href='https://retronation.cz/retro-noty-106-chris-huelsbeck-maestro-osmibitove-a-sestnactibitove-ery/'>
                Retronation.cz: Retro Noty 106
              </ExternalLink>
              .
            </p>
          </FigureImage>
        </FigureImage>
      </FigureImage>
      <h3>Úsvit a pád: The Ultimate Soundtracker</h3>
      <p>
        Vráťme sa ale k&nbsp;trackerom. Práve programom Soundmonitor sa totiž
        inšpiroval <b>Karsten Obarski</b>, keď vytváral prvý hudobný tracker na
        počítač Commodore Amiga.
      </p>
      <FigureImage
        src='/res/s01e05/ultimate_soundtracker.png'
        caption='The Ultimate Soundtracker'
        figureClass='right-24rem'
        className='dark'
        width={640}
        height={510}
      >
        <p>
          <b>The Ultimate Soundtracker</b> bol nástroj, ktorý si Obarski
          vytvoril pre seba. Používal ho na tvorbu hudby pre nemeckú hernú
          spoločnosť EAS, pre ktorú pracoval a&nbsp;ktorá od neho kúpila práva
          na distribúciu a&nbsp;vydala tento program komerčne, v&nbsp;decembri
          1987 v&nbsp;peknej krabičke s&nbsp;manuálom.
        </p>
        <FigureImage
          src='/res/s01e05/ultimate_soundtracker_box.jpg'
          caption='balenie The Ultimate Soundtracker s dvoma disketami'
          figureClass='left-32rem'
          width={1400}
          height={1000}
          isCaptionVisible
          isZoomable
        >
          <FigureAudio
            src='/res/s01e05/ultimate_soundtracker_demo.mp3'
            caption='Karsten Obarski - Amegas (1987)'
            className='flex w-auto clear-right'
          />
          <p>
            V balení ste našli dve diskety, na prvej samotný tracker a&nbsp;na
            druhej bolo zopár ukážkových skladieb &ndash; jedna z&nbsp;nich
            s&nbsp;názvom &bdquo;Amegas&rdquo; v&nbsp;ukážke vyššie.
          </p>
          <p>
            Čo je ale hlavné: Druhá disketa obsahovala viac než 120 samplov so
            zvukmi nástrojov, prevedených väčšinou zo syntezátorov
            Yamaha&nbsp;DX21 či Roland&nbsp;D50. Túto kolekciu zvukov si Obarski
            pracne pripravoval pre seba, ale nechtiac tým vlastne ovplyvnil zvuk
            Amigy na mnoho nasledujúcich rokov&hellip;
          </p>
        </FigureImage>
      </FigureImage>
      <h4>Komerčný neúspech</h4>
      <p>
        Príbeh Ultimate Soundtrackera je vlastne veľmi smutným príbehom
        komerčného neúspechu, ktorý viedol ku vzostupu trackerov z&nbsp;pera
        crackerskej komunity. Soundtracker nemal po vydaní veľmi dobré recenzie
        a&nbsp;hudobníci, ktorí boli v&nbsp;tom čase zvyknutí skôr na notové
        programy ho považovali za nelogický, obtiažny alebo jednoducho čudný.
        Ten program si to i&nbsp;sám veľmi neuľahčoval chybovosťou, obmedzenými
        možnosťami a&nbsp;akýmsi striktným vyhradzovaním kanálov.
      </p>
      <p>
        Crackerská komunita sa s&nbsp;tým dlho nebabrala a&nbsp;už o&nbsp;pár
        mesiacov tracker rozobrala na súčiastky, opravila chyby, ďalej
        vylepšovala, pridávala nové fíčurky a&nbsp;veselo vydávala verziu za
        verziou. To všetko bez vedomia pôvodného autora a&nbsp;rešpektovania
        jeho intelektuálneho vlastníctva. Keď koncom roka 1988 prišiel Obarski
        oficiálne so svojou ďalšou, vylepšenou verziou The Ultimate Trackera,
        bola už dávno prekonaná crackerskou komunitou a&nbsp;prepadla sa
        v&nbsp;predajoch. Čoskoro na tento úspech neoficiálnych klonov
        Soundtrackera nadviazali ďalšie voľne dostupné trackery, ako napríklad{' '}
        <b>NoiseTracker</b> a&nbsp;neskôr <b>ProTracker</b>, ktorý už priniesol
        aj editor samplov, množstvo ďalších vylepšení a&nbsp;vyvíjal sa až do
        druhej polovice 90. rokov.
      </p>
      <FigureImage
        src='/res/s01e05/amiga_trackers.png'
        caption='Prehľad rôznych odnoží, ktoré "vďaka" crackerskej komunite vzišli z Obarskeho The Ultimate Soundtrackera'
        mediaSource='demozoo.org'
        className='dark'
        width={970}
        height={778}
        isCaptionVisible
        isZoomable
      />
      <h4>Dedičstvo</h4>
      <p>
        Obarskeho Soundtrackeru sa ale nedá uprieť to, že zadefinoval tento typ
        hudobného editora a&nbsp;práve tu vznikol formát súboru, ktorý dnes
        voláme Amiga Module. Tieto súbory, ľudovo nazývané moduly, alebo MODy
        obsahujú celú vašu skladbu aj so všetkými potrebnými samplami
        v&nbsp;jednom súbore. Formát sa samozrejme postupne rozširoval
        s&nbsp;vývojom nových verzií, hlavne tých neoficiálnych a&nbsp;voľne
        dostupných.
      </p>
      <p>
        Ďalšia vec, ktorá sa Obarskemu nedá uprieť je to, že svojou kolekciou
        samplov, ktoré dodával ku Soundtrackeru na dlhé roky ovplyvnil zvuk hier
        a&nbsp;diem na Amige, keďže väčšina čerpala z&nbsp;jeho zvukovej banky
        a&nbsp;málokto mal možnosť nahrávať si vlastné sample.
      </p>
      <FigureYouTube
        youtubeCode='thnXzUFJnfQ?si=nQxjfrrxNrR9M1RX'
        caption='"Space Debris" autenticky v programe ProTracker 2 na Amige'
        figureClass='right-32rem'
        isCaptionVisible
      >
        <p>
          Tí, ktorí ale prekročili tieň tejto banky zvukov a&nbsp;nahrali si
          vlastné nástroje, dokázali vytvoriť pamätihodné diela s&nbsp;úplne
          novým zvukom. Napríklad <b>Markus Kaarlonen</b> alias
          &bdquo;Captain&rdquo;, ktorý je dnes hudobný producent a&nbsp;člen
          fínskej rockovej kapely Poets of the Fall, je autorom aj tohto
          legendárneho Amiga modulu &bdquo;Space Debris&rdquo; z&nbsp;roku 1991.
        </p>
        <FigureAudio
          src='/res/s01e05/captain_space_debris.mp3'
          caption='Markus "Captain" Kaarlonen - Space Debris (1991)'
          className='flex w-auto clear-left'
        />
      </FigureYouTube>
      <h3>PC ♥︎ trackery</h3>
      <p>
        Keď sa v&nbsp;prvej polovici 90. rokov zlepšil stav multimédií aj na PC
        príchodom nových grafických, no v&nbsp;našom prípade hlavne zvukových
        kariet, vzniklo hneď niekoľko trackerov aj na tieto mašinky.
      </p>
      <FigureYouTube
        youtubeCode='iw17c70uJes?si=i5cZtoYX6fXw2ihh&amp;start=108'
        caption='Future Crew - Second Reality (1993)'
        figureClass='right-24rem'
      >
        <p>
          <b>Scream&nbsp;Tracker&nbsp;3</b> fínskej demogrupy <b>Future Crew</b>{' '}
          umožňoval použiť až stovku samplov v&nbsp;32 kanáloch a&nbsp;na
          lepších zvukovkách ešte kombinovať s&nbsp;hardvérovou&nbsp;
          <EpisodeLink episode={32}>FM&nbsp;syntézou</EpisodeLink>. Preto aj
          zaviedol svoj vlastný nový formát modulov S3M, kde sa tieto rozšírené
          možnosti zapisovali.
        </p>
        <p>
          <b>Jonne Valtonen</b> alias <b>&bdquo;Purple Motion&rdquo;</b>{' '}
          z&nbsp;Future Crew takto ozvučil ich legendárne demo &bdquo;Second
          Reality&rdquo;:
        </p>
      </FigureYouTube>
      <p>
        Scream&nbsp;Trackerom sa o&nbsp;rok neskôr silno inšpiroval aj
        austrálsky <b>Impulse Tracker</b>, ktorý takisto priniesol vlastný
        formát a&nbsp;bolo v&nbsp;ňom možné pracovať z&nbsp;doznevom tónov
        a&nbsp;hlasitostnou krivkou samplov.
      </p>
      <FigureAudio
        src='/res/s01e05/mike_bos_unreal_tournament.mp3'
        caption='Michiel van den Bos - Foregone Destruction (1999)'
        figureClass='left-24rem'
      >
        <p>
          <b>Michiel van den Bos</b>, v&nbsp;súčasnosti pracujúci v&nbsp;hernom
          štúdiu Remedy, v&nbsp;roku 1999 do hry &bdquo;Unreal Tournament&rdquo;
          zložil soundtrack práve v&nbsp;Impulse Trackeri a&nbsp;engine hry ho
          prehráva priamo z&nbsp;tohto modulu.
        </p>
      </FigureAudio>
      <p>
        Špeciálne miesto v&nbsp;sieni slávy hudobných trackerov má{' '}
        <b>FastTracker&nbsp;II</b> švédskej demogrupy <b>Triton</b>. Ten prišiel
        s&nbsp;rozhraním berúcim si to najlepšie z&nbsp;používateľského
        rozhrania Amigáckeho ProTrackera, no FastTracker&nbsp;II okrem 32
        kanálov priniesol naozaj revolučné vylepšenia!
      </p>
      <FigureYouTube
        youtubeCode='PXTZA5bqIJ0?si=rmLQe0ljOc37eG9p'
        caption='Rymdlego (Radix) - "Yuki Satellites" (1999)'
        figureClass='right-32rem'
        isCaptionVisible
      >
        <p>
          Zadefinoval formát XM (e<b>X</b>tended <b>M</b>odule), kde sa už
          nepracovalo iba so samplami, ale zaviedol koncept nástrojov. Každý
          nástroj mohol v&nbsp;sebe obsahovať množinu samplov, kľudne aj
          v&nbsp;CD kvalite a&nbsp;priradiť ich nezávisle ku rozsahu tónov.
          Každý takto priradený sample mohol mať vlastnú hlasitostnú ADSR krivku
          a&nbsp;priebeh stereováhy medzi ľavým a&nbsp;pravým kanálom, rôzny
          v&nbsp;čase trvania samplu. Umožňoval samplom rôzne spôsoby ich
          opakovania a&nbsp;cyklenia, jemné ladenie, a&nbsp;dokonca aj vstavané
          vibrato či nízkofrekvenčnú moduláciu (LFO).
        </p>
        <p>
          To sú všetko koncepty, s&nbsp;ktorými my hudobníci pracujeme pri
          dnešných virtuálnych nástrojoch&hellip; ale vážení! To, že skupina
          Triton s&nbsp;týmto prišla v&nbsp;polovici 90. rokov, tak to muselo
          byť pre scénu ako z&nbsp;paralelného vesmíru.
        </p>
      </FigureYouTube>
      <h3>Od hier po demoscénu</h3>
      <p>
        Tieto trackery boli od začiatku hojne využívané v&nbsp;Amigáckych hrách,
        ale aj na konci 90. rokov sa na pécéčkách používali na tvorbu
        soundtrackov komerčných hier od Team&nbsp;17, ale aj v hrách Unreal,
        Unreal Tournament či Deus Ex.
      </p>
      <p>
        Čo je ale podstatné, celý ten čas trackery &bdquo;drajvovali&ldquo;
        vývoj demoscény a&nbsp;dodnes sú chápané ako jej{' '}
        <b>neoddeliteľná súčasť</b>. Ak si chcete zažiť aj dnes slasti
        a&nbsp;strasti tvorby hudby v&nbsp;trackeroch, môžete si to vyskúšať aj
        na dnešných výkonných počítačoch, ktoré stačí stiahnuť a&nbsp;spustiť na
        vašom súčasnom PC alebo Macu.
      </p>
      <ul>
        <li>
          Moderné klony programov{' '}
          <ExternalLink href='https://16-bits.org/pt2.php'>
            ProTracker&nbsp;2
          </ExternalLink>{' '}
          aj{' '}
          <ExternalLink href='https://16-bits.org/ft2.php'>
            FastTracker&nbsp;II
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href='https://schismtracker.org/'>
            SchismTracker
          </ExternalLink>
          , čo je klon ImpulseTrackera
        </li>
        <li>
          Dokonca existuje webový{' '}
          <ExternalLink href='https://www.stef.be/bassoontracker/'>
            BasoonTracker
          </ExternalLink>
          , bežiaci v&nbsp;browseri
        </li>
        <li>
          Ak to s&nbsp;hudbou myslíte trocha vážnejšie, sú k&nbsp;dispozícií{' '}
          <ExternalLink href='https://openmpt.org/'>
            ModPlugTracker
          </ExternalLink>{' '}
          alebo <ExternalLink href='https://renoise.com/'>Renoise</ExternalLink>
          , čo sú už skutočne plnohodnotné digitálne zvukové stanice na báze
          trackerov, umožňujúce používať aj súčasné{' '}
          <EpisodeLink episode={15}>virtuálne nástroje</EpisodeLink>.
        </li>
      </ul>
    </EpisodeWrapper>
  );
}
