"use client"
import HeroSwiper from "@/components/swipers/hero-swiper/HeroSwiper";
import FeaturedProductsTab from "@/components/tabs/feactures-products-tab/FeaturedProductsTab";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
  
  }, []);

  return (
    <main className="">
      <HeroSwiper/>
      <FeaturedProductsTab/>
    </main>
  );
}
