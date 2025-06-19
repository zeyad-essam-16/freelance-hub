import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

const CopyrightSection = () => {
  const t = useTranslations("footer");

  return (
    <div className="mt-10 border-t pt-6 border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 container mx-auto">
      <p>{t("copyright")}</p>
      <div className="mt-4 md:mt-0">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default CopyrightSection;
