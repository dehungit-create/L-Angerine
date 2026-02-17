import { useState } from "react"
import { NavLink } from "react-router-dom"

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

  return (
    <header className="w-full h-16 px-6 flex items-center fixed top-0 z-50 bg-[#FFE9D2] shadow-md relative">

      {/* ================= LOGO ================= */}

      {/* LEFT LOGO (DESKTOP) */}
      <div className="hidden lg:flex items-center gap-2">
        <img src={logo} className="w-12 h-12" />
        <img src={logoText} className="h-12" />
      </div>

      {/* CENTER LOGOTEXT (MOBILE + TABLET) */}
      <div className="absolute inset-0 flex justify-center items-center lg:hidden pointer-events-none">
        <img src={logoText} className="h-10 md:h-11" />
      </div>

      {/* LEFT LOGO ICON (MOBILE + TABLET) */}
      <div className="flex lg:hidden items-center">
        <img src={logo} className="w-11 h-11" />
      </div>

      {/* ================= DESKTOP NAV ================= */}

      <ul className="hidden lg:flex flex-1 justify-center gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                px-4 py-2
                transition-colors duration-300
                ${isActive ? "text-white" : "text-black"}
                hover:text-white
              `
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ================= DESKTOP SEARCH ================= */}

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

      {/* ================= MOBILE MENU BUTTON ================= */}

      <div className="flex lg:hidden flex-1 justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          absolute top-16 left-0 w-full
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
                transition-colors duration-300
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
