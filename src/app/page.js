
import CountUp from "@/components/CountUp/CountupSection";
import CategoryHome from "@/components/categoryHome/CategoryHome";
import FeaturesHome from "@/components/FeaturesHome/FeaturesHome";
import MarqueeNews from "@/components/MarqueeSection/MarqueeNews";
import { Skeleton } from "@/components/ui/skeleton";
import WhyUs from "@/components/WhyUs/WhyUs";
import Hero from "@/components/HeroSection/Hero";

export default function Home() {
  return (
    <main className="min-h-[50vh]">
      <Hero />
      <MarqueeNews />
      <CountUp />
      <WhyUs />
      <CategoryHome />
      <FeaturesHome />

    </main>
  );
}
