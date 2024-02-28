const slider = document.querySelector('.dat__product__slider');

function activate(e) {
  const items = document.querySelectorAll('.dat__product__item');
  e.target.matches('.dat__product__next') && slider.append(items[0])
  e.target.matches('.dat__product__prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);