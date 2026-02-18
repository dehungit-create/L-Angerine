import { useState, useEffect } from "react"

import slide1 from "./assets/imgs/SlideHome/z7543284717743_eacdb624266d0c8f1a4df427843019ce.jpg"
import slide2 from "./assets/imgs/SlideHome/z7543284754510_6237102d8e4119003f832991f8c7c3e0.jpg"
import slide3 from "./assets/imgs/SlideHome/z7543285421227_d17c32c46fa4a8876d6289e966cc8f84.jpg"
import slide4 from "./assets/imgs/SlideHome/z7543292656672_eaca4be7e1022ee44646b7b4268b604e.jpg"

const slides = [
  slide1, slide2, slide3, slide4
]

function SlideHome() {

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(timer)
  }, [current])

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  return (
    <section className="relative w-full pt-[50%] overflow-hidden border-2 rounded-2xl border-dashed p-5">

      {/* SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`
            w-full
            pt-[50%]
            absolute inset-0
            bg-cover
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* PREV */}
      <button
        onClick={prevSlide}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          bg-black/40 text-white
          w-10 h-10 rounded-full
          flex items-center justify-center
          hover:bg-black/60
          opacity-45
        "
      >
        ❮
      </button>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          bg-black/40 text-white
          w-10 h-10 rounded-full
          flex items-center justify-center
          hover:bg-black/60
          opacity-45

        "
      >
        ❯
      </button>

    </section>
  )
}

export default SlideHome