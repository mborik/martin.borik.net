import * as React from 'react';

import {
  EpisodeLink,
  EpisodeWrapper,
  ExternalLink,
  FigureAudio,
  FigureImage,
  FigureYouTube,
} from '@/components/common';

export default function S01E04() {
  return (
    <EpisodeWrapper episode={4}>
      <h2>História hernej hudby od éry 8-bitových počítačov</h2>
      <FigureImage
        src='/res/s01e04/piezo.jpg'
        caption='piezoelektrický menič v útrobách ZX Spectra'
        mediaSource='gamejournal.it'
        figureClass='right-24rem'
        width={1200}
        height={800}
        isCaptionVisible
        isZoomable
      >
        <p>
          Na počiatku zvuku počítačov bolo <b>PÍP</b>.
        </p>
        <p>
          To &bdquo;píp&rdquo; vytváral piezoelektrický menič, čo je
          elektronická súčiastka, ktorá mení elektrické kmity na mechanické
          a&nbsp;naopak. Využíva sa pri tom piezoelektrický jav, kedy na
          materiáloch zvaných <i>&bdquo;kryštalické dielektriká&rdquo;</i>{' '}
          (v&nbsp;našom prípade je to najčastejšie vínan sodno-draselný), sa
          vytvárajú deformácie prítomnosťou elektrického poľa a&nbsp;práve tieto
          deformácie dokážu vytvoriť <b>akustický tlak</b>.
        </p>
        <p>
          Narozdiel od reproduktorov, piezoelektrický menič, anglicky hovorovo
          označovaný ako <i>&bdquo;buzzer&rdquo;</i> či{' '}
          <i>&bdquo;beeper&rdquo;</i>, pracuje iba s&nbsp;dvomi úrovňami
          napätia, respektíve logickou nulou a&nbsp;jednotkou.
        </p>
      </FigureImage>
      <h3>Hudba na jednom bite</h3>
      <p>
        Rezonanciou rýchlych obdĺžnikových zákmitov, teda striedaním núl
        a&nbsp;jedičiek, sa vytvára zvuk, no a&nbsp;frekvencia týchto zákmitov
        tvorí zdanie tónov či iných zvukov.
      </p>
      <FigureImage
        src='/res/s01e04/zakmity.jpg'
        caption='vysvetlenie princípu tvorby tónov z&nbsp;obdĺžnikových zákmitov'
        width={1325}
        height={625}
      />
      <p>
        Ak sa z&nbsp;tónov mala stať hudba, bolo nutné to naprogramovať. Zvuková
        rutina, ľudovo prezývaná aj <i>&bdquo;hradlo&rdquo;</i> mala za úlohu
        vytvárať zákmity z&nbsp;núl a&nbsp;jednotiek v&nbsp;potrebnej frekvencii
        a&nbsp;tú meniť podľa toho, aké tóny nasledujú. Asi prvá komerčne
        úspešná hra, ktorá beeper využívala nie len na zvuky v&nbsp;hre, ale
        obsahovala už hudbu, bola hra <b>Manic Miner</b>, ktorú naprogramoval
        Matthew Smith v&nbsp;roku 1983. Po spustení to na vás takto
        &bdquo;rozbalí&rdquo; Johann Strauss mladší:
      </p>
      <FigureAudio
        src='/res/s01e04/manic_miner.mp3'
        caption='Matthew Smith - Manic Miner - intro (1983)'
        figureClass='left-20rem'
      >
        <p>
          Matthewova zvuková rutina bola naozaj triviálna a&nbsp;pozorné ucho si
          určite všimlo, že jednotlivé tóny boli rozladené. To z&nbsp;dôvodu
          nepresného časovania inštrukcií počítača, ktoré je v&nbsp;prípade
          takto rýchlych kmitov veľmi dôležité.
        </p>
      </FigureAudio>
      <p>
        V nasledujúcich rokoch však hudobníci, teda vlastne programátori hudieb
        prichádzali so stále pokročilejšími hradlami. Odrazu boli schopní
        vytvoriť iba na rýchlom striedaní jednotiek a&nbsp;núl imerziu viacerých
        tónov naraz, ich utišovanie, alebo dokonca ich moduláciu. Takže iba dva
        roky od Manic Minera bol fenomenálny hudobník <b>Tim Follin</b> schopný
        do hry Vectron naprogramovať hradlo a&nbsp;napísať hudbu, ktorá znela
        takto&hellip;
      </p>
      <FigureYouTube
        youtubeCode='m4sJ6S0SLUs?si=HDNQbZlhDyCA8mG3'
        caption='Tim Follin - Vectron (1985)'
        figureClass='right-24rem'
      >
        <p>
          Ak si hovoríte, že{' '}
          <i>
            &bdquo;ako je možné hento stišovanie tónov na takomto hlúpom
            beepri?&rdquo;
          </i>
          , tak si predstavte, že konštantný tón sa tvorí tým, že membrána je
          polovicu času v&nbsp;logickej jednotke, teda akoby &bdquo;hore&rdquo;
          a&nbsp;druhú polovicu v&nbsp;nule, čiže &bdquo;dolu&rdquo;. Pri
          dodržiavaní danej frekvencie, ale skracovaním jej času v&nbsp;stave
          &bdquo;hore&rdquo; a&nbsp;predlžovaním dier, kedy je membrána
          v&nbsp;logickej nule sa tak začne tvoriť zdanie znižovania hlasitosti.
          To zdanie sa skrátka tvorí tak, že membrána ešte ani nestihne vyskočiť
          hore a&nbsp;my jej už posielame príkaz sa vrátiť.
        </p>
        <p>
          Membrána tak nevytvorí dostatočný akustický tlak a&nbsp;aj preto sa
          vám môže tá ukážka, pri tom množstve zákmitov zdať tichá
          a&nbsp;nevýrazná.
        </p>
      </FigureYouTube>
      <h3>PSG &ndash; Programmable Sound Generators</h3>
      <p>
        Ďalším milníkom v&nbsp;počítačovej hudbe boli{' '}
        <b>programovateľné zvukové generátory</b>, známe pod skratkou PSG. To už
        je o&nbsp;niečo sofistikovanejší spôsob tvorby zvuku, ale predsa sa tomu
        programovaniu nevyhneme. 😊
      </p>
      <FigureImage
        src='/res/s01e04/psg.jpg'
        caption='čipy AY-3-8910, YM2149F, SAA1099, POKEY a SID (6581 a 8580)'
        figureClass='left-32rem'
        width={1006}
        height={625}
        isCaptionVisible
        isZoomable
      >
        <p>
          Ide o&nbsp;zákaznícke obvody, alebo čipy, pripojené priamo na zbernicu
          počítača. Na ovládacích portoch týchto čipov je nutné každú
          päťdesiatinu sekundy nastaviť špecifické hodnoty do ovládacích
          registrov prehrávacou rutinou, čiže opäť &bdquo;hradlom&rdquo;. Každá
          platforma mala nejaký svoj obvod a&nbsp;ten mal svoje špecifiká, ktoré
          hudobník, teda vlastne programátor, musel poznať. Rôzny počet
          súzvučných kanálov, rôzny rozsah tónov a&nbsp;ich číselných hodnôt,
          všakovaké šumové generátory, obálky, či oscilátory.
        </p>
        <p>
          Popis týchto obvodov pritom býval od ich výrobcov veľmi, veľmi
          technický a&nbsp;popisoval iba to, aké hodnoty v&nbsp;daných
          registroch očakáva a&nbsp;akú časť obvodu to ovplyvňuje. To ale
          nehovorilo nič o&nbsp;tom, aký zvuk môžeme očakávať. Trvalo ešte
          niekoľko rokov, kým autori prišli na všetky možnosti ako sa dá tvoriť
          a&nbsp;tvarovať zvuk daného čipu. Vlastne to nikdy neskončilo, lebo
          ako sme si minule hovorili v&nbsp;časti o&nbsp;demoscéne, autori sa až
          dodnes predbiehajú v&nbsp;tom, aké zvuky z&nbsp;týchto čipov vydolujú.
          No a&nbsp;to, čo z&nbsp;nich dokážu vykrútiť dnes, je niečo s&nbsp;čím
          pôvodní výrobcovia týchto zvukových čipov istotne nerátali.
        </p>
      </FigureImage>
      <h4>POKEY</h4>
      <p>
        Každá z&nbsp;troch hlavných 8-bitových platforiem používala špecifický
        čip, čím sa vlastne zadefinoval zvuk každej z&nbsp;nich. Séria
        osembitových Atari používala integrované čipy POKEY, ktoré okrem zvuku
        obsluhovali aj klávesnicu a&nbsp;iné vstupno-výstupné operácie.
        Zaujímavosťou POKEY je, že má obmedzený delič frekvencií, takže si treba
        zvyknúť na jemne rozladené tóny.
      </p>
      <p>
        Tak prosím, <b>Rob Hubbard</b> a jeho skladba Warhawk z roku 1986
        a&nbsp;na porovnanie to, ako POKEY znie, keď sa jeho možností chytí
        súčasná česká hudobníčka <b>Aki</b> v skladbe <b>Rasterizer</b>:
      </p>
      <FigureAudio
        src='/res/s01e04/rob_hubbard_warhawk.mp3'
        caption='Rob Hubbard - Warhawk (1986)'
        figureClass='left-32rem'
        className='lg:mt-2'
      >
        <FigureAudio
          src='/res/s01e04/aki_rasterizer.mp3'
          caption='Aki - Rasterizer (2012)'
          figureClass='right-32rem lg:!-ml-4'
        />
      </FigureAudio>
      <p>
        O&nbsp;POKEY sa dozviete viac v&nbsp;epizóde{' '}
        <EpisodeLink episode={26}>#26: Hudba 8-bitových Atari</EpisodeLink>
        &hellip;
      </p>
      <h4>SID</h4>
      <p>
        Commodore 64 prišiel na trh so zabudovaným &bdquo;
        <b>Sound Interface Device</b>&rdquo;, čiže skrátene SID. Bol to veľmi
        komplexný zvukový čip od pôvodného inžiniera syntezátorov Ensoniq, takže
        s&nbsp;pokročilými oscilátormi a&nbsp;modulátormi. Čip je typovo
        označovaný buď ako 6581 alebo 8580 a&nbsp;oba typy majú v&nbsp;čomsi iný
        charakter zvuku. Dodnes autori označujú svoje muziky týmto typovým
        číslom, na ktorom podľa nich znie ich skladba najlepšie. Z&nbsp;pohľadu
        tvorcu aj poslucháča je to zvukovo najvyspelejší čip 8-bitovej éry, lebo
        ako jediný zo všetkých ostatných znie ako skutočný syntetizér, čiže
        neznie tak plocho a&nbsp;ostro, ako ostatné čipy.
      </p>
      <p>
        Tvorbu hudby na SID a&nbsp;jej špecifiká vám objasní môj hosť
        v&nbsp;epizóde{' '}
        <EpisodeLink episode={109}>
          #9: Hudobná tvorba na Commodore&nbsp;64
        </EpisodeLink>
      </p>
      <p>
        Už v&nbsp;roku 1985 znel Commodore 64 tak, ako žiaden iný počítač tej
        doby. Opäť fenomenálny <b>Rob Hubbard</b> a&nbsp;jeho soundtrack ku hre{' '}
        Commando &ndash; versus to, čo dokážu z&nbsp;tohto čipu vyčarovať dnešní
        tvorcovia:
      </p>
      <FigureAudio
        src='/res/s01e04/rob_hubbard_commando.mp3'
        caption='Rob Hubbard - Commando (1985)'
        figureClass='left-32rem'
        className='lg:mt-2'
      >
        <FigureAudio
          src='/res/s01e04/stinsen_lethargic.mp3'
          caption='Stinsen - Lethargic (2014)'
          figureClass='right-32rem lg:!-ml-4'
        />
      </FigureAudio>
      <h4>AY-3-8912</h4>
      <p>
        ZX&nbsp;Spectrum 128 zas v&nbsp;roku 1986 vyšlo s&nbsp;integrovaným
        čipom AY-3-8912 od spoločnosti General Instrument, opäť asi kvôli cene,
        lebo už v&nbsp;tom čase mal tento staručký čip náhradu v&nbsp;podobe
        Yamahy YM2149F, ktorú, ak si pamätáte predsa malo osadené Atari ST už
        rok predtým. Každopádne, neštudované ucho nepozná rozdiel vo zvuku medzi
        &bdquo;AYpsilonkou&ldquo; a&nbsp;&bdquo;YMkom&ldquo;. Tieto čipy mali
        asi naväčšie zastúpenie a&nbsp;objavili sa na množstve platforiem. Okrem
        ZX&nbsp;Spectra a&nbsp;Atari&nbsp;ST sa s&nbsp;ním tak môžete stretnúť
        v&nbsp;sérií počítačov Amstrad&nbsp;CPC, japonských počítačoch série
        MSX, Sharp&nbsp;X1, Fujitsu Micro-7, či západných Oric-1 alebo TRS-80,
        ale aj v&nbsp;herných konzolách Intellivision či Vectrex.
      </p>
      <p>
        Jeho zvuk je špecificky ostrý a&nbsp;hutný, daný obdĺžnikovým priebehom
        a&nbsp;širokou škálou frekvencií tónového aj šumového generátora. Do
        hĺbky sa mu venujem v&nbsp;epizóde{' '}
        <EpisodeLink episode={107}>
          #7: Ako trackery nakopli ZX Spectrum
        </EpisodeLink>
        .
      </p>
      <p>
        V&nbsp;roku 1986 sa s týmto čipom hudobníci ešte iba zoznamovali, takže
        napríklad hudba, ktorou <b>Ben Daglish</b> ozvučil hru Avenger neznela
        nijak výnimočne. Naproti tomu &ndash; to, čo je dnes z&nbsp;tohto čipu
        schopná dostať česká hudobníčka <b>Aki</b> a&nbsp;vyhrávať tým súťaže na
        celosvetových demopárties, tak to je skutočne neuveriteľné:
      </p>
      <FigureAudio
        src='/res/s01e04/ben_daglish_avenger.mp3'
        caption='Ben Daglish - Avenger (1986)'
        figureClass='left-32rem'
        className='lg:mt-2'
      >
        <FigureAudio
          src='/res/s01e04/aki_eighty_four.mp3'
          caption='Aki - Eighty Four (2024)'
          figureClass='right-32rem lg:!-ml-4'
        />
      </FigureAudio>
      <FigureYouTube
        youtubeCode='CagAHk9lGIo?si=HkwyzK01MZ4gRtRo'
        caption='!Cube - Threshold (víťazná skladba z demoparty Silly Venture 2019)'
        figureClass='right-32rem'
        isCaptionVisible
      >
        <p>
          Ešte si tu dovolím jednu ukážku jeho zvuku, teda presnejšie čipu{' '}
          <b>Yamaha YM2149</b> a&nbsp;to, ako znie v&nbsp;Atari ST, čo je, ako
          vieme nabúšený 16-bit, ktorý tomuto čipu svojou rýchlosťou umožňuje
          ten zvuk posunúť ešte ďalej a&nbsp;rôzne modulovať. Ataristi to volajú{' '}
          <i>&bdquo;buzzer&rdquo;</i>, a&nbsp;často sa tomu ľudovo hovorí
          SID-Sound, pretože to dosť pripomína plný zvuk Commodoráckeho SIDu.
        </p>
        <p>
          Zároveň môžete vidieť, ako vyzerá &bdquo;hudobný tracker&rdquo;
          &ndash; softvér v&nbsp;ktorom sa takáto hudba vytvára, respektíve
          programuje (a&nbsp;to doslova). 😉
        </p>
      </FigureYouTube>
      <blockquote>
        Mimochodom: Aby sa z&nbsp;8-bitového Atari, Commodore&nbsp;64
        a&nbsp;ZX&nbsp;Spectrum 128 dostal ešte zaujímavejší a&nbsp;plnší zvuk,
        ich zvukové čipy sa zvyknú zdvojovať. Stereo POKEY, Stereo SID (resp.
        SIDFX) a&nbsp;TurboSound na ZX&nbsp;Spectre sú dnes už bežnými
        rozšíreniami.
      </blockquote>
      <h4>TI SN76489</h4>
      <FigureAudio
        src='/res/s01e04/tobikomi_stellar_core.mp3'
        caption='Tobikomi - Stellar Core (2022)'
        figureClass='left-20rem'
      >
        <p>
          Bol tu ešte jeden zvukovo príbuzný čip:{' '}
          <b>Texas Instruments SN76489</b>, ktorý mal rovnaký počet kanálov
          a&nbsp;podobné vlastnosti ako AY-3-8910, ale žiaľ aj rôzne obmedzenia.
        </p>
        <p>
          Texas Instruments ho vyvinuli hlavne pre svoj počítač TI-99/4A, ale
          používala ho tiež Sega vo svojich konzolách, objavil sa aj
          v&nbsp;britských školských počítačoch BBC&nbsp;Micro
          a&nbsp;BBC&nbsp;Master, amerických počítačoch Coleco&nbsp;Adam
          a&nbsp;ColecoVision, a&nbsp;napríklad aj v&nbsp;japonských
          Sharp&nbsp;MZ-800, alebo Sord&nbsp;M5.
        </p>
      </FigureAudio>
      <h4>Philips SAA1099</h4>
      <p>
        V druhej polovici 80. rokov sa ešte objavil čip SAA1099 od spoločnosti
        Philips. Ten, okrem toho, že ho používali Creative Labs vo svojích
        prvých Sound Blasteroch sa objavil aj v&nbsp;8-bitovom počítači Sam
        Coupé. To bol taký nabúšený osembit, ktorý mal úžasne revolučné
        vlastnosti, ale skrátka: prišiel neskoro a&nbsp;neuspel
        v&nbsp;konkurencii 16-bitov. Sam Coupé si zasúži väčší priestor
        a&nbsp;venujem sa mu v&nbsp;epizóde{' '}
        <EpisodeLink episode={123}>#23: Nasledovníci ZX Spectra</EpisodeLink>.
      </p>
      <p>
        Ale vráťme sa k&nbsp;SAA 1099: Má o&nbsp;niečo mäkší zvuk ako AY-3-8910
        a&nbsp;dvojnásobný počet kanálov, navyše z&nbsp;možnosťou
        &bdquo;spriahnuť&rdquo; oscilátory dvoch kanálov a&nbsp;modulovať ich
        navzájom, čo výsledný zvuk ešte viac obohacuje a&nbsp;približuje ku
        zvuku SIDu.
      </p>
      <p>
        Tento čip ale píše svoju novodobú históriu aj dnes, pretože sme ho
        začiatkom 10-tych rokov s&nbsp;bratom Romanom vybrali ako zvukový čip,
        ktorý bude používať Československý mikropočítač PMD 85, ktorý pôvodne
        toto šťastie &ndash; teda mať zvukový čip &ndash; nikdy nemal. Roman
        preto navrhol &bdquo;Music Interface&rdquo;, v&nbsp;skratke{' '}
        <ExternalLink href='https://pmd85.borik.net/wiki/MIF_85'>
          MIF 85
        </ExternalLink>
        , v&nbsp;ktorom sa využíva práve SAA1099, možno aj práve pre jeho istú
        výnimočnosť medzi platformami.
      </p>
      <p>
        Philips SAA1099 dokáže zaujať aj na súčasnej demoscéne, pretože sa mi
        minulý rok na celosvetovej Revision Party podarilo umiestniť
        v&nbsp;prvej päťke v&nbsp;súťaži kategórie oldschool muziky so svojou
        skladbou Macro pre SAA 1099.
      </p>
      <FigureAudio
        src='/res/s01e04/ziutek_lizard.mp3'
        caption='Ziutek - Lizard (Sam Coupé, polovica 90. rokov)'
        figureClass='left-32rem'
        className='lg:mt-2'
      >
        <FigureAudio
          src='/res/s01e04/mborik_macro.mp3'
          caption='Martin Bórik - Macro (PMD 85, 2023)'
          figureClass='right-32rem lg:!-ml-4'
        />
      </FigureAudio>
      <h3>Záver</h3>
      <p>
        Tak ste to počuli! Mojim cieľom bolo vám predstaviť to, ako zneli,
        a&nbsp;ako znejú &bdquo;osembity&rdquo;. Do dnešnej doby tieto malé
        zvukové zázraky pútajú pozornosť a&nbsp;sú tu stále desiatky aktívnych
        hudobníkov, ktorí sa venujú tvorbe. Ak si to chcete skúsiť aj vy, nie je
        nič jednoduchšie. Každá platforma má svoju PC alebo Mac aplikáciu,
        v&nbsp;ktorej môžete ihneď začať tvoriť na ten-ktorý zvukový čip
        a&nbsp;pomôžu vám určite aj tutorialy na YouTube.
      </p>
      <ul>
        <li>
          Hudbu na jednom bite ovládnete v programe{' '}
          <ExternalLink href='https://shiru.untergrund.net/software.shtml'>
            1Tracker
          </ExternalLink>{' '}
          alebo{' '}
          <ExternalLink href='https://freestuff.grok.co.uk/beepola/'>
            Beepola
          </ExternalLink>
        </li>
        <li>
          Pre POKEY je tu{' '}
          <ExternalLink href='https://github.com/VinsCool/RASTER-Music-Tracker'>
            Raster Music Tracker
          </ExternalLink>
        </li>
        <li>
          SID môžete ovládnuť v&nbsp;programe{' '}
          <ExternalLink href='https://sourceforge.net/projects/goattracker2/'>
            GoatTracker&nbsp;2
          </ExternalLink>
        </li>
        <li>
          Pre AY-3-8910 je k&nbsp;dispozícii{' '}
          <ExternalLink href='https://volutar.myds.me/vortextracker/'>
            Vortex&nbsp;Tracker&nbsp;II
          </ExternalLink>{' '}
          (ktorý vzišiel z{' '}
          <ExternalLink href='https://ay.strangled.net/vortex_e.htm'>
            projektu Vortex
          </ExternalLink>{' '}
          Sergeja Bulbu)
        </li>
        <li>
          Je tu tiež nová &ndash; tretia verzia programu{' '}
          <ExternalLink href='https://www.julien-nevo.com/arkostracker/'>
            Arkos&nbsp;Tracker
          </ExternalLink>
          .
        </li>
        <li>
          Pre SAA1099 existuje webovo-orientovaný{' '}
          <ExternalLink href='https://saa1099tracker.borik.net/'>
            SAA1099Tracker
          </ExternalLink>{' '}
          z mojej dielne
        </li>
      </ul>
      <p className='-mt-4'>Stačí iba začať. 😉</p>
    </EpisodeWrapper>
  );
}
