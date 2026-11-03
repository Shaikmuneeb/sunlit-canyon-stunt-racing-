# Sunbreak Canyon

An original 3D arcade stunt-racing game. Three laps through a sunlit red-rock
canyon built for drift chains, boost management, big air and wall-rides.

Everything is original and generated at runtime: the circuit, canyon, mesas,
arches, car, UI art, engine/tire/wind audio and the desert-rock soundtrack.
No external assets, no licensed IP.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Controls

| Action | Keyboard / mouse | Gamepad |
| --- | --- | --- |
| Steer | `A` / `D` or arrows, or aim while holding left mouse | Left stick |
| Throttle | `W` / up arrow, or hold left mouse | RT |
| Brake / reverse | `S` / down arrow, or right mouse | LT |
| Drift | `Space` | A |
| Boost | `Shift` | B / RB |
| Camera | `C` | X |
| Restart run | `R` | Y |
| Pause | `Esc` / `P` | Start |
| Mute | `M` | — |

On phones/tablets in landscape, on-screen steering and pedals appear
automatically; they can also be forced in Settings.

## The race

- Three laps, seven gates, best-lap and split times saved locally.
- Drift to refill boost; chain clean slides for multipliers and style points.
- Clean landings, near-misses, airtime and wall-rides all pay style points.
- Crashes scrub speed and time, not progress. Off-road or falls recover you
  back onto the racing line automatically.
- Racing assist, camera mode, touch controls and audio levels are in Settings.

## Tech

Vite + Three.js (ES modules), WebGL2. The track is a Catmull-Rom spline with
procedural ramps, gaps, tunnels and arches. Physics is a fixed 120 Hz arcade
model. Audio is built with WebAudio oscillators, filters and noise, with a
look-ahead sequencer for the score. A small post-processing pass adds heat
haze and chromatic aberration.
