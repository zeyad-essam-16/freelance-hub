// import {useTranslations} from 'next-intl';
import Header from "@/components/Header";
import ServicesSwiper from "@/components/ServicesSwiper";
import Results from "@/components/Results";
import Footer from "@/components/Footer";

export default function HomePage() {
  // const t = useTranslations('HomePage');
  return (
    <>
      <Header />
      <ServicesSwiper />
      <Results />
      <Footer />
    </>
  );
}
