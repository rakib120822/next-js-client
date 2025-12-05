import BrandLogo from "@/component/BrandLogo/BrandLogo";
import FeatureSection from "@/component/FeatureSection/FeatureSection";
import LatestProducts from "@/component/LatestProducts/LatestProducts";
import HeroSection from "@/component/heroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto my-[100px] px-10">
        <LatestProducts />
        <FeatureSection />
        <BrandLogo />
      </div>
    </div>
  );
}
