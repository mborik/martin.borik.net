import * as React from 'react';

import {
  EpisodeWrapper,
  ExternalLink,
  FigureEpisodeLogo,
  FigureImage,
  FigureYouTube,
  Heading,
} from '@/components/common';

export default function S01E03() {
  return (
    <EpisodeWrapper episode={3}>
      <FigureEpisodeLogo episode={3} figureClass='right-15rem'>
        <p>
          Ak by sme si to chceli veľmi zjednoduchšiť, mohlo by sa povedať, že:
        </p>
        <h5>
          <b>&bdquo;Demoscéna sa zrodila na softvérovom pirátstve.&ldquo;</b>
        </h5>
        <p>
          <br />
          &hellip;ale nie je tomu celkom tak. Som totiž presvedčený o&nbsp;tom,
          že pretlak kreativity tvorcov by sa objavil tak či onak
          a&nbsp;pirátske kópie slúžili len ako prvotná forma sebaprezentácie.
        </p>
        <p>
          Dobre, dobre, ja viem&hellip; začal som od konca, ale nebojte sa: celú
          problematiku rozoberiem od úplného začiatku&hellip;
        </p>
      </FigureEpisodeLogo>
      <h2>Zrod demoscény</h2>
      <p>
        Softvérové pirátstvo je s&nbsp;nami už od úsvitu prvých mikropočítačov.
        Na našom území to bolo vlastne prirodzené. Kedže sme boli krajina za
        Železnou oponou, na softvér sa u&nbsp;nás nevzťahoval autorský zákon.
        Celkovo bolo chápanie autorského zákona u&nbsp;nás akési&hellip;
        &bdquo;voľnejšie&ldquo;. Komerčný zahraničný softvér sa u&nbsp;nás
        nemohol predávať a&nbsp;ani sa nemali vydavatelia ako domáhať odmien za
        jeho predaj, alebo vyrovania za jeho odcudzenie. A&nbsp;tak sa
        prirodzene pokútne dovážal, respektíve pašoval a&nbsp;veselo kopíroval
        z&nbsp;kazety na kazetu, neskôr z&nbsp;diskety na disketu. Sme
        v&nbsp;dobe pred internetom, takže to často fungovalo aj ako poštová
        služba. Vy ste niekomu poštou poslali kazetu či disketu a&nbsp;známku na
        spätné odoslanie, vybrali si softvéry z&nbsp;katalógu a&nbsp;domov vám
        prišlo vaše (možno aj nepoškodené) úložné médium plné nakradnutých hier
        či programov.
      </p>
      <FigureImage
        src='/res/s01e03/copy_theft.jpg'
        caption='poster "Piracy is theft"'
        figureClass='left-20rem'
        width={615}
        height={840}
      >
        <p>
          V západných krajinách sa pirátstvo vyskytovalo tiež. Chápe sa to už
          ťahšie, ale existovalo. Jestvovali tiež <b>copy-parties</b> &ndash;
          stretnutia, kde sa všetci stretli so svojimi počítačmi
          a&nbsp;&bdquo;vymieňali&ldquo;, teda kopírovali si tam softvér,
          takzvaný <b>disk&#8209;swapping</b>. Môžeme sa len domnievať, že to
          súviselo s&nbsp;klasickou dogmou, že:{' '}
          <i>
            &bdquo;Keď už som zaplatil za počítač, tak nebudem
            &quot;cálovať&quot; aj za softvér, nie?&ldquo;
          </i>
        </p>
        <p>
          Čo je však podstatné: Keď výrobcovia a&nbsp;vydavatelia zistili, že
          ich softvér sa kopíruje a&nbsp;šíri úplne bez kontroly, začali
          prichádzať so softvérovými ochranami, ktoré by kopírovaniu zabránili.
          Keď s&nbsp;prekvapením zistili, že ochrana bola prelomená, prišli
          s&nbsp;nejakou sofistikovanejšou. No ale ako hovorí{' '}
          <i>zákon zachovania hmotnosti</i>, že ak existuje programátor{' '}
          <var>p</var>, ktorý dokáže naprogramovať ochranu komplexity{' '}
          <var>x</var>, musí existovať iný programátor <var>q</var>, ktorý aj
          takto komplexnú ochranu prelomí. Tento proces prelamovania ochrany
          softvéru sa začal nazývať &lsquo;cracking&rsquo; a&nbsp;jednotliví
          &lsquo;crackeri&rsquo; sa uzatvárali do &lsquo;cracker groups&rsquo;.
        </p>
      </FigureImage>
      <Heading id='prelamovanie-softveru'>Prelamovanie softvéru</Heading>
      <p>
        Keď sa každé prelomenie stalo záležitosťou prestíže, tak začali tieto
        svoje prelomenia vydávať aj s&nbsp;takzvaným &lsquo;cracktrom&rsquo;.
        Introm, alebo úvodníkom, ktoré popisovalo, čo je to za produkt, kto za
        ním stojí a&nbsp;kto prelomil jeho ochranu. Krátko nato to začalo byť
        obohatené hudbou, prípadne obrázkom a&nbsp;zaujímavým efektom.
      </p>
      <p>
        Pojem <b>efekt</b> je v&nbsp;tomto prípade kľúčový. Označujeme tým{' '}
        <b>
          vizuálny prvok alebo obsah generovaný v&nbsp;reálnom čase počítačom
        </b>
        , využívajúc grafické vlastnosti danej platformy, často aj prelamujúc
        hranice, čo sa považovalo za možné.
      </p>
      <blockquote>
        Demoscénu posúva dopredu prelamovanie hraníc toho, čo sa dovtedy
        považovalo za možné.
        <br />
        Videnie čohosi, čo bolo dovtedy nevídané.
      </blockquote>
      <FigureYouTube
        youtubeCode='wgle3x_XI3M?si=cRSghSMq0QDpjt3B'
        caption='kolekcia dobových cracktier na Commodore 64'
        figureClass='right-32rem !-mt-4'
        isCaptionVisible
      >
        <p>
          A tak sa grupy crackerov začali dopĺňať o&nbsp;ďalšie persóny, ktoré
          dodávali hudbu či grafiku &ndash; už to teda nebola partička
          programátorov, ale celé tvorivé skupiny, ktoré sa začali stretávať na
          copy-parties aj za účelom tvorby. Pre programátorov bolo čoraz
          jednoduchšie, až rutinné samotné prelomenie ochrany a&nbsp;tak sa
          chceli viac pochváliť efektom, ktorý si popritom
          naprogramovali&hellip; v&nbsp;rámci koníčka, z&nbsp;dlhej chvíle.
          Spojili svoje sily s&nbsp;hudobníkmi, ktorí k&nbsp;tomu doplnili hudbu
          a&nbsp;grafikmi, ktorí nakreslili obrázok. A&nbsp;inak, často aj títo
          hudobníci a&nbsp;grafici prelamovali hranice toho, čo bolo dovtedy
          možné počuť a&nbsp;vidieť. Efekt sa zakomponoval s&nbsp;obrázkom,
          pridala sa hudba a&nbsp;ďalšie efekty pridali zas posúvajúci sa text
          s&nbsp;nejakými odkazmi a&nbsp;kontaktami, kde môžete od tejto skupiny
          získať ďalší a&nbsp;ďalší lup.
        </p>
      </FigureYouTube>
      <Heading id='demo-a-demoparty'>Demo a demoparty</Heading>
      <p>
        Nastupuje doba 16-bitov, no stále hovoríme o&nbsp;dobe pred internetom,
        takže sa tieto cracknuté programy naďalej šíria poštou, ale hlavne
        z&nbsp;ruky do ruky. Copy-parties a&nbsp;klubové stretnutia majiteľov
        daných platforiem však začínajú meniť svoju povahu.
      </p>
      <p>
        Už to nie sú iba stretnutia za účelom výmeny softvéru, ale jednotlivci
        či skupiny si navzájom prezentujú svoje efekty spojené s&nbsp;grafikou
        a&nbsp;hudbou do ucelenej formy. Navzájom si vysvetľujú princíp týchto
        efektov, alebo si ukazujú ich kód &ndash; zdieľaním si rozširujú bázu
        vedomostí. Grafici prezentujú svoje stále dokonalejšie obrázky,
        hudobníci prehrávajú svoje čoraz premakanejšie muziky &ndash; navzájom
        sa tak hecujú k&nbsp;lepším výkonom. Už to často nebývajú ani súčasti
        cracknutého programu či hry, ale samostatné programy či súbory, ktoré si
        z&nbsp;takejto party odnášate a&nbsp;šíria sa ďalej z&nbsp;diskety na
        disketu.
      </p>
      <p>
        Takto sa zrodilo <b>DEMO</b> a&nbsp;<b>DEMOPARTY</b>.
      </p>
      <FigureImage
        src='/res/s01e03/wired_95.jpg'
        caption='autentický pohľad na dobovú demoparty (Wired 1995 v Belgicku 🇧🇪)'
        mediaSource='YouTube "Wired 95 report (demoscene)"'
        width={1006}
        height={700}
        isCaptionVisible
      />
      <Heading id='co-je-demoscena'>Čo je demoscéna?</Heading>
      <p>
        <b>Demoscéna je nezávislá</b>, možno až <b>undergroundová subkultúra</b>
        , ktorá síce vzišla zo softvérového pirátstva, ale jej primárnou
        podstatou je <b>posúvať hranice možného danej platformy</b>. Dnes sú to
        najmä najnovšie a&nbsp;najvýkonnejšie PC, ale často zahviezdia aj
        16-bity a&nbsp;8-bity. Ako každá subkultúra, tak aj táto používa
        špecifický slovník a&nbsp;často svojské pomenovania vecí a&nbsp;javov,
        ktoré sa tu dejú.
      </p>
      <p>
        Tak napríklad, každý príspevok do demoscény voláme &bdquo;prod&rdquo;,
        čo je skratka od <i>production</i>. Produkciou sa myslí všetko &ndash;
        intro, demo, hudba či grafika. Tieto &lsquo;prody&rsquo; súťažia vo
        svojich príslušných kategóriách. Tie voláme &bdquo;compo&rdquo;,
        z&nbsp;anglického <i>competition</i>. &lsquo;Compá&rsquo; môžu byť aj
        veľmi špecifické: Napríklad 4-kilobajtové demá súťažia vo svojom
        príslušnom &lsquo;compe&rsquo; a&nbsp;nemiešajú sa so 64-kilobajtovými,
        alebo tými, čo nemajú žiadne obmedzenie dĺžky.
      </p>
      <p>
        Takisto býva samostatná skupina comp pre každú platformu. A&nbsp;ďalej,
        každý účastník demoscény je &bdquo;scener&rdquo;. Scéneri sa organizujú
        do &bdquo;groups&rdquo; a&nbsp;navštevujú &bdquo;parties&rdquo;. Na
        party sa prihlasujú prody do jednotivých comp a&nbsp;vtedy sa
        z&nbsp;nich stanú &bdquo;entries&rdquo;.
      </p>
      <p>
        A&nbsp;to som ešte nespomenul špecifické druhy &lsquo;prodov&rsquo; kde
        nájdeme pojmy ako:
      </p>
      <ul>
        <li>invitro</li>
        <li>dentro</li>
        <li>musicdisk</li>
        <li>slideshow</li>
        <li>wild</li>
      </ul>
      <Heading id='90-roky-a-navrat-nemrtvych'>
        90. roky a návrat nemŕtvych!
      </Heading>
      <p>
        Zaujímavá vec sa stala v&nbsp;90. rokoch na už vtedy postarších
        8-bitových platformách. Inšpiráciou 16-bitmi sa zrodila demoscéna aj na
        týchto 8-bitových zázrakoch a&nbsp;trvá samozrejme dodnes. Tvorcovia za
        tie roky posunuli hranice možného až ďaleko za hranice toho, čo by
        človek očakával od týchto škatuliek. Dnes, keď si pozriete najnovšie
        demo, ťažko dokážete uveriť tomu, že to beží na tom istom, na čom decká
        v&nbsp;80. rokoch{' '}
        <i>
          naháňali po obrazovke krížik krúžkom a&nbsp;vyhýbali sa výkričníkom
        </i>
        .
      </p>
      <p>
        Vedeli ste, že existuje medzinárodná demopárty špecificky zameraná na
        8-bity a každoročne sa koná na Slovensku? Na Forever demopárty sa vždy
        3. marcový víkend zídu scéneri z&nbsp;celej Európy a&nbsp;okrem toho, že
        môžu celý víkend kecať o&nbsp;svojich miláčikoch, zlatým klincom
        sobotného večera je prezentácia súťažných príspevkov. Návštevníci zo
        Slovenska, Čiech, Poľska, Maďarska, Nemecka, Francúzka ale aj Británie
        či Španielska sa tak každoročne stretávajú od začiatku tohto milénia
        a&nbsp;dnes je to vlastne také stretnutie postarších pupkatých pánov, čo
        si ukazujú staré počítače. Navyše, otcovia zakladatelia
        a&nbsp;organizátori sú členovia punkovej kapely, takže aj tá organizácia
        vykazuje známky punkovosti a&nbsp;ich mottom je:{' '}
        <i>&bdquo;Forever je taký dobrý, aký si ho urobíte vy.&rdquo;</i>
      </p>
      <p>
        A&nbsp;robíme si ho tak pohodový, keďže niektorí aj pomáhame ako vieme,
        že odtiaľ každý rok odchádzame spokojní a&nbsp;nevieme sa dočkať
        ďalšieho ročníka. Pre viac informácií navštívte{' '}
        <ExternalLink href='https://forever.zeroteam.sk/'>
          forever.zeroteam.sk
        </ExternalLink>
      </p>
      <FigureYouTube
        youtubeCode='Ffg8KJ5yFuE?si=SWv8mVjzh_eN4MMg'
        caption='video-reportáž z demoparty FOReVER XIII (2012)'
        figureClass='left-32rem'
        className='lg:mt-2'
        isCaptionVisible
      >
        <FigureYouTube
          youtubeCode='rmU-sk3gw0k?si=Aw3Zz39rECG2641g'
          caption='atmosféra pri prezentácii dema na FOReVER (2023)'
          figureClass='right-32rem lg:!-ml-4'
          isCaptionVisible
        />
      </FigureYouTube>
      <p>
        Ešte musím spomenúť aj <b>Demobit</b>, ktorý sa prvýkrát konal
        v&nbsp;roku 1995 a&nbsp;bola to prvá veľká multiplatformová demopárty na
        našom území. Tieto prvé ročníky majú dodnes punc legendárnosti. Žiaľ,
        koná sa tak nepravidelne, naposledy niekedy v roku 2019, že je veľmi
        ťažké veriť a&nbsp;dúfať, že sa ešte niekedy vráti a&nbsp;bude mať
        nejakú pravidelnosť, ktorá je z&nbsp;môjho pohľadu dôležitá.
      </p>
      <Heading id='dnesne-demoparties'>Dnešné demoparties</Heading>
      <p>
        V zahraničí je týchto demoparties samozrejme omnoho viac. Kompletný
        prehľad získate na výbornej databáze demoscény{' '}
        <ExternalLink href='https://demozoo.org/parties/'>
          Demozoo.org
        </ExternalLink>
        . Demoparty, ktorú však určite musím spomenúť je Revision:
      </p>
      <p>
        <b>Revision</b> je bezkonkurenčne <b>najväčšia demopárty</b> so svetovou
        účasťou, svetovým zvukom, obrazom a&nbsp;streamingom. Koná sa každoročne
        počas predĺženého víkendu Veľkej noci v&nbsp;meste Saarbrucken na
        nemecko-francúzkych hraniciach a&nbsp;je profesionálne organizovaná
        obrovským tímom ľudí a&nbsp;profesionálne moderovaná na pódiu ako aj na
        streame. Pojme viac ako päťsto účastníkov (rekord bol cez 800 ľudí)
        a&nbsp;okrem prezentácií príspevkov v&nbsp;30-tich kategóriách, tam
        návštevník zažije súťaže, prednášky, ale aj našľapané diskotéky
        demoscénovej hudby.
      </p>
      <p>
        Viac informácií na{' '}
        <ExternalLink href='http://revision-party.net/'>
          revision-party.net
        </ExternalLink>
      </p>
      <FigureYouTube
        youtubeCode='bRYwbdLwR7A?si=i44mWZ1fF-U-1iWe'
        caption='rekapituláčný krátky film o Revision 2023'
        figureClass='left-32rem'
        className='lg:mt-2'
        isCaptionVisible
      >
        <FigureYouTube
          youtubeCode='bN3zyk3Z6Mc?si=qzNrAkCsLargOG8N'
          caption='časozberné video Revision 2025'
          figureClass='right-32rem lg:!-ml-4'
          isCaptionVisible
        />
      </FigureYouTube>
      <Heading id='demoscena-vs-herny-biznis'>
        Demoscéna vs. herný biznis
      </Heading>
      <p>
        Demoscéna vychovala mnoho profesionálov vo svojom odbore. Dizajnéri,
        vývojári, grafici či hudobníci z&nbsp;doby pred 30 rokmi, sú dnes veľké
        mená videoherného priemyslu. Dnes už AAA herné spoločnosti ako Remedy,
        Starbreeze, Lionhead Studios, DICE alebo Guerrilla Games založili ľudia
        z&nbsp;demoscény.
      </p>
      <p>
        Práca na deme vám totiž dá ohromnú kreatívnu voľnosť a&nbsp;poskytne
        útek pred zviazanosťou komerčnej tvorby, takže aj ľudia, čo dnes pracujú
        v&nbsp;profesionálnych štúdiách, sú stále aktívnymi členmi demoscény.
        Vývojárov to učí byť efektívnymi a&nbsp;optimalizovať až na kosť.
        Dizajnérom, grafikom a&nbsp;hudobníkom to dáva priestor na experimenty
        a&nbsp;netradičnú až odvážnu tvorbu. Komunita súčasnej demotvorby je
        navyše otvorená a&nbsp;rada zdieľa bázu znalostí aj novým členom.
        Existuje Discord server{' '}
        <ExternalLink href='https://discord.com/invite/MCDXrrB'>
          Demoscene
        </ExternalLink>
        , je tu plný YouTube rôznych tutorialov, a&nbsp;väčšina diem alebo
        demotoolov je open-source &ndash; &bdquo;stačí iba začať&ldquo;. 😉
      </p>
      <Heading id='vymieranie-8-bitovej-demosceny'>
        Vymieranie 8-bitovej demoscény
      </Heading>
      <p>
        Žiaľ, smutnejšie to je na 8-bitovej demoscéne, ktorá z&nbsp;môjho
        pohľadu vymiera. Súčasní scéneri sú starí bardi, ktorí už majú rodiny
        a&nbsp;starosti, cez ktoré sa im veľmi ťažko hľadá čas sa na dlhé týždne
        ponoriť do tvorby niečoho väčšieho a&nbsp;ucelenejšieho. Skĺzava sa
        často ku krátkym príspevkom bez dizajnu a&nbsp;formy. Hudobníci
        a&nbsp;grafici prichádzajú z&nbsp;jedným-dvoma príspevkami ročne
        a&nbsp;málokedy dostanú príležitosť sa zapojiť do väčších vecí &ndash;
        teda diem. Zdieľanie znalostí je veľmi zriedkavé, čo vyplýva aj
        z&nbsp;povahy vývoja na 8-bity, kde sa musí prichádzať so špecifickými
        a&nbsp;šialene optimálnymi riešeniami na špecifický efekt alebo
        dizajnový prvok&hellip; a&nbsp;to je zvyčajne ťažko replikovateľné.
      </p>
      <p>
        Veľa robia aj povahy ľudí okolo 8-bitov, ktorí mladých často neprijímajú
        do komunity, niekedy z&nbsp;dôvodu predsudkov, že{' '}
        <i>&bdquo;Čo tí mladí o&nbsp;tom môžu vedieť?&rdquo;</i>,
        v&nbsp;extrémných prípadoch aj z&nbsp;dôvodu istého elitárstva. Veď
        nakoniec, sám som to zažil pred 15-timi rokmi, kedy sa mi veľmi ťažko
        dostávalo do povedomia komunity a&nbsp;ešte roky som sa cítil ako
        &bdquo;piate kolo na voze&rdquo;.
      </p>
      <p>
        Dnes som stále jedným z&nbsp;najmladších členov Československej scény
        okolo ZX-Spectra a&nbsp;to mám dávno po štyridsiatke. Spoznal som však
        v&nbsp;tejto partii veľa príjemných ľudí a&nbsp;našiel skvelých
        priateľov, s&nbsp;ktorými sa stretávame aj mimo tieto &bdquo;naše&rdquo;
        akcie. 😊
      </p>
    </EpisodeWrapper>
  );
}
