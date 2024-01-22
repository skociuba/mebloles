import Image from "next/image"
import React, { useState } from "react"
import { SliderData } from "./SliderData"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id="gallery" className="max-w-[1240px]  h-[300px] mx-auto ">
      <div className="relative flex justify-center align-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="bg-black opacity-7 absolute top-[40%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width={slide.portrait ? "400" : "1440"}
                  height="800"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="bg-black opacity-6 absolute top-[40%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
