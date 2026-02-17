import slide1 from "./assets/imgs/GioiThieu/20251205_201237.jpg"
import slide2 from "./assets/imgs/GioiThieu/20251205_201252.jpg"
import slide3 from "./assets/imgs/GioiThieu/2607Bacson2.jpg"
import slide4 from "./assets/imgs/GioiThieu/FB_IMG_1771035030303.jpg"
import slide5 from "./assets/imgs/GioiThieu/FB_IMG_1771035032834.jpg"
import slide6 from "./assets/imgs/GioiThieu/FB_IMG_1771035133747.jpg"
import slide7 from "./assets/imgs/GioiThieu/FB_IMG_1771045103303.jpg"
import slide8 from "./assets/imgs/GioiThieu/FB_IMG_1771045119278.jpg"
import slide9 from "./assets/imgs/GioiThieu/FB_IMG_1771045121943.jpg"
import slide10 from "./assets/imgs/GioiThieu/FB_IMG_1771045124429.jpg"
import slide11 from "./assets/imgs/GioiThieu/FB_IMG_1771045380601.jpg"
import slide12 from "./assets/imgs/GioiThieu/FB_IMG_1771045394006.jpg"
import slide13 from "./assets/imgs/GioiThieu/FB_IMG_1771045403090.jpg"
import slide14 from "./assets/imgs/GioiThieu/quyt-bac-son-trai-vang-vung-bien-vien_65211e8fae849.jpg"
import slide15 from "./assets/imgs/GioiThieu/quyt-BS-12-JPG.jpg"
import { useEffect, useState } from "react"

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
]

function SlideProject() {

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
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">

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

export default SlideProject
