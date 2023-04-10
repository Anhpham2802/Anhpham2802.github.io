const menu = [
  {
    id: 1,
    title: "Bánh Mì",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpg",
    desc: `Sự đặc trưng của bánh mì không chỉ nằm ở ổ bánh mì baquette nhẹ và giòn, mà còn nằm ở sự đa dạng trong hương vị ở phần nhân đầy tính Việt Nam đem đến vị ngon tuyệt vời. Bánh mì là loại sandwich Pháp-Việt Nam đặc trưng phù hợp khi bạn cần một bữa ăn nhanh. Với giá từ 10,000VNĐ đến 15,000VNĐ, món này bao gồm bánh sandwich baguette nướng giòn, rau dưa chua, pate, bơ, nước mắm, rau mùi ngò, ớt, etc.`,
  },
  {
    id: 2,
    title: "Cơm Tấm",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpg",
    desc: `Nói đến cơm tấm thì phần tinh tuý chính là nằm ở hạt tấm. Tấm là phần đầu của hạt gạo, trong quá trình xây xát đã làm hạt tấm vỡ ra, đây là nguyên liệu chính không thể thay thế bằng bất cứ loại nguyên liệu nào khác trong món cơm tấm Sài Gòn. Bởi hạt tấm rất thơm, ngọt và tấm được nấu không quá khô cũng không quá nhão, sẽ tơi xốp khiến người ăn chẳng bao giờ thấy ngán.`,
  },
  {
    id: 3,
    title: "Bánh Chưng",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `chiếc bánh chưng trong mâm cỗ ngày Tết mang ý nghĩa thể hiện sự biết ơn trời đất đã cho mưa thuận gió hòa để mùa màng bội thu, đem lại cuộc sống ấm no cho người dân. Không chỉ thế, bánh chưng ngày Tết còn được bày lên bàn thờ cúng để thể hiện lòng hiếu kính của con cháu với tổ tiên cùng những người đã khuất.`,
  },
  {
    id: 4,
    title: "Phở",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpg",
    desc: `Phở là một món ăn đặc trưng quan trọng của người Việt Nam, bao gồm phở gạo trong một bát nước dùng tràn đầy hương vị cùng với thịt và hàng loạt các loại rau xanh, cùng với bát nước chấm (nước mắm) hoặc tương ớt ăn kèm. Một bát phở cơ bản bao gồm thịt bò hoặc thịt gà, phủ một lớp giá đỗ, sốt chanh (nước chanh) và các loại rau thơm tươi như húng quế, bạc hà, rau mùi và hành tây.`,
  },
  {
    id: 5,
    title: "Nem Nướng",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpg",
    desc: `Món ăn nem nướng Nha Trang - nổi tiếng ở Xuân Thủy.`,
  },
  {
    id: 6,
    title: "Trứng vịt lộn",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpg",
    desc: `Tại Việt Nam, món ăn thường được dùng cho bữa sáng và bữa phụ. Mọi người thường ăn kèm cháo, hoặc cho vào lẩu để ngọt nước. Tại Philippines, trứng vịt lộn được coi là một loại thần dược giúp tráng dương, thường được kết hợp với một cốc bia lạnh. Món ăn dùng kèm ớt, tỏi, giấm, muối, nước cốt chanh, hạt tiêu và lá hạc hà.`,
  },
  {
    id: 7,
    title: "Bánh cuốn",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpg",
    desc: `Bánh cuốn là món ăn tuyệt với khi bạn đang cảm thấy lúng túng trong khi ngắm cảnh tại Việt Nam. Sự kết hợp của thịt xay, mộc nhĩ thái nhỏ, hành, chả lụa, được gói trong một tấm bột gạo hấp, hương vị tổng thể của món ăn này trung hòa một cách đáng ngạc nhiên dù các nguyên liệu có đậm vị. Để tăng thêm hương vị, bạn có thể nhúng bánh cuốn vào nước chấm mắm. Bởi sự nổi tiếng với các du khách, bạn có thể tìm thấy rất nhiều hàng quán ven đường bán bánh cuốn gần các điểm du lịch và các nơi sống về đêm. Ngày nay, nó trở thành một món ăn phổ thông có thể ăn bất cứ thời điểm nào trong ngày.`,
  },
  {
    id: 8,
    title: "Bún chả",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `Cùng lọt vào top 100 món ăn nổi tiếng thế giới, do Liên minh Kỷ lục Thế giới – Wordkings công bố năm 2016, món bún chả Hà Nội được nhận không ít lời khen từ những tín đồ sành ăn trên khắp thế giới. Không chỉ vậy, bún chả cũng vinh dự khi đạt được những danh hiệu như: Nằm trong top 10 món ngon mùa hè của CNN, top 10 món ăn đường phố ngon nhất thế giới của National Geographic… Và bún chả còn là món ăn mà Cựu Tổng thống Obama cùng đầu bếp Anthony Bourdain đã thưởng thức khi công du đến Việt Nam.`,
  },
  {
    id: 9,
    title: "Gỏi cuốn",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng. Gia vị dùng kèm là tương hột trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô.... tất cả thái nhỏ và cuộn trong vỏ làm từ bột mì. Gia vị dùng kèm là tương ớt trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô.`,
  },
  {
    id: 10,
    title: "Mì Quảng",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpg",
    desc: `Mì Quảng là một món ăn đặc sản không thể bỏ qua khi đặt chân đến vùng đất miền Trung kỳ vĩ. Đồng thời, nó cũng là một trong 12 món ăn Việt Nam được công nhận giá trị ẩm thực châu Á và được Roughguides gợi ý là một trong 10 món ăn nhất định phải thử khi đến Việt Nam.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
