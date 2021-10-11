let items = document.querySelectorAll('.slider .slider__image');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
    document.getElementById("img_number").innerHTML = items[currentItem].dataset.img;
    hideActiveSquare();
    showActiveSquareByImg();
  });
}

function showActiveSquareByImg() {
  let currentImage = document.querySelector('.slider__image.active');
  let square = document.querySelector(`div[data-sqr="${currentImage.dataset.img}"]`);
  square.classList.add('active');
}


function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.querySelector('.arrow.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
    console.log('left');
    console.log(currentItem);

  }
});

document.querySelector('.arrow.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);

    console.log('right');
    console.log(currentItem);
  }
});

// square Code
let squares = document.querySelectorAll('.square');


function hideItemBySquare() {
  let currentImage = document.querySelector('.slider__image.active');
  currentImage.classList.remove('active');
}

function hideActiveSquare() {
  let currentSquare = document.querySelector('.square.active');
  currentSquare.classList.remove('active');
}


function changeActiveImage() {
  let currenActiveSquare = document.querySelectorAll('.square.active');
  currenActiveSquare[0].classList.remove('active');
  this.classList.add('active');
  hideItemBySquare();
  let image = document.querySelector(`div[data-img="${this.dataset.sqr}"]`);
  image.classList.add('active');
  document.getElementById("img_number").innerHTML = this.dataset.sqr;
  let n = parseInt(this.dataset.sqr, 10) - 1 ;
  console.log(n);
  changeCurrentItem(n);
}

squares.forEach(square => square.addEventListener('click', changeActiveImage));
