"use client"
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  const [cursotVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e:any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x -16,
      y: mousePosition.y -16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x -75,
      y: mousePosition.y -75,
      backgroundColor: "white",
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")


  return (
    <div className="flex items-center justify-center h-[100vh] bg-[#1fff7c]">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className=" text-[5rem] font-medium">Hello Tushig World</h1>
      <motion.div 
        className="bg-black h-8 w-8 rounded-full fixed top-0 pointer-events-none"
        variants={variants}
        animate={cursotVariant}
        />
    </div>
  );
}
