"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/dljc34xjbmfvh4eup5yr"
          height={1000}
          width={1000}
          alt="le salama restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/olx3popyo3msqjowhbl5"
          height={1000}
          width={1000}
          alt="le salama restaurant"
          priority
          style={{ clipPath: "polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)" }}
          className={`object-cover w-full h-full md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-3 lg:p-20 p-2 mt-2 text-primary">
          <h1 className="text-[22px] leading-[30px] tracking-[2px] font-azahra mb-2 px-2 2xl:px-12 text-secondary">
            {t("about.title")}
          </h1>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12">
            {t("about.content_1")}
          </p>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12 ">
            {t("about.content_2")}
          </p>
          <p className="text-[14px] font-light lg:font-normal text-justify tracking-wider leading-[28px] px-2 2xl:px-12 ">
            {t("about.content_3")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
