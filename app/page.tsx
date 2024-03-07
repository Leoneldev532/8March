"use client";
import im1 from "@/public/im1.jpg";
import im2 from "@/public/im2.jpg";
import im3 from "@/public/im3.jpg";
import im4 from "@/public/im4.jpg";
import im5 from "@/public/im5.jpg";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function Home() {
  const im1a = useRef(null);
  const im2a = useRef(null);
  const im3a = useRef(null);
  const im4a = useRef(null);
  const im5a = useRef(null);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(im1a.current, {
      y: -400,
      x: 200,
      opacity: 1,
      ease: "power2.inOut",
    })
      .to([im2a.current, im3a.current, im4a.current, im5a.current], {
        y: 330,
        stagger: {
          each: 0.2,
        },
        duration: 0.8,
        ease: "expo.inOut",
      })
      .to(im1a.current, {
        // x: 100,
        scale: 1.5,
      });
  });

  return (
    <main className="flex min-h-screen flex-col overflow-hidden items-center bg-[#F988BE] justify-between ">
      <div className="relative flex gap-x-8 h-screen w-full items-end  justify-center">
        <div
          ref={im1a}
          className="w-[247px] h-[247px] relative  left-0 bg-red-500"
        >
          <Image
            src={im1}
            height={247}
            className="object-cover h-full w-full relative "
            width={247}
            alt=""
          />
        </div>
        <div
          ref={im2a}
          className="w-[247px] h-[247px] relative  left-0 bg-red-500"
        >
          <Image
            src={im2}
            height={247}
            className="object-cover relative"
            width={247}
            alt=""
          />
        </div>
        <div
          ref={im3a}
          className="w-[247px] h-[247px] relative  left-0 bg-red-500"
        >
          <Image
            ref={im3a}
            src={im3}
            height={247}
            className="object-cover relative"
            width={247}
            alt=""
          />
        </div>
        <div
          ref={im4a}
          className="w-[247px] h-[247px] relative  left-0 bg-red-500"
        >
          <Image
            ref={im4a}
            src={im4}
            height={247}
            className="object-cover relative"
            width={247}
            alt=""
          />
        </div>
        <div
          ref={im5a}
          className="w-[247px] h-[247px] relative  left-0 bg-red-500"
        >
          <Image
            ref={im5a}
            src={im5}
            height={247}
            className="object-cover relative"
            width={247}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
