import { useEffect, useState } from "react";

import bgrImg from "./assets/imgs/main2.png";
import img1 from "./assets/imgs/Slides/img1.jpg";
import img2 from "./assets/imgs/Slides/img2.jpg";
import img3 from "./assets/imgs/Slides/img3.jpg";
import img4 from "./assets/imgs/Slides/img4.jpg";
import img5 from "./assets/imgs/Slides/Gian hàng 5.jpg";
import img6 from "./assets/imgs/Slides/Gian hàng 6.jpg";
import NavItiem from "./NavItem";

const slides = [img1, img2, img3, img4, img5, img6, bgrImg];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  return (
    <section className="overflow-hidden bg-[#FFE9D2]">
      <div className="relative w-full pt-[50%] mb-8 ">

        {/* SLIDE TRACK */}
        <div
          className="absolute top-0 left-0 h-full w-full flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* TITLE */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-4xl font-bold z-10">
          L'ANGERINE
        </div>

        {/* PREV */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black"
        >
          ❮
        </button>

        {/* NEXT */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black"
        >
          ❯
        </button>
      </div>
      <NavItiem></NavItiem>
    </section>
  );
}

export default HomePage;
