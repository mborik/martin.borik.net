import * as React from 'react';

import {
  EpisodeLink,
  EpisodeWrapper,
  ExternalLink,
  FigureImage,
  FigureYouTube,
  Heading,
} from '@/components/common';

export default function S01E06() {
  return (
    <EpisodeWrapper episode={6}>
      <p>
        Táto epizóda vznikla &bdquo;výjazdovo&rdquo; na akcii{' '}
        <ExternalLink href='https://www.bytefest.cz/'>ByteFest</ExternalLink>,
        kde sa každoročne stretávajú majitelia a&nbsp;zberatelia historických
        počítačov naprieč všetkými platformami. Epizóda je špeciálna tým, že
        dnes na to nebudem sám, ale mám tu hosťa, ktorý prijal pozvanie do
        podcastu a&nbsp;pomôže mi s&nbsp;dnešnou témou, ktorá je:
      </p>
      <h2 className='-mt-4'>
        ZX Spectrum
        <br />
        <small>História jeho vzniku a význam tejto legendy</small>
      </h2>
      <p>
        Som rád, že moje pozvanie prijal človek, ktorému už od prvej epizódy
        Zapečených procesorov môžeme vďačiť za faktografickú presnosť
        informácií. <b>Martin Kukač</b> alias <b>Logout</b> je totiž
        proof-readerom mojich poznámok k&nbsp;pripravovaným epizódam a&nbsp;dáva
        mi veľmi cennú spätnú väzbu ku faktom a&nbsp;časovej osi dejín
        historických počítačov. Martin je dlhoročným redaktorom serveru{' '}
        <ExternalLink href='https://diit.cz/autor/logout'>
          Deep&nbsp;in&nbsp;IT
        </ExternalLink>{' '}
        (kedysi magazínu CDR.cz) a&nbsp;o&nbsp;svojej láske (a pochybnostiam)
        k&nbsp;technológiám a&nbsp;ich histórii sa vyznáva na svojich blogoch{' '}
        <ExternalLink href='https://technomorous.eu'>
          Technomorous.eu
        </ExternalLink>{' '}
        alebo{' '}
        <ExternalLink href='https://vivapowerpc.eu'>
          VivaPowerPC.eu
        </ExternalLink>
        .
      </p>
      <blockquote className='question'>
        Vitaj Martin, boli tieto moje tvrdenia faktograficky správne? 🙂
      </blockquote>
      <p>
        Ahoj a&nbsp;díky za pozvání. Já myslím, že to bylo všechno přesně
        a&nbsp;doufám, že ve stejném duchu budeme i&nbsp;pokračovat.
      </p>
      <Heading as='h3' id='clive-sinclair-zaciatky'>
        Clive Sinclair a jeho začiatky
      </Heading>
      <blockquote className='question'>
        Najskôr si povedzme niečo o&nbsp;období predtým, ako sa Clive Sinclair
        začal venovať počítačom? Čomu sa venoval predtým a&nbsp;s&nbsp;akými
        úspechmi?
      </blockquote>
      <FigureImage
        src='/res/s01e06/young_sinclair.jpg'
        caption='mladý Clive Sinclair a Microvision (1966)'
        mediaSource='loadzx.com'
        figureClass='right-20rem'
        width={680}
        height={912}
        isCaptionVisible
        isZoomable
      >
        <p>
          Clive Sinclair se narodil už během 2. světové války, v&nbsp;roce 1940
          a&nbsp;už v&nbsp;útlém věku, v&nbsp;15 letech, se začal zabývat
          elektronikou, kdy během střední školy začal dopisovat do britských
          technologických magazínů o&nbsp;polovodičových konstrukcích
          a&nbsp;zároveň začal i&nbsp;vlastní polovodičové konstrukce vymýšlet
          a&nbsp;prodávat je jako stavebnice. V&nbsp;roce 1958, když dokončil
          střední školu, tak se tomu už začal věnovat naplno a&nbsp;strávil
          návrhy elektroniky a&nbsp;vynalézáním celý zbytek života. Jeho první
          stavebnice byl zesilovač, který na trhu relativně uspěl tím, že
          Sinclair od začátku odhadl, kolik by jich tak mohl prodat
          a&nbsp;nakoupil velké množství součástek za nízkou cenu. Díky tomu, že
          to prodával jako stavebnici a&nbsp;zároveň to jenom posílal poštou
          (neměl nikde žádný obchod), tak zvládnul tu cenu stlačit na úplné
          minimum toho, co bylo v&nbsp;té době možné. I&nbsp;tohle je prvek,
          který se s&nbsp;ním nesl po celou dobu existence jeho několika firem
          a&nbsp;ve všech jeho výrobcích.
        </p>
        <FigureImage
          src='/res/s01e06/calculators.jpg'
          caption='Hewlett-Packard HP-35 vs. Sinclair Executive (1972)'
          mediaSource='hewlettpackardhistory.com; MaltaGC, CC BY-SA 3.0'
          figureClass='left-24rem'
          width={800}
          height={640}
          isCaptionVisible
          isZoomable
        >
          <p>
            Jeho první firma, kterou založil v&nbsp;60. letech, se jmenovala{' '}
            <b>Sinclair Radionics</b> a&nbsp;ta vyráběla právě návrhy
            a&nbsp;stavebnice miniaturních zesilovačů a&nbsp;rádií. Asi jako
            první evropská firma začala vyrábět i&nbsp;kapesní kalkulačky.
            Jediná kapesní kalkulačka, která ve světě existovala před ní, byla
            od Hewlett Packard, ale to byla kapesní kalkulačka, která se vešla
            jenom do opravdu velké kapsy, zatímco Sinclairové kalkulačky už se
            opravdu vešly do kapsy od saka.
          </p>
          <p>
            Taky vyrobil jedny z&nbsp;prvních digitálních hodinek, které se
            zrovna úplně nepovedly, protože nepoužíval LCD, ale LED displeje,
            takže se to rychle vybíjelo a&nbsp;přehřívalo. Díky tomu, jak tu
            cenu stlačoval u&nbsp;všeho strašně dolů, tak občas se mu nějaký
            výrobek povedl vyrobit naprosto katastrofální, takže na konci 70.
            let se jeho firma Sinclair Radionics dostala do finančních problémů
            a&nbsp;on prodal 44% státu a&nbsp;postupně z&nbsp;té vlastní firmy
            vycouval &ndash; nechal jí státu a&nbsp;ona zanikla. Tam pak teprve
            došlo k&nbsp;tomu, že vznikl Sinclair Research a&nbsp;přišli
            &bdquo;ZX-ka&rdquo;.
          </p>
        </FigureImage>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/chris_curry.jpg'
        caption='Chris Curry v Acorn Computers (1982)'
        mediaSource='časopis Practical Computing, október 1982, kolorizované'
        figureClass='right-20rem'
        width={1111}
        height={1581}
        isCaptionVisible
        isZoomable
      >
        <Heading as='h3' id='sinclair-vs-curry'>
          Sinclair vs. Curry
        </Heading>
        <blockquote className='question'>
          Životopis Cliva Sinclaira sa niekoľkokrát pretne s&nbsp;menom{' '}
          <strong>Christopher Curry</strong>. Na čom spolupracovali, čo ich
          rozdelilo a&nbsp;čím sa potom Chris Curry zaoberal?
        </blockquote>
        <p>
          Ten začátek jejich spolupráce v&nbsp;oblasti počítačů se právě datuje
          do doby, kdy Sinclair ještě měl Sinclair Radionics, ale už tam skoro
          o&nbsp;ničem nerozhodoval, snažil se z&nbsp;té firmy zmizet
          a&nbsp;nechat jí té státní organizaci, která mu finančně pomáhala
          a&nbsp;založil si paralelně firmu, která se jmenovala{' '}
          <b>Science of Cambridge</b>. Zatím jí vůbec nechtěl spojovat se svým
          jménem, aby nebylo podezření, že si třeba vyvádí nějaké know-how
          z&nbsp;té předchozí firmy, takže šéfem Science of Cambridge jmenoval
          Chrise Curryho. Nechal ho, ať si v&nbsp;té firmě více-méně navrhuje co
          chce a&nbsp;protože Chris od začátku sledoval, jak se v&nbsp;Americe
          rozvíjí trh prvních mikropočítačů, tak navrhnul první počítač, který
          se prodával pod značkou Science of Cambridge (ale byl to vlastně
          Sinclair), a&nbsp;byl to <b>mikropočítačový kit MK14</b>.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/mk14.jpg'
        caption='popis mikropočítačového kitu MK14 z príručky (1977)'
        figureClass='left-24rem'
        width={1200}
        height={790}
        isCaptionVisible
        isZoomable
      >
        <p>
          Poté, co byl kit relativně úspěšný (i když neměl nikde žádnou velkou
          propagaci) a&nbsp;Sinclair se zbavil Sinclair Radionics, tak se
          zaměřil na počítače. Řekl si, že by to třeba mohl být potenciálně
          dobrý tržní segment, ale že zatím jsou ty počítače příliš drahé, takže
          začal navrhovat co nejlevnější počítač, jenž půjde vyrobit.
        </p>
        <p>
          Science of Cambridge se přejmenovalo na Sinclair Research
          a&nbsp;v&nbsp;té době už měl Chris pocit, že to chce dělat asi trochu
          jinak, než to dělá Sinclair, takže si založil (s dalšími lidmi) značku{' '}
          <b>Acorn</b>. Od té doby se datuje rivalita Sinclaira a&nbsp;Curryho,
          kdy v&nbsp;rámci Velké Británie byli největší dva konkurenti, až do
          doby, kdy se Sinclair přestal počítači zabývat.
        </p>
      </FigureImage>
      <blockquote className='question'>
        Firma Acorn pracovala aj na vývoji výborného RISC procesora, ktorý je
        známy dodnes &ndash; procesory ARM sú z&nbsp;ich dielne, že?
      </blockquote>
      <p>
        Je to tak. Osmibitové počítače Acorn byly původně na procesorech jiných
        než používal Sinclair &ndash; používali procesory 6502 a&nbsp;když
        chtěli z&nbsp;osmibitů přejít někam výš, tak si navrhli vlastní procesor
        a&nbsp;navrhli ho dobře. ARM je původně desktopový procesor, kam se
        dneska pomalu vrací (Apple Silicon, pozn. editora) a&nbsp;legenda říká,
        že ten procesor se programuje tak dobře proto, že oni ho vlastně nechali
        navrhnout programátorům a&nbsp;ne technikům.
      </p>
      <Heading as='h3' id='prve-pocitace-sinclair'>
        Prvé počítače Sinclair
      </Heading>
      <blockquote className='question'>
        No a&nbsp;teraz sa dostaňme už asi konečne k&nbsp;tomu bodu, kedy Clive
        Sinclair začal s&nbsp;počítačmi.
        <br />
        Čo ho k&nbsp;tomu inšpirovalo a&nbsp;čo ho &bdquo;drajvovalo&rdquo;? Aké
        boli jeho prvé úspechy alebo neúspechy na tomto poli?
      </blockquote>
      <FigureImage
        src='/res/s01e06/zx80.jpg'
        caption='Sinclair ZX80 (1980)'
        mediaSource='HomeComputerMuseum.nl © Dylan van Voorthuijsen'
        figureClass='left-20rem opaque-ms'
        width={816}
        height={1008}
        isCaptionVisible
        isZoomable
      >
        <p>
          První počítač, který šel na trh pod názvem Sinclair, byl počítač{' '}
          <b>ZX80</b>, který navrhl v&nbsp;roce 1980 a&nbsp;jeho cílem bylo
          vyrobil funkční počítač, dostatečně výkonný, aby se na něm dalo
          pohodlně programovat (protože on, narozdíl od amerických firem, to
          nesměřoval primárně ke hrám, ale ke vzdělávání) a&nbsp;v&nbsp;duchu té
          svojí tradice ze 60. a&nbsp;70. let &ndash; vyrobit ho co nejlevněji
          a&nbsp;přitom funkčně.
        </p>
        <p>
          On od začátku ty počítače navrhoval tak, že měli naprosté minimum
          zákaznických čipů &ndash; kde to šlo, tak měli minimum čipů vůbec!
          K&nbsp;tomu, aby na nich mohl člověk programovat &ndash; i&nbsp;třeba
          v&nbsp;assembleru, mu stačila příručka, kterou k&nbsp;tomu dostal.
          Nepotřeboval žádnou složitou dokumentaci ke grafickým čipům, zvukovým
          čipům &ndash; všechno je tam namapováno někde do paměti, maximálně se
          něco pošle na porty a&nbsp;hardvér něco udělá. Není to jako
          u&nbsp;počítačů konkurenčních značek, kde je na té desce
          v&nbsp;podstatě několik procesorů a&nbsp;musí si mezi sebou povídat.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/zx81.jpg'
        caption='Sinclair ZX81 (1981)'
        mediaSource='Evan Amos, CC BY-SA 3.0'
        figureClass='right-20rem opaque-ms'
        width={1500}
        height={1100}
        isCaptionVisible
        isZoomable
      >
        <p>
          Ta velice nízká cena vyplynula z&nbsp;toho jednoduchého návrhu
          a&nbsp;toho, že se Sinclair nebál koupit paměti, o&nbsp;kterých věděl,
          že v&nbsp;nich je část vadná a&nbsp;prostě se nezapojí, ale
          v&nbsp;počítači se dá použít a&nbsp;sníží se tím cena o&nbsp;štvrtinu.
          Plus ještě i&nbsp;to, že k&nbsp;tomu šlo používat standardní
          periferie, co už měli lidi v&nbsp;té době doma, jako například
          televize a&nbsp;kazeťák &ndash; nebylo třeba kupovat značkový dataset
          připojovaný speciálním portem, nebo monitor.
        </p>
        <p>
          Myslím si, že tenhle tlak na cenu a&nbsp;funkčnost a&nbsp;jednoduchost
          používání způsobil boom počítačů značky Sinclair v&nbsp;první půlce
          80. let.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/gumak.jpg'
        caption='Sinclair ZX Spectrum (1982)'
        mediaSource='Bill Bertram, CC BY-SA 2.0'
        figureClass='left-20rem opaque-ms'
        className='clear-both'
        width={1820}
        height={1250}
        isCaptionVisible
        isZoomable
      >
        <blockquote className='question'>
          Teraz sa už dostávame k&nbsp;tomu slávnemu ZX&nbsp;Spectru&hellip;
          alebo ho mám radšej volať ZX82?
        </blockquote>
        <p>
          To označování počítačů u&nbsp;Sinclairu bylo na začátku skutečně
          takové. ZX80 vyšlo v&nbsp;roce 1980, pak zjednodušením ZX80 vzniklo
          ZX81, kde se ta cena srazila ještě významě níž, než u&nbsp;ZX80
          &ndash; rok 1981. Plánovaný nástupce se samozřejmě měl jmenovat
          a&nbsp;byl vyvíjen pod názvem ZX82, ale jelikož jeho hlavní devízou
          oproti předchozím bylo barevné zobrazování, tak ho nazvali{' '}
          <b>ZX&nbsp;Spectrum</b>.
        </p>
        <p>
          To označování čísly pak pokračovalo ještě dál, kdy plánovaný nástupce
          Sinclair QL byl vyvíjen jako ZX83, nicméně, ten se na trh dostal až
          v&nbsp;roce 1984, takže tam se už vůbec nemá smysl těma číslama
          zabývat &ndash; tam to už nevyšlo 🙂.
        </p>
      </FigureImage>
      <Heading as='h3' id='co-je-zx-spectrum'>
        Čo je ZX&nbsp;Spectrum?
      </Heading>
      <p>
        ZX&nbsp;Spectrum používalo procesor Z80, což byl v&nbsp;roce 1982 asi
        nejlepší dostupný 8-bitový procesor &ndash; minimálně nejvýkonnější
        a&nbsp;pracující na nejvyšších taktech, čímž částečně Sinclair nahradil
        to, že tam neměl zákaznické čipy, které by mu to ulehčovali. Totiž, ve
        Spectru &ndash; všechno, co vidíte, dělá procesor.
      </p>
      <p>
        Počítač se vyráběl ve dvou variantách. V&nbsp;levnější, která stála
        125&pound; a&nbsp;dražší, která stála 175&pound;, přičemž ta levnější
        varianta měla jenom 16 kilobajtů paměti RAM a&nbsp;ta dražší měla 48
        kilobajtů paměti RAM. Nicméně, ta levnější varianta se velice rychle
        přestala prodávat, protože ta dražší varianta byla pořád o&nbsp;50%
        levnější, než nejbližší konkurence, takže lidi si raději koupili víc
        paměti, když to bylo za tuhle cenu.
      </p>
      <FigureImage
        src='/res/s01e06/zx_spectrum_advert.jpg'
        caption='dobová reklama na ZX Spectrum v časopise Practical Computing (november 1982)'
        figureClass='opaque-ms'
        width={1000}
        height={700}
        isCaptionVisible
        isZoomable
      />
      <p>
        Rozlišení na Spectru je 256&times;192 bodů, barevně je to rozlišení
        nižší, tedy 32&times;24 takzvaných &bdquo;atributů&rdquo;, které vždy
        mohou mít dvě barvy, kterýma se barví ty pixely nad nima. Spectrum umí
        zobrazit 15 barev: je to 7 barev + 7 barev se zvýšeným jasem + černá.
        Jako &bdquo;zobrazovadlo&rdquo; se používala televize přes normální
        modulátor, tedy se to naladilo na kanálu, který byl na tom Spectru někde
        na nálepce napsaný. Jako zvuk tam byl jenom 1-bitový pípák, který uměl
        jen vypnout/zapnout a&nbsp;rychlým vypínáním a&nbsp;zapínáním vyluzoval
        zvuky.
      </p>
      <p>
        Klávesnice byla gumová, membránová, nicméně už měla alespoň nějaký
        drobný půlmilimetrový zdvih. Nebylo to jako na ZX80 a&nbsp;ZX81, kde se
        vysloveně jenom promačkávala fólie a&nbsp;spínali kontakty. Ten počítač
        byl po všech stránkách zdokonalením všeho, co se Sinclair za ty dva roky
        předtím naučil a&nbsp;asi i&nbsp;tím, co získal ze zpětné vazby od
        zákazníků &ndash; takže ZX&nbsp;Spectrum proti předchozím Sinclairovým
        počítačům všechno výrazně vylepšil.
      </p>
      <p>
        Klávesnice, i&nbsp;když je dneska lidem k&nbsp;smíchu, tak byla výrazně
        lepší, než byla na ZX81. Bylo tam víc paměti, BASIC uměl pracovat
        s&nbsp;&bdquo;floatovými&rdquo; čísly (s plovoucí desetinnou čárkou),
        uměl od začátku i&nbsp;grafické příkazy &ndash; což prostě například
        konkurenční počítače, které měli levnou variantu Microsoft BASICu,
        neuměli &ndash; i&nbsp;když počítač samotný jí uměl, tak z&nbsp;BASICu
        se grafické věci nedali u&nbsp;konkurence programovat. Vylepšili se
        i&nbsp;ty manuály, kde skutečně ke všemu, co ten BASIC uměl, byla
        pořádná sekce textu, aby to ten člověk pochopil a&nbsp;naučil se
        programovat.
      </p>
      <FigureImage
        src='/res/s01e06/manic_miner.png'
        caption='jedna z prvých hier: Manic Miner (1983)'
        figureClass='right-20rem'
        width={288}
        height={224}
        isCaptionVisible
      >
        <p>
          Tak na Spectru začala tvorba her &ndash; díky barvě a&nbsp;díky tomu,
          že to dělalo i&nbsp;&ndash; sice jednoduché, ale zvuky, a&nbsp;že šlo
          něco počítat a&nbsp;zároveň zobrazovat (protože na ZX81 se buďto
          kreslil obraz a&nbsp;počítalo se pomalu, nebo se nekreslil obraz
          a&nbsp;počítalo se rychle). Myslím si, že v&nbsp;Británii to dodneška
          považují za první softwarovou revoluci, kdy všichni začali programovat
          pro ZX&nbsp;Spectrum.
        </p>
        <Heading as='h3' id='zx-uspech'>
          ZX Úspech
        </Heading>
        <blockquote className='question'>
          Čo si myslíš, že boli hlavné faktory, ktoré mali vplyv na to, že sa
          &bdquo;Speccy&rdquo; <i>[spekí]</i> &ndash; ako ho ľudovo voláme
          &ndash; stalo takou &bdquo;masovkou&rdquo;? Bola to iba tá cena?
        </blockquote>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/bbc_micro.jpg'
        caption='BBC Micro (1981)'
        figureClass='left-20rem'
        width={1000}
        height={666}
        isCaptionVisible
        isZoomable
      >
        <p>
          Myslím si, že to právě nebyla jenom ta cena, ale hlavně ta
          jednoduchost a&nbsp;rychlá pochopitelnost toho počítače. Sednout si
          k&nbsp;tomu počítači, přečíst si příručku a&nbsp;moct začít v&nbsp;ten
          den něco tvořit, tak myslím si, že žádný z&nbsp;osmibitů tohle neměl
          &ndash; možná kromě těch, které byly vysloveně vyvíjeny do škol, jako
          třeba <b>BBC&nbsp;Micro</b>, kde ty příručky byly taky detailní, ale
          tam to bylo už z&nbsp;definice celého toho projektu. U&nbsp;Spectra to
          byla vlastní komerční iniciativa jednoho člověka, že chtěl vyrábět
          počítače ke vzdělávání a&nbsp;ne jenom ke konzumaci obsahu. Takže to
          byl ten hlavní úspěch a&nbsp;samozřejmě i&nbsp;ta cena.
        </p>
      </FigureImage>
      <p>
        Když se baví člověk s&nbsp;někým z&nbsp;Británie, kdo tu dobu zažil, tak
        každý má z&nbsp;toho ten pocit, že si mohl sednout k&nbsp;počítači,
        který hned pochopil a&nbsp;šlo na něm hned něco dělat.
      </p>
      <blockquote className='question'>
        Zaujímalo by ma, že ako tento úspech Sinclair neskôr zúročil? Viem, že
        prichádzali ďalšie modely ako ZX&nbsp;Spectrum+, neskôr aj
        &bdquo;stodvadsaťosmička&rdquo;&hellip; prichádzali s&nbsp;rovnakým
        úspechom, alebo ich niečo zatienilo?
      </blockquote>
      <FigureYouTube
        youtubeCode='V3l_NV9oQ1c?si=YmJHJMuHVN8BLlSw'
        caption='vtipná scéna z filmu Micro Man'
        figureClass='right-20rem'
        isCaptionVisible
      >
        <p>
          Když to mám říct úplně naplno, tak u&nbsp;Sinclaira je tak trochu
          zastínil ten velký neúspěch, který přišel na konci, ke kterému se asi
          ještě dostaneme, ale ano &ndash; Sinclair od začátku plánoval, že bude
          v&nbsp;těch počítačích pokračovat, nicméně on nebyl úplně spokojený
          s&nbsp;tím, že jeho vzdělávací počítač se zvrhnul směrem ke hrám.
        </p>
        <p>&hellip; i když za to pak dostal rytířský titul. 😁</p>
      </FigureYouTube>
      <p className='clear-both'>
        Tak začal připravovat počítač, který už nebyl cílený na domácnosti, ale
        na byznys &ndash; to byl Sinclair QL. Zároveň, jelikož pro něj ty
        počítače vždy byli jenom jedna z&nbsp;věcí, kterýma se zabýval &ndash;
        protože on nebyl primárně &bdquo;počítačový člověk&rdquo; &ndash; tak
        nasměroval úsilí k&nbsp;vývoji elektromobilu C5. Tím roztříštil
        pozornost zaměstnanců firmy, spálil v&nbsp;tom strašný množství financí
        a&nbsp;nepovedlo se pořádně dodat na trh v&nbsp;použitelném stavu ani to
        Sinclair QL ani ten elektromobil.
      </p>
      <FigureImage
        src='/res/s01e06/spectrum_plus_128.jpg'
        caption='↓ ZX Spectrum+ (1983) - ZX Spectrum 128 (1985) ↑'
        figureClass='left-24rem'
        width={1080}
        height={840}
        isCaptionVisible
        isZoomable
      >
        <p>
          Počítače, které jsou kompatibilní se Spectrem, jsou přímo od Sinclaira
          a&nbsp;vznikly po původním &bdquo;gumáku&rdquo;, tak vždy vznikly
          proto, aby to byl relativně jednoduchý příjem financí do té firmy,
          které pak mohl vrazit do něčeho, co ho opravdu zajímalo, ale co
          většinou skončilo neúspěchem. <b>ZX&nbsp;Spectrum+</b> je uvnitř
          v&nbsp;podstatě úplně stejné jako &bdquo;gumák&rdquo;, jenom má lepší
          klávesnici, víc kláves, kurzorové šipky, plastový obal, atd.{' '}
          <b>ZX&nbsp;Spectrum 128</b>, které je lepší rapidně &ndash; má zvukový
          čip a&nbsp;víc paměti &ndash; to už nebyla vůbec iniciativa Sinclaira.
          S&nbsp;tou iniciativou vylepšit tento počítač přišel jeho španělský
          distributor Investrónica a&nbsp;Sinclair to pak jenom prodával &ndash;
          i&nbsp;když teda s&nbsp;velkým úspěchem, protože tím vlastně dorovnal
          ty americké konkurenty, které byly primárně určené na vizuálno, zvuk
          a&nbsp;hry. U&nbsp;Sinclaira to už byl ale vlastně závěr &ndash; psal
          se rok 1985-86, kdy se skutečně naplno projevilo, že jak elektromobil
          C5, tak Sinclair QL asi nebudou to, v&nbsp;čem by mohl pokračovat.
          Firma se dostala do finančních potíží a&nbsp;skončilo to nakonec
          prodejem konkurenčnímu Amstradu.
        </p>
      </FigureImage>
      <Heading as='h3' id='pad-a-predaj-znacky'>
        Pád a predaj značky
      </Heading>
      <FigureImage
        src='/res/s01e06/sinclair_sugar.jpg'
        caption='Clive Sinclair a Alan Sugar (apríl 1986)'
        mediaSource='© PA Images, kolorizované'
        figureClass='right-24rem !-mt-2'
        width={976}
        height={549}
        isCaptionVisible
        isZoomable
      >
        <blockquote className='question'>
          Neskoršie modely ZX&nbsp;Spectra sú už spojené s&nbsp;menom{' '}
          <strong>Alan&nbsp;Sugar</strong> a&nbsp;firmou{' '}
          <strong>Amstrad</strong>. Už si to asi načrtol, ale prečo a&nbsp;ako
          prebehla táto akvizícia? Aký to malo dopad na značku &bdquo;ZX&rdquo;
          a&nbsp;čo priniesli tie nové modely?
        </blockquote>
        <p>
          Je to tak. Sinclair v&nbsp;rocích 1985 a&nbsp;1986 hledal někoho, kdo
          by do firmy zainvestoval a&nbsp;on mohl pokračovat ve vývoji toho, co
          dělal, tzn. Sinclairu QL a&nbsp;případně nějakých nástupcích Spectra,
          ale nakonec byly všechny nabídky staženy, takže Sinclair nesehnal
          investora a&nbsp;musel přistoupit k&nbsp;tomu, že značku prodal.
          Značku &bdquo;Sinclair Research&rdquo; prodal pouze pro oblast
          počítačů, sám si zbytek firmy nechal a&nbsp;vývojem a&nbsp;vynálezáním
          se zabýval až do konce života.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/spectrum_128_2.jpg'
        caption='ZX Spectrum 128 +2 (1986)'
        mediaSource='Stuart Brady, public domain'
        figureClass='left-24rem !-mt-2 opaque-ms'
        width={1840}
        height={700}
        isCaptionVisible
        isZoomable
      >
        <p>
          Počítače pod značkou Sinclair pak vyráběl Amstrad. Ten přinesl
          podstatně profesionálnější zpracování &ndash; mechanické, dílenské,
          elektronické &ndash; všechny části počítače. První model
          ZX&nbsp;Spectra od Amstradu &ndash; <b>ZX&nbsp;Spectrum +2</b> &ndash;
          ačkoliv uvnitř je to více-méně stejné jako ZX&nbsp;Spectrum 128 (které
          dělal ještě Sinclair), tak má klávesnici srovnatelnou s&nbsp;tím, co
          bylo tenkrát na trhu. Má integrovaný kazeťák a&nbsp;zabudované
          joystickové porty tak, že jsou i&nbsp;použitelné. Vlastně všichni, kdo
          dnes něco dělaj na ZX&nbsp;Spectrum, tedy přímo na tom počítači, tak
          preferují model +2, protože je podstatně kvalitnější
          a&nbsp;trvanlivější, než všechno, co vyrobil Sinclair.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e06/spectrum_128_3.jpg'
        caption='ZX Spectrum 128 +3 (1987)'
        mediaSource='ccwoodcock, CC BY 2.0'
        figureClass='right-32rem opaque-ms'
        width={1800}
        height={850}
        isCaptionVisible
        isZoomable
      >
        <p>
          Nicméně, Amstrad nechtěl konkurovat vlastním počítačům řady CPC, takže
          ten rozvoj nedělal ve smyslu, že by něco do budoucna vylepšoval. Pak
          vznikl <b>model +3</b>, do kterého osadil svojí tří-palcovou
          mechaniku, ale i&nbsp;když ten model už umožňuje běh operačního
          systému CP/M, tak to není tak pohodlné, jako na jejich CPC. To proto,
          že na Spectru nechal původní nízké rozlišení, kde není vidět celá
          obrazovka toho operačního systému. Model +3 zanesl i&nbsp;první
          nekompatibility s&nbsp;původním Spectrem, kdy tam jsou jinak časované
          paměti a&nbsp;přibyl tam radič a&nbsp;operační systém pro tu
          disketovku. Některé věci tam nemuseli běžet tak, jak dobře běželi na
          původních Sinclarových modelech.
        </p>
      </FigureImage>
      <p>
        Jako další krok udělal Amstrad to, že od modelu +3 odvodil nižší
        variantu <b>ZX&nbsp;Spectrum +2A</b> nebo <b>+2B</b>, co označením
        mátlo, že je to ten starší model, ale uvnitř to byla
        &bdquo;plus-trojka&rdquo; bez disketovky, no vráceným kazeťákem. Takže
        existovalo pak víc modelů, co se značily jako &bdquo;+2&rdquo;, ale
        nebyly stejné ani uvnitř, ani zvenku. Tím vlastně výroba Spectra
        u&nbsp;Amstradu vlastně skončila.
      </p>
      <p>
        Amstrad použil značku Sinclair ještě jednou pro výrobu jednoho modelu PC
        do domácnosti, který vypadal zhruba jako Amiga a&nbsp;pak se už Amstrad
        naplno věnoval jenom svojí vlastní značce počítačů.
      </p>
      <blockquote className='question'>
        Súhlasím, Amstrad bol skúsený výrobca a&nbsp;jeho &bdquo;CPC-čká&rdquo;
        boli kvalitné mašiny, takže ako hovoríš &ndash; aj tieto nové Spectrá
        išli v&nbsp;tomto štandarde&hellip;
      </blockquote>
      <p>
        Ano, přesně tak. Plus tam osadil i&nbsp;tu svojí 3&rdquo; mechaniku,
        kterou skoro nikdo jiný než Amstrad nevyužíval. 🙂 Ta byla stejná
        a&nbsp;dokonce by měli ty diskety jít číst mezi platformamy, ačkoliv
        softwarově nejde spouštět programy na nich.
      </p>
      <Heading as='h3' id='klony-utocia'>
        Klony útočia
      </Heading>
      <FigureImage
        src='/res/s01e06/delta.jpg'
        caption='na porovnanie: Delta a originálne "plusko"'
        mediaSource='clous.cz'
        figureClass='left-24rem'
        width={1306}
        height={1200}
        isCaptionVisible
        isZoomable
      >
        <blockquote className='question'>
          ZX&nbsp;Spectrum malo aj nejaké oficiálne, ale väčšinou neoficiálne
          klony. Dokonca sa nejako podivuhodne &bdquo;pluská&rdquo; exportovali
          z&nbsp;Anglicka do Juhoslávie a&nbsp;prebrandovali na počítač Delta.
          Kto sa má vyznať v&nbsp;tom, že ste mohli mať doma ZX&nbsp;Spectrum,
          aj keď na ňom žiadny nadpis &bdquo;ZX&rdquo; nebol?
        </blockquote>
        <p>
          Já začnu tou Deltou, protože Deltu shodou okolností mám
          a&nbsp;předělával jsem si jí na &bdquo;ZX&nbsp;Spectrum+&rdquo;. To
          vzniklo tak, že v&nbsp;Jugoslávii, kde to už v&nbsp;80. letech bylo
          o&nbsp;trochu volnější, než ve zbytku Východního bloku, sehnali
          neprodané ZX&nbsp;Spectra+, importovali je do Jugoslávie, vyrobili
          takový pěkný kryt s&nbsp;nápisem Delta, kterým překryli logo
          &bdquo;Sinclair&rdquo;. Zespoda, kde byl poměrně dlouhý text
          o&nbsp;tom, že se jedná o&nbsp;ZX&nbsp;Spectrum+ od společnosti
          Sinclair Research, vyrobeno ve Velké Británii &ndash; tak to bylo
          přefrézované a&nbsp;překryto velkou ohyzdnou nálepkou s&nbsp;nápisem
          &bdquo;Made in UK&rdquo;. Aby to ještě vylepšili, tak zepředu ze všech
          těch počítačů vydloubli to slavné logo duhy, takže je tam jenom
          prázdný obdélník. Takže je to vlastně takový
          &bdquo;klon-neklon&rdquo;, protože je to Spectrum, jenom je z&nbsp;něj
          všude odstraněno to, že je to Spectrum. Když si s&nbsp;tím dá člověk
          práci, tak krom&rsquo; toho přefrézováného nápisu (který už nikdy
          nevrátíte), tak se z&nbsp;toho to Spectrum dá zpátky vyrobit.
        </p>
      </FigureImage>
      <p>
        Co se týče těch dalších klonů, tak tam je to tak, jak jsem říkal na
        začátku: Ten počítač je navržen tak jednoduše a&nbsp;obsahoval až na
        jeden zákaznický obvod ULA jenom standardně sehnatelné součástky, že
        nebyl problém ani v&nbsp;Sovětském svazu (později v&nbsp;Rusku) ty
        součástky sehnat a&nbsp;počítač si tak navrhnout. Vyrobit klon Commodore
        64, který má několik čipů, co vyráběl jenom Commodore a&nbsp;už se pak
        nedaly nikde sehnat, natožpak vyrobit (protože třeba od zvukového čipu
        neměl ani Commodore dokumentaci od první generace), tak to nebylo možné,
        ale ve Spectru nic takového nebylo.
      </p>
      <p>
        Každý stát Východního bloku měl svůj klon ZX&nbsp;Spectra a&nbsp;návrh,
        který Sinclair udělal o&nbsp;10 let dřív, než se ty počítače začali
        klonovat, způsobil to, že miliony lidí ve Východním bloku, kteří by
        počítač jinak neměli, ho díky klonům mít mohly a&nbsp;mohli se naučit
        programovat a&nbsp;používat počítač.
      </p>
      <FigureImage
        src='/res/s01e06/klony.jpg'
        caption='koláž rôznych klonov ZX Spectra z rôznych krajín'
        width={2000}
        height={2000}
        isCaptionVisible
      />
      <p>
        V Rusku se to dělo v&nbsp;podstatě až do konce století, kdy ty klony
        vznikaly né jako retro, ale jako skutečné počítače, které se používaly
        &ndash; takže tam byly klony se 16-ti megabajtami paměti, které se dali
        připojit na internet a&nbsp;číst si na nich poštu. Skončilo to vlastně
        až s&nbsp;dobou, kdy se tam zlevnily &bdquo;písíčka&rdquo; až tak, že si
        je mohli dovolit. Pak to zase rázem všechno skončilo, protože oni to
        nedělali jako zálibu, ale z&nbsp;nutnosti.
      </p>
      <p>
        Kdyby to Sinclair navrhnul jinak, nebo by těch zákaznických čipů bylo
        víc, tak by v&nbsp;životě tolik klonů nemohlo vzniknout.
      </p>
      <blockquote className='question'>
        Na našom území sa vyrábali Didaktik Gama, neskôr Didaktik M aj Kompakt
        a&nbsp;boli to tiež klony ZX&nbsp;Spectra. Budem o&nbsp;nich hovoriť
        s&nbsp;mojimi hosťami v&nbsp;epizóde{' '}
        <EpisodeLink episode={20}>
          #20: Ďalšie československé 8-bitové počítače
        </EpisodeLink>
        . Ďakujem ti Martin za rozhovor, bolo to veľmi výživné rozprávanie
        a&nbsp;myslím, že tento diel mal zatiaľ najlepšiu faktografickú úroveň.
      </blockquote>
      <p>
        Já děkuju za pozvání a&nbsp;doufám, že to třeba někdy v&nbsp;budoucnu
        zopakujeme a&nbsp;přeju hodně dalších dílu Zapečených procesorů.
      </p>
    </EpisodeWrapper>
  );
}
