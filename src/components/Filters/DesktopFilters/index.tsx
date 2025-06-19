"use client";

import Dropdown from "@/components/ui/Dropdown";
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

export default function DesktopFilters() {
  const dispatch = useAppDispatch();
  const { serviceCategory, sellerLevel, budgetRange, deliveryTime } =
    useAppSelector((state) => state.filters.filters);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <Dropdown
        options={SERVICE_CATEGORY_OPTIONS}
        value={serviceCategory}
        onChange={(val) => dispatch(setServiceCategory(val as string | null))}
        placeholderKey="serviceCategory"
      />

      <Dropdown
        options={SELLER_LEVEL_OPTIONS}
        value={sellerLevel}
        onChange={(val) => dispatch(setSellerLevel(val as number | null))}
        placeholderKey="sellerLevel"
      />

      <Dropdown
        options={BUDGET_OPTIONS}
        value={reverseBudget(budgetRange)}
        onChange={(val) =>
          dispatch(setBudgetRange(parseBudget(val as string | null)))
        }
        placeholderKey="budget"
      />

      <Dropdown
        options={DELIVERY_TIME_OPTIONS}
        value={deliveryTime}
        onChange={(val) => dispatch(setDeliveryTime(val as number | null))}
        placeholderKey="deliveryTime"
      />
    </div>
  );
}
