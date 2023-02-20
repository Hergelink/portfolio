const gallery = document.getElementById('gallery');

function checkScreenSize() {
  if (window.innerWidth > 1182) {
    window.onmousemove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth;
      const yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth;
      const maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1;
      const panY = maxY * yDecimal * -1;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 5000,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    };
  } else {
    window.history.back();
  }
}

setInterval(checkScreenSize, 1000);
