import PrivacyAndCookiePolicy from "./PrivacyAndCookiePolicy.jsx";
import WhatsAppButton from "../components/WhatsappButton.jsx";

import whatsapp from "../assets/icone-whatsapp-rouge-1.png";
import facebook from "../assets/icons-spry-Facebook-rouge-1.png";
import instagram from "../assets/Instagram.parspng-rouge-1.png";

export default function Project() {
  const myPhoneNumber = "3405018554";

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
        <a href="#!" className="pt-2 text-black size-20" onClick={(e) => e.preventDefault()}>
          <WhatsAppButton phoneNumber={myPhoneNumber} />
        </a>
        <PrivacyAndCookiePolicy />
      </div>
    </footer>
  );
}
