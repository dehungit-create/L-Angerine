import bgrImg from "./assets/imgs/main2.png"
import NavItiem from "./NavItem"

function HomePage() {
  return (
    <section className="relative w-full overflow-hidden mt-20">

      {/* Background */}
      <div className="relative flex flex-col md:flex-row w-full">

        {/* Image */}
        <div
          className="
            relative
            w-full md:w-[60%]
            pt-[50%] md:pt-80
            md:h-screen
            bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url(${bgrImg})`,
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 0%, black 50%, transparent 100%)"
          }}
        />

        {/* Empty desktop */}
        <div className="hidden md:block md:w-[40%]" />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent to-[#fde2c6]
          pointer-events-none
        "
      />

      {/* Text */}
      <div
        className="
          absolute inset-0 z-10
          flex items-center justify-center
          md:items-start md:justify-start
        "
      >
        <div
          className="
            text-center md:text-left
            px-6
            md:py-40 md:pl-[50%]
            font-bold tracking-widest
            text-black/80
            text-xl md:text-6xl
          "
        >

          <div style={{ animationDelay: "0s" }} className="opacity-0 fade-down">
            <span className="text-[#8B4A1E] text-2xl md:text-8xl">
              L'Angerine
            </span>
          </div>

          <div style={{ animationDelay: "0.2s" }} className="opacity-0 fade-down">
            Tinh hoa
          </div>

          <div style={{ animationDelay: "0.4s" }} className="opacity-0 fade-down">
            Quýt Xứ Lạng
          </div>

          <div style={{ animationDelay: "0.6s" }} className="opacity-0 fade-down">
            <span className="text-xs md:text-2xl">
              Giọt nắng vàng thiên nhiên trao tặng
            </span>
          </div>

        </div>
      </div>
      <NavItiem></NavItiem>
    </section>
  )
}

export default HomePage
