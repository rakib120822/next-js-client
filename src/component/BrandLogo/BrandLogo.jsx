"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Logo from "./Logo";

function BrandLogo() {
  const BrandLogo = [
    "https://i.ibb.co/5hx6k0HF/logo1.png",
    "https://i.ibb.co/Mx95MkKy/logo2.png",
    "https://i.ibb.co/n803Zfg8/logo3.png",
    "https://i.ibb.co/39m2c7BM/logo4.png",
    "https://i.ibb.co/4n26w4g3/logo5.png",
  ];
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-5">
        <span className="text-red-600">Our</span> Supporters
      </h2>
      <Marquee pauseOnHover speed={50} autoFill>
        {BrandLogo.map((logo, index) => (
          <Logo key={index} logo={logo} />
        ))}
      </Marquee>
    </div>
  );
}

export default BrandLogo;
