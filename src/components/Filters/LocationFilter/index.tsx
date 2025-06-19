import SearchInput from "@/components/ui/SearchInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSecondaryLocation } from "@/store/slices/filterSlice";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

const LocationFilter = () => {
  const t = useTranslations("filters");
  const dispatch = useAppDispatch();
  const { secondaryLocation } = useAppSelector(
    (state) => state.filters.filters
  );

  useEffect(() => {
    console.log(secondaryLocation);
  }, [secondaryLocation]);

  return (
    <div className="w-full">
      <div className="md:max-w-md mx-auto rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        <SearchInput
          onChange={(val) => dispatch(setSecondaryLocation(val))}
          value={secondaryLocation}
          placeholder={t("locationPlaceholder")}
        />
      </div>
    </div>
  );
};

export default LocationFilter;
