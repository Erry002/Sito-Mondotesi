import React from "react";
import { Link } from "react-router-dom";
import sfondo2 from "../assets/sfondo_2.png";
import sfondo_desktop_2 from "../assets/sfondo_about_desktop.png";
import { useIsMobile } from "../components/responsiveUtils.js";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 sm:bg-inherit font-alata">
      <div className="flex justify-center items-center bg-[#EE2C3C] sm:w-full p-3 text-slate-100 text-2xl">
        <h2>CHI SIAMO</h2>
      </div>
      <div className="relative flex flex-col items-center justify-center flex-grow ">
        {isMobile ? (
          // se vista in modalita mobile
          <div className="flex flex-col items-center text-sm text-justify">
            <div className="flex items-center justify-center">
              <p className="mx-4 mt-6 text-black">
                Ciao, sono <span className="text-red-700">Erika</span>, una
                <span className="text-red-700"> professionista</span> con una
                vasta esperienza nel campo accademico,
                <span className="text-red-700"> specializzata </span> come
                <span className="text-red-700"> redattrice di tesi</span>. Nel
                corso degli anni, ho guidato numerosi studenti nel
                raggiungimento dei loro obiettivi universitari.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="mx-4 mt-6 text-black">
                Mi rendo conto che la stesura di una tesi può essere un compito
                complesso e articolato, e comprendo le difficoltà nel trovare
                soluzioni adeguate. Il mio obiettivo è esserti di aiuto,
                facilitando il tuo cammino verso la laurea con
                <span className="text-red-700"> professionalità</span> e un
                <span className="text-red-700"> approccio empatico</span>.
                Voglio garantirti un ambiente confortevole mentre affronti gli
                ostacoli che si presentano lungo il percorso accademico.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="mx-4 mt-6 text-black">
                Se stai cercando un <span className="text-red-700">tutor </span>
                dedicato per realizzare il sogno di laurearti, sono qui per te.
                Insieme, possiamo lavorare verso il tuo obiettivo e rendere
                questo percorso un'
                <span className="text-red-700">esperienza gratificante</span>.
              </p>
            </div>
            <div className="mt-16 h-[396px] relative w-full">
              <img src={sfondo2} alt="immagine_di_una_laureata" className="absolute w-auto -bottom-7"/>
              <h2 className="absolute text-red-700 text-[18px] drop-shadow-2xl w-[166px] right-8 bottom-[300px] leading-4 text-right">
                Non esitare a contattarmi per iniziare questo viaggio insieme!
              </h2>
              <div className="absolute right-10 bottom-[190px] z-40">
                <Link
                  to="/form"
                  className="px-8 py-3 bg-red-700 shadow-lg cursor-pointer hover:bg-red-400 rounded-3xl text-slate-50"
                >
                  Contatti
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // se vista in modalita desktop
          <div className="flex items-center justify-center w-full">
            <img
              src={sfondo_desktop_2}
              alt="immagine_di_una_laureata"
              className=" sm:w-[700px] xl:w-auto"
            />
            <div className="flex flex-col items-center justify-center ml-8 xl:-ml-32">
              <div className="flex flex-col text-[20px]">
                <div className="flex items-center justify-center">
                  <p className="mx-4 mt-6 text-black">
                    Ciao, sono <span className="text-red-700">Erika</span>, una
                    <span className="text-red-700"> professionista</span> con
                    una vasta esperienza nel campo accademico,
                    <span className="text-red-700"> specializzata </span> come
                    <span className="text-red-700"> redattrice di tesi</span>.
                    Nel corso degli anni, ho guidato numerosi studenti nel
                    raggiungimento dei loro obiettivi universitari.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="mx-4 mt-6 text-black">
                    Mi rendo conto che la stesura di una tesi può essere un
                    compito complesso e articolato, e comprendo le difficoltà
                    nel trovare soluzioni adeguate. Il mio obiettivo è esserti
                    di aiuto, facilitando il tuo cammino verso la laurea con
                    <span className="text-red-700"> professionalità</span> e un
                    <span className="text-red-700"> approccio empatico</span>.
                    Voglio garantirti un ambiente confortevole mentre affronti
                    gli ostacoli che si presentano lungo il percorso accademico.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="mx-4 mt-6 text-black">
                    Se stai cercando un{" "}
                    <span className="text-red-700">tutor </span>
                    dedicato per realizzare il sogno di laurearti, sono qui per
                    te. Insieme, possiamo lavorare verso il tuo obiettivo e
                    rendere questo percorso un'
                    <span className="text-red-700">
                      esperienza gratificante
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-14 h-[200px] w-[500px] mt-8">
                <h2 className="text-red-700 text-[32px] text-center drop-shadow-2xl leading-8">
                  Non esitare a contattarmi per iniziare questo viaggio insieme!
                </h2>
                <div>
                  <Link
                    to="/form"
                    className="px-8 py-3 bg-red-700 shadow-xl cursor-pointer hover:bg-red-400 rounded-3xl text-slate-50"
                  >
                    Contatti
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
