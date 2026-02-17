import mem1 from "./assets/imgs/teams/gvhd.jpg"
import hoai from "./assets/imgs/teams/hoai.jpg"
import xuan from "./assets/imgs/teams/xuan.jpg"
import ha from "./assets/imgs/teams/tth.jpg"
import SlideTeam from "./SlideTeam"

const members = [
  {
    id: 1,
    name: "Hoàng Kim Thúy",
    img: mem1,
    job: "Giảng viên - Trường Cao đẳng Lạng Sơn",
    pos: "Giảng viên hướng dẫn",
  },
  {
    id: 2,
    name: "Trần Thái Hà",
    img: ha,
    job: "Sinh viên - Trường Cao đẳng Lạng Sơn",
    pos: "Trưởng nhóm",
  },
  {
    id: 3,
    name: "Phương Thị Hoài",
    img: hoai,
    job: "Sinh viên - Trường Cao đẳng Lạng Sơn",
    pos: "Thành viên",
  },
  {
    id: 4,
    name: "Hoàng Thị Xuân",
    img: xuan,
    job: "Sinh viên - Trường Cao đẳng Lạng Sơn",
    pos: "Thành viên",
  },
]

function Team() {
  return (
    <section className="w-full bg-[#FFF7ED] py-8 px-6 ">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-4xl font-bold text-[#8B5E34]">
          ĐỘI NGŨ CỦA CHÚNG TÔI
        </h2>
        <p className="text-gray-600 mt-2">
          Những con người đứng sau dự án
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
        "
      >
        {members.map((mem) => (
          <div
            key={mem.id}
            className="
              bg-white rounded-2xl shadow-md
              overflow-hidden
              group
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-100 md:h-64 overflow-hidden">
              <img
                src={mem.img}
                alt={mem.name}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-center justify-center
                "
              >
                <span className="text-white font-semibold text-lg">
                  {mem.pos}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {mem.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {mem.job}
              </p>

              <div className="mt-4">
                <span
                  className="
                    inline-block
                    px-4 py-1
                    rounded-full
                    text-sm
                    bg-[#8B5E34]/10
                    text-[#8B5E34]
                    font-medium
                  "
                >
                  {mem.pos}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:px-32">
        <div className="p-6 md:px-8 md:border-4 lg:px-8 mb-20 space-y-6 mt-20 border-2 border-dashed border-[#8B5E34] rounded-2xl ">
          <p className="text-black text-lg leading-relaxed text-justify indent-8">
            Các thành viên của L'Angerine là những người con của Xứ Lạng, sinh ra, lớn lên trưởng thành và học tập từ mảnh đất miền núi biên cương địa đầu Tổ quốc đầy nắng gió. Nhóm được hình thành từ những sinh viên của Trường Cao đẳng Lạng Sơn – những bạn trẻ mang trong mình khát vọng vươn lên giữa muôn vàn khó khăn.
          </p>

          <p className="text-black text-lg leading-relaxed text-justify indent-8">
            Có người lớn lên trong hoàn cảnh mồ côi cha, thiếu tình thương từ bé, có người thuộc hộ cận nghèo, có người sinh sống ở những xã vùng cao sát biên giới, điều kiện học tập còn nhiều thiếu thốn. Thế nhưng chính những thử thách ấy lại trở thành động lực để nhóm không ngừng cố gắng. 
          </p>

          <p className="text-black text-lg leading-relaxed text-justify indent-8">
            L'Angerine ra đời từ một mong muốn sâu xa hơn: làm điều gì đó có ích cho mảnh đất đã nuôi mình khôn lớn. Mỗi sản phẩm không đơn thuần là kết quả của nghiên cứu hay sáng tạo, mà còn là lời tri ân gửi đến quê hương – nơi đã dạy chúng tôi về sự bền bỉ, chân thành và niềm tin vào ngày mai. Với chúng tôi, học tập không chỉ là con đường thay đổi tương lai bản thân, mà còn là cách để trở về và làm điều gì đó tốt đẹp hơn cho quê hương mình, như Nelson Mandela đã nói: “Education is the most powerful weapon which you can use to change the world” (Dịch: “Giáo dục là vũ khí mạnh mẽ nhất mà bạn có thể dùng để thay đổi thế giới.”), hay như chia sẻ của Bác Phạm Minh Chính - Thủ tướng Chính phủ nước Cộng hòa xã hội chủ nghĩa Việt Nam tại Ngày hội khởi nghiệp Quốc gia của HSSV lần VI, năm 2024 (SVSTARTUP 2024): "Dân tộc ta thông minh lắm, mà càng áp lực thì lại càng nỗ lực, càng khó khăn thử thách thì lại càng thông minh. Khởi nghiệp cần sự đam mê, quyết tâm, lòng kiên trì, sự dũng cảm vượt qua khó khăn thử thách để hướng tới tương lai, hướng tới thành công". Những câu nói trên đã truyền cho L'Angerine cảm hứng, động lực, đam mê và sức sáng tạo rất lớn để nhóm hoàn thành dự án này bằng tâm huyết, chất xám của chính các thành viên, "hướng tới xây dựng quê hương đất nước hùng cường thịnh vượng, nhân dân được ấm no hạnh phúc".
        </p>

          <p className="text-black text-lg leading-relaxed text-justify indent-8">
                Giữa những bộn bề của tuổi trẻ, chúng tôi chọn cách đi chậm mà chắc, cùng nhau vun đắp một ước mơ chung: để nông sản Xứ Lạng được trân trọng hơn, để giá trị địa phương được lan tỏa xa hơn, và để chính thành viên nhóm – những người trẻ từ miền núi biên cương – có thể tự tin viết tiếp câu chuyện của quê hương bằng trí tuệ và trái tim và nhiệt huyết. "Đoàn kết là sức mạnh", khi chúng ta đồng lòng, không có gì là không thể.
          </p>
          <p className="text-black text-lg leading-relaxed text-justify indent-8">
            Mỗi người một câu chuyện, một hoàn cảnh khác nhau, nhưng khi đồng hành cùng nhau, tất cả hòa chung trong một mục tiêu: tạo nên giá trị từ chính nông sản quê hương bằng tri thức, sáng tạo và lòng biết ơn. Dự án không chỉ là hành trình khởi nghiệp, mà còn là ước mơ giản dị của những người trẻ muốn góp một phần nhỏ bé để Xứ Lạng được biết đến nhiều hơn, với sự trân trọng và tự hào.
          </p>
        </div>
      </div>
      <h2 className="border-t-2 border-dashed text-center text-xl font-black p-4">Một số hình ảnh của nhóm</h2>
      
      <SlideTeam/>
    </section>
  )
}

export default Team
