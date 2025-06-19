import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchQuery } from "@/store/slices/filterSlice";
import SearchInput from "@/components/ui/SearchInput";

const Searchbar = () => {
  const t = useTranslations();
  const { searchQuery } = useAppSelector((state) => state.filters.filters);
  const dispatch = useAppDispatch();

  return (
    <div className="md:max-w-md mx-auto rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      <SearchInput
        onChange={(val) => dispatch(setSearchQuery(val))}
        value={searchQuery}
        placeholder={t("header.searchPlaceholder")}
      />
    </div>
  );
};

export default Searchbar;
