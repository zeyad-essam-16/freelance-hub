"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./service-slider.css";

// import required modules
import { Navigation, FreeMode } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import { SERVICE_KEYS } from "@/constants/services";

export default function SericesSlider() {
  const t = useTranslations("services");
  const locale = useLocale();
  return (
    <section className="container mx-auto py-4 px-4 border-y border-gray-200">
      <Swiper
        dir={locale === "ar" ? "rtl" : "ltr"}
        navigation={true}
        slidesPerView={"auto"}
        freeMode={{ enabled: true, momentumRatio: 0.65, sticky: true }}
        modules={[FreeMode, Navigation]}
        className={`services_slider ${locale === "ar" ? "rtl" : "ltr"}`}
      >
        {SERVICE_KEYS.map((key) => (
          <SwiperSlide
            key={key}
            className="!w-auto py-3 pe-4 text-sm font-medium text-gray-800 cursor-pointer whitespace-nowrap hover:text-accent transition"
          >
            {t(key)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
