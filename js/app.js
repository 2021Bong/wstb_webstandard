'use strict';

const nav = document.querySelector('.nav');
const titBtn = document.querySelector('.tit .btn');

function handleTitleMenu() {
  if (nav.classList.contains('on')) {
    nav.classList.remove('on');
    titBtn.classList.remove('show');
  } else {
    nav.classList.add('on');
    titBtn.classList.add('show');
  }
}

titBtn.addEventListener('click', handleTitleMenu);