import { useState } from "react";

import banhTT from "./assets/imgs/Products/Bánh trung thu.png"
import botTranBi from "./assets/imgs/Products/Bột trần bì.jpg"
import mutTranBi from "./assets/imgs/Products/Mứt trần bì.jpg"
import siroQuyt from "./assets/imgs/Products/Siro quýt.jpg"
import traPhoNhi from "./assets/imgs/Products/Trà phổ nhĩ.jpg"
import hatQuytSay from "./assets/imgs/Products/Hạt quýt sấy.jpg"
import quytSayDeo from "./assets/imgs/Products/Quýt sấy dẻo.jpg"
import nhang from "./assets/imgs/Products/Nhang vỏ quýt.jpg"
import traQuytMix from "./assets/imgs/Products/Trà quýt mix vị.jpg"
import giavi from "./assets/imgs/Products/Gia vị.jpg"
import huongduong from "./assets/imgs/Products/Hướng dương ướp.jpg"
import tranbi from "./assets/imgs/Products/Trần bì.jpg"
import nuochoa from "./assets/imgs/Products/Nước hoa.jpg"
import tuithom from "./assets/imgs/Products/Túi thơm.jpg"
import tinhdau from "./assets/imgs/Products/Tinh dầu lọ.jpg"
import xaphong from "./assets/imgs/Products/Xà phòng quýt nghệ.jpg"
import keodeo from "./assets/imgs/Products/Kẹo dẻo.jpg"







