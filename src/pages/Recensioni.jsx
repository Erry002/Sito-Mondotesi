import React, { useState, useMemo } from "react";
import BoxRecensioniV2 from "../components/BoxSecondaVer.jsx";
import { useIsMobile, useIsTablet } from "../components/responsiveUtils.js";
import italia from "../assets/Italia_1.png";
import star5 from "../assets/star/star_5.png";
import Recensioni_box from "../components/ReviewsCarousel.jsx"

export default function Project() {
  const [visibleReviewIndex, setVisibleReviewIndex] = useState(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const recensioni = [
    {
      nome: "Daniela T.",
      commento:
        "Disponibile, capace, pronta e sa perfettamente come gestire questi momenti concitanti e di stress. Una professionista seria che rispetta i tempi ed è sempre presente. Sono stata veramente fortunata ad incontrarla, sia dal punto di vista umano che profesionale. Infinitamente grazie per essermi stata accanto in questo percorso breve ma intenso. Mi ritengo veramente fortunata.",
      position: { top: 175, right: 0, left: 230 },
      latoR: 0,
    },
    {
      nome: "Francesca B.",
      commento:
        "Non ti sarò mai grata abbastanza nel supporto che mi hai fornito nella correzione dell'elaborato. Sei stata estremamente professionale e precisa e puntuale! Davvero grazie di cuore.",
      position: { top: 155, right: 0, left: 180 },
      latoR: 1,
    },
    {
      nome: "Anastasia B.",
      commento:
        "A volte vogliamo fare tutto da soli, lavoro, esami, tesi e famiglia, beh a volte non ci riusciamo e che male c'è a chiedere aiuto? Passavo per i corridoi del Monastero e ho visto questo numero di telefono con la scritta ''aiuto tesi'' beh, ho provato, pensavo sinceramente fosse la solita bugia per prendersi i soldi....e invece? Ecco Erika mi è venuta in soccorso. Precisa sin dal primo momento, puntuale, rassicurante, professionale soprattutto. Se non avete tempo per scrivere la vostra tesi, se avete delle idee e vi serve un metodo o un consiglio, lei è la persona per voi. Mai visto un lavoro fatto così bene. Complimenti e grazie ancora!",
      position: { top: 155, right: 0, left: 180 },
      latoR: 0,
    },
    {
      nome: "Francesco T.",
      commento:
        "Mondo Tesi, ottimo lavoro svolto, sempre puntuali e disponibilità immadiata. Per qualsiasi cosa o chiarimenti sempre disponibili. Mi sono trovato molto bene e lo consiglio vivamente. Inoltre alla loro ottima professionalità, sono persone educatissime e cordiali e per qualsiasi dubbio sul lavoro non esitano un attimo per correggerlo.",
      position: { top: 155, right: 0, left: 180 },
      latoR: 0,
    },

    {
      nome: "Sharon C.",
      commento:
        "Buongiorno Erika, Grazie veramente per tutto. Precisa e puntuale, sei una persona seria. Hai svolto il lavoro che ti avevo chiesto in modo perfetto e in tempi brevi. Hai colto al volo ciò che dovevi fare, in una tesi che era già stata iniziata da me. Ti augoro ogni bene, sei una garanzia!",
      position: { top: 55, right: 0, left: 180 },
      latoR: 0,
    },
    {
      nome: "Federica I.",
      commento:
        "Erika è stata fantastica nell'aiutarmi con la mia tesi! La sua competenza e dedizione hanno reso tutto più facile. Sempre gentilissima e super desponibile!! Consiglio vivamente Erika per qualsiasi supporto nella stesura della tesi!!",
      position: { top: 155, right: 0, left: 180 },
      latoR: 1,
    },
    {
      nome: "Sabrina F.",
      commento:
        "Professionale, cordiale e sempre molto disponibile. Erika ha dimostrato massima assistenza da subito. Ottima la qualità sui contenuti elaborati. Consigliatissima!!",
      position: { top: 55, right: 0, left: 180 },
      latoR: 1,
    },
    // altre recensioni...
  ];

  const mobilePositions = useMemo(
    () => [
      { top: 375, right: 0, left: 230 }, //daniela t
      { top: 355, right: 0, left: 180 }, //francesca b
      { top: 310, right: 0, left: 290 }, //federica I
      { top: 220, right: 0, left: 260 }, //anastasia b
      { top: 190, right: 0, left: 175 }, //sharon c
      { top: 65, right: 0, left: 60 }, //franceso t
      // altre posizioni per mobile
    ],
    []
  );

  const tabletPositions = useMemo(
    () => [
      { top: 370, left: 230 }, //daniela t
      { top: 350, left: 180 }, //francesca b
      { top: 300, left: 285 }, //Anastasia b
      { top: 220, left: 265 }, //Anastasia b
      { top: 190, left: 175 }, //sharon c
      { top: 70, left: 70 }, //federica L
      { top: 55, left: 160 }, //federica L
      // altre posizioni per tablet
    ],
    []
  );
  const desktopPositions = useMemo(
    () => [
      { top: 540, left: 320 }, //daniela t
      { top: 510, left: 250 }, //francesca b
      { top: 440, left: 400 }, //Anastasia b
      { top: 320, left: 365 }, //Anastasia b
      { top: 290, left: 245 }, //sharon c
      { top: 110, left: 100 }, //federica L
      { top: 90, left: 220 }, //federica L
      // altre posizioni per desktop
    ],
    []
  );

  const positions = isMobile
    ? mobilePositions
    : isTablet
    ? tabletPositions
    : desktopPositions;

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 font-alata">
      <div className="flex justify-center items-center bg-[#EE2C3C] sm:w-full p-3 text-slate-100 text-2xl">
        <h2>RECENSIONI</h2>
      </div>
      <div className="flex sm:justify-center sm:items-center">
        <p className="mx-5 mt-6 text-sm font-semibold leading-5 text-justify">
          Lavoriamo su <span className="text-red-700">tutto</span> il territorio
          nazionale ed abbiamo già seguito
          <span className="text-red-700"> migliaia</span> di
          <span className="text-red-700"> studenti</span> delle più importanti
          università italiane pubbliche e private.
        </p>
      </div>
      <div className="relative translate-x-0 sm:translate-x-[80%] xl:translate-x-[100%] 2xl:translate-x-[130%] sm:w-[450px] xl:w-[500px] mb-[650px] mt-[50px]">
        <img
          src={italia}
          alt="mappa_dell_italia"
          className="absolute xl:h-[600px] z-0 mt-4 ml-8"
        />
        {recensioni.map((recensione, index) => (
          <BoxRecensioniV2
            key={index}
            nome={recensione.nome}
            voto={star5}
            commento={recensione.commento}
            position={positions[index] || recensione.position}
            latoR={recensione.latoR}
            flag={visibleReviewIndex === index}
            onClick={() => setVisibleReviewIndex(index)}
          />
        ))}
      </div>
      <div className=" flex flex-col gap-4">
        <div>
          <h2 className="pl-6 text-[30px] text-center">Le recensioni dei miei clienti:</h2>
        </div>
        <div className=" flex flex-col m-10 px-4">
          <Recensioni_box/>

        </div>
      </div>
    </div>
  );
}