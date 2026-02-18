import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

import navImg1 from "./assets/imgs/NavItems/Logo.jpg"
import navImg2 from "./assets/imgs/NavItems/Gian hàng.png"
import navImg3 from "./assets/imgs/NavItems/TU_00004.jpg"

const navItems = [
  {
    id: 1,
    title: "Giới thiệu dự án",
    desc: "Dự án khởi nghiệp xanh vì sức khỏe và môi trường",
    nav: "/project",
    img: navImg1
  },
  {
    id: 2,
    title: "Các sản phẩm của chúng tôi",
    desc: "Chuỗi sản phẩm đa dạng, độc đáo",
    nav: "/products",
    img: navImg2
  },
  {
    id: 3,
    title: "Về chúng tôi",
    desc: "Nhóm sinh viên thực hiện & giảng viên hướng dẫn",
    nav: "/team",
    img: navImg3
  }
]

function NavItem() {

  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    // MOBILE -> không animation
    if (window.innerWidth < 768) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (
    <div
      ref={sectionRef}
      className="
        md:p-12
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        bg-[#FFE9D2]
      "
    >

      {navItems.map((item, index) => (

        <NavLink
          key={item.id}
          to={item.nav}
          style={{ animationDelay: `${index * 0.2}s` }}
          className={`
            relative rounded-2xl overflow-hidden
            cursor-pointer

            opacity-100

            ${visible ? "opacity-100 md:fade-up md:opacity-100" : ""}
          `}
        >

          {/* Overlay */}
          <div className="
            absolute inset-0
            bg-linear-to-t
            from-black/70
            via-black/30
            to-transparent
          " />

          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-60 object-cover"
          />

          {/* Badge */}
          <div className="absolute top-3 left-3 bg-white/30 backdrop-blur-md text-white text-sm font-semibold px-3 py-1 rounded-full">
            0{item.id}
          </div>

          {/* Text */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-sm mt-1 text-white/90">
              {item.desc}
            </p>
          </div>

        </NavLink>

      ))}

    </div>
  )
}

export default NavItem
