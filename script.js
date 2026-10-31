(function () {
  var el = document.getElementById('rotor');
  if (!el) return;
  var words = ['psychology', 'people', 'good books', 'book reading', 'how code works'];
  var i = 0;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(function () {
    el.classList.add('out');
    setTimeout(function () {
      i = (i + 1) % words.length;
      el.textContent = words[i];
      el.classList.remove('out');
    }, 300);
  }, 2400);
})();
