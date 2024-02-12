"use client"
import SecctionTitle from "@/components/secction-title/SecctionTitle";
import HeroSwiper from "@/components/swipers/hero-swiper/HeroSwiper";
import FeaturedProductsTab from "@/components/tabs/feactures-products-tab/FeaturedProductsTab";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
  
  }, []);

  return (
    <main className="">
      <HeroSwiper/>
      <SecctionTitle  subTitle={"vea los productos destacados en el area"} title={"Productos en Tendencias"} />
      <FeaturedProductsTab/>
    </main>
  );
}
