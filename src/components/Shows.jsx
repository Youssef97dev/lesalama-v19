import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Shows = () => {
  const { t } = useTranslation();
  return (
    <div
      id="shows"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col-reverse p-3 gap-3"
    >
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-2 text-primary">
          <b className="text-[22px] leading-[30px] tracking-[2px] text-secondary font-azahra font-thin mb-2 px-2 2xl:px-12">
            {t("events.title")}
          </b>
          <p className="text-[14px] text-justify font-light lg:font-normal tracking-wider leading-[28px] px-2 2xl:px-12">
            {t("events.content_1")}
          </p>
          <p className="text-[14px] text-justify font-light lg:font-normal tracking-wider leading-[28px] px-2 2xl:px-12">
            {t("events.content_2")}
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/u8lngfyi26ehndtx4ubm"
          height={1000}
          width={1000}
          alt="le salama restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/nqgnles54qmcej8oqre1"
          height={2000}
          width={2000}
          alt="le salama restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:hidden block`}
        />
        {/* Filter */}
      </div>
    </div>
  );
};

export default Shows;
