"";
import Image from "next/image";
import React from "react";

function Logo({ logo }) {
  return (
    <div className="mx-4 w-22 h-22 relative">
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        fill
        className="object-contain"
      />
    </div>
  );
}

export default Logo;
