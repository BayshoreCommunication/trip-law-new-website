import React from "react";
import GoogleMap from "../shared/GoogleMap";
import MotionEffect from "../motion/MotionEffect";

const GoogleMapSection = () => {
  return (
    <div className="bg-black">
      <MotionEffect effect="fade-up" duration="2000">
        <h2 className="mb-16 text-3xl tracking-normal font-bold text-white text-center leading-normal">
          For urgent consultation please <br /> contact:(813) 678 2400 <br />
          Time: 9:00 AM – 10:00 PM
        </h2>
      </MotionEffect>

      <div>
        <MotionEffect effect="fade-up" duration="2000">
          <div className="relative h-[600px] w-full">
            <GoogleMap />
          </div>
        </MotionEffect>
      </div>
    </div>
  );
};

export default GoogleMapSection;
