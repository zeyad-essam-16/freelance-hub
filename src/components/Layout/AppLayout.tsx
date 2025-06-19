"use client";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
