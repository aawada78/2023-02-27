var sidebar = document.querySelector('.sidebar');

document.querySelector('button.sidebar-toggle').addEventListener('click', function () {
  document.body.classList.toggle('close');
});

var main = document.querySelector('main');

document.addEventListener('scroll', function () {
  if (main.getBoundingClientRect().top <= 0) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
});
