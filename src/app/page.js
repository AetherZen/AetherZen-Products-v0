import MarqueeNews from "@/components/MarqueeSection/MarqueeNews";
import { Skeleton } from "@/components/ui/skeleton";
import WhyUs from "@/components/WhyUs/WhyUs";


export default function Home() {
  return (
    <main>
      <MarqueeNews />
      <WhyUs />
    </main>
  );
}
