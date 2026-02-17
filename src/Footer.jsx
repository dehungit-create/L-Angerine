import {
  FaFacebookF,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#FFE9D2] text-black py-14">

      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">
            L'Angerine
          </h2>

          <p className="text-[#8B5E34] leading-relaxed text-justify">
            Thương hiệu gắn liền với các sản phẩm tự nhiên, an toàn
            cho sức khỏe và thân thiện với môi trường.
          </p>
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">
            Liên hệ
          </h3>

          <div className="space-y-3 text-[#8B5E34]">
            <p>📞 0945999676</p>
            <p>📧 langerine.ls@gmail.com</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Kết nối với chúng tôi
          </h3>

          <div className="flex justify-center md:justify-center gap-4">

            <a
              href="https://facebook.com/langerine.ls"
              target="_blank"
              className="
                w-11 h-11 rounded-full
                text-white
                bg-[#1877F2]
                flex items-center justify-center
                hover:bg-[#1877F2]/70
                transition
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="https://tiktok.com/@gaitayhuyen"
              target="_blank"
              className="
                w-11 h-11 rounded-full
                text-white
                bg-[#FF0050]
                flex items-center justify-center
                hover:bg-[#FF0050]/80
                transition
              "
            >
              <FaTiktok />
            </a>

            <a
              href="mailto:langerine.ls@gmail.com"
              className="
                w-11 h-11 rounded-full
                text-white
                bg-black
                flex items-center justify-center
                hover:bg-black/80
                transition
              "
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-black/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 L'Angerine. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
