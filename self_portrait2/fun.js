let scale = 1;
const move = document.querySelector('div');
move.onwheel = zoom;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  move.style.transform = `scale(${scale})`;
}
