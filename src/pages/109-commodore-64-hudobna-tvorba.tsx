import * as React from 'react';

import {
  EpisodeLink,
  EpisodeWrapper,
  ExternalLink,
  FigureAudio,
  FigureEpisodeLogo,
  FigureImage,
  FigureYouTube,
  Heading,
} from '@/components/common';

export default function S01E09() {
  return (
    <EpisodeWrapper episode={9}>
      <FigureEpisodeLogo episode={9} figureClass='right-20rem'>
        <h2>Hudobná tvorba na&nbsp;Commodore 64</h2>
        <p>
          Po predošlej epizóde{' '}
          <EpisodeLink episode={8}>#8: Commodore 64</EpisodeLink> už viete
          všetko o&nbsp;tomto 8-bitovom počítači. A&nbsp;keďže podcast Zapečené
          procesory je nielen o&nbsp;tom, ako historická technika vznikala
          a&nbsp;fungovala, ale aj o&nbsp;tom, ako znie, dnes si podrobne
          predstavíme zvuk tohto legendárneho stroja.
        </p>
        <p>
          Som rád, že moje pozvanie do&nbsp;podcastu prijal{' '}
          <strong>Petr Chlud</strong>, alias <strong>Pecha</strong> alebo{' '}
          <strong>PCH</strong>, ktorý je známou postavou československej
          komodoristickej scény, založil portál{' '}
          <ExternalLink href='https://c64.cz'>C64.cz</ExternalLink> a&nbsp;sám
          je taký významný hudobník tejto platformy, že pravidelne vyhráva
          oldskool music compo na&nbsp;svetovej demopárty Revision. Rovnako ako
          so všetkými mojimi hosťami, aj s&nbsp;ním sa stretávam na&nbsp;akciách
          venovaných starým počítačom.
        </p>
      </FigureEpisodeLogo>
      <Heading id='revision-demoparty'>Revision demoparty</Heading>
      <blockquote className='question'>
        Zdravím ťa, Petře, ako sa máš? A&nbsp;keďže si viac-menej pravidelný
        účastník demopárty Revision, musím sa ťa opýtať, ako si si užil ročník
        2024?
      </blockquote>
      <p>
        Ahoj Martine, moc ti děkuji za&nbsp;pozvání do&nbsp;tohoto podcastu.
        Musím říct, že se mám vlastně pořád dobře. Vždycky jsem se měl dobře
        a&nbsp;asi se i&nbsp;vždycky dobře mít budu, ale nerad bych se rouhal.
        Každopádně, co se týče letošní akce&hellip; my už několikátý rok jezdíme
        na&nbsp;Revision, kde potkáváš známé i&nbsp;ty nejznámější lidi.
        A&nbsp;když už se v&nbsp;tomto pořadu budeme bavit o&nbsp;hudbě, mám
        jednu příhodu z&nbsp;této akce. Stane se ti třeba, že sedíš vedle
        člověka, který si hraje s&nbsp;Cubase, a&nbsp;ptáš se ho: &bdquo;Ahoj,
        co tady děláš na&nbsp;téhle akci? Ty děláš hudbu v&nbsp;Cubase?&rdquo;
        A&nbsp;on odpoví: &bdquo;Ne, já programuji Cubase.&rdquo; 😉
      </p>
      <blockquote className='question'>
        Wow, tak s&nbsp;ním by som mal o&nbsp;čom kecať, keďže sám Cubase
        používam už dve dekády&hellip; 🤩
      </blockquote>
      <FigureImage
        src='/res/s01e09/revision2017.jpg'
        caption='Česká posádka na Revision 2017 (pred E-Werk), zľava: Sigi, Petr Chlud (PCH), Fery a Sillicon'
        mediaSource='C64.cz'
        figureClass='right-24rem'
        width={1000}
        height={1080}
        isCaptionVisible
        isZoomable
      >
        <p>
          Takže musím říct, že i&nbsp;v&nbsp;tomhle je tato akce zajímavá
          &ndash; potkáváš lidi, kteří nejen tvoří hudbu, ale programují
          i&nbsp;ty nejslavnější softwary, ve kterých se hudba dá dělat.
        </p>
        <p>
          A&nbsp;nejen to! Akce je obrovská, největší na&nbsp;světě. Slétají se
          tam lidé z&nbsp;celého světa a&nbsp;soutěží ve všech kategoriích,
          které si člověk dokáže představit. Kdo na&nbsp;této akci nebyl &ndash;
          doporučuju, protože se to vymyká všemu, co člověk zná. Program je
          každý rok tak nabitý od&nbsp;začátku do&nbsp;konce, že tuto akci
          nemohu hodnotit jinak než jako vynikající. Každý rok tam soutěží
          nejlepší programátoři, hudebníci a&nbsp;grafici, světoznámé skupiny
          z&nbsp;demoscény, ať už osmibitové, nebo z&nbsp;PC scény. Jsou tam
          opravdu špičkoví programátoři, kteří si programováním těchto věcí
          vlastně odpočinou. Takových lidí je tam spousta, konají se různé
          přednášky, jsou tam koncerty, takže opravdu, jak říkám, stojí to
          za&nbsp;to. A&nbsp;letošní Revision byl opět vynikající.
        </p>
      </FigureImage>
      <Heading id='chris-huelsbeck'>Vplyv Chrisa Hülsbecka</Heading>
      <FigureImage
        src='/res/s01e05/soundmonitor.png'
        caption='Soundmonitor'
        mediaSource='namelessalgorithm.com'
        figureClass='left-20rem'
        className='dark'
        width={320}
        height={200}
      >
        <blockquote className='question'>
          Už v&nbsp;<EpisodeLink episode={5}>5. epizóde</EpisodeLink> tohto
          podcastu som hovoril o&nbsp;revolúcii v&nbsp;tvorbe hudby
          na&nbsp;Commodore 64, ktorú znamenal program <b>Soundmonitor</b>{' '}
          Chrisa Hülsbecka. Aký význam mal tento voľne dostupný hudobný program?
        </blockquote>
        <p>
          Jestli Chris a&nbsp;jeho editor ovlivnili scénu? Nevím, jak kdo zná
          specifika osmibitové scény, ale zvláště v&nbsp;té hudební je
          na&nbsp;Commodore 64 obrovský rozdíl oproti ostatním
          platformám&hellip;
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e05/chris_huelsbeck.jpg'
        caption='Chris Hűlsbeck pri svojom Commodore 64'
        mediaSource='namelessalgorithm.com'
        figureClass='left-20rem opaque-ms'
        width={420}
        height={270}
        isCaptionVisible
      >
        <p>
          Chris je geniální hudebník, dělal hudbu pro vynikající, špičkové hry.
          Samozřejmě si musel naprogramovat vlastní editor, což dělala většina
          lidí v&nbsp;té době. Pokud chtěli dělat hudbu, nikdy se jim nedostal
          do&nbsp;ruky nástroj, který by jim vyhovoval. Stejně tak si Chris
          musel naprogramovat svůj vlastní editor a&nbsp;samozřejmě v&nbsp;něm
          nikdo neuměl pracovat lépe než on. Tohle je pro hudební scénu
          na&nbsp;Commodore 64 strašně specifické, protože opravdu každý, kdo
          uměl programovat a&nbsp;měl vztah k&nbsp;hudbě, si naprogramoval svůj
          editor. Chris jako takový ovlivnil hudební scénu hlavně tím, že dělal
          špičkovou hudbu a&nbsp;dokázal z&nbsp;čipu SID, který je uvnitř
          Commodore 64, dostat zvuky, které v&nbsp;té době nebyly běžné. To
          znamená různé cinkání, basy, filtry &ndash; věci, které ostatní
          osmibity třeba vůbec nemají.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e09/great_giana_sisters.png'
        caption='The Great Giana Sisters'
        figureClass='right-15rem'
        width={300}
        height={187}
      >
        <blockquote className='question'>
          Vypočujme si teda Chrisov soundtrack ku hre{' '}
          <strong>The Great Giana Sisters</strong> z&nbsp;roku 1987.
        </blockquote>
        <FigureAudio
          src='/res/s01e09/chris_huelsbeck_great_giana_sisters.mp3'
          caption='Chris Hülsbeck - The Great Giana Sisters (1987)'
          className='!flex w-auto clear-left'
        />
      </FigureImage>
      <blockquote className='question'>
        Ako teda ovplyvnil scénu? Naštartovalo to kariéry aj iných hudobníkov?
      </blockquote>
      <p>
        Co se týče ovlivnění, zvuk samotného Commodore 64 ovlivnil hudebníky víc
        než Chris jako takový. Když pochopili potenciál tohoto zařízení
        a&nbsp;tohoto čipu, tak se tak dlouho snažili vymáčknout ze SIDu
        maximum, až se jim to podařilo. Pokud můžu mluvit sám za&nbsp;sebe, tak
        mě Soundmonitor minul. Editorů na&nbsp;Commodore 64 jsou možná tisíce
        a&nbsp;je to absolutně, diametrálně odlišný způsob přemýšlení
        o&nbsp;hudbě než třeba u&nbsp;Atari nebo ZX Spectra, kde v&nbsp;podstatě
        existuje jeden, dva, možná tři editory, které znají všichni hudebníci
        na&nbsp;dané platformě. Na&nbsp;Commodoru jsou jich opravdu tisíce,
        a&nbsp;to nejen samostatných editorů, ale i&nbsp;jejich verzí. To
        znamená, že pokud se někdo dostal ke strojovému kódu daného editoru,
        upravil si ho podle sebe. Někdo si přidal živé piano, někdo přidal
        funkce, které mu tam chyběly. A&nbsp;samozřejmě vznikala obrovská
        nekompatibilita jednotlivých verzí mezi sebou.
      </p>
      <FigureImage
        src='/res/s01e09/music_assembler.png'
        caption='Music-Assembler 1.4'
        figureClass='left-20rem'
        className='dark'
        width={320}
        height={200}
      >
        <p>
          Mě osobně, když to můžu takhle říct, sice nezasáhl Soundmonitor, ale
          já sám jsem začínal na&nbsp;hudebním editoru <b>Music Assembler</b>.
          Ten editor toho moc neuměl, určitě nebyl zvukově na&nbsp;takové úrovni
          jako třeba SoundMonitor, ale stačilo to k&nbsp;tomu, aby se člověk
          do&nbsp;tohoto zařízení zamiloval.
        </p>
        <FigureImage
          src='/res/s01e09/jonathan_dunn.jpg'
          caption='Jonathan Dunn'
          figureClass='right-15rem'
          width={635}
          height={635}
          isZoomable
        >
          <blockquote className='question'>
            Ďalšia ukážka je úvodná skladba z&nbsp;hry podľa slávneho filmu{' '}
            <strong>Robocop</strong>. Zložil ju v&nbsp;roku 1988{' '}
            <strong>Jonathan Dunn</strong>.
          </blockquote>
          <FigureAudio
            src='/res/s01e09/jonathan_dunn_robocop.mp3'
            caption='Jonathan Dunn - Robocop (1988)'
            className='!flex w-auto clear-left mt-4'
          />
        </FigureImage>
      </FigureImage>
      <Heading id='sid'>Sound Interface Device</Heading>
      <blockquote className='question'>
        Zvukový čip SID je oproti ostatným zvukovým čipom tejto éry pomerne
        komplexný a&nbsp;zvuk sa v&nbsp;ňom tvorí trochu inak &ndash;
        z&nbsp;môjho spektristického pohľadu zložitejšie. Vedel by si nám nejako
        zjednodušene popísať princíp, akým sa na&nbsp;SIDe programujú nástroje
        a&nbsp;zvuky?
      </blockquote>
      <FigureImage
        src='/res/s01e08/sid.jpg'
        caption='zvukový čip SID (MOS Technology 6581)'
        mediaSource='Christian Taube, CC BY-SA 2.5'
        className='dark'
        width={1032}
        height={430}
        isCaptionVisible
        isZoomable
      />
      <p>
        To je právě ono. To je ten rozdíl, o&nbsp;kterém mluvím &ndash; to
        absolutně jiné vnímání hudby na&nbsp;různých 8-bitových platformách. Co
        se týče SIDu: SID je vlastně &ndash; a&nbsp;teď mě hardwaristi možná
        ukamenují &ndash; komplexní syntezátor neboli &bdquo;synťák&rdquo;. Má
        několik 16-bitových registrů, které se navzájem ovlivňují, dá se tam
        nastavit různá obálka, různé průběhy, dají se programovat průběhy,
        a&nbsp;to všechno dělá ten rozdíl mezi SIDem a&nbsp;vším ostatním. Už
        jen to, že SID má plnohodnotný filtr na&nbsp;každém kanálu
        a&nbsp;možnost několika různých typů vln, které jiné platformy nemají,
        z&nbsp;něj dělá něco výjimečného.
      </p>
      <p>
        Programování nástrojů na&nbsp;SIDu je pro člověka přicházejícího ze
        Spectra nebo Atari hodně složité, protože autor musí ovlivňovat několik
        registrů &ndash; ať už je to typ vlny, průběh, frekvenční tabulka,
        pulzní tabulka nebo nějaká tabulka filtru. Všechno to má své funkce
        a&nbsp;své limity. Máte možnost v&nbsp;jakémkoli okamžiku ovlivňovat
        tyto parametry. Můžete je kombinovat, respektive tak rychle střídat, že
        to zní jako kombinace, čímž se u&nbsp;tohoto počítače vytvářejí veškeré
        efekty.
      </p>
      <p>
        Nemůžete všechno pouštět současně; musíte to spouštět strašně rychle
        za&nbsp;sebou a&nbsp;člověk nabývá dojmu, že to hraje takřka současně.
        Takže v&nbsp;jednu chvíli ovládáte typ vlny, průběh zvuku i&nbsp;jeho
        filtr, a&nbsp;to všechno je několik tabulek, které se časem stejně každý
        naučí používat. Takhle asi probíhá tvorba nástroje.
      </p>
      <FigureImage
        src='/res/s01e09/jeroen_tel.jpg'
        caption='Jeroen Tel, člen skupiny Maniacs of Noise'
        figureClass='right-24rem'
        width={1750}
        height={900}
        isZoomable
        isCaptionVisible
      >
        <blockquote className='question'>
          Koncom osemdesiatych rokov vychádza nová hudobná hviezda počítača
          Commodore 64 &ndash; holandský skladateľ <strong>Jeroen Tel</strong>.
          <br />
          V&nbsp;roku 1988 takto ozvučil výbornú strieľačku{' '}
          <strong>Cybernoid 2</strong>:
        </blockquote>
        <FigureAudio
          src='/res/s01e09/jeroen_tel_cybernoid2.mp3'
          caption='Jeroen Tel alias WAVE - Cybernoid 2 (1988)'
          className='!flex w-auto clear-left'
        />
      </FigureImage>
      <p>
        SID jako takový má pilovitý, trojúhelníkový a&nbsp;obdélníkový průběh
        a&nbsp;šum. Teď abych řekl popravdě, z&nbsp;hlavy si to nepamatuju,
        protože já se nevěnuju vlastnostem hardwaru ani neprogramuju hudební
        editory, já hudbu dělám. To by vám řekl zase programátor, protože takhle
        můžu samozřejmě na&nbsp;něco zapomenout. Jakmile otevřu prostředí svého
        hudebního editoru, je mi úplně ukradené, jestli to má tři, čtyři nebo
        pět vln &ndash; musel bych se podívat na&nbsp;internet,
        a&nbsp;na&nbsp;to jsem moc líný. Na&nbsp;to se může podívat každý
        v&nbsp;technické specifikaci. 🙂
      </p>
      <p>
        Jakmile si člověk sedne do&nbsp;prostředí svého editoru, který zná, tak
        v&nbsp;tu chvíli &bdquo;jede&rdquo;, jako by byl doma. Tím, že
        u&nbsp;tohoto počítače sedím už asi 25., dneska snad už i&nbsp;30. rok,
        vnímám ty věci tak nějak přirozeně.
      </p>
      <p>
        Samozřejmě, člověk, který u&nbsp;tohoto počítače dlouhodobě sedí
        a&nbsp;hraje si se všemi možnostmi, které tenhle čip nabízí, se časem
        naučil vymáčknout ze SIDu takové maximum, které zní jako nástroje
        z&nbsp;roku 2024. Pokud se na&nbsp;SIDu dnes udělá zvuk taneční hudby
        (a&nbsp;udělá se dobře), tak téměř nikdo není schopný zjistit, že
        v&nbsp;roce 2024 poslouchá hudbu pocházející z&nbsp;mikropočítače
        z&nbsp;80. let.
      </p>
      <Heading id='hudobne-editory'>Hudobné editory</Heading>
      <blockquote className='question'>
        Na&nbsp;prelome 80. a&nbsp;90. rokov vznikli aj nové hudobné editory. Čo
        nové priniesli a&nbsp;akí noví hudobníci sa objavili?
      </blockquote>
      <p>
        Jedna věc, kterou můžeme u&nbsp;Commodore 64, a&nbsp;asi
        i&nbsp;u&nbsp;ostatních 8-bitů pozorovat, je to, že s&nbsp;přibývajícími
        lety se objevují lidé, kteří dokážou z&nbsp;toho počítače dostat stále
        víc a&nbsp;víc. Člověk si kolikrát říká, že to, co vidí nebo slyší, je
        už na&nbsp;hraně, že víc to nejde &ndash; a&nbsp;každý rok přijde někdo
        s&nbsp;něčím nepochopitelným&hellip; hlavně když si uvědomíte, že to
        běží na&nbsp;počítači s&nbsp;rychlostí 985 kilohertzů &ndash; to není
        ani jeden megahertz! Samozřejmě, tím, že SID je zakázkový čip, který si
        hodně věcí obsluhuje sám, má C64 obrovskou výhodu v&nbsp;tom, že SID
        nezatěžuje procesor a&nbsp;všechno si řeší čip jako takový.
      </p>
      <p>
        A&nbsp;jaké nové styly se objevily? Je to velice jednoduché.
        V&nbsp;historii vznikala hudba nejen na&nbsp;tři kanály, které C64 má,
        ale vznikala i&nbsp;čtyřkanálová hudba. To znamená, že bylo možné využít
        tříkanálový SID plus ještě generátor šumu, kde se přehrávaly samply.
        V&nbsp;roce 1985 to byla neskutečná záležitost, která vyvolala ten
        &bdquo;wow efekt&rdquo;, že na&nbsp;starém domácím počítači přehráváte
        řeč, slova nebo nějaký kus zpěvu. Mělo to samozřejmě jeden velký
        problém, a&nbsp;tím byla paměť. Pokud jste chtěli přehrávat sample
        v&nbsp;rozumné kvalitě, dostali jste do&nbsp;paměti možná necelých
        10&ndash;12 sekund, a&nbsp;v&nbsp;editoru samotném ani to ne &ndash; tam
        jste dostali dvou- až třísekundový sample. Jenomže v&nbsp;roce 2024 už
        dokážete na&nbsp;C64 přehrát pomalu celou písničku v&nbsp;MP3. Tam je
        obrovský technologický posun. Když jste v&nbsp;roce 1985 přehráli
        třísekundový sample, dnes si hrajete pomalu s&nbsp;plně samplovanou
        hudbou v&nbsp;editoru, který má dva kanály, a&nbsp;můžete to mixovat
        a&nbsp;hrát si s&nbsp;tím.
      </p>
      <FigureYouTube
        youtubeCode='pgPEaI0GHBI?si=ciDUNNTjVffExUr7'
        caption='Rob Hubbard - Commando (1985)'
        figureClass='left-24rem'
        isCaptionVisible
      >
        <p>
          Co se týče samotného SIDu a&nbsp;jeho syntezátorového zvuku, tak když
          si pustíte třeba <em>Commando</em> z&nbsp;roku 1985, je to hudba
          vynikající, ale zvukově standardní &ndash; má takové typické C64
          zvuky. Má pěknou melodii, a&nbsp;ta samozřejmě nestárne. Ale co se
          týče zvuků, když si pustíte hudbu dělanou v&nbsp;roce 2024
          od&nbsp;hudebníků tvořících taneční hudbu (jako dubstep, techno nebo
          disco), tak jsou tam opravdu nástroje, které stoprocentně nerozeznáte
          od&nbsp;syntezátorového zvuku z&nbsp;roku 2024.
        </p>
        <p>
          Samozřejmě jsme pořád limitovaní tím, že fungujeme na&nbsp;třech
          kanálech, kde není skutečná polyfonie, všechno musí znít postupně
          a&nbsp;různě se to kombinuje. Ale zvukově jsme někde, kde si inženýři
          v&nbsp;80. letech, když ten Commodore vytvářeli, určitě nebyli schopni
          ani představit, jakým směrem se zvuk na&nbsp;tomto čipu posune.
        </p>
      </FigureYouTube>
      <p>
        Je to dané novými programovacími technikami. Programátoři ten čip úplně
        zanalyzovali a&nbsp;zjistili, že když se do&nbsp;něj pouští hodnoty
        například desetkrát, dvacetkrát nebo padesátkrát rychleji, než by se
        mělo, zvuk se v&nbsp;čipu dokáže určitým způsobem přetvářet. I&nbsp;sem
        se dá dostat, pokud lidé ždímají ze svých počítačů maximum.
      </p>
      <FigureAudio
        src='/res/s01e09/soren_lund_analogue.mp3'
        caption={`Søren Lund alias Jeff - Anal'ogue (1996)`}
        figureClass='right-24rem'
      >
        <blockquote className='question'>
          Áno, a&nbsp;keď už tu hovoríme o&nbsp;novom zvuku, vypočujme si
          skladbu <strong>&bdquo;Anal&apos;ogue&rdquo;</strong>, ktorú
          v&nbsp;roku 1996 vytvoril <strong>Søren Lund</strong>, alias{' '}
          <strong>Jeff</strong>.
        </blockquote>
      </FigureAudio>
      <Heading id='stereo'>Stereo!</Heading>
      <p>
        Další posun, nebo takový &bdquo;posun-neposun&rdquo;, který nastal, je
        v&nbsp;tom, že Commodore jako takový má hudební čip, který hraje mono.
        Kanály jsou smíchané a&nbsp;zvuk jde ze středu. Všechny platformy okolo,
        ať už Atari, nebo ZX Spectrum, různě přidávaly do&nbsp;svých počítačů
        čipy a&nbsp;snažily se zvuk rozšířit na&nbsp;šest nebo osm kanálů
        a&nbsp;dosáhnout sterea &ndash; a&nbsp;to jsme samozřejmě kvalitou zvuku
        úplně jinde.
      </p>
      <FigureImage
        src='/res/s01e09/dualsid.jpg'
        caption='DualSID, autor: Tomi Malinen'
        mediaSource='ilesj.wordpress.com'
        figureClass='left-24rem'
        width={1180}
        height={720}
        isZoomable
        isCaptionVisible
      >
        <p>
          I&nbsp;Commodore měl někdy kolem roku 1985 hardware &ndash; cartridge,
          která dokázala rozšířit zvuk počítače na&nbsp;šestikanálové stereo. To
          je fajn, ale není fajn, že na&nbsp;to nemáte editor. V&nbsp;té době
          na&nbsp;to editory neexistovaly, nebo pokud ano, nedala se v&nbsp;nich
          dělat ta lepší hudba s&nbsp;vyšší zvukovou úrovní. Tak se našli
          programátoři, kteří vzali stávající mono editor a&nbsp;programově ho
          rozšířili. Když se jim to podařilo, dokázali v&nbsp;jednom editoru
          nějakým způsobem přepínat, takže chvilku editovali tři kanály vlevo
          a&nbsp;chvilku tři kanály vpravo.
        </p>
      </FigureImage>
      <p>
        Po roce 2000 se pak začaly objevovat hudební editory na&nbsp;PC, protože
        to už v&nbsp;té době začalo umět emulovat Commodore 64 včetně SIDu
        takřka dokonale. Tam vznikly stereo editory, ve kterých se dalo tvořit
        bez omezení. Člověk měl okamžitý přístup k&nbsp;levým a&nbsp;pravým
        kanálům, ke stereo efektům, mohl si hrát a&nbsp;různě mixovat kanály
        &ndash; respektive hrát něco vlevo a&nbsp;něco vpravo, protože nezávisle
        to mixovat nejde, jsou to pořád dva oddělené čipy.
      </p>
      <p>
        Těch editorů vzniklo více a&nbsp;dnes už dokonce existují editory
        na&nbsp;devítikanálovou hudbu. Našli se i&nbsp;programátoři (zvláště
        Maďaři, protože to jsou šílenci, co se týče programování na&nbsp;C64),
        kteří udělali zpětně tyto editory přímo pro samotný Commodore 64. To je
        třeba <strong>SID-Wizard</strong>, který se dnes bere jako totální
        špička ve vytváření hudby na&nbsp;C64 a&nbsp;umožňuje editovat 3, 6,
        nebo myslím dokonce i&nbsp;9 kanálů (pro 3 SIDy) přímo v&nbsp;Commodore
        64.
      </p>
      <Heading id='ceskoslovenska-scena'>Československá scéna</Heading>
      <blockquote className='question'>
        Petře, poďme teraz k&nbsp;nám, na&nbsp;domácu pôdu. Predpokladám, že aj
        v&nbsp;Československu zažíval Commodore 64 novú éru po páde Železnej
        opony, podobne, ako tomu bolo u&nbsp;Spectra. Čo nové vznikalo
        na&nbsp;našej C64 scéne a&nbsp;akí významní muzikanti vtedy začínali?
      </blockquote>
      <p>
        Po pádu železné opony byl jeden zásadní problém: neexistoval internet.
        Všechny věci se k&nbsp;vám dostávaly různou, mnohdy prapodivnou cestou.
        Někdy jste obdržel disketu, někdy jste nějakou našel, někdy jste si něco
        půjčil od&nbsp;kamaráda a&nbsp;takhle člověk vlastně začal zjišťovat, co
        se kolem něj děje, a&nbsp;někdy dokonce narazil i&nbsp;na&nbsp;českou
        záležitost.
      </p>
      <FigureYouTube
        youtubeCode='eNHqVNs1raQ?si=bLq0eJ-Mug49_Zfb'
        caption='beseda s Ondřejem Matějkou na akcii ByteFEST 2023'
        figureClass='right-32rem'
        isCaptionVisible
      >
        <p>
          Musím znovu zmínit skupinu <strong>Trash</strong>, která je
          na&nbsp;české scéně brána jako jeden z&nbsp;možná tří, čtyř základních
          pilířů tvorby na&nbsp;Commodore 64. V&nbsp;té době ve skupině Trash
          fungoval hudebník s&nbsp;přezdívkou <strong>Mateus</strong>. Ten
          skládá hudbu dodnes, věnuje se jí, i&nbsp;když už je samozřejmě někde
          jinde a&nbsp;C64 nepoužívá.
        </p>
        <blockquote className='question'>
          Áno, <strong>Ondřej Matějka</strong>, alias <strong>Mateus</strong>,
          je dnes popredný český zvukový inžinier a&nbsp;skladateľ. Pôsobí
          v&nbsp;SCS Software a&nbsp;predtým v&nbsp;Bohemia Interactive. Teraz
          si ale vypočujeme jeho <strong>Bohemian Tune</strong> z&nbsp;roku
          1993.
        </blockquote>
        <FigureAudio
          src='/res/s01e09/mateus_bohemian_tune.mp3'
          caption='Ondřej Matějka alias Mateus - Bohemian Tune (1993)'
        />
      </FigureYouTube>
      <p>
        Ostatní lidé, pokud existovali, měli mnohdy takovou přezdívku, že člověk
        ani nevěděl, jestli to byli Češi, nebo ne. Až postupem času, když se
        objevil internet a&nbsp;zpětně se hledalo, jsem zjistil, že třeba
        člověka, kterého jsem poslouchal, nebo programy, na&nbsp;které jsem se
        díval, vytvořil Čech.
      </p>
      <p>
        Tehdy se informace sháněly strašně špatně a&nbsp;člověk neměl své
        oblíbené české skladatele, protože scéna na&nbsp;Commodore 64 nebyla tak
        sjednocená. Já tomu pořád říkám, že to byla banda asociálních jedinců
        (včetně mě! 😁), kteří seděli někde různě, tvořili si hudbu,
        programovali hru a&nbsp;jednou za&nbsp;čas vyrazili na&nbsp;nějakou
        společnou akci (většinou zahraniční). To je obrovský rozdíl oproti třeba
        Atari nebo ZX Spectru, kde ve větších městech existovaly kluby, kde se
        scházely pomalu až stovky lidí. Například jsem zjistil, že
        v&nbsp;Olomouci se scházelo snad až tisíc členů Atari klubu &ndash; což
        je pro Commodore 64 absolutně nereálné. Takže moje znalost české scény
        je strašně omezená na&nbsp;pár titulů, pár značek a&nbsp;jedinců,
        o&nbsp;kterých člověk opravdu věděl, že jsou Češi. Zde se omlouvám, ale
        české hudebníky jsem nikdy moc nestudoval, ačkoliv zrovna Mateusovu
        hudbu jsem v&nbsp;té době poslouchal, protože mi přišlo fajn, že člověk
        narazil na&nbsp;nějakého Čecha. O&nbsp;mnoha dalších lidech &ndash;
        kromě těch, které znám posledních 15&ndash;20 let &ndash; nevím.
        A&nbsp;ti už nebyli &bdquo;porevoluční&rdquo;, byli to lidé, kteří
        k&nbsp;tomu přišli v&nbsp;druhé půlce 90. let. Ta &bdquo;porevoluční
        scéna&rdquo; je pro mě poněkud zastřená&hellip;
      </p>
      <FigureAudio
        src='/res/s01e09/orcan_waves_of_rythm.mp3'
        caption='Štefan Uram alias Orcan - The Waves of Rythm (2001)'
        figureClass='right-32rem md:!mt-4'
      >
        <blockquote className='question'>
          Nevadí &ndash; presuňme sa teda do&nbsp;nového milénia. Ďalšia ukážka
          je tentoraz od&nbsp;slovenského hudobníka.{' '}
          <strong>Štefan Uram</strong>, alias <strong>Orcan</strong>,
          a&nbsp;jeho skladba <strong>The Waves of&nbsp;Rhythm</strong>{' '}
          z&nbsp;roku 2001.
        </blockquote>
      </FigureAudio>
      <FigureImage
        src='/res/s01e09/nooly.jpg'
        caption='spoločná foto s Vojtom Nedvědom, ByteFEST 2023'
        figureClass='left-24rem'
        width={900}
        height={750}
        isZoomable
        isCaptionVisible
      >
        <blockquote className='question'>
          Na&nbsp;hudobnej scéne C64 sa objavil aj môj dlhoročný kamarát{' '}
          <strong>Vojta Nedvěd</strong>, alias <strong>Nooly</strong>, ktorý v
          súčasnosti pôsobí ako sound director v&nbsp;známom českom štúdiu
          Warhorse, ale ešte v&nbsp;roku 2005 vytvoril skvelú skladbu{' '}
          <strong>Sparapaaczci</strong>.
        </blockquote>
        <FigureAudio
          src='/res/s01e09/nooly_sparapaaczci.mp3'
          caption='Vojta Nedvěd alias Nooly - Sparapaaczci (2005)'
          className='!flex w-auto clear-right mt-4'
        />
      </FigureImage>
      <Heading id='dnesni-hudebnici'>Dnešní hudobníci</Heading>
      <blockquote className='question'>
        Na&nbsp;záver mi ešte nedá, a&nbsp;musím sa opýtať na&nbsp;jednu vec.
        Na&nbsp;ZX Spectre je veľmi zreteľne počuť, že dnešní hudobníci sú
        technicky aj kompozične na&nbsp;úplne inej, samozrejme lepšej úrovni ako
        muzikanti na&nbsp;prelome 80. a&nbsp;90. rokov. Je takáto vyspelosť
        počuť aj na&nbsp;komodoristickej hudobnej scéne?
      </blockquote>
      <p>
        Na&nbsp;tuhle otázku je opět specifická odpověď vzhledem ke specifické
        scéně na&nbsp;C64. Řekl bych, že ne&hellip;
      </p>
      <p>
        Commodore 64 trpí jedním problémem, kterým ostatní 8-bitové platformy
        netrpí &ndash; kvalitou zvuku, kterou můžete ovlivnit naprosto
        neskutečným způsobem. Jste schopni z&nbsp;něj dostat zvuk
        od&nbsp;cinkání až po hlas, a&nbsp;pořád je to syntezátorový zvuk. Jste
        schopni získat hluboké filtry a&nbsp;basy, které vám roztrhají
        reprobedny, až po vysoké cvrlikání, u&nbsp;kterého nepoznáte, že to není
        pták. Problémem C64 je proto jeho neomezenost.
      </p>
      <p>
        Mnoho nových hudebníků podlehlo tomu, že se spíše snaží v&nbsp;hudbě
        vytvořit zvuky, které napodobují skutečné nástroje, a&nbsp;trošku
        zapomínají na&nbsp;melodii. To vše proto, aby se pak mohli plácat po
        prsou, že vytvořili dubstep, který nejde rozeznat od&nbsp;komerčního
        dubstepu dělaného na&nbsp;plnohodnotných hudebních sestavách.
      </p>
      <p>
        Skladatelé a&nbsp;hudebníci, kteří zde byli v&nbsp;začátcích, ať už to
        byl David Whittaker, Rob Hubbard, Chris Hülsbeck nebo další desítky
        známých hudebníků z&nbsp;herní či demo tvorby, nebyli ještě tolik
        posedlí zvukem, a&nbsp;proto skládali především melodie. Dodnes si
        člověk zpívá melodie, které mu s&nbsp;úsměvem na&nbsp;rtech utkvěly
        v&nbsp;paměti i&nbsp;po mnoha letech. Člověk si nezpívá dubstep&hellip;
        Myslím to tak, že aktuální hudebníci se nesoustředí ani tak
        na&nbsp;nosnou melodii, jako spíš na&nbsp;vytvoření zvuku, který vás
        ohromí. Neříkám, že je to dobře nebo špatně.
      </p>
      <p>
        Když jsme sedávali na&nbsp;různých akcích s&nbsp;kamarády, kteří
        holdovali třeba Atari (které tyto možnosti samozřejmě nemá), vždy říkali
        jednu věc: &bdquo;U&nbsp;vás ta hudba zní poslední dobou všechna
        stejně.&rdquo; A&nbsp;vlastně měli pravdu, protože je to přesně to, co
        říkám. Člověk se nesoustředil na&nbsp;melodii &ndash; na&nbsp;něco, co
        vám utkví v&nbsp;paměti &ndash; ale na&nbsp;kvalitu zvuku. A&nbsp;to je
        vlastně výhoda i&nbsp;prokletí SIDu jako takového&hellip;
      </p>
      <FigureImage
        src='/res/s01e09/aki.jpg'
        caption='spoločná foto s Aki, ByteFEST 2023'
        figureClass='right-24rem'
        width={900}
        height={750}
        isZoomable
        isCaptionVisible
      >
        <blockquote className='question'>
          Českú hudobníčku <strong>Aki</strong> som tu spomínal už veľakrát.
          Hrali sme si jej skladby, ktoré zložila na&nbsp;Atari aj ZX Spectrum.
          Tentoraz si zahráme jej víťaznú skladbu{' '}
          <strong>&bdquo;LiSUterine Taste&rdquo;</strong> pre Commodore 64,
          ktorou v&nbsp;roku 2018 vyhrala old-school music compo
          na&nbsp;demopárty Revision.
        </blockquote>
        <FigureAudio
          src='/res/s01e09/aki_lisuterine taste.mp3'
          caption='Ella Šenovská alias Aki - LiSUterine Taste (2018)'
          className='!flex w-auto clear-left'
        />
      </FigureImage>
      <Heading id='nova-krv'>Nová krv</Heading>
      <p>
        Ještě se vrátím k&nbsp;těm novým hudebním editorům a&nbsp;novým
        hudebníkům. Zajímavé je, a&nbsp;možná je to tak na&nbsp;všech
        platformách (ale nesleduju to), že zhruba po roce 2000 se objevili úplně
        noví lidé &ndash; a&nbsp;to nejen mezi hudebníky, ale i&nbsp;mezi
        programátory.
      </p>
      <p>
        Mám takovou vlastní teorii, kterou jsem aplikoval i&nbsp;sám
        na&nbsp;sobě. Mnozí z&nbsp;nich byli v&nbsp;mládí aktivní na&nbsp;scéně.
        Poté založili rodiny, měli děti, a&nbsp;to je přirozeně připravilo
        o&nbsp;volný čas. Mezitím jim však děti odrostly, a&nbsp;když se tito
        bývalí &bdquo;sceneři&rdquo; dostali do&nbsp;rozumného věku
        a&nbsp;jejich partnerky pochopily, že je to stále baví, znovu se ke své
        zálibě vrátili.
      </p>
      <p>
        Kromě těchto navrátilců se ale objevili i&nbsp;zcela noví hudebníci.
        Vůbec nechápu, jak se k&nbsp;tomu člověk v&nbsp;pozdějším věku dostane,
        ale pravděpodobně je zaujal některý z&nbsp;moderních editorů
        a&nbsp;prostě začali tvořit. Jsou to lidé, kteří na&nbsp;Commodore nikdy
        nic nedělali &ndash; když se podíváte na&nbsp;jejich historii, zjistíte,
        že jejich první dílo pochází třeba z&nbsp;roku 2018, což je zajímavé!
      </p>
      <p>
        Tito noví autoři většinou používají editory, které vznikaly
        na&nbsp;přelomu tisíciletí a&nbsp;které už uměly pracovat se stereem
        nebo naplno využívaly pokročilé funkce zvukového čipu SID. Jejich hudba
        je díky tomu často moderněji znějící. Nechci tvrdit, že se objevily
        úplně nové žánry, ale spíše jejich tvorba kopíruje současné hudební
        trendy. Skládají tak například techno, dance, dubstep, rave
        a&nbsp;podobné styly, které dříve na&nbsp;Commodore 64 nevznikaly,
        protože v&nbsp;té době jednoduše neexistovaly.
      </p>
      <p>
        Tato hudba je poplatná svému stylu &ndash; často se vytrácí výrazná
        melodie a&nbsp;důraz je kladen na&nbsp;rytmiku a&nbsp;basovou linku,
        která vám má &bdquo;utrhnout&rdquo; reproduktor. Přesto jsou to mnohdy
        velmi povedené skladby, a&nbsp;když taková hudba doprovází nějaké nové
        demo, funguje to naprosto perfektně. Dokonale.
      </p>
      <Heading id='zaver'>Záver</Heading>
      <FigureAudio
        src='/res/s01e09/pch_hard_re_start.mp3'
        caption='Petr Chlud alias PCH - Hard Re-Start (2019)'
        figureClass='right-24rem'
      >
        <blockquote className='question'>
          No a&nbsp;na&nbsp;záver si, Petře, zahráme tvoju skladbu{' '}
          <strong>&bdquo;Hard Re-Start&rdquo;</strong>, ktorou si nasledujúci
          rok po Aki, teda v&nbsp;roku 2019, vyhral old-school music compo
          na&nbsp;Revision pre zmenu ty!
        </blockquote>
      </FigureAudio>
      <blockquote className='question'>
        Petře, veľmi pekne ti ďakujem. Pomohol si mi pripraviť ďalší, ukážkami
        nabitý diel. Maj sa krásne a&nbsp;dúfam, že sa vidíme na&nbsp;jar
        na&nbsp;Foreveri. Tak ahoj!
      </blockquote>
      <p>
        Martine, díky i&nbsp;tobě moc za&nbsp;pozvání do&nbsp;tohoto pořadu
        a&nbsp;doufám, že některé z&nbsp;mých odpovědí vám odpověděly
        na&nbsp;některé z&nbsp;vašich otázek. Mějte se všichni hezky,
        na&nbsp;shledanou!
      </p>
    </EpisodeWrapper>
  );
}
