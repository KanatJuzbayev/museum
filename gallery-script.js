const gallery = document.querySelector(".gallery-container-inner");
const num = 15;

// fill random array
obj = {};
let arr = [];
for (let i = 0; i < num; i++) {
  let r;
  r = Math.floor(Math.random() * 15) + 1;
  while (obj[r]) {
    r = Math.floor(Math.random() * 15) + 1;
  }
  obj[r] = 1;
  arr.push(r);
}

arr.map((item) => {
  const picture = document.createElement("img");
  picture.classList.add("gallery-img");
  picture.src = `/assets/img/gallery/galery${item}.jpg`;
  picture.alt = `picture ${item}`;
  gallery.append(picture);
});

// console.log(arr);
