import * as React from 'react';

import {
  EpisodeWrapper,
  ExternalLink,
  FigureImage,
  Heading,
} from '@/components/common';

export default function S01E08() {
  return (
    <EpisodeWrapper episode={8}>
      <p>
        Dnešná epizóda je opäť špeciálna, lebo v&nbsp;nej nebudem sám, ale mám
        tu cteného hosťa, ktorý prijal pozvanie do podcastu a&nbsp;pomôže mi
        s&nbsp;dnešnou témou, ktorá je:
      </p>
      <h2 className='-mt-4'>
        Commodore 64
        <br />
        <small>História najpredávanejšieho počítača všetkých čias</small>
      </h2>
      <p>
        V 6. epizóde sme sa venovali ZX-Spectru a&nbsp;jeho vzniku, takže dnes
        by som sa rád venoval pre zmenu počítaču, ktorý má záznam
        v&nbsp;Guinessovej knihe rekodorov o&nbsp;najvyššom počte predaných
        kusov na svete.
      </p>
      <p>
        Aj práve preto som veľmi rád, že moje pozvanie prijal{' '}
        <b>Tomáš Svoboda</b> alias <b>&bdquo;Sillicon&rdquo;</b>. Je známou
        postavou Československej Commodoristickej scény, redaktor portálu{' '}
        <ExternalLink href='https://c64.cz/'>C64.cz</ExternalLink>{' '}
        a&nbsp;spolu-organizátor skvelej akcie{' '}
        <ExternalLink href='https://www.bytefest.cz/'>ByteFest</ExternalLink>.
        S&nbsp;Tomášom sa, rovnako ako so všetkými mojimi hosťami, stretávame aj
        niekoľkokrát do roka na akciách venovaných starým počítačom. Túto časť
        sme chceli nahrávať už na ByteFest 2024, ale kým Sillicona zamestnávala
        organizácia akcie, ja som sa pripravoval na prednášku, takže sme to
        napokon nahrali na diaľku, ale myslím, že podstatná je informačná
        kvalita.
      </p>
      <blockquote className='question'>
        Vitaj Tome, ako sa máš a&nbsp;ako si si užil ByteFest?
      </blockquote>
      <p>
        Ahoj Martine. Mám se v&nbsp;rámci možností, ale jakožto jeden ze tří
        organizátorů ByteFestu, tak je cítit hlavně únava. Ale myslím si, že
        letošní ByteFest se povedl.
      </p>
      <blockquote className='question'>
        To rozhodne! Odkedy s&nbsp;Ferym zastrešujete organizáciu tak je to
        parádne pohodová a&nbsp;kvalitnými prednáškami nabitá akcia. Díky za ňu!
      </blockquote>
      <Heading as='h3' id='uvod'>
        Jack Tramiel a jeho začiatky
      </Heading>
      <blockquote className='question'>
        Poďme ale k&nbsp;histórii spoločnosti Commodore, ktorá sa spája
        s&nbsp;menom <strong>Jack Tramiel</strong>. Aká bola jeho cesta
        k&nbsp;prvému počítaču a&nbsp;aký mal úspech?
      </blockquote>
      <FigureImage
        src='/res/s01e08/tramiel_kapp.jpg'
        caption='Jack Tramiel a Manfred Kapp (neskôr v roku 1965)'
        figureClass='right-24rem'
        width={650}
        height={580}
        isCaptionVisible
        isZoomable
      >
        <p>
          Vzal bych to asi postupně od Jacka Tramiela, který přišel do Ameriky
          těsně po válce a&nbsp;hned vstoupil do armády, aby se naučil jazyk
          a&nbsp;poznal zdejší kulturu. Po odchodu z&nbsp;armády pracoval
          v&nbsp;New Yorku v&nbsp;opravně psacích strojů, kde se potkal
          s&nbsp;Manfredem Kappem, s&nbsp;kterým opravovali a&nbsp;prodávali
          repasované psací stroje. V&nbsp;roce 1952 společně koupili firmu
          Singer Typewriter Company. Jeden z&nbsp;produktů, co firma Singer
          prodávala, byl italský mechanický sčítací stroj Everest.
        </p>
        <p>
          Když Tramiel jel v&nbsp;roce 1955 navštívit příbuzné v&nbsp;Torontu,
          tak navštívil lokální prodejny s&nbsp;kancelářským vybavením. Chtěl
          zjistit, jestli by měli zájem o&nbsp;sčítací stroje Everest, co
          prodávali. Zájem byl velký, tak si s&nbsp;výrobcem Everest vyjednal
          exkluzivní distribuční práva pro celou Kanadu a&nbsp;poté
          v&nbsp;Torontu založil <b>Everest Office Machine Company</b>
          .<br />
          Tam se také nakonec s&nbsp;rodinou přestěhoval.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e08/commodore_logo.jpg'
        caption='dizajnér Chris Yaneff: Návrh loga Commodore (1965)'
        figureClass='left-15rem'
        width={660}
        height={660}
        isZoomable
      >
        <p>
          V roce 1958 přestával být o&nbsp;mechanické sčítací stroje zájem
          a&nbsp;když Tramiel oslovil agenta firmy Everest v&nbsp;Anglii, tak
          ten mu poradil, aby začal dovážet levné přenosné psací stroje
          z&nbsp;Československa, tedy Consul Brno. Tramiel s&nbsp;Kappem
          zakládají v&nbsp;Kanadě Commodore Portable Typewriter Company. Až po
          čtyřech letech &ndash; v&nbsp;roce 1962 &ndash; vstoupily na burzu
          a&nbsp;zároveň si změnili název společnosti na{' '}
          <b>Commodore Business Machines</b>. Logo Commodore &ndash; takové to
          známé, modro-červené &ndash; vzniklo v&nbsp;roce 1965.
        </p>
        <FigureImage
          src='/res/s01e08/commodore_202.jpg'
          caption='sčítací stroj Commodore Model 202 (1966)'
          mediaSource='Sven Petersen, CC BY-SA 4.0'
          figureClass='right-24rem'
          width={1200}
          height={800}
          isCaptionVisible
          isZoomable
        >
          <p>
            V&nbsp;roce 1966 uvedli na trh sčítací stroj{' '}
            <b>Commodore Model 202</b>, který byl výrazně jednodušší než
            konkurenční Ricoh, které taky Commodore prodával.
          </p>
          <Heading as='h3' id='kalkulacky'>
            Kalkulačky
          </Heading>
          <p>
            V roce 1968 začaly prodávat elektronické kalkulačky s&nbsp;Digitrony
            (plynom plnené výbojky na zobrazovanie číslic, pozn. editora). Ty
            pro ně dělala (jako OEM) firma Casio. V&nbsp;70. letech se Tramiel
            s&nbsp;rodinou přestěhoval do Kalifornie, což už bylo mnohem
            příznivější pro Jackovy obchody a&nbsp;pro firmu. Firma se tedy
            v&nbsp;70. letech zaměřila primárně na kalkulačky, aby pokryly celý
            trh od stolních přes kapesní kalkulačky a&nbsp;vlastně utlumily
            svoje ostatní odvětví výroby, jako byly mechanické sčítací stroje,
            kancelářský nábytek a&nbsp;částečně i&nbsp;psací stroje.
          </p>
        </FigureImage>
      </FigureImage>
      <FigureImage
        src='/res/s01e08/calculators.jpg'
        caption={`10 rokov vývoja vo firme Commodore: Prvá, obrovská elektronická
          kalkulačka '500E' (1967) a jedna z posledných kalkulačiek 'PR-100' (1977/8)`}
        mediaSource='twitter @boo_aboutme | D. Meyer, CC BY-SA 3.0'
        figureClass='opaque-ms'
        className='dark'
        width={1666}
        height={600}
        isCaptionVisible
        isZoomable
      />
      <p>
        Tím se dostáváme k&nbsp;<b>Texas Instruments</b>. Ty Commodoru dodávaly
        čipy, ale už v&nbsp;takovém objemu, že si řekli, že z&nbsp;toho taky
        chtějí něco vytřískat, tak si začaly dělat kalkulačky vlastní &ndash;
        a&nbsp;tím Commodoru začali konkurovat.
      </p>
      <FigureImage
        src='/res/s01e08/irving_gould.jpg'
        caption='Irving Gould'
        figureClass='left-15rem'
        width={400}
        height={640}
        isCaptionVisible
      >
        <p>
          Commodore kvůli tomu vykázal ztrátu 50 milionů dolarů a&nbsp;musel ho
          zachránit finančník <b>Irving Gould</b>, úvěrem na 3 miliony dolarů.
          Commodore si potom nechal u&nbsp;firmy Nitron Cupertino vyrábět čipy
          podle vlastního návrhu. Díky tomu zjednodušili kalkulačku a&nbsp;mohli
          vynechat jeden čip, který řídil ledkový displej. Ten čip byl označen
          jako &bdquo;RBP &ndash; Rock Bottom Price&rdquo;. Další jejich vlastní
          čip byl v&nbsp;podstatě platforma pro kalkulačky. Byl to čip, jenž měl
          uvnitř vlastně procesor a&nbsp;bylo ho možná naprogramovat podle toho,
          jaké funkce měla kalkulačka umět. Když chlapík, co ten čip navrhoval,
          ho představoval Tramielovi, tak ten, nemaje vzdělání tomu nerozuměl,
          tak mu jen řekl:{' '}
          <i>
            &bdquo;Máš na to tolik-a-tolik času a&nbsp;Bůh ti pomáhej, jestli to
            nebude fungovat!&rdquo;
          </i>
          . Ten čip se proto jmenuje &bdquo;GHU &ndash; God, Help Us&rdquo;!
        </p>
        <p>
          V roce 1976 byla společnost Commodore kompletně restrukturalizovaná.
          Byla rozpuštěná společnost CBM Canada a&nbsp;Commodore International
          Business Machine se stala mateřskou společností. Pod ní byla Commodore
          Electronics a&nbsp;další dceřiné, prodejní a&nbsp;výrobní společnosti.
        </p>
      </FigureImage>
      <Heading as='h3' id='od-kalkulaciek-k-pocitacom'>
        Od kalkulačiek k počítačom
      </Heading>
      <FigureImage
        src='/res/s01e08/chuck_peddle.jpg'
        caption='Chuck Peddle'
        figureClass='right-15rem'
        width={450}
        height={500}
        isCaptionVisible
      >
        <p>
          Protože firma Texas Instruments už jim nedodávala čipy do kalkulaček,
          tak hledali další výrobce a&nbsp;tady přichází na řadu firma{' '}
          <b>MOS Technology</b>. Od nich brali čipy do kalkulaček, ale Tramiel
          pozdě platil faktury a&nbsp;díky tomu se MOS Technology dostalo do
          problémů. Protože si Tramiel chtěl snižováním nákladů všechno vyrábět
          sám, tak použil peníze od Irvinga Goulda a&nbsp;relativně levně
          koupili společnost MOS Technology &ndash; včetně návrháře
          a&nbsp;autora procesoru 6502, co nebyl nik jiný, než{' '}
          <b>Chuck Peddle</b>.
        </p>
        <FigureImage
          src='/res/s01e08/kim1.jpg'
          caption='MOS Keyboard Input Monitor - KIM-1 (1976)'
          mediaSource='oldcomputers.net'
          figureClass='left-20rem opaque-ms'
          width={550}
          height={313}
          isCaptionVisible
          isZoomable
        >
          <p>
            V té době už firma MOS měla vyrobený první jednodeskový počítač na
            světě &ndash; <b>KIM-1</b> &ndash; a&nbsp;tím se vlastně firma
            Commodore dostala k&nbsp;výrobě počítačů. Syn Jacka Tramiela,{' '}
            <b>Leonard Tramiel</b>, snil o&nbsp;počítačích a&nbsp;když se sešel
            s&nbsp;Chuckem Peddlem, vymysleli spolu, že by vytvořili z&nbsp;KIMa
            vlastně komplexní počítač. Řekli to spolu Jackovi a&nbsp;ten se
            Leonarda zeptal, jestli je to dobrý nápad. Ten mu samozřejmě přikývl
            a&nbsp;tak po jejich rozhovoru řekl Chucku Peddlovi:{' '}
            <i>&bdquo;OK, udělej to, ale máš na to půl roku!&rdquo;</i>. Tak
            vlastně vznikl první počítač PET&hellip;
          </p>
        </FigureImage>
      </FigureImage>
      <Heading as='h3' id='pet'>
        Commodore PET
      </Heading>
      <FigureImage
        src='/res/s01e08/pet.jpg'
        caption='Commodore PET, model 2001-8-BS (1977)'
        mediaSource='Science Museum Group, CC BY-NC-SA 4.0'
        figureClass='right-24rem'
        width={1080}
        height={900}
        isCaptionVisible
        isZoomable
      >
        <p>
          Počítač PET byl představen v&nbsp;lednu roku 1977 na výstavě CES, což
          byla výstava spotřební elektroniky a&nbsp;tím se Commodore dostává na
          trh spotřební elektroniky s&nbsp;osobními počítači. Úspěch počítače
          PET byl tak říkajíc střední, když se počítače dostali do škol
          v&nbsp;USA i&nbsp;Kanadě a&nbsp;v&nbsp;Evropě i&nbsp;na obchodní trh
          (kde byly pod názvem CBM, protože ochrannou známku na název PET
          v&nbsp;Evropě vlastnila firma Philips).
        </p>
        <p>
          Kritizována byla hlavně klávesnice, protože nebyla úplně ergonomická
          a&nbsp;jako u&nbsp;ostatních prvních počítačů byla horší spolehlivost.
          PET měl oproti konkurenci výhody jako provedení all-in-one včetně
          monitoru, celoobrazovkový editor, malá i&nbsp;velká písmena, grafické
          znaky (takzvané PETSCII) a&nbsp;hlavně BASIC s&nbsp;plovoucí
          desetinnou čárkou, kdežto ostatní konkurenční výrobci měli pouze
          celočíselný BASIC (ještě několik měsíců poté).
        </p>
      </FigureImage>
      <p>
        Časopis BYTE tehdy označoval počítače Commodore&nbsp;PET, Apple&nbsp;II
        a&nbsp;Tandy TRS-80 společně jako &bdquo;Trinity 1977&rdquo; &ndash;
        tedy trojici z&nbsp;roku 1977.
      </p>
      <FigureImage
        src='/res/s01e08/trinity1977.jpg'
        caption={`"Trinity 1977": Commodore PET 2001, Apple II a Tandy TRS-80 Model I`}
        className='dark'
        width={1100}
        height={360}
        isCaptionVisible
      />
      <FigureImage
        src='/res/s01e08/microsoft_basic.jpg'
        caption='Paul Allen a Bill Gates (1977)'
        mediaSource='facebook profil "Bill Gates", kolorizované'
        figureClass='left-15rem'
        width={900}
        height={760}
        isCaptionVisible
        isZoomable
      >
        <p>
          PET měl BASIC a&nbsp;byl tedy licencován od Microsoftu. Jenomže
          Commodore si dal podmínku, že za licence zaplatí, až když se počítače
          PET prodají. A&nbsp;protože se reálně dostal na trh až skoro po roce,
          přivedl tím Microsoft málem do konkursu, kdy se taky soudili
          s&nbsp;firmou Altair kvůli BASICu.
        </p>
        <p>
          Zachránilo je pouze to, že se tehdy v Apple Computer, Inc. rozhodli
          taky pro licencování Microsoft BASICu pro svůj počítač Apple II.
        </p>
      </FigureImage>
      <Heading as='h3' id='vic-20'>
        VIC-20
      </Heading>
      <blockquote className='question'>
        Po sérií počítačov PET prichádzajú na trh s&nbsp;niečim úplne novým.
        <br />
        Čo revolučné priniesol kompaktný model <strong>VIC-20</strong>, ktorý už
        bol vo veľkosti klávesnice?
      </blockquote>
      <FigureImage
        src='/res/s01e08/vic_20.jpg'
        caption='Commodore VIC-20 (1981)'
        mediaSource='Evan Amos, public domain'
        figureClass='right-24rem opaque-ms'
        width={1075}
        height={575}
        isCaptionVisible
        isZoomable
      >
        <p>
          V roce 1980 byl představen v&nbsp;Japonsku jakožto počítač{' '}
          <b>VIC-1001</b> a&nbsp;o&nbsp;rok později jako VIC-20, respektive
          v&nbsp;Evropě jako VC-20, protože &bdquo;V&rdquo; se v&nbsp;Němčině
          čte jako &bdquo;F&rdquo; a&nbsp;německé slovo &lsquo;fick&rsquo; není
          zrovna slušné. 🙂
        </p>
        <p>
          Revoluční byla hlavně cena, která byla tehdy $299.90, což
          v&nbsp;konkurenci, kdy osobní počítače stály přes 800 i&nbsp;více
          dolarů, bylo vlastně revoluční. Byl to první počítač, kterého se
          prodalo přes milion kusů, konkrétně více než 2,5 milionů. Abychom si
          počítač VIC-20 představili, tak byl to už barevný počítač s&nbsp;16
          různými barvami. V&nbsp;textovém módu měl 22 řádků a&nbsp;23 sloupců
          v&nbsp;matici 8x8 bodů, což bylo teda oproti PETu zhoršení. Grafika
          s&nbsp;rozlišením 176x184 bodů v&nbsp;Hi-Res módu, nebo
          v&nbsp;Multi-Color módu, když jsou vždy dva sousední body spojeny
          a&nbsp;tedy horizontální rozlišení se sníží na 88 bodů, ale je možné
          použít čtyři barvy &ndash; vlastně tři plus barva pozadí v&nbsp;tom
          rastru 8x8.
        </p>
      </FigureImage>
      <p>
        Procesor byl opět 6502 na 1 MHz, paměť ROM byla 20 KiB, z&nbsp;toho
        operační systém KERNAL 8 KiB, znaková sada 4 KiB, což bylo teda 256
        znaků (malá a&nbsp;velká písmena, včetně grafiky, tzv. PETSCII znaky)
        a&nbsp;BASIC v2.0 8 KiB.
      </p>
      <p>
        Paměť RAM byla pouhých 5 KiB, kdy pro BASIC, tedy pro uživatele zbylo
        jen 3,5 KiB. Zvuk měl 4 kanály, 3 z&nbsp;toho měli obdélníkový průběh
        v&nbsp;rozsahu 10-ti oktav a&nbsp;jeden šumový generátor. Klávesnice už
        byla plná QWERTY, 66 kláves, která byla velmi kvalitní, dalo by se říct,
        že i&nbsp;profesionální, s&nbsp;natištěnými PETSCII znaky.
      </p>
      <FigureImage
        src='/res/s01e08/paddles.jpg'
        caption='ovládače "paddles"'
        mediaSource='breadbox64.com'
        figureClass='left-15rem'
        width={1024}
        height={768}
        isCaptionVisible
        isZoomable
      >
        <p>
          Bylo možné připojit mnoho periferii, jako byl kazeťák, na sériové
          sběrnici (označené jako IEEE-488) bylo možné řetězit několik
          disketových jednotek, tiskárnu, plotr, dále pak měl rozšiřující slot
          se systémovou sběrnicí a&nbsp;user-port, což byl paralelní port. Také
          měl game-port, kam šlo připojit joystick, myš nebo světelné pero,
          případně dvojice potenciometrů &bdquo;paddles&rdquo;.
        </p>
        <p>
          Po zapnutí byl hned k&nbsp;dispozici BASIC verze 2.0, ale pouhých 3,5
          KiB paměti bylo málo, proto se vlastně velmi rozšířili rozšiřující
          kartridže, jak s&nbsp;pamětí ROM, tak i&nbsp;s&nbsp;RAM, která byla
          potřeba. Revoluční byla asi hlavně ta dostupnost, kdy Tramiel razil
          heslo: <i>&bdquo;Computers for masses, not for classes&rdquo;</i>{' '}
          (tedy počítače pro masy a&nbsp;ne jen pro vyvolené).
        </p>
      </FigureImage>
      <Heading as='h3' id='neuspechy'>
        Neúspechy
      </Heading>
      <FigureImage
        src='/res/s01e08/cbm_ii.jpg'
        caption='jedna z verzií CBM-II (1983)'
        mediaSource='časopis Practical Computing, jún 1983'
        figureClass='right-20rem'
        width={950}
        height={1080}
        isCaptionVisible
        isZoomable
      >
        <blockquote className='question'>
          Jasné, ale spomeňme aj prepadáky&hellip; myslím tým neúspěšné modely
          CBM&#8209;II a&nbsp;MAX (respektíve MAX Machine). Napriek ich
          evolučným vylepšeniam na trhu vydržali iba zopár mesiacov a&nbsp;boli
          stiahnuté. Čo boli ich hlavné slabiny?
        </blockquote>
        <p>
          <b>CBM-II</b> přišel pozdě a&nbsp;ve snaze vyždímat obchodní segment
          trhu v&nbsp;Evropě. I&nbsp;když měl poměrně hodně paměti (128 nebo 256
          KiB), používal 5.25&quot; diskety, které byly integrovaný v&nbsp;těle
          počítače, byl stále v&nbsp;tom tvaru jako předchozí PETy, ale měl už
          oddělitelnou klávesnici &ndash; ale prostě přišel poměrně pozdě.
        </p>
        <FigureImage
          src='/res/s01e08/max_machine.jpg'
          caption='Commodore MAX Machine (1982)'
          mediaSource='Thomas Conté, CC BY-SA 2.0'
          figureClass='left-20rem'
          width={1100}
          height={572}
          isCaptionVisible
          isZoomable
        >
          <p>
            <b>Commodore MAX Machine</b> byl údajně pokus o&nbsp;levnou
            videoherní konzoli. Měl pouze 2 kilobajty RAM, což je
            v&nbsp;podstatě jenom videoramka, takže ostatní RAM i&nbsp;ROM
            museli být na kartridžích. Neměl ani programovací jazyk
            a&nbsp;vnitřní ROM obsahovala jen systém KERNAL &ndash; tedy
            základní rutiny. Měl membránovou klávesnici, ale už měl videočip
            VIC-II a&nbsp;zvukový čip SID. Je to vlastně přímý předchůdce
            Commodore&nbsp;64, který z&nbsp;něho vychází.
          </p>
        </FigureImage>
      </FigureImage>
      <blockquote className='question'>
        Tak a&nbsp;dostávame sa k&nbsp;hlavnej hviezde večera&hellip;?
      </blockquote>
      <p>
        Nevím, jestli to není nošení dříví do lesa, protože C64 zná přece
        každý&hellip; 😉
      </p>
      <Heading as='h3' id='c64'>
        Commodore 64
      </Heading>
      <p>
        &hellip; ale nejdřív teda pár nudných detailů: Procesor MOS 6510 na 1
        MHz, což je jádro 6502, s&nbsp;integrovaným 8-bitovým portem, který
        ovládal paměť. Paměť RAM plných 64 KiB, ROMka, stejně jako
        u&nbsp;VIC-20, byla také 20 KiB, stejně rozdělená na KERNAL 8 KiB,
        znaková sada 4 KiB, BASIC v2.0 8 KiB &ndash; pro BASIC bylo dostupných
        38,9 KiB RAM.
      </p>
      <FigureImage
        src='/res/s01e08/vic2.jpg'
        caption='grafický čip VIC-II (MOS Technology 6569)'
        mediaSource='Christian Taube, CC BY-SA 2.5'
        figureClass='right-20rem'
        className='dark'
        width={960}
        height={400}
        isCaptionVisible
        isZoomable
      >
        <p>
          Dále pak <b>grafický čip VIC-II</b> &ndash; má textový mod 40 sloupců,
          25 řádků, rozlišení 320x200 bodů v&nbsp;16 různých barvách. Má možnost
          Multi-Color módu, což jsou 4 barvy (respektive 3 barvy plus pozadí)
          v&nbsp;rastru 8x8 modů, ale pak je rozlišení jen 160x200 pixelů. Osm
          nezávislých spritů o&nbsp;velikosti 24x21 bodů, které je také možné
          přepínat do Multi-Color módu, nebo můžou mít dvojnásobnou šířku, výšku
          nebo obojí. Grafický čip má taky detekci kolize spritů mezi sebou,
          nebo sprite vs. grafika, sprite vs. text a&nbsp;sprity můžou být pod
          grafikou, nebo nad grafikou. A&nbsp;jinak ten čip VIC-II běží na 17
          MHz a&nbsp;generuje signály pro refresh dynamických RAMek.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e08/sid.jpg'
        caption='zvukový čip SID (MOS Technology 6581)'
        mediaSource='Christian Taube, CC BY-SA 2.5'
        figureClass='right-20rem'
        className='dark'
        width={1032}
        height={430}
        isCaptionVisible
        isZoomable
      >
        <p>
          Zvuk má na starosti <b>SID &ndash; Sound Interface Device</b>, který
          má tři nezávislé hlasové generátory. Každý hlas může mít jeden ze čtyř
          typů vlny: pila, trojúhelník, obdélník (tedy PWM) a&nbsp;šum. Každý
          hlas má nastavitelnou ADSR obálku, programovatelné filtry, low pass,
          band pass, high pass, synchronizace hlasů, kruhovou modulaci, kdy se
          jedním hlasem moduluje druhý. Pak ještě čip obsahuje A/D převodník,
          ale ten je použitý pouze pro čtení potenciometrů, tedy
          &bdquo;paddles&rdquo;.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e08/c64.jpg'
        caption='Commodore 64 (1982)'
        mediaSource='Evan Amos, public domain'
        figureClass='left-24rem opaque-ms'
        width={1050}
        height={550}
        isCaptionVisible
        isZoomable
      >
        <p>
          Klávesnice byla QWERTY, 66 kláves, s&nbsp;grafickými znaky &ndash;
          vlastně stejná jako u&nbsp;VIC-20. K&nbsp;počítači bylo možno připojit
          mnoho periferií, jako třeba kazeťák na sériové sběrnici, zároveň čtyři
          disketové jednotky, tiskárnu a&nbsp;plotr. Dále pak mělo rozšiřující
          slot (expansion port) se systémovou sběrnicí pro kartridže, user-port
          (což byl teda paralelní port &ndash; Centronix), nebo na něm byl
          softwarově KERNALem ovládaný sériový port. Pak game-porty, kam se dají
          připojit joystick, myš, dvojice paddles do každého portu nebo světelné
          pero (do portu číslo 1). Samozřejmě audio/video výstup na monitor
          a&nbsp;výstup z&nbsp;modulátoru.
        </p>
      </FigureImage>
      <Heading as='h3' id='varianty-c64'>
        Varianty C64
      </Heading>
      <p>
        Úspěch Commodore&nbsp;64 byl daný také cenou, kdy byl uveden na trh.
        V&nbsp;dobových reklamách z&nbsp;roku 1982 byla uváděna cena za
        konkurenční počítač <span className='font-medium'>IBM&nbsp;PC</span>{' '}
        1&thinsp;565 dolarů (za samotný počítač), za{' '}
        <span className='font-medium'>Apple&nbsp;II</span> to bylo 1&thinsp;530
        dolarů, za <span className='font-medium'>Atari&nbsp;800</span> pak 899
        dolarů a&nbsp;Commodore&nbsp;64 přišel tehdy s&nbsp;cenou 595 dolarů.
        Počítač se prodával ještě 13 roků od jeho uvedení na trh až do roku
        1995. Vzniklo pro něj miliony programů (převážně her). Byl na trhu
        v&nbsp;několika variantách:
      </p>
      <p>
        V lednu 1983 Commodore představil počítač <b>Executive 64</b>{' '}
        a&nbsp;doufali, že se stane dostupným přenosným počítačem. Později byl
        prodáván pod názvem SX-64. Byl to vlastně první přenosný barevný počítač
        na světě. Měl maličký pětipalcový, ale barevný display, integrovanou
        5,25” floppy mechaniku, ale bohužel s&nbsp;cenou 995 dolarů, hmotností
        10,5 kg a&nbsp;špatnou reklamou, nebyl předurčen k&nbsp;úspěchu.
      </p>
      <p>
        V&nbsp;roku 1984 se dostal do školství jako PET 64, alias{' '}
        <b>Educator 64</b>, kdy použili skříně od počítačů PET, co jim zbyly,
        včetně zeleného monitoru. Dovnitř dali Commodore&nbsp;64, údajně bez
        zvukového čepu SID.
      </p>
      <FigureImage
        src='/res/s01e08/executive_64.jpg'
        caption='Commodore SX-64 alebo "Executive 64" (1983)'
        figureClass='left-32rem opaque-ms'
        className='lg:mt-2'
        width={1290}
        height={900}
        isCaptionVisible
        isZoomable
      >
        <FigureImage
          figureClass='right-32rem lg:!-ml-4'
          src='/res/s01e08/educator_64.jpg'
          caption='Educator 64 alebo "PET 64" či "Model 4064" (1984)'
          mediaSource='vintagecomputer.ca'
          width={1290}
          height={900}
          isCaptionVisible
          isZoomable
        />
      </FigureImage>
      <p>
        V roce 1984 v&nbsp;USA a&nbsp;později v&nbsp;roce 1986 v&nbsp;Německu
        byl uveden <b>Golden 64</b>, což byla limitovaná série 200 kusů se
        zlatým plastem a&nbsp;plaketou k&nbsp;výročí vyrobení miliontého kusu.
      </p>
      <FigureImage
        src='/res/s01e08/c64_variants.jpg'
        caption='varianty Commodore 64: 1982, 1986 a po roku 1987'
        mediaSource='Hedning, CC BY-SA 3.0'
        figureClass='right-24rem'
        width={900}
        height={1116}
        isCaptionVisible
        isZoomable
      >
        <p>
          V roce 1986 přišli s&nbsp;modernizací tvaru počítače, který vypadal
          podobně jako Commodore&nbsp;128 v&nbsp;klávesnici a&nbsp;zároveň
          modernizovali výrobní proces čipů, což přineslo menší spotřebu
          a&nbsp;tedy i&nbsp;zahřívání počítače. Také převážnou část logických
          čipů na desce integrovali společně do jediného čipu. Modernizovali
          i&nbsp;čip SID, starý 6581 vyměnili za <b>8580</b>, kde odstranili
          takzvané lupání při změně nástrojů, ale hudebníci ho kritizovali za
          trochu jinak znějící filtry. Při starým SIDu byla část čipu digitální,
          část analogová a&nbsp;tehdy ta výroba nebyla tolik zvládnutá, takže
          byl co kus, to originál. Nový čip 8580 už byl v&nbsp;podstatě jeden
          jako druhý, jenomže výsledek hrál trochu více měkce a&nbsp;tím přišel
          o&nbsp;svůj charakteristický tvrdý, řezavý zvuk.
        </p>
        <p>
          V roce 1987 byla v&nbsp;Německu prodávaná speciální edice
          Commodore&nbsp;64. Byla levnější, kdy byly vypuštěny patice pod čipy,
          všechno bylo zaletované. Zajímavostí je, že ta varianta byla vyráběná
          v&nbsp;USA a&nbsp;dovážená do Německa a&nbsp;prodávaná
          v&nbsp;supermarketech Aldi. Skříň toho počítače byla trošku jiné
          barvy, včetně klávesnice &ndash; byl celkově tmavší, ale vrátili se
          zpět k&nbsp;typu skříně &bdquo;chlebník&rdquo;.
        </p>
      </FigureImage>
      <p>
        V roce 1988 vyšel <b>C64G</b>, případně <b>C64C</b>, a&nbsp;tam už byl
        velký důraz na nízkou cenu. Vypustili už i&nbsp;šroubky a&nbsp;celá
        skříň byla jenom zacvakávací a&nbsp;byly vypuštěny všechny věci, které
        nebyly vyloženě nutné.
      </p>
      <FigureImage
        src='/res/s01e08/c64gs.jpg'
        caption={`herná konzola "Commodore C64GS" (1990)`}
        mediaSource='Evan Amos, CC BY-SA 3.0'
        figureClass='left-24rem opaque-ms'
        width={934}
        height={286}
        isCaptionVisible
        isZoomable
      >
        <p>
          V roce 1990 byl pokus o&nbsp;uvedení na trh herních konzolí. Konzole
          se jmenovala <b>C64GS jako &bdquo;Games System&rdquo;</b>, kdy tedy
          vzali desku z&nbsp;Commodore&nbsp;64, trochu upravili KERNAL
          a&nbsp;zavřeli do skříně bez klávesnice se štěrbinou na kartridže.{' '}
        </p>
        <p>
          Bohužel, konzole přišla docela pozdě, nebyla moc velká podpora ze
          strany softwaru a&nbsp;programy &ndash; hlavne hry, které byly pro
          Commodore&nbsp;64 napsány, tak nepočítali s&nbsp;tím, že by se
          ovládali jenom joystickem. Díky tomu ten úspěch vlastně nebyl.
        </p>
      </FigureImage>
      <Heading as='h3' id='cenova-vojna'>
        Cenová vojna a odchod Jacka Tramiela
      </Heading>
      <blockquote className='question'>
        Potom prišla &bdquo;cenová vojna&rdquo; a&nbsp;Commodore znižoval cenu
        tohto počítača tak, že o&nbsp;rok boli na polovici. Ako táto cenová
        politika ovplyvnila predaje a&nbsp;hlavne vývoj nových hier?
      </blockquote>
      <p>
        Myslím, že cenová válka pomohla k&nbsp;rozšíření počítačů mezi lidi. Čím
        víc se prodávalo počítačů, tím byla cena nižší a&nbsp;dostalo se to
        k&nbsp;více lidem. Mnoho začátečníků chtělo něco tvořit. Zároveň výrobci
        a&nbsp;distributoři komerčního softwaru, respektive her, nechali vyrábět
        hlavně pro Commodora, ne tolik pro ostatní platformy. Však také C64 je
        vlastně v&nbsp;Guinnessové knize rekordů zapsaná jako nejdéle prodávaný
        počítač všech dob a&nbsp;taky, že se ho vyrobilo nejvíc. Prameny uvádí,
        že se vyrobilo přes <b>17 milionů kusů</b> Commodore&nbsp;64, ovšem
        údajně mělo být vyrobeno až 25 milionů kusů. Kde je pravda, se
        nedozvíme, protože účetnictví firmy Commodore vzalo za své.
      </p>
      <blockquote className='question'>
        Počas takéhoto neuveriteľného úspechu prichádza šokujúca správa, že Jack
        Tramiel po nezhodách s&nbsp;Irvingom Gouldom odstupuje z&nbsp;postu
        riaditeľa a&nbsp;odchádza&hellip;
      </blockquote>
      <p>
        O&nbsp;tom, co se tehdy přihodilo mezi Jackem Tramielem a&nbsp;Irvingem
        Gouldem se vedou jen spekulace, protože nikdo z&nbsp;nich nám už to
        neřekne, co se tehdy vlastně stalo&hellip; ale muselo to být něco hodně
        ošklivého, když Jack Tramiel odešel ze své firmy.
      </p>
      <FigureImage
        src='/res/s01e08/tramiels.jpg'
        caption='Jack Tramiel a synovia - Garry, Sam a Leonard'
        figureClass='right-24rem'
        width={600}
        height={440}
        isCaptionVisible
        isZoomable
      >
        <p>
          Zase jiné prameny uvádí, že byl Tramiel &bdquo;odejít&rdquo; díky
          tomu, jaký byl tvrdý biznismen a&nbsp;jak šlapal po svých
          zaměstnancích, aby podávali výkony a&nbsp;snižovali ceny počítačů.
        </p>
        <p>
          Tramiel tehdy koupil firmu Atari, která se potácela v&nbsp;dluzích,
          takže byla relativně levná a&nbsp;díky tomu naštvání, nebo své
          nevraživosti s&nbsp;Irvingem se rozhodl, že bude tvrdá konkurence
          firmě Commodore.
        </p>
        <p>
          To bylo v&nbsp;době, kdy Commodore koupil společnost, která vyvinula
          počítač Amiga a&nbsp;dále ho rozvíjeli a&nbsp;Tramiel jako odpověď na
          to, ve firmě Atari inicioval vývoj Atari ST &ndash; jakožto konkurenci
          té Amize.
        </p>
      </FigureImage>
      <Heading as='h3' id='rada-264'>
        Spätne nekompatibilná rada 264
      </Heading>
      <blockquote className='question'>
        Spomeňme ešte low-endové a&nbsp;spätne nekompatibilné modely,
        s&nbsp;ktorými prišla spoločnosť v&nbsp;ďalších rokoch:
        Commodore&nbsp;16, 116 a&nbsp;Plus/4.
      </blockquote>
      <p>
        Řada počítačů 264, do které patřily počítače 16, 116, Plus/4 a&nbsp;264
        (který zůstal jen u&nbsp;prototypu), byly postaveny na úplně jiném
        chipsetu, aby byly co nejlevnější. Jádrem byl procesor 7500, později
        8500, které vycházely z&nbsp;6502.
      </p>
      <FigureImage
        src='/res/s01e08/c16.jpg'
        mediaSource='Cbmeeks, CC BY-SA 3.0'
        caption='Commodore 16 (1984)'
        figureClass='left-20rem'
        width={1317}
        height={613}
        isCaptionVisible
        isZoomable
      >
        <FigureImage
          src='/res/s01e08/c116.jpg'
          caption='Commodore 116 (1984)'
          mediaSource='Thomas Conté, CC BY-SA 2.0'
          figureClass='right-20rem'
          width={1184}
          height={826}
          isCaptionVisible
          isZoomable
        >
          <p>
            <b>Commodore 16</b> měla jen 16 KiB paměti, byla ve skříni stejného
            tvaru jako VIC-20, potažmo C64 &bdquo;chlebník&rdquo;, akorát měla
            teda jinou barvu a&nbsp;trošku jinak rozložené klávesy.
          </p>
          <p>
            <b>Commodore 116</b> byl v&nbsp;úplně jiném case, měl gumovou
            klávesnici (něco jako Spectrum Gumák) a&nbsp;byl to hlavně pokus
            o&nbsp;snížení ceny.
          </p>
        </FigureImage>
      </FigureImage>
      <FigureImage
        src='/res/s01e08/cplus4.jpg'
        caption='Commodore Plus/4 (1984)'
        mediaSource='Thomas Conté, CC BY-SA 2.0'
        figureClass='right-20rem'
        width={1263}
        height={688}
        isCaptionVisible
        isZoomable
      >
        <p>
          <b>Commodore Plus/4</b> &ndash; tak ten vyloženě mířil do business
          segmentu trhu, protože počítač měl teda 64 KiB paměti a&nbsp;to
          &bdquo;plus 4&rdquo; znamená, že měl vestavěné 4 programy &ndash;
          tabulkový procesor, textový editor, nějaký grafický program na tvorbu
          grafů a&nbsp;databáze. Ještě byl vestavěný monitor strojového kódu.
          Tato řada byla vzájemně kompatibilní, co šlo pustit na C16, šlo pustit
          na ostatních, ale <b>nebyly kompatibilní</b> s&nbsp;Commodore&nbsp;64,
          pro který byla obrovská softwarová základna.
        </p>
      </FigureImage>
      <p>
        Lidi si to moc nechtěli kupovat kvůli tomu, že na to nebylo tolik
        softwaru, a&nbsp;navíc i&nbsp;zvukový čip tam byl jenom dvouhlasý
        generátor, grafika byla 320x200 bodů, neměl ani sprity, takže pro hry to
        nebyl úplně vhodný počítač. Tahle řada měla také sériovou sběrnici,
        takže bylo možné použít disketové mechaniky od C64, včetně tiskáren
        a&nbsp;plotrů. Další nekompatibilita byla v&nbsp;konektorech třeba na
        joysticky, protože tam byly použité konektory typu mini-DIN, kdežto C64
        byl klasický Canon 9-pinový.
      </p>
      <Heading as='h3' id='commodore-128'>
        Commodore 128
      </Heading>
      <blockquote className='question'>
        Pred prechodom na Amigy ešte prichádzajú s&nbsp;modelom
        Commodore&nbsp;128. Čo revolučné priniesol tento model?
      </blockquote>
      <p>
        Commodore 128? No, to byl takový zvláštní počítač &ndash; vlastně to
        byly tři počítače v&nbsp;jednom.
      </p>
      <FigureImage
        src='/res/s01e08/c128.jpg'
        caption='Commodore 128 (1985)'
        mediaSource='Evan-Amos, CC BY-SA 3.0'
        figureClass='right-32rem'
        width={1280}
        height={600}
        isCaptionVisible
        isZoomable
      >
        <p>
          Aby zachovali zpětnou kompatibilitu, tak tam byl režim
          Commodore&nbsp;64, kde se chlubili, že to bylo 99,99% kompatibilní.
          Pak byl režim Commodore&nbsp;128: Tam byl BASIC v7, operační paměť 128
          KiB, procesor běžel na dvojnásobné frekvenci a&nbsp;zároveň měl ještě
          druhý videovýstup.
        </p>
        <p>
          Počítač měl 2 video-čipy &ndash; jeden kompatibilní
          s&nbsp;Commodore&nbsp;64 a&nbsp;druhý byl CGA kompatibilní čip, jako
          byl použitý v&nbsp;grafických kartách na PC-čku. Video-paměť byla
          rozšiřitelná na 16 KiB. Druhý video-čip měl výstup RGB, takže tam bylo
          potřeba použít speciální monitor a&nbsp;byl tam režim 80 znaků na
          řádek.
        </p>
      </FigureImage>
      <p>
        Počítač měl v&nbsp;sobě ještě druhý procesor Z80, takže šel na něm
        pouštět systém CP/M. Díky tomu se chtěl Commodore rozšířit na trh
        s&nbsp;komerčními programy pro CP/M. V&nbsp;režimu C64 bylo možné
        urychlit procesor na dvojnásobnou frekvenci, čeho využívaly některé
        pakovací programy a&nbsp;kopíráky. Protože ten počítač v&nbsp;podstatě
        nevěděl, čím má být, tak se zájem o&nbsp;něj tříštil a&nbsp;lidi, kteří
        ho používali na hry, tak ho provozovali jenom v&nbsp;režimu C64
        a&nbsp;softwaru čistě pro &bdquo;128čku&rdquo; mnoho nevzniklo.
      </p>
      <FigureImage
        src='/res/s01e08/c128d.jpg'
        caption='desktop zostava Commodore 128D a monitorom Commodore 1084'
        mediaSource='Remi Jakobsen, remimedia.com'
        figureClass='left-32rem opaque-ms'
        width={1000}
        height={800}
        isCaptionVisible
        isZoomable
      >
        <p>
          C128 byla ve třech provedeních: Jako samotný počítač
          v&nbsp;klávesnici, pak jako desktop s&nbsp;odnímatelnou klávesnicí
          (která se dala zacvaknout ze spoda a&nbsp;mělo to ucho na přenášení),
          a&nbsp;potom ještě jedna desktopová varianta v&nbsp;plechové krabici
          (taky s&nbsp;externí klávesnicí), ale ta byla teda pro americký trh,
          kde byly vyšší nároky na elektromagnetickou kompatibilitu. Commodore
          128D mělo integrovanou floppy mechaniků 1571, což byla 5.25&quot;
          s&nbsp;oboustranným zápisem.
        </p>
        <p>
          C128 si oblíbili někteří programátoři, protože pro ně vznikl
          assembler, kdy v&nbsp;režimu 64ky měli v&nbsp;polovině paměti zdroják
          a&nbsp;do druhé poloviny kompilovali výsledek, který se dal spustit.
          Když to havarovalo, tak se pořád v&nbsp;druhé polovině dalo vrátit
          k&nbsp;tomu zdrojáku.
        </p>
      </FigureImage>
      <blockquote className='question'>
        Tome, sme na konci&hellip; Ďakujem ti veľmi pekne za rozhovor a&nbsp;maj
        sa fajn.
      </blockquote>
      <p>Tak, není zač a&nbsp;ať se daří.</p>
    </EpisodeWrapper>
  );
}
