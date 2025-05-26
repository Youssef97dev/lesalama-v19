import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full bg-primary  flex flex-col justify-center items-center py-5  px-3 lg:px-10 lg:py-16  xl:px-40">
        <div>
          <Link href="/">
            <Image
              src="/logo-salama-humberger-white.png"
              alt="Logo"
              width={150}
              height={150}
              className="mr-2 pb-6"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col gap-5 lg:flex-row justify-between items-center  text-white text-sm lg:text-lg">
          <div className="w-full flex flex-col justify-center items-center">
            <span>+212 675480018</span>
            <span>reservations@lesalamamarrakech.com</span>
          </div>
          <div className="w-full flex  justify-center items-center">
            <span className="text-center">
              40 Rue des Banques, Marrakech 40000, Maroc
            </span>
          </div>
          <div className="w-full text-black py-4 flex justify-center items-center text-secondary_2 gap-3">
            <Link href="http://wa.me/212675480018" target="_blank">
              <FaWhatsappSquare color="#ffffff" size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/lesalamamarrakech/"
              target="_blank"
            >
              <FaInstagramSquare color="#ffffff" size={25} />
            </Link>
            <Link
              href="mailto:reservations@lesalamamarrakech.com"
              target="_blank"
            >
              <FaMailBulk color="#ffffff" size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center pt-5 pb-5 lg:pb-5 bg-[#1d300a] text-background text-sm lg:text-base">
        © 2025 Le Salama marrakech. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
