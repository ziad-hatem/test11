"use client";
import { CircleX, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Logo = () => {
  return (
    <div className="flex items-center gap-[20px]">
      <Image
        src={"/safeer-logo.webp"}
        width={100}
        height={100}
        alt="Safeer Logo"
        unoptimized
        loading="lazy"
        className="w-[127px] h-auto"
      />
      <div className="w-[1px] h-[70px] bg-[#fff] bg-opacity-15 hidden lg:block" />
      <div className=" items-center gap-[20px] hidden lg:flex">
        <Image
          src={"/altaaqa.webp"}
          width={100}
          height={100}
          alt="Safeer Logo"
          unoptimized
          loading="lazy"
          className="h-[65px] w-auto"
        />
        <Image
          src={"/totalenergies.webp"}
          width={100}
          height={100}
          alt="Safeer Logo"
          unoptimized
          loading="lazy"
          className="h-[55px] w-auto"
        />
      </div>
    </div>
  );
};

export const returnLinksData = () => {
  const t = useTranslations("navbar");

  return {
    LinksData: [
      {
        title: t("Home"),
        href: "/",
      },
      {
        title: t("About Us"),
        href: "/",
      },
      {
        title: t("Solar Benefits"),
        href: "/",
      },
      {
        title: t("Our Solutions"),
        href: "/",
      },
      {
        title: t("Contact Us"),
        href: "/",
      },
    ],
  };
};

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const [lang, setLang] = useState("");
  const t = useTranslations("navbar");

  useEffect(() => {
    setLang(locale);
  }, [locale]);

  const toggleLang = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    setLang(newLocale);
    setTimeout(() => {
      router.push(`${process.env.NEXT_PUBLIC_URL}/${newLocale}`);
    }, 100);
  };

  return (
    <div
      className="bg-[#fff] bg-opacity-20 rounded-full relative w-[75px] h-[35px] transition-all cursor-pointer"
      onClick={toggleLang}
    >
      <div className="w-full h-full flex justify-around absolute z-10 items-center pb-1 px-0.5 ltr:flex-row-reverse">
        <p
          className={`text-white mb-1 ${
            lang === "ar" && "!text-[#0A3E47]"
          }  text-[16px] select-none`}
        >
          ع
        </p>
        <p
          className={`text-white ${
            lang === "en" && "!text-[#0A3E47]"
          }  text-[16px] -ml-[5px] select-none`}
        >
          En
        </p>
      </div>
      <div
        className={`w-[35px] h-[35px] bg-white rounded-full transition-all cursor-pointer absolute ${
          lang === "en" ? "left-0" : "left-[50%]"
        }`}
      />
    </div>
  );
};

const Links = () => {
  const { LinksData } = returnLinksData();

  return (
    <ul className="hidden md:flex gap-[20px] xl:gap-[40px]">
      {LinksData.map((e, i) => (
        <li key={i}>
          <Link
            className="text-white hover:text-[#ED0000] transition"
            href={e.href}
          >
            {e.title}
          </Link>
        </li>
      ))}
      <li className="h-fit">
        <LanguageToggle />
      </li>
    </ul>
  );
};

const MobileLinks = () => {
  const { LinksData } = returnLinksData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Menu size={30} color="white" onClick={() => setIsOpen(true)} />
      <ul
        style={{
          background: "linear-gradient(90deg, #00AAE0 -1.83%, #0070FF 98.21%)",
        }}
        className={`${
          isOpen ? "right-0 opacity-100" : "right-[-100%] opacity-0"
        } flex h-screen transition-all ease-in-out duration-300 w-screen top-[-40px] absolute p-5 pt-24 flex-col gap-[30px]`}
      >
        <CircleX
          size={30}
          className="absolute top-[25px] right-[20px]"
          onClick={() => setIsOpen(false)}
        />
        {LinksData.map((e, i) => (
          <li key={i}>
            <Link
              className="text-white text-xl hover:text-[#ED0000] transition"
              href={e.href}
            >
              {e.title}
            </Link>
          </li>
        ))}
        <li className="h-fit">
          <LanguageToggle />
        </li>
      </ul>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="absolute z-[999] h-fit w-full bg-transparent flex mt-[40px] items-center justify-between max-md:px-10 md:justify-around">
      <Logo />
      <Links />
      <MobileLinks />
    </nav>
  );
};

export default Nav;
