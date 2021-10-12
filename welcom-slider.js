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

function showActiveSquareByImg() {
  let currentImage = document.querySelector('.slider__image.active');
  let square = document.querySelector(`div[data-sqr="${currentImage.dataset.img}"]`);
  square.classList.add('active');
}

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
  let n = parseInt(this.dataset.sqr, 10) - 1;
  console.log(n);
  changeCurrentItem(n);
}

squares.forEach(square => square.addEventListener('click', changeActiveImage));


// swipe image

const swipedetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;

  surface.addEventListener('mousedown', function(e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);

  surface.addEventListener('mouseup', function(e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if ((distX > 0)) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  }, false);

  surface.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('arrow') || e.target.classList.contains('slide__buttons')) {
      if (e.target.classList.contains('left')) {
        if (isEnabled) {
          previousItem(currentItem);
        }
      } else {
        if (isEnabled) {
          nextItem(currentItem);
        }
      }
    }
    var touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);

  surface.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);

  surface.addEventListener('touchend', function(e) {
    var touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if ((distX > 0)) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  }, false);
}

var el = document.querySelector('.slider');
swipedetect(el);
