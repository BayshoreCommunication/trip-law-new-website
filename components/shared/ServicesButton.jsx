"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ServicesButton = ({ title, radius, style, link }) => {
  const router = useRouter();

  return (
    <Link href={`/services/${link}`}>
      <Button
        radius={radius}
        size="lg"
        className={`${style} shadow-lg font-medium text-lg px-10 py-4 mb-2`}
        >
        {title}
      </Button>
    </Link> 
  );
};

export default ServicesButton;
