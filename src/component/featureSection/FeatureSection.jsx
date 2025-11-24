import React from "react";
import FeatureCard from "../card/FeatureCard";

function FeatureSection() {
  return (
    <div>
        <h2 className="text-4xl font-bold text-center my-5"><span className="text-red-600">Feature</span> Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}

export default FeatureSection;
