document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.reveal');
  els.forEach(function (el, i) {
    var delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : i * 110;
    setTimeout(function () {
      el.classList.add('show');
    }, delay);
  });
});
