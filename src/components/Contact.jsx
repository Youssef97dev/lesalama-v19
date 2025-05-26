"use client";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full flex md:flex-row flex-col-reverse"
    >
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="map le salama"
          height={1000}
          width={1000}
          className="object-cover w-1/2 md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="map le salama"
          height={1000}
          width={1000}
          className="object-cover w-full h-full md:hidden block"
        />
      </div>
    </div>
  );
};

export default Contact;
