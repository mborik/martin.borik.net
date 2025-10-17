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

export default function S01E07() {
  return (
    <EpisodeWrapper episode={7}>
      <FigureEpisodeLogo episode={7} figureClass='right-20rem'>
        <h2>ZX Spectrum a hudobná tvorba</h2>
        <p>
          Dnes budeme pokračovať vo výprave za dejinami tvorby hudby na
          počítačoch. V&nbsp;predošlej časti tejto série, v&nbsp;epizóde #5 sme
          si hovorili o&nbsp;novej kapitole zvuku počítačov a&nbsp;príchode
          hudobných programov, takzvaných trackeroch, ktoré poznačili celú túto
          éru. Táto nová vlna však, ako mávnutie motýlích krídel, spôsobila
          výbuch kreativity aj tam, kde to už nikto nečakal&hellip;
        </p>
        <Heading id='navrat-nemrtvych'>Návrat nemŕtvych</Heading>
        <p>
          Na prelome 80. a&nbsp;90. rokov zažili 8-bitové platformy
          znovuzrodenie a&nbsp;nakoplo to tvorbu hier, ale aj demoscénu. Treba
          si však najskôr uvedomiť, že prečo a&nbsp;hlavne <b>kde</b> sa to celé
          odohrávalo.
        </p>
        <FigureImage
          src='/res/s01e07/zx_spectrum_128.jpg'
          caption='Sinclair ZX Spectrum 128K (1986)'
          mediaSource='Bill Bertram, CC-BY-2.5'
          figureClass='left-24rem'
          width={2211}
          height={1418}
          isCaptionVisible
          isZoomable
        >
          <p>
            Krajiny za Železnou oponou po jej páde zažívali nevídaný boom
            8-bitových platforiem, ktoré sme si konečne mohli zaobstarať
            a&nbsp;boli aj finančne dostupné. Väčšina týchto počítačov sa na
            západe už dávno prestala vyrábať a&nbsp;tamojší používatelia sa ich
            zbavovali a&nbsp;nahradzovali svoje vybavenie za 16-bitové mašiny.
            Aj na našom území, tí šťastnejší, ktorým sa v&nbsp;minulosti
            podarilo dostať k&nbsp;8-bitovým počítačom a&nbsp;v&nbsp;90. rokoch
            mali finančné možnosti, sa 8-bitov takisto postupne zbavovali
            a&nbsp;prechádzali na Amigy, STčká alebo PC. V&nbsp;krajinách
            bývalého východného bloku tak začali tieto malé zázraky ožívať
            v&nbsp;rukách nových používateľov, ktorí na nich začali tvoriť nové
            a&nbsp;nové veci.
          </p>
        </FigureImage>
        <h4 className='clear-both mt-8'>
          &bdquo;Nikto nám nepovedal, že sa to nedá&hellip;&rdquo;
        </h4>
        <p>
          Ako rád hovorí môj dobrý a&nbsp;veľmi vážený priateľ{' '}
          <b>Slavo Labský</b> alias <b>Busy</b> (ktorý stál v&nbsp;prvej línii
          tejto obrody ZX&nbsp;Spectra na prelome 80. a&nbsp;90. rokov), že oni
          k&nbsp;tomu ZX&nbsp;Spectru prišli a&nbsp;nikto im nepovedal, že sa{' '}
          <i>&bdquo;niečo nedá&rdquo;</i>. A&nbsp;tak skrátka prelamovali
          hranice toho, čo bolo dovtedy považované za možné a&nbsp;prekonávali
          dovtedy videné.
        </p>
        <Heading id='na-zaciatku-bol-soundtracker'>
          Na začiatku bol Soundtracker
        </Heading>
        <FigureImage
          src='/res/s01e07/bzyk_soundtracker.png'
          caption='Bzyk of Pentagram - Soundtracker [1992]'
          figureClass='right-24rem'
          width={512}
          height={384}
          isCaptionVisible
          isZoomable
        >
          <p>
            Zdá sa, že to všetko začalo v&nbsp;Poľsku v&nbsp;roku 1990&hellip;
            <br />
            Vtedy <b>Jarosław Burczyński</b> alias <b>Bzyk</b> vytvoril svoj
            Soundtracker pod hlavičkou demogrupy Pentagram, pre zvukový čip
            AY-3-8912 inšpirovaný Amigáckymi trackermi. Možno ani on sám
            netušil, čo tým odštartuje.
          </p>
          <FigureAudio
            src='/res/s01e07/soundtracker_demo.mp3'
            caption='Bzyk - Stracker (demosong)'
            className='!flex w-auto clear-left'
          />
        </FigureImage>
        <p>
          Na voľne šíriteľný softvér to bol až prekvapivo prepracovaný program.
          Plnohodnotnú tvorbu muziky v&nbsp;stĺpcoch dopĺňal editor nástrojov
          a&nbsp;takzvaných ornamentov.
        </p>
        <p>
          Nástroje tu inak tiež nazval &bdquo;sample&rdquo;, je to však niečo
          celkom iné, ako tie PCM sample, o&nbsp;ktorých sme hovorili
          v&nbsp;epizóde #5. Tu si ich môžete predstaviť ako krátky priebeh
          hlasitostnej a&nbsp;šumovej vzorky pre každú päťdesiatinu sekundy,
          vrátane prípadného jemného rozladenia od základného tónu. To spolu
          vytvorí charakter zvuku a&nbsp;jeho doznev priradením základného tónu.
        </p>
        <Heading as='h4' id='tvorime-zvuky-na-ay-3-8910'>
          Tvoríme zvuky na AY-3-8910
        </Heading>
        <FigureImage
          src='/res/s01e07/sample_snare.png'
          caption='sample: "snare"'
          figureClass='right-13rem'
          width={210}
          height={320}
          isCaptionVisible
        >
          <FigureImage
            src='/res/s01e07/sample_kick.png'
            caption='sample: "kick"'
            figureClass='left-10rem'
            width={160}
            height={320}
            isCaptionVisible
          >
            <p>
              Ak vytvoríme krátky nástroj s&nbsp;prudkým glissandom nadol,
              priradíme ho basovému tónu a&nbsp;v&nbsp;prvej päťdesiatine
              primixujeme šum, získame zvuk pripomínajúci <b>veľký bubon</b>{' '}
              (ľudovo <i>&bdquo;kopák&rdquo;</i>).
            </p>
          </FigureImage>
          <p className='mt-5'>
            Keď nástroj s&nbsp;glissandom nadol predĺžime a&nbsp;necháme šumieť
            po celý čas, ale pridáme postupné stišovanie, pričom znižujeme
            frekvenciu šumu, získame zvuk pripomínajúci <b>malý bubon</b>{' '}
            (ľudovo <i>&bdquo;rytmičák&rdquo;</i>).
          </p>
          <FigureAudio
            src='/res/s01e07/sample_demo.mp3'
            caption='ukážka samplov "kick" a "snare" vytvorených na AY-3-8910'
            className='!flex w-auto'
          />
        </FigureImage>
        <p className='clear-both'>
          <b>Ornament</b> je zas označenie pre arpeggio, trilok, alebo krátky
          priebeh intervalov od základného tónu, ktorý sa môže opakovať.
          Predstavte si rozložený akord, napríklad durový, ktorý má intervaly 0,
          4 a&nbsp;7 poltónov od základného tónu (teda napríklad C, E, G, čiže
          C-dur). Keď každú päťdesiatinu sekundy striedame tieto intervaly, tak
          nadobudneme pocit, že hrá celý akord a&nbsp;ušetríme tým dva
          kanály&hellip; alebo rýchlosť striedania intervalov spomalíme, ako
          v&nbsp;druhej časti ukážky:
        </p>
        <FigureImage
          src='/res/s01e07/ornament_demo.png'
          caption='príklad ornamentu: arpeggio C-dur (0,4,7)'
          figureClass='left-10rem'
          width={147}
          height={72}
        >
          <FigureAudio
            src='/res/s01e07/ornament_demo.mp3'
            caption='ukážka "ornamentov", teda arpeggií, ktorými sa vytvára dojem akordov'
            className='!flex w-auto'
          />
        </FigureImage>
        <p className='clear-both'>
          Ako ste počuli, AY-3-8910 toho nemá veľa na nastavovanie. No napriek
          tomu, že je to len priamočiare ovládanie tónu, šumu a&nbsp;pre
          pokročilých aj ovládanie obálky, tak autor hudby má tieto vlastnosti
          plne pod svojou kontrolou a&nbsp;dá sa z&nbsp;to veľa vyťažiť.
        </p>
        <Heading id='zrod-8-bitovej-demosceny'>
          Zrod 8-bitovej demoscény
        </Heading>
        <p>
          Vráťme sa ale k&nbsp;Soundtrackeru a&nbsp;jeho výnamu. Bzyk ako člen
          demoscény na odprezentovanie hudobných možností trackera vytvoril demo
          so svojou hudobnou tvorbou, ktorá vznikla v&nbsp;tomto jeho trackeri.
          Treba si uvedomiť, že dovtedy demá na ZX&nbsp;Spectre obsahovali hudbu
          vycrackovanú z&nbsp;komerčných hier, kde to slávni autori písali vo
          vlastných prehravacích rutinách, v&nbsp;dátach, priamo
          v&nbsp;strojovom kóde&hellip;
        </p>
        <p>
          A zrazu tu bol používateľsky príjemný hudobný softvér, ktorý ovládol
          každý, kto mal aspoň aké-také hudobné základy a&nbsp;tracker mu
          nakoniec vytvoril kompilát aj s&nbsp;hradlom, ktoré stačilo vložiť do
          svojho dema či hry. Začali sa preto na demoscéne bývalého východného
          bloku rojiť nové demomakerské skupiny, ktoré vydávali nové a&nbsp;nové
          demá, ale už tu bolo niečo inak: Obsahovali totiž autorskú, pôvodnú
          hudbu.
        </p>
        <Heading id='polska-uderka'>Poľská úderka {flag_pl()}</Heading>
        <Heading as='h4' id='agent-x'>
          Agent-X
        </Heading>
        <p>
          Kraľovali tomu hlavne poľské skupiny, ako napríklad The Jokers, Exodus
          či Pentagram &ndash; a&nbsp;tieto skupiny spája meno jedného
          hudobníka, ktorý navždy poznačil hudobný katalóg ZX&nbsp;Spectra
          a&nbsp;zadefinoval úplne nový zvuk tejto doby.
        </p>
        <FigureAudio
          src='/res/s01e07/agent_x_multiorn.mp3'
          caption='Agent-X (Ed Polinski) - Multiorn [1992]'
          figureClass='right-20rem'
          className='mb-8'
        >
          <p>
            To meno je <b>Ed Polinski</b> alias <b>Agent-X</b>, ktorý začal
            chŕliť svoje jazz-rockovo ladené skladby, plné originality,
            s&nbsp;hutnou basovou linkou, a&nbsp;kreatívne využívajúc dovtedy
            neprebádanú vlastnosť čipu AY: <b>hardvérové obálky</b>.
          </p>
        </FigureAudio>
        <Heading as='h4' id='ziutek'>
          Ziutek
        </Heading>
        <FigureAudio
          src='/res/s01e07/ziutek_lyra3.mp3'
          caption='Ziutek (Andrzej Siuda) - Lyra II part 3 [1991]'
          figureClass='left-20rem'
          className='mb-4'
        >
          <p>
            Ďalším známym hudobníkom z&nbsp;poľskej scény bol{' '}
            <b>Andrzej Siuda</b> alias <b>Ziutek</b>, ktorý pôsobil
            v&nbsp;skupine ESI. Jeho tvorba je zložená prevažne s&nbsp;prerábok
            známych piesní, často komerčných hitov, ale vždy veľmi kreatívne
            a&nbsp;s&nbsp;vlastným originálnym štýlom&hellip;
          </p>
        </FigureAudio>
        <p>
          Tak, ako rýchlo táto poľská úderka prišla, tak pomerne rýchlo zmizla
          a&nbsp;prešla na modernejšie platformy.
          <br />
          Kde to ďalej žilo, bolo, ako minule Martin spomínal, Rusko,
          o&nbsp;ktorom však hovoriť nechcem. 😒
        </p>
        <Heading as='h3' id='zlate-ceske-rucicky'>
          Zlaté české ručičky {flag_cz()}
        </Heading>
        <p>
          Vráťme sa radšej domov, pretože v&nbsp;90. rokoch začala
          v&nbsp;Československu zlatá éra ZX&nbsp;Spectra &ndash;
          s&nbsp;množstvom nových hier, diem a&nbsp;časopisov, ktoré sa mu
          venovali&hellip; no a&nbsp;samozrejme hudobníkov! Tých
          najvýznamnejších vám teraz predstavím:
        </p>
        <Heading as='h4' id='fuxoft'>
          Fuxoft
        </Heading>
        <p>
          Ešte predtým, ako prišli trackery tu zažiaril hudobník, ktorý trackery
          nikdy nepotreboval. Už koncom 80. rokov si totiž napísal vlastnú
          hudobnú rutinu Amadeus, v&nbsp;ktorej v&nbsp;dátach napísal desiatky
          fantastických hudieb a&nbsp;tie sa okrem diem dostali aj do komerčných
          hier. František Fuka sa narodil v&nbsp;Prahe a&nbsp;už v&nbsp;rannom
          detstve sa dostal k&nbsp;počítačom. Československá televízia si ho
          chodievala natáčať ako zázračné dieťa, čo dokáže s&nbsp;počítačom také
          veci, o&nbsp;ktorých dospelí vtedy nemali ani potuchy. Okrem toho mal
          klasické hudobné vzdelanie, takže keď sa dostal ku ZX&nbsp;Spectru 128
          a&nbsp;objavil čaro AYpsilonky, naprogramovanie hradla a&nbsp;tvorba
          vlastnej hudby na seba nenechala dlho čakať.
        </p>
        <FigureAudio
          src='/res/s01e07/fuxoft_jet_story.mp3'
          caption='Fuxoft (František Fuka) - Jet Story [1992]'
          figureClass='right-20rem'
          className='mb-4'
        >
          <p>
            Jeho nasledujúca pôvodná skladba napísaná pre hradlo Amadeus bola
            neskôr použitá ako titulná skladba v&nbsp;komečne úspešnej akčnej
            arkádovej strieľačke <b>&bdquo;Jet Story&rdquo;</b>. Nech sa páči,{' '}
            <b>František Fuka</b> alias <b>Fuxoft</b>:
          </p>
        </FigureAudio>
        <Heading as='h4' id='qjeta'>
          Qjeta
        </Heading>
        <FigureAudio
          src='/res/s01e07/qjeta_agent_x_inspiration.mp3'
          caption='Qjeta - Agent-X Inspiration [1993]'
          figureClass='left-20rem'
          className='mb-4'
        >
          <p>
            Ďalší významný hudobník, ktorý zanechal nezmazateľnú stopu na Českej
            ZX&nbsp;Spectrum scéne desiatkami svojich skladieb, ktoré sú výrazné
            rytmikou, basovou linkou a&nbsp;silnými melódiami je{' '}
            <b>Petr Krevňák</b> alias <b>Qjeta</b>.
          </p>
        </FigureAudio>
        <Heading as='h4' id='scalex'>
          Scalex
        </Heading>
        <FigureAudio
          src='/res/s01e07/scalex_ala_benn_daglish.mp3'
          caption="Scalex - A'la Benn Daglish [1994]"
          figureClass='right-20rem md:!-mt-6'
          className='mb-8'
        >
          <p>
            Nemôžem nespomenúť hudobníka, ktorý je asi najviac spätý so
            spoločnosťou <b>Proxima</b>, ktorá v&nbsp;Čechách okrem toho, že
            vydávala skvelý časopis ZX-Magazín, vybudovala vlastne to, čomu dnes
            hovoríme software-house. Združovala a&nbsp;prepájala výnimočných
            tvorcov a&nbsp;vydávala ich hry a&nbsp;systémové programy pod svojou
            &bdquo;hlavičkou&rdquo;.
            <br />
            No áno! <b>Miroslav Hlavička</b> alias <b>Scalex</b> umožnil ozvučiť
            väčšinu týchto hier svojou chytľavou muzikou.
          </p>
        </FigureAudio>
        <FigureImage
          src='/res/s01e07/sq_tracker.png'
          caption='SQ-Tracker [1993] vydala spoločnosť Proxima'
          figureClass='left-24rem'
          width={512}
          height={384}
          isCaptionVisible
          isZoomable
        >
          <p>
            Mimochodom, títo dvaja tvorcovia, teda Scalex a&nbsp;Qjeta majú na
            svedomí to, že pod značkou Proxima Software vznikol nový, český
            tracker, ktorý nesie vo svojom názve začiatočné písmená ich nickov.{' '}
            <b>SQ&#8209;Tracker</b> naprogramoval <b>Jiří Koudelka</b> alias{' '}
            <b>George K.</b> práve na základe podnetov a&nbsp;nápadov týchto
            dvoch hudobníkov. Prišiel s&nbsp;novou koncepciou tvorby skladieb,
            kedy hudobné dáta pre každý kanál upravujete zvlášť a&nbsp;môžete
            ich znovu-použiť kdekoľvek v&nbsp;rámci celej skladby. Vizuálne
            vylepšil a&nbsp;sprehľadnil editáciu nástrojov či ornamentov
            a&nbsp;pridal aj hromadné operácie, ako kopírovanie
            a&nbsp;nahrádzanie dát v&nbsp;patternoch.
          </p>
          <p>
            SQ-Tracker mal úspech (dokonca aj na Západe!), čo je ale dôležité
            &ndash; pomohol zrodiť nastupujúcu generáciu hudobníkov na našom
            území&hellip;
          </p>
        </FigureImage>
        <Heading as='h4' id='lukas-vlcek'>
          Lukáš Vlček
        </Heading>
        <FigureAudio
          src='/res/s01e07/luk_delayed4.mp3'
          caption='Luk (Lukáš Vlček) - demo "Delayed", 4. časť [1995]'
          figureClass='left-24rem'
          className='mb-8'
        >
          <p>
            Napríklad ako <b>Lukáš Vlček</b> z&nbsp;českej tvorivej skupiny{' '}
            <b>KVL</b>. Za skladbu zo štvrtej časti ich megadema Delayed by sa
            nemusel hanbiť ani Agent-X!
          </p>
        </FigureAudio>
        <Heading as='h4' id='x-agon'>
          X-Agon
        </Heading>
        <FigureAudio
          src='/res/s01e07/xagon_razor.mp3'
          caption='X-Agon (Vít Hotárek) - Over the fields [1994]'
          figureClass='right-24rem'
        >
          <p>
            Svoju hudobnú kariéru na ZX&nbsp;Spectre začal práve na SQ-Trackeri
            aj <b>Vít Hotárek</b> alias <b>X-Agon</b>, ktorý bol schopný
            v&nbsp;90. rokoch vytvoriť možno aj stovku skladieb a&nbsp;tvorcovia
            diem po nich často siahali. Čo ma ale veľmi teší je to, že na tvorbu
            a&nbsp;ZX&nbsp;Spectrum nezanevrel a&nbsp;každoročne nám na
            demopárty prináša stále lepšie nové skladby.
          </p>
          <p>
            V ukážke môžete počuť skladbu prerobenú z Amigáckeho modulu od
            Lizardkinga &bdquo;Over the fields&rdquo;, ktorú dokonca oproti
            originálu výrazne vylepšil a urobil dynamickejšou.
          </p>
        </FigureAudio>
        <Heading as='h4' id='tdm'>
          TDM
        </Heading>
        <FigureAudio
          src='/res/s01e07/tdm_neverstory.mp3'
          caption='TDM - NeverStory [2005]'
          figureClass='left-24rem'
          className='mb-8'
        >
          <p>
            Ďalší, dodnes aktívny český hudobník &ndash; <b>Tomáš Hauerland</b>{' '}
            alias <b>TDM</b> sa vyžíva v&nbsp;sólových melódiách, echách
            a&nbsp;tanečnej rytmike.
          </p>
        </FigureAudio>
        <Heading as='h4' id='aki'>
          Aki
        </Heading>
        <FigureYouTube
          youtubeCode='PGOzEPjuQn0?si=CvOZucQ5Fug0BopY'
          caption='Aki (Ella Šenovská) - Návstěvníci [2002]'
          figureClass='right-32rem'
          className='mb-8'
          isCaptionVisible
        >
          <p>
            Špeciálne miesto v&nbsp;tomto podcaste má moja dlhoročná kamarátka,
            česká hudobníčka <b>Ella Šenovská</b> alias <b>Aki</b>, ktorú som
            v&nbsp;predošlých epizódach už viackrát spomínal a&nbsp;hral jej
            skladby. Hudbu na ZX&nbsp;Spectre tvorí už od roku 1994, ale počas
            svojej 30-ročnej kariéry vytvorila významné diela snáď na všetky
            mysliteľné platformy a&nbsp;dnes je jednou zo svetovo
            najoceňovanejších scénerov na svete. Navyše mi pomáha aj
            s&nbsp;týmto podcastom, lebo je proof-readerkou celej tejto série
            o&nbsp;počítačovej hudbe a&nbsp;prispieva výbornými nápadmi
            a&nbsp;poznámkami, za čo jej ďakujem!
          </p>
          <p>
            Na priloženom videu môžete vidieť, ako vytvorila svoju skladbu
            &bdquo;Návstěvníci&rdquo; &ndash; remake titulnej skladby slávneho
            Československého seriálu. Ide o jej staršiu skladbu z roku 2002,
            autenticky v&nbsp;jej vtedy najobľúbenejšom hudobnom programe{' '}
            <b>SQ-Tracker</b>.
          </p>
        </FigureYouTube>
        <Heading as='h3' id='made-in-slovakia'>
          Made in Slovakia {flag_sk()}
        </Heading>
        <p>
          Mojim slovenským poslucháčom teraz isto vŕta v&nbsp;hlave, prečo tu
          nespomínam žiadnych tvorcov zo Slovenska. My azda nemáme našich
          hudobníkov? No máme! Slovenských a&nbsp;žiadnych iných!
        </p>
        <Heading as='h4' id='noro'>
          Noro
        </Heading>
        <FigureAudio
          src='/res/s01e07/noro_demobit.mp3'
          caption='Noro Grellneth - Demobit [1995]'
          figureClass='right-20rem md:!-mt-4'
          className='mb-8'
        >
          <p>
            Najskôr opäť spomeniem muzikanta, ktorý nikdy netvoril
            v&nbsp;trackeroch a&nbsp;vždy svoje skladby písal v&nbsp;dátach.{' '}
            <b>Noro Grellneth</b> je dodnes aktívnym tvorcom a&nbsp;o&nbsp;svoju
            hudobnú rutinu sa celé tie roky stará a&nbsp;vylepšuje. Norova
            tvorba je silne inšpirovaná jeho zbožňovaným Jeanom Michelom Jarrem
            a&nbsp;má unikátny zvuk, čiže jeho skladby znejú úplne inak ako
            ostatné &bdquo;aypsilonkoviny&rdquo;.
          </p>
        </FigureAudio>
        <Heading as='h4' id='tren'>
          Tren
        </Heading>
        <FigureAudio
          src='/res/s01e07/tren_space_debris.mp3'
          caption='Tren (Zsolt Trencsenyi) - Space Debris [1997]'
          figureClass='left-24rem'
          className='mb-8'
        >
          <p>
            A teraz vám predstavím môjho krajana, rodáka z&nbsp;Košíc.{' '}
            <b>Zsolt Trencsenyi</b> alias <b>Tren</b> fungoval ako dvorný
            muzikant košickej demogrupy <b>7Gods</b>. Táto skupina hviezdila na
            slovenskej demoscéne v&nbsp;90. rokoch.
          </p>
          <p>
            Pamätáte si, ako sme si v&nbsp;
            <EpisodeLink episode={5}>5. epizóde</EpisodeLink> púšťali
            fantastický Amiga mod Space Debris? Tak táto ukážka je Trenova
            &bdquo;prerábka&rdquo; tohto legendárneho modulu.
          </p>
        </FigureAudio>
        <Heading as='h4' id='baze'>
          Baze
        </Heading>
        <FigureYouTube
          youtubeCode='5JvQTy5oEWM?si=Z7zVM5EBX8-mBKrA&amp;start=30'
          caption='demo Insane skupiny 3SC (remake)'
          figureClass='right-32rem'
          className='mb-8'
          isCaptionVisible
        >
          <p>
            Nasledujúci tvorca je predovšetkým výnimočný programátor. Jeho demá
            kraľovali a&nbsp;kraľujú dodnes v&nbsp;compách rôznych demoparties.
            Jeho meno tiež môžete zahliadnuť v&nbsp;titulkoch súčasných
            moderných hier. Tento rodák z&nbsp;Dubnice je však všestranne
            talentovaný a&nbsp;jeho hudobná tvorba na ZX&nbsp;Spectrum je
            špecificky tvrdá, minimalistická, väčšinou v&nbsp;techno štýle.
          </p>
          <p>
            <b>Miloš Bazelides</b> alias <b>Baze</b> z&nbsp;demogrupy 3SC
            v&nbsp;roku 1997 takto ozvučil ich fenomenálne demo
            &bdquo;Insane&rdquo;.
          </p>
        </FigureYouTube>
        <Heading as='h4' id='z00m'>
          z00m
        </Heading>
        <FigureAudio
          src='/res/s01e07/z00m_x_files.mp3'
          caption='z00m - X-Files Theme (Sleepy Remix) [2003]'
          figureClass='left-24rem'
          className='mb-4'
        >
          <FigureImage
            src='/res/s01e07/protracker3.png'
            caption='ProTracker 3 [1996-2007]'
            figureClass='right-15rem clear-left'
            width={512}
            height={384}
            isCaptionVisible
            isZoomable
          >
            <p>
              No a&nbsp;najlepšie na záver. Muzikant, ktorého vám teraz
              predstavím je známy skladbami s&nbsp;výraznou swingujúcou
              rytmikou, silnými melodickými linkami a&nbsp;výborne budovanou
              atmosférou. <b>Branislav Bekeš</b> alias <b>z00m</b> sa okrem
              tvorby hudby venuje aj hardvéru starých počítačov, má o&nbsp;ňom
              skvelý prehľad a&nbsp;venuje sa oživovaniu a&nbsp;opravám týchto
              pokladov v&nbsp;združení{' '}
              <ExternalLink href='https://www.sindik.at'>SinDiKat</ExternalLink>
              .
            </p>
            <p>
              Ako jediný z&nbsp;menovaných už od počiatku svojej tvorby používa
              novší, pokročilý tracker ruskej výroby &ndash; <b>ProTracker 3</b>
              . Ukážka je jeho staršia &bdquo;reimaginácia&rdquo; zvučky známeho
              seriálu.
            </p>
          </FigureImage>
        </FigureAudio>
        <Heading as='h3' id='zaver'>
          Záver
        </Heading>
        <p>
          Dnes to bola epizóda opäť veľmi bohatá na ukážky. Asi tuším, že ľudia
          so scény mi určite budú vyčítať, že som nespomenul toho, či onoho
          hudobníka, alebo že som mal tu a&nbsp;tam použiť inú ukážku. Mojim
          cieľom však bolo priblížiť vývoj hudobnej tvorby na ZX&nbsp;Spectre od
          90. rokov až na prelom milénia. Dúfam, že tým aj nezainteresovaný
          poslucháč získal plastickú predstavu o&nbsp;schopnostiach toho malého
          čipu s&nbsp;troma tónovými generátormi, jedným šumovým a&nbsp;akýmsi
          &bdquo;obálkovým čudom&rdquo;, na ktoré museli títo pionieri postupne
          vyzrieť a&nbsp;prísť na to, ako ho používať.
        </p>
      </FigureEpisodeLogo>
    </EpisodeWrapper>
  );
}

