import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import PopularPackages from "@/components/home/PopularPackages";

export default function Home() {
  return (
    <>
      <Hero/>
      <FeaturedDestinations/>
      <PopularPackages/>
      <Features/>
    </>
  )
}
