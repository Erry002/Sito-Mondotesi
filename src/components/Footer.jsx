import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import PrivacyAndCookiePolicy from "./PrivacyAndCookiePolicy.jsx"

import whatsapp from "../assets/icone-whatsapp-rouge-1.png";
import facebook from "../assets/icons-spry-Facebook-rouge-1.png";
import instagram from "../assets/Instagram.parspng-rouge-1.png";

export default function Project() {
  return (
    <footer className="bg-red-800 shadow-[0px_-5px_60px_-15px_rgba(0,0,0,0.3)] text-slate-100 flex flex-col sm:flex-row justify-center py-4 items-center h-full w-full sm:justify-between sm:px-10 gap-6">
      <h1 className="text-sm">Copyright @ 2024 Mondotesi </h1>

      <div className="flex items-center justify-between gap-4 pr-10">
        <a href="https://www.instagram.com/mondotesi_/">
          <img src={instagram} alt="" className="h-12" />
        </a>
        <a href="https://www.facebook.com/people/Mondo-tesi/61551270380444/?mibextid=LQQJ4d">
          <img src={facebook} alt="" className="h-12" />
        </a>
        <a href="">
          <img src={whatsapp} alt="" className="h-12" />
        </a>
        <PrivacyAndCookiePolicy />
      </div>
    </footer>
  );
}
