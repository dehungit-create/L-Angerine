
import logo from "./assets/imgs/Logo L'Angerine.png"
import img1 from "./assets/imgs/project/Set quà tặng.jpg"
import img2 from "./assets/imgs/project/Chuỗi sản phẩm 2.png"
import img3 from "./assets/imgs/project/Chuỗi sản phẩm.jpg"
import img4 from "./assets/imgs/project/Gian hàng 5.jpg"
import img5 from "./assets/imgs/project/TU_00004.jpg"

import textlogo from  "./assets/imgs/textlogo.png"
import logonotext from "./assets/imgs/logonotext.png"
import phacthao from "./assets/imgs/phacthaologo.jpg"


import SlideProject from "./SlideProject"




function Project() {

  return (
    <div className="bg-linear-to-b from-orange-50 via-white to-orange-50 ">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-8">
          <div className="flex flex-col items-center text-center md:text-left gap-6">
            <img
              src={logo}
              alt="Logo"
              className="w-65"
            />
            <p className="text-lg leading-relaxed text-justify">
              Dự án khởi nghiệp <b><i>L’Angerine – Tinh hoa Quýt Xứ Lạng</i></b>  được bắt nguồn từ niềm tự hào về đặc sản và tình yêu quê hương của những người con Lạng Sơn với cây quýt Bắc Sơn – một đặc sản trứ danh đã gắn bó cùng mảnh đất biên cương từ bao đời nay. Dự án được khởi động vào cuối năm 2024 với tên gọi <b><i>Tinh hoa Quýt Bắc Sơn</i></b>, và đến năm 2025 đổi tên thành <b><i>L’Angerine - Tinh hoa Quýt Xứ Lạng</i></b>, để phù hợp với sự điều chỉnh địa giới và định hướng phát triển mới của đất nước. Dự án còn có sự đặc biệt hơn với ý nghĩa chào mừng kỷ niệm 85 năm Khởi nghĩa <b><i>Bắc Sơn</i></b> (1940–2025). Nếu Khởi nghĩa Bắc Sơn là biểu tượng cho tinh thần đấu tranh kiên cường, thì hôm nay, quýt vàng Bắc Sơn lại trở thành biểu tượng của sự vươn lên trong phát triển kinh tế, văn hóa và khởi nghiệp sáng tạo của người trẻ Lạng Sơn.
            </p>
          </div>
        </div>


        <b className="mt-8 text-s md:text-2xl text-center block p-6 border-t-2 border-dashed text-orange-600">
          Ý NGHĨA LOGO & TÊN THƯƠNG HIỆU
        </b>
        <div className="flex flex-col mb-8 items-center">
          <img
            src={logonotext}
            className="rounded-3xl object-center object-cover w-40 md:h-80 md:w-80"
          />
          <div className="space-y-4 text-justify text-s md:text-lg">
            <p className="indent-8">Logo của dự án <b><i>L’Angerine – Tinh hoa Quýt Xứ Lạng</i></b> được xây dựng dựa trên sự giao thoa giữa thiên nhiên, văn hóa và bản sắc địa phương. Hình ảnh Thung lũng Bắc Sơn – vùng đất nổi tiếng với những dãy núi uốn lượn và cánh đồng trù phú – được cách điệu trong hình dáng một quả quýt căng tròn. Đây vừa là biểu tượng trực quan cho sản phẩm/nguyên liệu chủ lực của dự án, vừa thể hiện mối liên hệ chặt chẽ giữa thiên nhiên và nguồn gốc nguyên liệu đặc trưng của Lạng Sơn.</p>
          <figure className="flex flex-col items-center">
            <img
              src={phacthao}
              className="rounded-3xl object-cover w-full max-h-40 md:h-100 md:w-100"
            />
            <figcaption className="mt-3 text-sm text-gray-600">
             <i>Ảnh phác thảo logo</i> 
            </figcaption>
          </figure>

              <p className="indent-8">Bên trong quả quýt, hình ảnh lá cờ đỏ sao vàng được lồng ghép tinh tế, khẳng định rõ ràng xuất xứ Việt Nam và khơi gợi niềm tự hào dân tộc. Sự kết hợp này không chỉ cho thấy đây là sản phẩm đặc sản địa phương mà còn là đại diện cho mong muốn tinh hoa nông sản Việt vươn ra thị trường quốc tế.</p>
          </div>
        </div>

        <div className="mb-8 items-center">
          <img
            src={textlogo}
            className="rounded-3xl object-cover max-h-100 w-full"
          />
          <div className="space-y-4 text-justify text-s md:text-lg">
            <p className="indent-8">Tên thương hiệu <b><i>“L’Angerine”</i></b> (phiên âm: Lờ-ang-chơ-rin) cũng mang trong mình một thông điệp giàu ý nghĩa. Từ gốc “Tangerine” (tiếng Anh: quýt) được sáng tạo bằng cách thay chữ T bằng L, bốn ký tự đầu tiên ghép lại thành “Lang”, gợi nhắc đến Lạng Sơn – quê hương của sản phẩm. Đồng thời, dấu cách sở hữu L’ trong cách viết của thương hiệu cũng ẩn chứa thông điệp “thuộc về Lạng Sơn”, khẳng định xuất xứ, bản quyền và niềm tự hào vùng biên ải. Ngoài ra, chữ L cũng là viết tắt của từ “Love”, là một ẩn ý khác thể hiện tình yêu của các thành viên dự án đối với đặc sản nông sản địa phương.</p>

            <p className="indent-8">Tổng thể logo vừa mang tính nhận diện thương hiệu hiện đại, vừa gắn kết với yếu tố địa phương và bản sắc Việt Nam, thể hiện định hướng của dự án: đưa Quýt vàng Bắc Sơn không chỉ là một nông sản, mà trở thành biểu tượng tinh hoa văn hóa và giá trị bền vững của Lạng Sơn trên bản đồ nông sản trong và ngoài nước.</p>
            <p className="indent-8">Đặc biệt, ý tưởng thiết kế logo và ý nghĩa do <b><i></i>Trưởng nhóm dự án - Trần Thái Hà</b> đề xuất & thực hiện, thể hiện tinh thần sáng tạo, trách nhiệm và niềm tự hào của chính người dẫn dắt dự án. </p>
          </div>
        </div>

        <b className="text-s md:text-2xl text-center block p-6 border-t-2 border-dashed text-orange-600">
          HÀNH TRÌNH KHỞI NGHIỆP XANH TỪ NHỮNG GIÁ TRỊ TƯỞNG CHỪNG BỊ LÃNG QUÊN
        </b>
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <img
            src={img2}
            className="rounded-3xl shadow-xl object-cover max-h-100 w-full"
          />
          <div className="space-y-4 text-justify text-s md:text-lg">
            <p className="indent-8">Theo thống kê toàn cầu, rác thải từ vỏ và hạt trái cây chiếm từ 15% đến 60% tổng lượng rác thải của ngành công nghiệp thực phẩm. Hàng triệu tấn phế phẩm hữu cơ bị bỏ đi mỗi năm không chỉ gây lãng phí tài nguyên mà còn tạo áp lực lớn lên môi trường. Trong đó có vỏ quýt và hạt quýt. Nhưng, những phần mà chúng ta tưởng như vô giá trị – lại ẩn chứa tiềm năng tự nhiên quý báu về hương liệu, tinh dầu và dưỡng chất tốt cho sức khỏe con người.</p>
              <p className="indent-8">Từ thực tế đó, L’Angerine ra đời với sứ mệnh khởi nghiệp xanh – sáng tạo và bền vững, hướng tới tận dụng toàn diện giá trị từ trong ra ngoài của quýt vàng Xứ Lạng, biến từng phần nhỏ nhất thành sản phẩm thân thiện với môi trường, mang lại lợi ích kép cho cộng đồng và sức khỏe con người.</p>
              <p className="indent-8">Không chỉ dừng lại ở việc tái chế và giảm thiểu rác thải, dự án còn hướng tới xây dựng chuỗi giá trị nông nghiệp tuần hoàn, góp phần nâng cao thu nhập cho người nông dân, đồng thời quảng bá hình ảnh nông sản đặc trưng của Lạng Sơn ra thị trường trong và ngoài nước.</p>
          </div>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <b className="text-s md:text-2xl text-center block p-6 border-t-2 border-dashed text-orange-600">
          ĐỔI MỚI - SÁNG TẠO - PHÁT TRIỂN BỀN VỮNG
        </b>
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="space-y-4 text-s md:text-lg text-justify">
            <p className="indent-8">Dự án L’Angerine tập trung phát triển đa dạng các dòng sản phẩm tự nhiên từ quýt như: Tinh dầu vỏ quýt, trà thảo mộc, túi thơm, nước hoa tự nhiên, siro quýt, mứt trần bì, bột vỏ quýt hữu cơ,... Mỗi sản phẩm là sự kết hợp hài hòa giữa tri thức khoa học hiện đại và nguồn nguyên liệu bản địa, thể hiện tinh thần dám nghĩ – dám làm – dám đổi mới của tuổi trẻ Xứ Lạng.</p>
            <p className="indent-8">Nhóm dự án tin rằng, một sản phẩm tốt không chỉ đáp ứng nhu cầu của thị trường, mà còn phải mang trong mình câu chuyện về trách nhiệm xã hội và niềm tự hào quê hương.</p>
            <p className="indent-8">L’Angerine lựa chọn con đường “xanh hóa” toàn diện – từ khâu nguyên liệu, quy trình sản xuất, thiết kế bao bì đến hoạt động truyền thông – nhằm hướng đến một thương hiệu thân thiện, hiện đại và bền vững.</p>
            <p className="indent-8">L'Angerine - Từ thiên nhiên. Vì sức khỏe. Cho cộng đồng.</p>
            <p className="indent-8">L'Angerine - From Nature. For Health. For Community. </p>
          </div>
          <img
            src={img1}
            className="rounded-3xl  object-cover max-h-125 w-full"
          />
        </div>

        {/* ================= BLOCK 3 ================= */}
        <b className="text-s md:text-2xl text-center block p-6 border-t-2 border-dashedv text-orange-600 border-dashed">
          GẮN KẾT VĂN HÓA – BẢO TỒN GIÁ TRỊ TRUYỀN THỐNG
        </b>
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <img
            src={img4}
            className="rounded-3xl shadow-xl object-cover max-h-100 w-full"
          />
          <div className="space-y-4 text-s md:text-lg text-justify">
            <p className="indent-8">Trong chặng đường phát triển, L’Angerine không chỉ là dự án kinh tế mà còn là cầu nối văn hóa. </p>
              <p className="indent-8">Trong tương lai, nhóm định hướng kết hợp cùng các sáng kiến giáo dục và bảo tồn văn hóa địa phương, ví dụ như Website học tiếng Tày – hoctiengtay.edu.vn, góp phần lưu giữ tiếng nói, văn hóa, phong tục, tập quán, bản sắc dân tộc Tày tại huyện Bắc Sơn cũ nói riêng – nơi nhóm lựa chọn nguồn nguyên liệu, và toàn tỉnh nói chung.</p>
              <p className="indent-8">Song song đó, dự án cũng nghiên cứu phát triển thêm các sản phẩm từ quýt gắn liền với truyền thống địa phương, tận dụng chất liệu tự nhiên và tay nghề thủ công sẵn có, nhằm bảo tồn và phục hồi các làng nghề truyền thống của tỉnh Lạng Sơn. Nhóm mong muốn qua đó thúc đẩy phát triển kinh tế địa phương đi đôi với giữ gìn văn hóa dân tộc, để mỗi sản phẩm không chỉ là hàng hóa, mà còn là câu chuyện về trái tim và bản sắc quê hương.</p>
          </div>
        </div>

        {/* ================= BLOCK 4 ================= */} 
        <b className="text-s md:text-2xl text-center block p-6 border-t-2 border-dashed text-orange-600">
          THẾ HỆ TRẺ: HỌC TẬP – TRẢI NGHIỆM – TRÁCH NHIỆM VÀ KHÁT VỌNG
        </b>
        <div className="grid md:grid-cols-2 gap-14 mb-8 items-center">
          <img
            src={img3}
            className="rounded-3xl shadow-xl object-cover w-full"
          />
          <div className="space-y-4 text-s md:text-lg text-justify">
           <p className="indent-8">L’Angerine hướng đến xây dựng chuỗi giá trị nông nghiệp tuần hoàn, giúp gia tăng thu nhập cho người nông dân, đồng thời nâng cao vị thế nông sản đặc trưng của Lạng Sơn – góp phần lan tỏa phát triển mô hình khởi nghiệp xanh mà ngành giáo dục Việt Nam đang tích cực khuyến khích. Nhóm dự án là tập hợp của những người trẻ – những chủ nhân tương lai của đất nước, mang trong mình tinh thần học hỏi, sáng tạo và ý thức sâu sắc về sứ mệnh bảo vệ môi trường, phát triển quê hương. Nhóm hiểu rằng khởi nghiệp không chỉ là tạo ra giá trị kinh tế, mà còn là trách nhiệm xã hội – là góp phần xây dựng tương lai xanh, sạch và nhân văn hơn. </p>
              <p className="indent-8">L’Angerine không chỉ là chuỗi sản phẩm, mà còn là hành trình học tập trải nghiệm – nơi mỗi thành viên được rèn luyện kỹ năng mềm, tư duy sáng tạo và tinh thần trách nhiệm với cộng đồng và môi trường.</p>
              <p className="indent-8">Thông qua từng giai đoạn nghiên cứu, thử nghiệm, sản xuất và quảng bá, L’Angerine không chỉ học cách làm ra một sản phẩm tốt, mà còn học cách sống xanh – sống có ích – sống có trách nhiệm, và mỗi sản phẩm của L’Angerine là một câu chuyện về sự tái sinh sáng tạo và niềm tin vào một tương lai xanh cho Việt Nam, với thông điệp: “Không có gì là bỏ đi.”</p>
              <p className="indent-8">Với niềm tin và sự kiên định, nhóm sẽ không ngừng hoàn thiện, đổi mới, mở rộng mô hình, hướng tới phát triển toàn diện – kết hợp giữa kinh tế, văn hóa và môi trường, đồng hành cùng định hướng chung của dự án lớn: “Tinh hoa Xứ Lạng: Vẻ đẹp miền biên ải”.</p>
          </div>
        </div>
        {/* ================= FINAL ================= */}
        <div className="grid md:grid-cols-2 md:gap-8 items-center space-y-4 text-s md:text-lg text-justify">
          <img
            src={img5}
            className="rounded-3xl shadow-xl object-cover w-full"
          />
          <p className="indent-8">Qua quá trình nghiên cứu, phân tích và đánh giá của các thành viên trong nhóm thì dự án “L’Angerine - Tinh hoa Quýt Xứ Lạng” là khả thi. Với dự án này nhóm thực hiện mong muốn sẽ giúp cho bà con nông dân phần nào đỡ khó khăn hơn trong việc tiêu thụ nông sản, ngoài ra dự án còn cung cấp cho người tiêu dùng thêm các sản phẩm vừa có nét truyền thống Việt vừa đa dạng và phong phú về nguyên liệu cũng như cách chế biến. Dự án có thể sẽ mang lại những điều mới mẻ và thú vị hơn đối với nhu cầu trải nghiệm các sản phảm mới vừa thơm ngon, vừa bổ dưỡng của người tiêu dùng. Góp phần thúc đẩy mọi người sử dụng những loại thực phẩm có nguồn gốc từ những loại nông sản thân thuộc. Dựa vào những lợi thế mà dự án có được như địa điểm thuận lợi, nguồn nhân lực trẻ năng động nhiệt huyết sáng tạo, đặc biệt là sản phẩm mới, đa dạng, vừa thơm ngon lại tốt cho sức khỏe, giá cả hợp lý sẽ tạo được ấn tượng tốt với khách hàng, nhà cung cấp và đối tác.</p>

        </div>


        

      </div>
      <h2 className="border-t-2 border-dashed text-center text-s font-black p-4 mt-8 text-orange-600">MỘT SỐ HÌNH ẢNH THỰC TẾ</h2>
    <SlideProject/>
    </div>
  )

}

export default Project