function flag_pl({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox='0 0 36 36'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={className ?? 'icon'}
    >
      <path fill='#FFF' d='M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z' />
      <path fill='#DC143C' d='M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z' />
    </svg>
  );
}

function flag_cz({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox='0 0 36 36'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={className ?? 'icon'}
    >
      <path
        fill='#D7141A'
        d='M1.38 29.97A3.8 3.8 0 0 0 4 31h28c2.2 0 4-1.8 4-4.5V18H17.5L1.38 29.97z'
      />
      <path
        fill='#FFF'
        d='M32 5H4a3.98 3.98 0 0 0-2.65 1L17.5 18H36V9a4 4 0 0 0-4-4z'
      />
      <path
        fill='#11457E'
        d='M1.38 29.97 17.5 18 1.35 6A3.98 3.98 0 0 0 0 9v17.5c0 1.48.54 2.68 1.38 3.47z'
      />
    </svg>
  );
}

function flag_sk({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox='0 0 36 36'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={className ?? 'icon'}
    >
      <path fill='#EE2024' d='M36 27v-4H0v4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4z' />
      <path fill='#FFF' d='M36 23H0V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v14z' />
      <path fill='#0A4EA2' d='M0 13h36v10H0z' />
      <path
        fill='#FFF'
        d='M11.84 25.09c-1.13-.65-3.64-2.28-4.56-4.49-.92-2.23-.72-5.42-.48-9.12l.06-.94h11.96l.06.94c.24 3.7.45 6.9-.48 9.12-.91 2.21-3.42 3.84-4.55 4.49l-1 .57-1.01-.57z'
      />
      <path
        fill='#EE2024'
        d='M17.89 11.54H7.79c-.23 3.7-.41 6.68.41 8.68 1.03 2.46 4.52 4.22 4.64 4.27v.01c.12-.06 3.62-1.82 4.64-4.28.83-2 .65-4.97.4-8.68z'
      />
      <path
        fill='#FFF'
        d='M15.87 16.1s-1.4.14-2.64.17a13.05 13.05 0 0 1 0-1.28c.98.06 1.65.24 1.65.24.25 0 .45-.2.45-.44v-.6c0-.26-.2-.46-.45-.46 0 0-.74.13-1.57.18.07-.78.16-1.43.16-1.43 0-.25-.2-.45-.45-.45h-.6c-.25 0-.45.2-.45.45 0 0 .1.66.17 1.44a13.36 13.36 0 0 1-1.58-.19c-.25 0-.45.2-.45.45v.6c0 .25.2.45.45.45 0 0 .64-.2 1.67-.25a11.02 11.02 0 0 1 0 1.3c-1.24-.04-2.69-.17-2.69-.17-.24 0-.44.2-.44.45v.6c0 .25.2.45.44.45 0 0 1.32-.1 2.64-.13l-.21 3.32c0 .25.2.45.45.45h.6c.25 0 .45-.2.45-.45l-.19-3.31c1.28.03 2.58.12 2.58.12.25 0 .45-.2.45-.45v-.6c0-.25-.2-.45-.45-.45z'
      />
      <path
        fill='#0A4EA2'
        d='M17.08 20.96c-.5-1.08-1.9-1.39-2.57-.06-.44-1.6-1.68-1.6-1.68-1.6s-1.24 0-1.68 1.6c-.66-1.32-2.04-1.02-2.56.04 1.32 2.07 4.14 3.5 4.25 3.56.11-.06 2.92-1.48 4.24-3.54z'
      />
    </svg>
  );
}
