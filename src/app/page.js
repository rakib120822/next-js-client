import BrandLogo from "@/component/BrandLogo/BrandLogo";
import FeatureSection from "@/component/FeatureSection/FeatureSection";
import LatestProducts from "@/component/LatestProducts/LatestProducts";
import HeroSection from "@/component/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="p-5">
      <HeroSection />
      <div>
        <LatestProducts />
        <FeatureSection />
        <BrandLogo />
      </div>
    </div>
  );
}
