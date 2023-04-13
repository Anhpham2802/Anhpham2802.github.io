const menu = [
  {
    id: 1,
    title: "Bánh Mì",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpg",
    desc: `Bánh mì là loại sandwich Pháp-Việt Nam đặc trưng phù hợp khi bạn cần một bữa ăn nhanh. Với giá từ 10,000VNĐ đến 15,000VNĐ, món này bao gồm bánh sandwich baguette nướng giòn, rau dưa chua, pate, bơ, nước mắm, rau mùi ngò, ớt, etc.`,
  },
  {
    id: 2,
    title: "Cơm Tấm",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpg",
    desc: `Nói đến cơm tấm thì phần tinh tuý chính là nằm ở hạt tấm. Tấm là phần đầu của hạt gạo, trong quá trình xây xát đã làm hạt tấm vỡ ra, đây là nguyên liệu chính không thể thay thế bằng bất cứ loại nguyên liệu nào khác trong món cơm tấm Sài Gòn.`,
  },
  {
    id: 3,
    title: "Bánh Chưng",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `Chiếc bánh chưng trong mâm cỗ ngày Tết mang ý nghĩa thể hiện sự biết ơn trời đất đã cho mưa thuận gió hòa để mùa màng bội thu, đem lại cuộc sống ấm no cho người dân. Không chỉ thế, bánh chưng ngày Tết còn được bày lên bàn thờ cúng để thể hiện lòng hiếu kính của con cháu với tổ tiên cùng những người đã khuất.`,
  },
  {
    id: 4,
    title: "Phở",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpg",
    desc: `Phở là một món ăn đặc trưng quan trọng của người Việt Nam, bao gồm phở gạo trong một bát nước dùng tràn đầy hương vị cùng với thịt và hàng loạt các loại rau xanh. Một bát phở cơ bản bao gồm thịt bò hoặc thịt gà, phủ một lớp giá đỗ, sốt chanh (nước chanh).`,
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
    desc: `Tại Việt Nam, món ăn thường được dùng cho bữa sáng và bữa phụ. Mọi người thường ăn kèm cháo, hoặc cho vào lẩu để ngọt nước.`,
  },
  {
    id: 7,
    title: "Bánh cuốn",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpg",
    desc: `Bánh cuốn là món ăn tuyệt với khi bạn đang cảm thấy lúng túng trong khi ngắm cảnh tại Việt Nam. Sự kết hợp của thịt xay, mộc nhĩ thái nhỏ, hành, chả lụa, được gói trong một tấm bột gạo hấp, hương vị tổng thể của món ăn này trung hòa một cách đáng ngạc nhiên dù các nguyên liệu có đậm vị.`,
  },
  {
    id: 8,
    title: "Bún chả",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `Món bún chả Hà Nội được nhận không ít lời khen từ những tín đồ sành ăn trên khắp thế giới. Không chỉ vậy, bún chả cũng vinh dự khi đạt được những danh hiệu như: Nằm trong top 10 món ngon mùa hè của CNN, top 10 món ăn đường phố ngon nhất thế giới của National Geographic…`,
  },
  {
    id: 9,
    title: "Gỏi cuốn",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng. Gia vị dùng kèm là tương hột trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô....`,
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

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'ナルトくん',
    job: 'Người đi bụi',
    img: './images/avatar1.jpg',
    text: "非常に良い食べ物。私は間違いなく再びここに来るでしょう。",
  },
  {
    id: 2,
    name: 'Nguyễn Nhung',
    job: 'Chuyên gia ẩm thực',
    img: './images/avatar2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?',
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    job: 'Sinh viên',
    img: './images/avatar3.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt.',  
  },
  {
    id: 4,
    name: 'măm măm',
    job: 'Giám đôc',
    img: './images/avatar4.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adt. Iustoasperiores debitis incidunt, eius earum itate libero?Iste, doloremque nihil?',
   },
];

//navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

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
          <a href="">
          <img src=${item.img} alt=${item.title} class="photo" />
          </a>
          <div class="item-info">
            <header>
              <h4>${item.title} 
              <i class="fa-solid fa-heart" onclick="addHeart(event)"></i></h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <div class="item-text">
              <p class="item-detail" onclick="displayDetail(event);" style="cursor:pointer;"> Xem chi tiet</p>
              <div class="item-desc hidden"> 
                ${item.desc}
              </div>
              <i class="fa-solid fa-arrows-up-to-line hidden custom-arrow" onclick="hiddenDetail(event);"></i>
            </div>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function addHeart(event) {
  const iconHeart = event.target;
  iconHeart.style.color = "red";
}

function displayDetail(event) {
  const itemDetailNode = event.target;
  const iconInfoNode = event.target.closest('.item-info');
  itemDetailNode.classList.remove("display");
  itemDetailNode.classList.add("hidden");

  const childNode = Array.from(iconInfoNode.querySelectorAll('*')).filter(item => item.classList.contains('item-desc'));
  childNode[0].classList.add("display");
  const childSolidNode = Array.from(iconInfoNode.querySelectorAll('*')).filter(item => item.classList.contains('custom-arrow'));
  childSolidNode[0].classList.add("display");
};

function hiddenDetail(event) {
  const iconSolid = event.target;
  const iconInfoNode = event.target.closest('.item-info');
  iconSolid.classList.remove("display");
  iconSolid.classList.add("hidden");

  const childNode = Array.from(iconInfoNode.querySelectorAll('*')).filter(item => item.classList.contains('item-desc'));
  childNode[0].classList.remove("display");
  childNode[0].classList.add("hidden");
  const childSolidNode = Array.from(iconInfoNode.querySelectorAll('*')).filter(item => item.classList.contains('item-detail'));
  childSolidNode[0].classList.add("display");
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
      //console.log(category);
      const menuCategory = menu.filter(function (menuItem) {
        console.log(menuItem.category);
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


//review
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});