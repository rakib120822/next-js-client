import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureSection() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">
        <span className="text-red-600">Feature</span> Section
      </h2>
      <div className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          feature={{
            title: "Fast Delivery",
            description: "After order within 30 min you will get your order",
            image: "https://img.icons8.com/cotton/64/fast-delivery--v2.png",
          }}
        />
        <FeatureCard
          feature={{
            title: "24/7",
            description: "Enjoy Delicious Food Anytime",
            image: "https://img.icons8.com/ios-filled/50/FFFFFF/hotline.png",
          }}
        />
        <FeatureCard
          feature={{
            title: "Fresh & healthy",
            description:
              "Food made with fresh ingredients and healthy for health",
            image:
              "https://img.icons8.com/ios-filled/50/FFFFFF/food-receiver.png",
          }}
        />
      </div>
    </div>
  );
}

export default FeatureSection;
