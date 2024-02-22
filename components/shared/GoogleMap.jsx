import Image from "next/image";
import React from "react";

const GoogleMap = () => {
  const mapStyle = {
    border: 0,
    filter: "grayscale(100%) invert(100%)",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%", // Center vertically
    left: "70%", // Center horizontally
    transform: "translate(-50%, -50%)", // Center the overlay
    padding: "20px",
    color: "#000", // Black text color
  };
  return (
    <div className="">
      <iframe
        style={mapStyle}
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48356.39172772371!2d-74.11025213916099!3d40.75598729920798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1705898511662!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div style={overlayStyle}>
        <Image
          width={350}
          height={150}
          src={"/assets/contact/phone.png"}
          alt="about img"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
