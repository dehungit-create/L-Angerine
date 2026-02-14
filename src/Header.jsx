import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "./assets/imgs/Logo L'Angerine.png"
import logoText from "./assets/imgs/Langerine_text.png"

const navItems = [
  { name: "Trang Chủ", path: "/" },
  { name: "Giới thiệu", path: "/project" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Về chúng tôi", path: "/team" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const navRef = useRef([])
  const location = useLocation()

  // cập nhật vị trí active bg
  useEffect(() => {
    const index = navItems.findIndex(
      (item) => item.path === location.pathname
    )

    if (navRef.current[index]) {
      const el = navRef.current[index]
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [location])

  return (
    <header className="w-full h-20 px-6 flex items-center fixed top-0 z-50 bg-[#FFE9D2] shadow-md">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-12 h-12" />
        <img
          src={logoText}
          className="h-12 hidden lg:block"
        />
      </div>

      {/* DESKTOP NAV */}
      <ul
        className="hidden lg:flex flex-1 justify-center gap-2 relative"
      >
        {/* ACTIVE BACKGROUND */}
        <span
          className="absolute top-0 h-full bg-[#8B5E34] rounded-full transition-all duration-300"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />

        {navItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (navRef.current[index] = el)}
            className="relative z-10"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                px-4 py-2 block
                transition-colors duration-300
                ${isActive ? "text-white" : "text-black"}
              `
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* DESKTOP SEARCH */}
      <div className="hidden lg:flex items-center gap-2">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          className="px-4 py-2 rounded-full border bg-white"
        />
        <button className="px-4 py-2 rounded-full bg-[#8B5E34] text-white">
          Tìm
        </button>
      </div>

      {/* MOBILE + TABLET */}
      <div className="flex lg:hidden flex-1 justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute top-20 left-0 w-full
          bg-[#FFE9D2]
          lg:hidden
          transition-all duration-300
          overflow-hidden
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                px-4 py-2 rounded-full
                ${isActive
                  ? "bg-[#8B5E34] text-white"
                  : "hover:bg-[#8B5E34] hover:text-white"}
              `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Header
