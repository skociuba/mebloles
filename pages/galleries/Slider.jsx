import Image from "next/image"
import React, { useState, useEffect } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides?.length

  useEffect(() => {
    const imageElement = document.getElementById("centerImage")
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }, [])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides?.length <= 0) {
    return null
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[45%] left-[30px] cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  id="centerImage"
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[45%] right-[30px]  cursor-pointer select-none z-[2]"
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
