import * as React from 'react';

import { EpisodeLink, EpisodeWrapper, FigureImage } from '@/components/common';

export default function S01E02() {
  return (
    <EpisodeWrapper episode={2}>
      <h2>Nástup éry 16-bitových počítačov</h2>
      <p>
        Ako sme minule hovorili, mikropočítače na prelome 70. a&nbsp;80. rokov
        zohrali kľúčovú úlohu v&nbsp;histórii výpočtovej techniky
        a&nbsp;preniesli tak tieto technológie z&nbsp;výskumných ústavov do škôl
        a&nbsp;domácností po celom svete.
      </p>
      <p>
        Ten rozvoj 8-bitových počítačov samozrejme neustal, pokračoval ďalej
        a&nbsp;následný technický vývoj priniesol nové procesory &ndash;
        tentoraz už <b>16-bitové</b>. To znamenalo, že dokázali počítať
        s&nbsp;násobne väčšími číslami čo výrazne uľahčovalo operácie procesora
        a&nbsp;prenosy medzi ním a&nbsp;okolím. Často mali aj dômyselnejšiu
        inštrukčnú sadu čo tiež zvyšovalo ich možnosti. Neskôr sa dokonca začali
        pripájať ku matematickým koprocesorom, ktoré už rátali s&nbsp;číslami
        s&nbsp;pohyblivou desatinnou čiarkou.
      </p>
      <p>
        Takto vylepšené procesory však mali obrovský náskok pre 8-bitmi nie len
        výpočtovým výkonom. Zvládali totiž manažovať viac pamäte, omnoho väčšie
        grafické rozlíšenia a&nbsp;režimy, a&nbsp;niektoré platformy priniesli
        aj nové zvukové možnosti. Bolo samozrejmosťou, že periférne zariadenia,
        ako aj grafické či zvukové procesory mali priamy prístup do pamäte
        a&nbsp;procesor sa tak nezaťažoval zložitým lopatovaním dát.
      </p>
      <FigureImage
        src='/res/s01e02/michael_dell.jpg'
        caption='Michael Dell a liaheň PC (1985)'
        mediaSource='Computer History Museum, kolorizované'
        figureClass='right-20rem'
        width={560}
        height={560}
        isCaptionVisible
        isZoomable
      >
        <h3>Čo bol prvý 16-bitový počítač?</h3>
        <p>
          Často sa zjednodušene hovorí, že prvým 16-bitom bolo <b>IBM PC</b>,
          ktoré sa predávalo od roku 1981, ale nie je tomu celkom tak. Bol totiž
          osadený procesorom Intel 8088, čo bol taký hybrid medzi 8-bitom
          a&nbsp;16-bitom, ktorý IBM použilo iba preto, že im firma Intel dala
          výhodnú cenovú ponuku (a&nbsp;mali toho asi plné sklady). Poriadny
          16-bit bolo až IBM PC AT, ľudovo nazývaná &bdquo;dvaosemšestka&rdquo;,
          ktorá prišla o&nbsp;tri roky neskôr, v&nbsp;roku 1984.
        </p>
        <p>
          Inak a&nbsp;o&nbsp;rok nato, v roku 1985 Michael Dell otvára svoju
          prvú liaheň na skladané &bdquo;pécečká&rdquo;. Áno,{' '}
          <b>spoločnosť Dell</b> oslávila v roku 2024 svoje 40. výročie!
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e02/ti99a.jpg'
        caption='Texas Instruments TI-99/4 (1979)'
        mediaSource='oldcomputers.net'
        figureClass='left-20rem'
        width={1000}
        height={700}
        isCaptionVisible
        isZoomable
      >
        <p className='!indent-0 italic'>
          Tak aký bol teda naozaj prvý 16-bitový počítač?
        </p>
        <p>
          <b>Texas Instruments TI-99/4</b>, ktorý vyšiel už v&nbsp;roku 1979.
          A&nbsp;že ste o&nbsp;ňom nikdy nepočuli? Hm, ani sa nedivím, lebo
          nebolo o&nbsp;čo stáť:
        </p>
        <p>
          Kalkulačková klávesnica, zavádzanie programov z&nbsp;cartrigov, nejaký
          ich vlastný procesor (pri ktorom sú dodnes pochybnosti, či ho naozaj
          možno považovať za 16-bitový), značná uzavretosť platformy
          a&nbsp;biedna aplikačná základňa. Proste fail. 🤷🏻‍♂️
        </p>
      </FigureImage>
      <p>
        Poďme sa radšej pobaviť o&nbsp;známejších počítačoch, ktoré prichádzali
        v&nbsp;krátkom čase za sebou a&nbsp;všetky spája rovnaký 16-bitový
        procesor - <b>legendárna Motorola 68000</b>.
      </p>
      <FigureImage
        src='/res/s01e02/mc68k.jpg'
        caption='Motorola 68000'
        mediaSource='CPCWiki'
        className='dark'
        width={1280}
        height={500}
      />
      <h3>16-bity od Apple</h3>
      <FigureImage
        src='/res/s01e02/apple_lisa.jpg'
        caption='Apple Lisa (1983)'
        mediaSource='MacStories'
        figureClass='right-24rem'
        width={1800}
        height={1182}
        isCaptionVisible
        isZoomable
      >
        <p>
          Prvenstvo drží <b>Apple Lisa</b> &ndash; najrevolučnejší prepádak
          v&nbsp;dejinách ľudstva.
        </p>
        <p>
          Vývoj tohoto ambiciózneho počítača začal už v&nbsp;roku 1978.
          <br />
          Cieľom bolo integrovať top-notch technológie:
        </p>
        <ul>
          <li> multi-tasking</li>
          <li>
            okenné grafické používateľské prostredie{' '}
            <EpisodeLink episode={16}>ovládané myšou</EpisodeLink>
          </li>
          <li> zabudovaný kancelársky balík</li>
          <li>
            objektovo orientované programovanie vlastných aplikácií
            a&nbsp;pomocných skriptov
          </li>
        </ul>
        <p>A to sa bavíme ešte stále o&nbsp;prelome 70. a&nbsp;80. rokov!</p>
        <p>
          Žiaľ, stálo to hromadu prachov a&nbsp;vývoj trval dlhšie, než sa
          Stevovi Jobsovi a&nbsp;predstavenstvu páčilo. Boli z&nbsp;toho
          mrzutosti, ale v&nbsp;roku 1983, keď Lisa konečne vyšla, tak všetci
          sedeli na zadkoch s&nbsp;otvorenými ústami, lebo to bolo ako
          z&nbsp;inej planéty. Ľudstvo ani v&nbsp;roku 1983 nebolo na také niečo
          pripravené. A&nbsp;inak jasné, nebolo pripravené ani na tú cenovku:
          &bdquo;$10.000&rdquo; (čo bol problém aj pre Americké podniky tej
          doby). Hlavne, keď sa všade naokolo predávali IBM PC a&nbsp;ich klony
          ako teplé rožky s&nbsp;úplne inými cenami a&nbsp;rastúcou softvérovou
          výbavou.
        </p>
      </FigureImage>
      <FigureImage
        src='/res/s01e02/jobs_mac.jpg'
        caption='Steve Jobs a Apple Macintosh (1984)'
        mediaSource='Jeffrey Aaronson, z knihy "Steve & i"'
        figureClass='left-20rem'
        width={469}
        height={650}
        isCaptionVisible
      >
        <p>
          Steva Jobsa to ale neodradilo a&nbsp;už o&nbsp;pol roka na to,
          v&nbsp;januári 1984 prichádza na trh <b>Apple Macintosh</b>:
        </p>
        <ul>
          <li> 128 kilobajtov pamäte</li>
          <li> poháňaný Motorolou 68000 s&nbsp;rýchlosťou necelých 8 MHz</li>
          <li>
            monochromatický grafický procesor s (na tú dobu) úžasne jemným
            rozlíšením 512&times;342 pixelov
          </li>
          <li> zabudovaná disketová jednotka</li>
          <li>
            z&nbsp;Apple Lisa prevedené okenné grafické používateľské prostredie
            ovládané myšou
          </li>
          <li>
            operačný systém s&nbsp;kompletným kancelárskym balíkom
            a&nbsp;grafickými programami
          </li>
        </ul>
        <p>
          To z&nbsp;neho robilo revolučný stroj! Navyše, už mal priaznivú
          cenovku 2&thinsp;500 dolárov. Macintosh bol okamžitý hit a&nbsp;len
          v&nbsp;prvom roku sa predalo 100&thinsp;000 kusov. Do konca roka
          prichádza ešte rozšírený model s&nbsp;512&thinsp;KiB pamäte
          a&nbsp;portami na pripojenie periférií, pričom toto rozšírenie si za
          malý peniaz mohli kúpiť aj majitelia modelu 128 a&nbsp;sami si ho
          namontovať.
        </p>
        <p>
          Ďalší evolučný krok bol <b>Macintosh Plus</b> v&nbsp;januári 1986,
          ktorý mal už 1&thinsp;MiB pamäte, rozšíriteľný až na 4 megabajty,
          3.5-palcové diskety a&nbsp;možnosť pripojiť pevný disk na SCSI porty.
        </p>
      </FigureImage>
      <p>
        Všetky tieto počítače však boli ako kancelárske krysy: ticho, možno
        občas pípli&hellip;
      </p>
      <h3>Amiga!</h3>
      <p>
        V tom čase však uzrela svetlo sveta platforma, ktorá naopak, o&nbsp;sebe
        dala pomerne hlasno znať a&nbsp;jej ozvenu počuť až dodnes. Detailne sa
        o&nbsp;nej zhováram s&nbsp;mojim hosťom{' '}
        <EpisodeLink episode={12}>v&nbsp;dvanástej epizóde</EpisodeLink>.
      </p>
      <FigureImage
        src='/res/s01e02/amiga_1000.jpg'
        caption='Commodore Amiga 1000 (1985)'
        mediaSource='Blake Patterson, CC BY 2.0'
        width={1627}
        height={950}
        isCaptionVisible
        isZoomable
      />
      <p>
        <b>Commodore Amiga 1000</b> prišla v&nbsp;lete 1985 a&nbsp;narozdiel od
        vtedy bežných počítačov to bola taká multimediálna atómovka. Vďaka
        zvukovému čipu Paula bolo možné prehrávať samplovaný zvuk v&nbsp;4
        kanáloch. To všetko sa mohlo prehrávať bez zaťaženia procesora, pretože
        čip mal priamy prístup do pamäte a&nbsp;vy ste mu iba určili, kde
        v&nbsp;pamäti sa nachádza zvuková vzorka, aká je dlhá, v&nbsp;ktorom
        kanáli to má pustiť a&nbsp;ako hlasno. Hovoríme tu o&nbsp;dobe, keď
        počítače IBM&nbsp;PC či Macintosh iba pípali.
      </p>
      <p>
        Grafický procesor Denise zvládal rozlíšenia až 640&times;256, kde ste
        mohli použiť 32 farieb z&nbsp;palety 4096-tich farieb. A&nbsp;existoval
        trik, kde bolo možné používať všetkých 4-tisíc farieb naraz, alebo ešte
        dokonca zdvojnásobiť zvislé rozlíšenie. Do toho 8 sprajtov
        a&nbsp;takzvaný &apos;<b>blitter</b>&apos;, ktorý vám &bdquo;lusknutím
        inštrukcie procesora&rdquo; preniesol výrez obrázka z&nbsp;miesta na
        miesto. Neuveriteľné možnosti v&nbsp;porovnaní s&nbsp;vtedajšou
        konkurenciou, aj tou, s&nbsp;ktorou Amiga zdieľala procesor Motorola
        68000.
      </p>
      <p>
        Dodávala sa s&nbsp;pamäťou 256 KiB, neskoršie modely mali až 1 MiB.
        Samozrejmosťou bola 3.5&quot; disketová mechanika, z&nbsp;ktorej sa
        zavádzal myšou ovládaný okenný systém Workbench, ktorý bol na začiatku
        predaja dosť poruchový. To celé ste si v&nbsp;tej dobe v&nbsp;balíku
        s&nbsp;monitorom mohli kúpiť za niečo vyše 1&thinsp;200 dolárov.
      </p>
      <FigureImage
        src='/res/s01e02/amiga_500.jpg'
        caption='Commodore Amiga 500 (1987)'
        mediaSource='Christian Cawley, Gaming Retro UK'
        figureClass='right-24rem opaque-ms'
        width={1288}
        height={784}
        isCaptionVisible
        isZoomable
      >
        <p>
          O dva roky neskôr potom prišla o&nbsp;čosi málo zjednodušená{' '}
          <b>Amiga&nbsp;500</b> za polovičnú cenovku a&nbsp;to už bola totálna
          masovka. Len &bdquo;päťstoviek&rdquo; sa predalo celkovo 2,6 milióna!
        </p>
        <p>
          Amige sa tak podarilo to, čo sa predtým podarilo Commodore 64. Doručiť
          ľudový počítač do detských izieb a&nbsp;obývačiek a&nbsp;skĺbiť
          v&nbsp;ňom výučbový a&nbsp;kreatívny nástroj, vlastnosti kancelárskeho
          počítača s&nbsp;hernou konzolou. Pre tisíce tvorivých ľudí - grafikov
          a&nbsp;hudobníkov &ndash; to bol štartovací bod ich kariér. Práve tu
          sa položili základy <EpisodeLink episode={3}>demoscény!</EpisodeLink>
        </p>
      </FigureImage>
      <h3>Atari ST</h3>
      <p>
        Ešte pred Amigou prišla na svet ďalšia 16-bitová legenda &ndash; Atari
        ST. Mala rovnaký procesor, ale už 512 KiB pamäte, grafické rozlíšenie
        bolo až 640&times;400 pri monochromatickom zobrazení, alebo polovičné
        rozlíšenie v&nbsp;16-tich farbách z&nbsp;512-farebnej palety. Na zvuk
        používal šikovný 3-kanálový programovateľný zvukový generátor, ktorý bol
        predchodcom čipu AY-3-8910, ktoré neskôr začal Sinclair montovať do
        počítača ZX&nbsp;Spectrum&nbsp;128. To, čo tento počítač odlišovalo od
        ostatných, bol zabudovaný MIDI interfejs, ktorý umožnil priame
        pripojenie ku syntezátorom, čiže ho dostalo do segmentu
        poloprofesionálnych a&nbsp;profesionálnych hudobníkov.
      </p>
      <p>
        O&nbsp;tom sa viac dozviete v&nbsp;epizóde{' '}
        <EpisodeLink episode={14}>MIDI zapečené v&nbsp;počítačoch</EpisodeLink>
        &hellip;
      </p>
      <FigureImage
        src='/res/s01e02/atari_520st.jpg'
        caption='Atari 520ST (1985)'
        mediaSource='Felix Winkelnkemper, CC BY-SA 4.0'
        figureClass='opaque-ms'
        width={2000}
        height={1000}
        isCaptionVisible
        isZoomable
      />
      <p>
        <b>Atari 520ST</b>, ako sa prvý model volal, začali predávať neoficiálne
        už na jar roku 1985, oficiálne v&nbsp;lete, ale operačný systém TOS bol
        ešte stále poruchový a&nbsp;ladili ho do konca roka. Predával sa
        s&nbsp;externou 3.5-palcovou disketovou mechanikou, pomocou ktorej ste
        si systém potom mohli zavádzať. V&nbsp;ďalších výrobných šaržách však
        operačný systém TOS začali integrovať do ROM a&nbsp;žiadne otravné
        zavádzanie systému z&nbsp;diskety nebolo potrebné. Vlastníkov prvých
        šarží muselo &bdquo;porážať&rdquo;. 😀
      </p>
      <FigureImage
        src='/res/s01e02/atari_1040st_detail.jpg'
        caption='detail vylepšených verzií Atari ST'
        mediaSource='Fred Bellaiche, Quantum Bits'
        figureClass='left-20rem opaque-ms'
        width={613}
        height={425}
        isCaptionVisible
        isZoomable
      >
        <p>
          Rok nato prichádza model s&nbsp;1 MiB pamäte a&nbsp;o&nbsp;čosi neskôr
          aj mierna zmena dizajnu a&nbsp;model <b>1040ST</b> so zabudovanou
          disketovou mechanikou a&nbsp;zdrojom napájania. Bol to tak prvý
          počítač s&nbsp;jedným megom pamäte a&nbsp;farebným grafickým operačným
          systémom za menej ako 1&thinsp;000 dolárov &ndash; drží aj zápis
          v&nbsp;Guinessovej knihe rekordov.
        </p>
        <p>
          Len za prvý rok sa všetkých modelov Atari ST predalo viac ako
          50&thinsp;000 kusov! Vo svojich ďalších iteráciach <b>Mega</b> a&nbsp;
          <b>STE</b> prinieslo Atari ďalšie skvelé vlastnosti, ako napríklad
          blitter alebo zvukový čip porovnateľný s&nbsp;Amigou.
        </p>
      </FigureImage>
      <p>
        Detailne o&nbsp;všetkých modeloch Atari ST a&nbsp;o&nbsp;pokračovateľovi
        STčka, <b>Atari Falcon</b> som sa zhováral s&nbsp;Mirom Kropáčkom
        v&nbsp;epizóde{' '}
        <EpisodeLink episode={11}>Viacbitové modely značky Atari</EpisodeLink>.
      </p>
      <h3>Sinclair a 16-bitov?</h3>
      <p>
        Toto všetko sa dialo za veľkou mlákou, ale čo starý kontinent? Sir Clive
        Sinclair nechcel zaspať na vavrínoch a&nbsp;už pred vydaním ZX-Spectra,
        pri ktorom bol inak veľmi sklamaný tým, že sa stal, jeho slovami
        &bdquo;hračkou pre deti&rdquo;, začal pracovať na novej mašine, ktorú
        smeroval viac do profesionálnej sféry, aj keď so stále ľudovo nízkou
        cenovkou. Dal tomu aj honosný názov Quantum Leap. Počítač mal krásny
        vizuálny dizajn, ale žiaľ, vývoj <b>Sinclair QL</b> sa potýkal
        s&nbsp;množstvom problémov, kompromisov v&nbsp;návrhu
        a&nbsp;súčiastkovej základni, no a&nbsp;napokon aj oneskorení vo výrobe.
      </p>
      <FigureImage
        src='/res/s01e02/sinclair_ql.jpg'
        caption='Sinclair QL (1984)'
        mediaSource='Richard Kettlewell, CC BY-SA 2.5'
        width={1562}
        height={452}
        isZoomable
      />
      <p>
        S&nbsp;veľkou pompou Sinclair oznámil začiatok predaja už v&nbsp;januári
        1984, ale počítač bol ešte veľmi ďaleko od hotového produktu. Predvádzal
        vlastne ešte iba funkčný prototyp, postavený na lacnejšej
        a&nbsp;obmedzenejšej verzii dnes už spomínaného procesora. Motorola
        68008 bol taký hybrid medzi osembitom a&nbsp;32-bitom. Aby to bolo ešte
        lacnejšie, skĺzol od vtedy už bežných disketových mechaník ku
        Sinclairovmu vynálezu úložného systému na miniatúrne a&nbsp;rýchlo sa
        točiace páskové kazetky &ndash; <b>Microdrive</b> &ndash; opäť lacné,
        ale nespoľahlivé.
      </p>
      <p>
        Trvalo ešte niekoľko mesiacov, kým sa objednávky začali dostávať
        k&nbsp;ich majiteľom. Počítače boli poruchové, operačný systém bol
        nedoladený a&nbsp;vykazoval chyby. Práca
        s&nbsp;&bdquo;microdrajvami&rdquo; bola otrava a&nbsp;neznámy procesor
        bol prekážkou pre vývojárov nových aplikácií, hlavne keď všetci boli
        u&nbsp;produktov Sinclair zvyknutí na Zilog Z80.
      </p>
      <p>
        Mohlo by sa zdať, že hovoríme o&nbsp;neúspechu, ale za ten krátky čas,
        1,5 roka celkovej existencie na trhu sa predalo užasných 150&thinsp;000
        kusov týchto počítačov. Ani to však nestačilo a&nbsp;prispelo ku krachu
        Sinclair Research Ltd.
        <br />
        Všetky detaily skvele opísal môj hosť Martin Kukač v&nbsp;
        <EpisodeLink episode={22}>
          22. epizóde: Život a dielo Cliva Sinclaira
        </EpisodeLink>
        .
      </p>
    </EpisodeWrapper>
  );
}
