import '@fontsource/bungee/400.css';
import '@fontsource/chakra-petch/400.css';
import '@fontsource/chakra-petch/600.css';
import '@fontsource/chakra-petch/700.css';
import './style.css';
import { Game } from './game.js';

const canvas = document.getElementById('game');
const game = new Game(canvas);
window.__sunbreak = game;

let last = performance.now();
let frames = 0;
let slowFrames = 0;

function frame(now) {
  const dt = (now - last) / 1000;
  last = now;
  const clamped = Math.min(0.05, Math.max(0, dt));
  game.update(clamped);
  game.render();

  frames += 1;
  if (dt > 0.05) slowFrames += 1;
  if (frames === 120) {
    window.__sunbreakFps = Math.round(1000 / ((now - start) / frames));
    window.__sunbreakSlowFrames = slowFrames;
  }
  requestAnimationFrame(frame);
}
let start = performance.now();
requestAnimationFrame(frame);

window.addEventListener('resize', () => {
  game.resize();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) game.onVisibilityHidden();
});

canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  console.warn('WebGL context lost');
});
