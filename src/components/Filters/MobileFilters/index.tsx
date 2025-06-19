import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import SidebarDrawer from "@/components/ui/SidebarDrawer";
import {
  SERVICE_CATEGORY_OPTIONS,
  SELLER_LEVEL_OPTIONS,
  BUDGET_OPTIONS,
  DELIVERY_TIME_OPTIONS,
} from "@/constants/filterOptions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setServiceCategory,
  setSellerLevel,
  setBudgetRange,
  setDeliveryTime,
} from "@/store/slices/filterSlice";
import { parseBudget, reverseBudget } from "@/lib/utils/filterUtils";
import MobileFilterSection from "./MobileFilterSection";
import { useTranslations } from "next-intl";

export default function MobileFilters() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { serviceCategory, sellerLevel, budgetRange, deliveryTime } =
    useAppSelector((state) => state.filters.filters);
  const t = useTranslations("filters");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 bg-white text-sm text-gray-700"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {t("title")}
      </button>

      <SidebarDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title={t("title")}
      >
        <MobileFilterSection
          titleKey="serviceCategory"
          options={SERVICE_CATEGORY_OPTIONS}
          selected={serviceCategory}
          onSelect={(val) => dispatch(setServiceCategory(val as string | null))}
        />
        <MobileFilterSection
          titleKey="sellerLevel"
          options={SELLER_LEVEL_OPTIONS}
          selected={sellerLevel}
          onSelect={(val) => dispatch(setSellerLevel(val as number | null))}
        />
        <MobileFilterSection
          titleKey="budget"
          options={BUDGET_OPTIONS}
          selected={reverseBudget(budgetRange)}
          onSelect={(val) =>
            dispatch(setBudgetRange(parseBudget(val as string | null)))
          }
        />
        <MobileFilterSection
          titleKey="deliveryTime"
          options={DELIVERY_TIME_OPTIONS}
          selected={deliveryTime}
          onSelect={(val) => dispatch(setDeliveryTime(val as number | null))}
        />
      </SidebarDrawer>
    </>
  );
}
