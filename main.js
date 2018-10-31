var index = 0;
carousel();
var quickorder = document.querySelector('.order-button');
quickorder.addEventListener('click',popup)

function carousel() {
  var x  = document.getElementsByClassName('slides');
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  index++;
  if(index > x.length){
    index = 1;
  }
  x[index-1].style.display = 'block';
  setTimeout(carousel,4000);

}

function popup() {
  var popup = document.querySelector('.pop-up');
  var over = document.querySelector('.overlay')
  popup.style.visibility = 'visible';
  over.style.visibility = 'visible';

}
