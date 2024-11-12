import CategoryHome from "@/components/categoryHome/CategoryHome";
import FeaturesHome from "@/components/FeaturesHome/FeaturesHome";
import MarqueeNews from "@/components/MarqueeSection/MarqueeNews";
import { Skeleton } from "@/components/ui/skeleton";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  return (
    <main className="min-h-[50vh]">
      <CategoryHome />
      <MarqueeNews />
      <WhyUs />
      <FeaturesHome />
    </main>
  );
}
