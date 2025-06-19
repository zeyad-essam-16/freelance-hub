"use client";

import { Mail, Bell, ShoppingCart, Cloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");
  return (
    <header className="py-6 px-4">
      <div className="container max-[319px]:flex max-[319px]:flex-col sm:px-2 mx-auto grid grid-cols-2 gap-4 md:grid-cols-[auto_1fr_auto] items-center">
        <div className="flex items-center order-1 md:order-1">
          <Link href="/" className="flex items-center pb-0.5 space-x-2">
            <div className="bg-accent rounded p-2 flex items-center justify-center">
              <Cloud className="text-white" size={22} />
            </div>
            <span className="font-mono text-md">{t("logoPlace")}</span>
          </Link>
        </div>
        <div className="max-[319px]:w-full col-span-2 order-3 md:order-2 md:col-span-1 md:col-start-2">
          <Searchbar />
        </div>
        <div className="flex items-center justify-end gap-2 order-2 md:order-3">
          <div className="flex align-baseline cursor-pointer">
            <Mail size={22} />
          </div>
          <div className="flex align-baseline cursor-pointer">
            <Bell size={22} />
          </div>
          <div className="flex align-baseline cursor-pointer">
            <ShoppingCart size={22} />
          </div>
          <div className="flex align-baseline cursor-pointer ms-1.5">
            <Image
              width={44}
              height={44}
              className="rounded-full"
              src="/avatar.jpeg"
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
