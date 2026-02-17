import { useState, useEffect } from "react"
import slide1 from "./assets/imgs/VeChungToi/106d3225123t6943l1.jpg"
import slide2 from "./assets/imgs/VeChungToi/20251011_134105.jpg"
import slide3 from "./assets/imgs/VeChungToi/20251023_201228.jpg"
import slide4 from "./assets/imgs/VeChungToi/20251111_161530.jpg"
import slide5 from "./assets/imgs/VeChungToi/B612_20251120_233117_652.jpg"
import slide6 from "./assets/imgs/VeChungToi/B612_20251120_233222_035.jpg"
import slide7 from "./assets/imgs/VeChungToi/IMG_20260201_174124.jpg"
import slide8 from "./assets/imgs/VeChungToi/IMG_20260201_174137.jpg"
import slide9 from "./assets/imgs/VeChungToi/IMG_20260201_174206.jpg"
import slide10 from "./assets/imgs/VeChungToi/IMG_20260201_174230.jpg"
import slide11 from "./assets/imgs/VeChungToi/IMG_20260201_174237.jpg"
import slide12 from "./assets/imgs/VeChungToi/IMG_20260202_163943.jpg"
import slide13 from "./assets/imgs/VeChungToi/IMG_20260202_163954.jpg"
import slide14 from "./assets/imgs/VeChungToi/IMG_20260202_164024.jpg"
import slide15 from "./assets/imgs/VeChungToi/IMG_20260202_164121.jpg"
import slide16 from "./assets/imgs/VeChungToi/IMG_20260202_164131.jpg"
import slide17 from "./assets/imgs/VeChungToi/IMG_20260202_164134.jpg"
import slide18 from "./assets/imgs/VeChungToi/IMG_20260202_164140.jpg"
import slide19 from "./assets/imgs/VeChungToi/IMG_20260202_164145.jpg"
import slide20 from "./assets/imgs/VeChungToi/IMG_20260202_165323.jpg"
import slide21 from "./assets/imgs/VeChungToi/IMG_20260202_165329.jpg"
import slide22 from "./assets/imgs/VeChungToi/IMG_20260202_165335.jpg"
import slide23 from "./assets/imgs/VeChungToi/IMG_20260202_165341.jpg"

const slides = [
  slide1,
slide2,
slide3,
slide4,
slide5,
slide6,
slide7,
slide8,
slide9,
slide10,
slide11,
slide12,
slide13,
slide14,
slide15,
slide16,
slide17,
slide18,
slide19,
slide20,
slide21,
slide22,
slide23
]

function SlideTeam() {

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
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl">

      {/* SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            bg-cover bg-center
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
        "
      >
        ❯
      </button>

    </section>
  )
}

export default SlideTeam