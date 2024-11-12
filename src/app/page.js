import CountUp from "@/components/CountUp/CountupSection";
import MarqueeNews from "@/components/MarqueeSection/MarqueeNews";
import { Skeleton } from "@/components/ui/skeleton";
import WhyUs from "@/components/WhyUs/WhyUs";


export default function Home() {
  return (
  
    <main className="min-h-[50vh]">
       <MarqueeNews />
       <CountUp />
      <WhyUs />
    </main>
  );
}
