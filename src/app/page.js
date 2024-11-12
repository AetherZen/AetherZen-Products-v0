
import CountUp from "@/components/CountUp/CountupSection";
import CategoryHome from "@/components/categoryHome/CategoryHome";
import MarqueeNews from "@/components/MarqueeSection/MarqueeNews";
import { Skeleton } from "@/components/ui/skeleton";
import WhyUs from "@/components/WhyUs/WhyUs";



export default function Home() {
  return (
  
    <main className="min-h-[50vh]">
      <CategoryHome />
       <MarqueeNews />
       <CountUp />
      <WhyUs />
    </main>
  );
}
