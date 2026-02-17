import bgrImg from "./assets/imgs/main2.png";
import NavItem from "./NavItem.jsx";
function Home() {
  return (
    <section className="md:-mt-15 bg-[#FFE9D2]">
      <div className="overflow-hidde mb-8">
        <div
          className="relative w-full pt-[50%] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgrImg})` }}
        >
          {/* OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,233,210,0.85) 0%, rgba(255,233,210,0.5) 40%, rgba(255,233,210,0.2) 70%, rgba(255,233,210,0) 100%)",
            }}
          ></div>

          {/* CONTENT */}
          <div className="absolute w-full top-0 left-1/2 -translate-x-1/2 mt-5 md:mt-25 z-10 flex items-center justify-center text-center px-6">
            <div>

              <h1
                className="text-orange-600 text-3xl md:text-8xl font-serif slide-down"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
              >
                L'Angerine
              </h1>

              <h2
                className="text-xl md:text-5xl font-extrabold text-[#4b2e16] slide-down delay-1"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
              >
                Tinh Hoa Quýt Xứ Lạng
              </h2>

              <p
                className="text-green-700 text-xs font-bold md:text-3xl italic slide-down delay-2"
                style={{ textShadow: "2px 2px 6px rgba(255,255,255,0.8)" }}
              >
                Giọt nắng đọng thiên nhiên trao tặng
              </p>

            </div>
          </div>

          {/* CSS */}
          <style>
            {`
              .slide-down {
                opacity: 0;
                animation: slideDown 1s ease-out forwards;
              }

              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-60px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .delay-1 {
                animation-delay: 0.3s;
              }

              .delay-2 {
                animation-delay: 0.6s;
              }
            `}
          </style>
        </div>
      </div>
     <NavItem/>
    </section>
  );
}

export default Home;
