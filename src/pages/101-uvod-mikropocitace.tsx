import * as React from 'react';

import {
  EpisodeLink,
  EpisodeWrapper,
  FigureImage,
  Heading,
} from '@/components/common';

export default function S01E01() {
  return (
    <EpisodeWrapper episode={1}>
      <p>Ahojte všetci fanúšikovia technológií, hlavne tých informačných.</p>
      <p>
        Vitajte pri prvej epizóde podcastu Zapečené procesory, kde budeme
        cestovať časom informačných technológií a&nbsp;rozprávať si príbehy
        tých, ktoré zmenili svet.
      </p>
      <FigureImage
        src='/res/s01e01/mbr.jpg'
        caption='Martin Bórik'
        figureClass='right-15rem'
        width={250}
        height={300}
      >
        <p>
          Volám sa Martin Bórik a&nbsp;budem vašim sprievodcom v&nbsp;tomto
          stroji času.
        </p>
        <p>
          V tejto úvodnej časti mi dovoľte sa najprv predstaviť. Dlhých 20 rokov
          sa pohybujem v&nbsp;profesionálnom IT, kde som tvoril komerčný
          softvér, ale aj riadil ľudí, ktorí ho tvorili alebo im pomáhal
          analyzovať to, ako by ho bolo dobré vytvoriť. No a&nbsp;aby mi
          z&nbsp;toho všetkého nešvihlo, tak som sa, prakticky od detstva
          venoval hromade iných vecí spojených s&nbsp;počítačmi, teda hlavne
          tými historickými.
        </p>
        <p>
          Okrem toho tvorím už 20 rokov elektronickú hudbu alebo pracujem so
          zvukom všeobecne, a&nbsp;v&nbsp;súčasnosti sa zameriavam na hernú
          a&nbsp;filmovú tematickú hudbu. Dobre, ale dosť už o&nbsp;mne&hellip;
        </p>
      </FigureImage>
      <p>
        Cieľom tohto podcastu bude vám priblížiť a&nbsp;objasniť pojmy alebo
        fakty z&nbsp;histórie výpočtovej techniky poučnou, ale aj zábavnou
        formou, aby ste z&nbsp;toho nemali &bdquo;zapečené procesory&rdquo;.
      </p>
      <p>
        Pokúsim sa vás očariť kúzlom starých počítačov a&nbsp;priblížiť vám tak
        dôvody, prečo sa nimi dodnes ľudia zaoberajú.
      </p>
      <p>
        Možno aj preto, že dnes pre nás všetkých bežné a&nbsp;prirodzené
        činnosti, ktoré robíme na našich mobiloch, tabletoch alebo notebookoch
        majú často svoje korene v&nbsp;minulosti.
      </p>
      <p>
        Často si ani neuvedomujeme, čo stálo za zrodom niektorých technológií
        a&nbsp;stretávame sa s&nbsp;nimi denne. A&nbsp;naopak, niektoré
        technológie niekedy žiaľbohu, a&nbsp;niekedy aj chvalabohu, že žiaľbohu
        zanikli, no aj dnes má svoje kúzlo sa o&nbsp;nich niečo zaujímavé
        dozvedieť.
      </p>
      <Heading as='h2' id='uvod'>
        Mikropočítače 80. rokov 20. storočia
      </Heading>
      <FigureImage
        src='/res/s01e01/biele_plaste.jpg'
        caption='Páni inžinieri v bielych plášťoch'
        mediaSource='Stockcake [AI]'
        figureClass='left-20rem'
        width={300}
        height={300}
      >
        <p>
          Mikropočítače na prelome 70. a&nbsp;80. rokov zohrali kľúčovú úlohu
          v&nbsp;histórii výpočtovej techniky a&nbsp;preniesli tak tieto
          technológie z&nbsp;výskumných ústavov do domácností a&nbsp;škôl po
          celom svete. Bola to totiž skutočná revolúcia, lebo do tej doby boli
          počítače v&nbsp;sálach výskumno-vývojových stredísk,
          a&nbsp;samozrejme, práca s&nbsp;nimi bola doménou výlučne pánov
          inžinierov v&nbsp;bielych plášťoch a&nbsp;nik nekvalifikovaný sa
          k&nbsp;nim nemohol dostať.
        </p>
        <p>
          Miniaturizácia a&nbsp;rozvoj vo výrobe integrovaných obvodov umožnili
          zrod malých zariadení. Prvé boli kalkulačky. Keď firma Intel prišla
          s&nbsp;miniatúrnym čipom 4004 v&nbsp;roku 1971, bolo to práve pre
          použitie do prenosných vedeckých kalkulačiek. Keď o&nbsp;rok nato
          prišiel Intel s&nbsp;8008-čkou, ich prvým 8-bitovým procesorom, bol to
          už prelomový bod dejín výpočtovej techniky. To však nakoplo ďalších
          výrobcov, ale aj Intel samotný a&nbsp;už o&nbsp;zopár rokov ste si na
          trhu mohli vybrať medzi{' '}
          <EpisodeLink episode={18}>Intel 8080</EpisodeLink>, Motorolou 6800,
          neskôr aj MOS 6502 alebo{' '}
          <EpisodeLink episode={18}>Z80 od spoločnosti Zilog</EpisodeLink>.
        </p>
      </FigureImage>
      <p>
        Od prvotných konceptov &bdquo;prepytujem&rdquo; počítačov, presnejšie
        takých prerastených blikajúcich kalkulačiek, ako napríklad Altair, to
        netrvalo dlho a&nbsp;odštartoval sa boom výroby počítačov, ktoré sa
        zrazu zmestili na stoly v&nbsp;školách, detských izbách, či obývačkách.
        Tam ste si ich pripojili k&nbsp;telke a&nbsp;na integrovanej klávesnici
        ste tak mohli skúmať ich tajomstvá.
      </p>
      <p>
        Práve pre tento prechod od sálových počítačov k&nbsp;týmto malým
        zázrakom sa ujalo pomenovanie &bdquo;mikropočítač&rdquo;.
      </p>
      <FigureImage
        src='/res/s01e01/8bit_procesory.jpg'
        caption='8-bitové procesory: Intel 8080A, Zilog Z80, Motorola 6800, Motorola 6809 a MOS Technology 6502'
        mediaSource="Big Mess o' Wires"
        figureClass='opaque-ms'
        isCaptionVisible
        width={2515}
        height={960}
      />
      <Heading id='8-bitove'>A prečo 8-bitové?</Heading>
      <p>
        Ešte si urobíme malú odbočku k&nbsp;tomu, prečo počítače a&nbsp;teda
        hlavne procesory tejto éry voláme 8-bitové. Je to jednoducho preto, že
        ich registre, čoby malé šuflíčky na uloženie informácie majú práve 8
        bitov. A&nbsp;8 bitov je jeden bajt. Procesor tak s&nbsp;týmto bajtom
        dokáže počítať, alebo presúvať ho z&nbsp;registra do registra.
        A&nbsp;rovnako takýto bajt môže čítať <b>z</b>&nbsp;alebo zapisovať{' '}
        <b>do</b> operačnej pamäte alebo periférie &ndash; a&nbsp;to už hovoríme
        o&nbsp;dátovej zbernici, ktorú si môžete predstaviť ako dialnicu, po
        ktorej procesor posiela údaje iným častiam počítača.
      </p>
      <p>
        Inak to však bolo pri adresovej zbernici, ktorou procesor komunikuje
        s&nbsp;pamäťou. Tá bola 16-bitová, aby bolo možné čítať a&nbsp;zapisovať
        až 64 kilobajtov. Pretože, ak by táto zbernica bola iba 8-bitová,
        programy by mohli mať iba 256 bajtov, takže preto sa to muselo rozšíriť
        a&nbsp;každá adresa pamäte sa zapisovala dvoma bajtami.
      </p>
      <Heading id='zaver'>Záver</Heading>
      <p>
        Podobne ako hamburgery, aj mikropočítače začali svoju históriu písať
        v&nbsp;Amerike. V&nbsp;roku 1976 takí dvaja neznámi bradatí hipsteri
        &ndash; Wozniak a&nbsp;Jobs &ndash; prišli s&nbsp;počítačom Apple I.
        O&nbsp;rok na to prišla firma Commodore so sériou PET &ndash; ale nie
        fliaš! &ndash; tak sa tie počítače volali.
      </p>
      <FigureImage
        src='/res/s01e01/woz_jobs_pet.jpg'
        caption='Steve Wozniak a Steve Jobs s počítačom Apple I (1976)&emsp;|&emsp;Commodore PET (1977)'
        mediaSource='Apple Computer Inc. | Rama & Museé Bolo, CC BY-SA 2.0'
        width={2400}
        height={960}
        isCaptionVisible
        isZoomable
      />
      <FigureImage
        src='/res/s01e01/c64_speccy.jpg'
        caption='Commodore 64 a Sinclair ZX Spectrum'
        mediaSource='Evan-Amos, Bill Bertram, CC BY-SA 2.0'
        figureClass='right-20rem opaque-ms'
        width={1400}
        height={1400}
        isCaptionVisible
        isZoomable
      >
        <p>
          To už sa budí aj starý kontinent a&nbsp;v&nbsp;Cambridge začínajú
          briti písať svoju počítačovú históriu. To všekto vyvrcholí
          v&nbsp;úžasnom roku 1982, v&nbsp;ktorom som sa narodil nie len ja, ale
          aj <EpisodeLink episode={8}>Commodore&nbsp;64</EpisodeLink> a&nbsp;
          <EpisodeLink episode={6}>Sinclair ZX&nbsp;Spectrum</EpisodeLink>. Obom
          týmto platformám je potrebné sa venovať samostatne
          a&nbsp;v&nbsp;niektorých ďalších dieloch sa na nich určite zameriam.
        </p>
        <p>
          Treba si tu dôrazne pripomenúť, že áno, v&nbsp;tom čase už existovali
          16-bitové pécečká od IBM a&nbsp;v&nbsp;nasledujúcich rokoch sa
          objavovali ďalšie a&nbsp;ďalšie platformy. No na tie ste potrebovali
          prívesný vagón peňazí. Tieto malé 8-bitové zázraky vyhrali,{' '}
          <b>pretože boli lacné</b>. Ponúkli dobrý kompromis medzi cenou
          a&nbsp;výkonom, ktorý stačil na väčšinu aplikácií tej doby. Celá
          generácia sa na nich naučila programovať a&nbsp;umožnili deckám hrať
          sa doma videohry.
        </p>
      </FigureImage>
    </EpisodeWrapper>
  );
}