const products = [
  {
    id: 1,
    name: "Trà phổ nhĩ",
    uses: "Hỗ trợ tiêu hóa, thanh lọc cơ thể",
    price: "200.000đ",
    img: traPhoNhi,
    des: [
      "Trà phổ nhĩ quýt là sự kết hợp tinh tế giữa trà phổ nhĩ cổ truyền và vỏ quýt khô tự nhiên, tạo nên một sản phẩm độc đáo và giàu giá trị dinh dưỡng.",
      "Trà phổ nhĩ được nhồi trong vỏ quýt không chỉ giữ trọn hương vị truyền thống mà còn giúp tăng cường lợi ích cho sức khỏe, hỗ trợ tiêu hóa, thanh lọc cơ thể và giảm stress."
    ]
  },
  {
    id: 2,
    name: "Trần bì (vỏ quýt sấy khô)",
    uses: "Hỗ trợ tiêu hóa, giảm triệu chứng đầy hơi, ho có đờm, và cải thiện tuần hoàn máu",
    price: "30.000đ",
    img: tranbi,
    des: [
      "Vỏ quýt sấy khô, hay còn gọi là trần bì, có nhiều tác dụng trong y học cổ truyền và ẩm thực. Nó giúp hỗ trợ tiêu hóa, giảm triệu chứng đầy hơi, ho có đờm, và cải thiện tuần hoàn máu. Trần bì cũng có tính kháng viêm và giúp tăng cường sức đề kháng. Trong nấu ăn, nó thường được dùng để tạo hương vị cho các món ăn, đặc biệt trong các món hầm hoặc trà. "
    ]
  },
  {
    id: 3,
    name: "Túi thơm vỏ quýt",
    uses: "Công dụng: Khử mùi ẩm mốc, tạo hương thơm tự nhiên; Thư giãn tinh thần, giảm căng thẳng nhẹ; Xua đuổi côn trùng ; Trang trí xinh xắn, mang đậm nét truyền thống.",
    price: "40.000đ",
    img: tuithom,
    des: [
      "Từ những vỏ quýt vàng thơm của xứ Lạng, được sấy khô tự nhiên và giữ trọn tinh dầu, túi thơm vỏ quýt mang đến một mùi hương dịu dàng, thanh mát và ấm áp rất riêng.",
      "Không nồng gắt như nước hoa, không nhân tạo như hương liệu tổng hợp – đó là hương thơm mộc mạc của thiên nhiên, thoang thoảng trong tủ quần áo, góc làm việc hay trong chiếc túi xách nhỏ."
    ]
  },{
    id: 4,
    name: "Mứt trần bì",
    uses: "Hỗ trợ chữa đầy bụng, khó tiêu, ợ hơi, ho có đờm, kém ăn, nôn mửa, tiêu chảy…",
    price: "40.000đ",
    img: mutTranBi,
    des: [
      "Mứt trần bì có mùi thơm, vị cay, đắng, tính ấm, tác dụng điều hòa khí huyết, tiêu đờm, kiện tỳ.",
      "Vì hoàn toàn tự nhiên ( có vỏ quýt và đường) nên cực kì lành tính và an toàn khi sử dụng để chữa bệnh. Thường dùng chữa đầy bụng, khó tiêu, ợ hơi, ho có đờm, kém ăn, nôn mửa, tiêu chảy…",
    ]
  },
  {
    id: 5,
    name: "Nước hoa quýt",
    uses: "Tạo mùi hương thanh mát, ngọt dịu, mang lại cảm giác thư giãn, dễ chịu",
    price: "45.000đ",
    img: nuochoa,
    des: [
      "Nước hoa quýt được làm từ 100% chiết xuất tinh dầu vỏ quýt kết hợp với cồn thực phẩm tinh khiết và nước hoa hồng. Mùi hương thanh mát, ngọt dịu, mang lại cảm giác thư giãn, dễ chịu. Thân thiện môi trường: sử dụng chai thủy tinh cao cấp, bao bì giấy tái chế."
    ]
  },
  {
    id: 6,
    name: "Tinh dầu vỏ quýt",
    uses: "Dùng trong spa, xông tinh dầu, sản xuất nước hoa, mỹ phẩm, hoặc chế biến thực phẩm.",
    price: "40.000đ",
    img: tinhdau,
    des: [
      "Tinh dầu quýt 100% tự nhiên, không hóa chất. Hương thơm tươi mát, dễ chịu, có tác dụng thư giãn tinh thần, giảm căng thẳng. Tinh dầu chứa nhiều hoạt chất limonene, flavonoid có tính kháng khuẩn, chống oxy hóa.",
    ]
  },
  {
    id: 7,
    name: "Bột vỏ quýt",
    uses: "Dùng làm nguyên liệu trong pha trà, làm bánh, nấu ăn, ứng dụng trong làm đẹp (tẩy tế bào chết, mặt nạ), dùng trong y học dân gian (hỗ trợ tiêu hóa, giảm ho, giảm stress).",
    price: "30.000đ",
    img: botTranBi,
    des: [
      "Bột vỏ quýt được sản xuất 100% tự nhiên, không phẩm màu, không hóa chất. Bột mịn, màu vàng cam nhạt, giữ nguyên hương thơm tự nhiên. Có công dụng: Dùng làm nguyên liệu trong pha trà, làm bánh, nấu ăn, ứng dụng trong làm đẹp (tẩy tế bào chết, mặt nạ), dùng trong y học dân gian (hỗ trợ tiêu hóa, giảm ho, giảm stress).",
    ]
  },
  {
    id: 8,
    name: "Hướng dương ướp vỏ quýt",
    uses: "Ăn vặt",
    price: "15.000đ",
    img: huongduong,
    des: [
      "Hướng dương ướp vỏ quýt là món ăn vặt tự nhiên, thơm ngon và tốt cho sức khỏe. Hạt hướng dương được rang giòn, sau đó tẩm ướp cùng tinh dầu và bột vỏ quýt sấy để tạo hương thơm đặc trưng, giúp dễ tiêu hóa, giảm căng thẳng và hỗ trợ tăng sức đề kháng. Sản phẩm phù hợp với giới trẻ, dân văn phòng hoặc có thể dùng làm quà tặng đặc sản địa phương.",
    ]
  },
  {
    id: 9,
    name: "Nhang vỏ quýt",
    uses: "Thắp hương, đuổi muỗi",
    price: "35.000đ",
    img: nhang,
    des: [
      "Các dịp lễ Tết nhà nhà đều cần sản phẩm thờ cúng gia tiên, 1 số loại hương trên thị trường sử dụng mùn cưa tẩm hóa chất khi đốt sẽ có mùi nồng, khó chịu và thường cháy không tự nhiên, trong khi hương trầm vỏ quýt làm từ bột gỗ trầm, bột vỏ quýt,... có mùi thơm dịu nhẹ, tự nhiên, tàn hương màu xám tro và cháy rụng... Nhang vỏ quýt là sản phẩm được làm từ nguyên liệu tự nhiên, có khả năng đuổi muỗi nhanh chóng, an toàn cho sức khỏe người sử dụng, kể cả trẻ nhỏ.",
    ]
  },
  {
  id: 10,
  name: "Xà phòng quýt nghệ",
  uses: "Sản phẩm giúp làm sạch, sáng da, giảm thâm nám, kháng khuẩn nhẹ và mang lại mùi hương tươi mát đặc trưng",
  price: "35.000đ",
  img: xaphong,
  des: [
    "Xà phòng quýt nghệ là sản phẩm chăm sóc da tự nhiên được làm từ tinh dầu vỏ quýt vàng Bắc Sơn, bột nghệ nguyên chất và các loại dầu thực vật như dầu dừa, dầu ô liu, dầu cám gạo. Sản phẩm giúp làm sạch, sáng da, giảm thâm nám, kháng khuẩn nhẹ và mang lại mùi hương tươi mát đặc trưng. Thành phần hoàn toàn tự nhiên, không chứa chất tạo bọt công nghiệp, thân thiện với môi trường và phù hợp xu hướng tiêu dùng xanh – sạch.",
  ]
},
 {
  id: 11,
  name: "Gia vị ướp vỏ quýt mác mật",
  uses: "Dùng làm gia vị",
  price: "Liên hệ",
  img: giavi,
  des: [
    "Quýt và mắc mật là 2 loại nguyên liệu với nhiều công dụng tuyệt vời trong Đông Y lẫn chế biến thức ăn. Sản phẩm sử dụng bột vỏ quýt, lá và quả mắc mật cùng các nguyên liệu tươi ngon khác như: ớt bột, thảo quả, tỏi,... chế biến thành bột gia vị ướp nhằm mang đến hương vị thơm ngon và đặc trưng của vùng Đông Bắc Việt Nam cho món ăn, giúp bạn cho ra đời các món nướng, quay, chiên thơm nồng nàn, đậm đà khó cưỡng. ",
  ]
},
 {
  id: 12,
  name: "Bánh trung thu nhân quýt",
  uses: "Đồ ăn vặt",
  price: "Liên hệ",
  img: banhTT,
  des: [
    "Giữa muôn vàn hương vị truyền thống, bánh trung thu nhân quýt mang đến một làn gió mới – thanh mát, dịu ngọt và đầy bất ngờ.",
    "Nhân quýt được chế biến từ những trái quýt vàng chín mọng, giữ trọn vị chua ngọt tự nhiên cùng hương thơm tinh tế. Khi hòa quyện cùng lớp vỏ bánh mềm mịn, từng miếng cắt ra là một sắc cam ấm áp như ánh trăng rằm tháng Tám.",
    "Điểm đặc biệt: Vị ngọt thanh, không gắt, ít ngấy hơn nhân truyền thống. Hương thơm tự nhiên, không hương liệu tổng hợp, phù hợp với người yêu thích vị trái cây thanh nhẹ",
  ]
},
 {
  id: 13,
  name: "Kẹo dẻo quýt",
  uses: "Đồ ăn vặt",
  price: "15.000đ",
  img: quytSayDeo,
  des: [
    "Kẹo dẻo quýt được chế biến từ nước cốt và vỏ quýt vàng Bắc Sơn kết hợp với gelatin hoặc pectin tự nhiên, tạo nên viên kẹo dẻo mềm, thơm dịu và có vị chua ngọt thanh mát. Sản phẩm không sử dụng phẩm màu, hương liệu nhân tạo, giữ nguyên hương vị tự nhiên của quýt.",
  ]
},
 {
  id: 14,
  name: "Múi quýt sấy dẻo",
  uses: "Đồ ăn vặt",
  price: "15.000đ",
  img: keodeo,
  des: [
    "Múi quýt sấy dẻo được chế biến từ quýt vàng Bắc Sơn tươi, chọn lọc kỹ, tách múi thủ công và sấy bằng công nghệ nhiệt độ thấp hoặc sấy thăng hoa để giữ nguyên hương vị, màu sắc và giá trị dinh dưỡng.",
  ]
},
{
  id: 15,
  name: "Siro quýt vàng Xứ Lạng",
  uses: "Bổ sung vitamin C, tăng sức đề kháng, làm đẹp da",
  price: "35.000đ",
  img: siroQuyt,
  des: [
    "Siro quýt là một sản phẩm làm từ quýt tươi Bắc Sơn, giữ trọn vẹn hương vị thanh mát và chua ngọt tự nhiên của quả. Sản phẩm giàu vitamin C, giúp tăng cường sức đề kháng và làm đẹp da. Siro có thể dùng pha nước uống, làm nguyên liệu chế biến đồ ăn, thức uống như cocktail, sinh tố hoặc làm topping cho các món tráng miệng. Với hương thơm tươi mát và vị chua ngọt đặc trưng, siro quýt mang đến cảm giác sảng khoái và thích hợp cho mọi thành viên trong gia đình. Sản phẩm không chứa chất bảo quản và đảm bảo an toàn cho sức khỏe.",
  ]
},
{
  id: 16,
  name: "Hạt quýt sấy",
  uses: "Dùng tron y học, chiết xuất tinh dầu",
  price: "20.000đ",
  img: hatQuytSay,
  des: [
    "Hạt quýt sau khi sấy khô giữ nguyên dược tính. Có chứa tinh dầu, flavonoid và hợp chất tự nhiên có lợi cho sức khỏe. Bảo quản dễ dàng, thời gian sử dụng lâu.",
    "Có công dụng: Nguyên liệu dược liệu (dùng trong y học cổ truyền để hỗ trợ tiêu hóa, giảm ho, làm thuốc bắc), chiết xuất tinh dầu từ nhân hạt, dùng làm nguyên liệu sản xuất mỹ phẩm thiên nhiên."
  ]
},
{
  id: 17,
  name: "Trà quýt vàng mix vị",
  uses: "Trà giúp giảm cholesterol xấu, bảo vệ tim mạch, giảm cân hiệu quả và ngăn ngừa lão hóa da",
  price: "90.000đ",
  img: traQuytMix,
  des: [
    "Trà quýt kết hợp cùng các loại thảo dược có hương vị thơm ngon và bổ dưỡng cho sức khỏe. Trà giúp giảm cholesterol xấu, bảo vệ tim mạch, giảm cân hiệu quả và ngăn ngừa lão hóa da. Có hơn 55 loại flavonoid, 170 phytonutrients các loại trong vỏ quýt. Chứa các loại khoáng chất: Đồng, Canxi, Magie, photpho, kali, selen, kẽm. Vitamin A, vitamin C, thiamin, riboflavin, niacin, folate, vitamin B5 và vitamin B6.",
  ]
},

];

