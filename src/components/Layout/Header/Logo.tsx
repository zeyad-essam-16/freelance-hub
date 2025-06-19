"use client";

import { Cloud } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations("header");

  return (
    <Link href="/" className="flex items-center pb-0.5 space-x-2">
      <div className="bg-accent rounded p-2 flex items-center justify-center">
        <Cloud className="text-white" size={22} />
      </div>
      <span className="font-mono text-md">{t("logoPlace")}</span>
    </Link>
  );
}
