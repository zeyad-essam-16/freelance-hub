"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, Locale, useTranslations } from "next-intl";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("locales");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
  ];

  const handleChange = (nextLocale: Locale) => {
    if (nextLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    }
  };

  return (
    <div className="w-[120px] mx-auto">
      <div className="flex justify-between text-sm font-medium border-b border-gray-200">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            disabled={isPending}
            onClick={() => handleChange(code)}
            className={clsx(
              "w-1/2 text-center pb-1 transition-colors cursor-pointer",
              locale === code
                ? "text-accent border-b-2 border-accent"
                : "text-gray-500 border-b-2 border-transparent"
            )}
            aria-label={`Switch to ${label}`}
          >
            {t(label)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