function Products() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* PRODUCT CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 mt-20">
              {products.map((item) => (
        <div
          key={item.id}
          className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >

          {/* Image */}
          <div className="h-55 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold truncate max-w-50">{item.name}</h3>
              <p className="text-orange-600 text-lg font-bold">
                {item.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">

              <a
                href="https://m.me/langerine.ls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#8B5E34] text-white py-2 rounded-xl hover:bg-orange-600 transition"
              >
                Đặt ngay
              </a>

              <button
                onClick={() => setSelectedProduct(item)}
                className="flex-1 border border-[#8B5E34] text-[#8B5E34] py-2 rounded-xl hover:bg-[#8B5E34] hover:text-white transition"
              >
                Xem thêm
              </button>

            </div>

          </div>
        </div>
      ))}
      </div>


      {/* MODAL */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    {/* WRAPPER */}
    <div className="relative w-full max-w-175">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="
          absolute -top-4 -right-4
          bg-white
          w-9 h-9
          rounded-full
          shadow-lg
          flex items-center justify-center
          text-lg font-bold
          text-gray-600
          hover:bg-red-500
          hover:text-white
          transition
        "
      >
        ✕
      </button>

      {/* MODAL BOX */}
      <div
        className="
          bg-white w-full
          max-h-[85vh] overflow-y-auto
          rounded-2xl p-5
          animate-fadeIn
        "
      >

        <div className="grid md:grid-cols-2 gap-6">

          {/* IMAGE */}
          <img
            src={selectedProduct.img}
            alt={selectedProduct.name}
            className="w-full h-55 md:h-70 object-cover rounded-xl"
          />

          {/* INFO */}
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">
              {selectedProduct.name}
            </h2>

            <p className="text-orange-600 font-semibold">
              Giá: {selectedProduct.price}
            </p>

            <p>
              <b>Công dụng:</b> {selectedProduct.uses}
            </p>
            <a
                href="https://m.me/langerine.ls"
                target="_blank"
                rel="noopener noreferrer"
                className="block min-w-8 text-center bg-[#8B5E34] text-white py-2 rounded-xl hover:bg-orange-600 transition"
              >
                Đặt ngay
              </a>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-5 space-y-3 text-justify">
          {selectedProduct.des.map((text, index) => (
            <p key={index} className="indent-8">
              {text}
            </p>
          ))}
        </div>

      </div>
    </div>
  </div>
)}


    </>
  );
}

export default Products;
