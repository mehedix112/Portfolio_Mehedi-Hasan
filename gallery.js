// Generic carousel logic — works for any number of .carousel blocks on a page.
// Each .carousel needs: a .carousel-track containing .carousel-slide children,
// a .prev and .next button, and a sibling .carousel-dots container.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const dotsWrap = carousel.parentElement.querySelector('.carousel-dots');
    let index = 0;

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      if (dotsWrap) {
        Array.from(dotsWrap.children).forEach(function (dot, i) {
          dot.classList.toggle('active', i === index);
        });
      }
    }

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function () { index = i; render(); });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () {
      index = (index - 1 + slides.length) % slides.length;
      render();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      index = (index + 1) % slides.length;
      render();
    });

    render();
  });
});
