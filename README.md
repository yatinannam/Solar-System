# 🌌 3D Solar System Simulation — React + Three.js + Vite

An interactive **3D Solar System model** built using **React**, **Three.js**, and **React Three Fiber (R3F)**.  
This project visually simulates the movement of planets around the sun, complete with orbit paths, realistic textures, a glowing sun, and an asteroid belt — all rendered in real-time 3D.

---

## 🚀 Project Overview

This project represents a realistic miniature of our **solar system**, showing:
- The **Sun** at the center with a subtle glow.
- **Eight planets** orbiting with accurate relative speeds.
- A **rotating Moon** orbiting Earth.
- A **textured asteroid belt** between Mars and Jupiter.
- Smooth **orbit paths** for all planets.
- Interactive **camera controls** allowing zoom, pan, and rotation.
- **Realistic planet textures** and rotation animation.

This visualization helps users understand the **relative motion** of planets and gives an engaging, interactive experience powered by modern 3D web technology.

---

## 🪐 Features

✅ **Eight Planets** — Each with unique textures, orbital distance, and speed.  
✅ **Earth–Moon System** — Moon orbiting Earth dynamically.  
✅ **Sun Glow Effect** — Emissive layered glow for realism.  
✅ **Asteroid Belt** — Dynamic asteroid particles between Mars and Jupiter.  
✅ **Orbit Paths** — Subtle visual rings marking planet orbits.  
✅ **Interactive Camera** — Move freely in 3D using your mouse.  
✅ **Optimized for Performance** — Built with Vite and React Three Fiber.  
✅ **Custom Labels** — Floating names above each planet.  
✅ **Realistic Speeds** — Outer planets move slower than inner ones.  

---

## 🧩 Tech Stack

| Technology | Description |
|-------------|-------------|
| **React.js** | Frontend library for UI management |
| **Vite** | Fast build tool and development server |
| **Three.js** | Core 3D rendering engine |
| **@react-three/fiber** | React renderer for Three.js |
| **@react-three/drei** | Useful helpers (stars, controls, etc.) |

---

## 📂 Project Structure

```bash
solar-system/
├── public/
│   ├── textures/
│   │   ├── mercury.jpg
│   │   ├── venus.jpg
│   │   ├── earth.jpg
│   │   ├── mars.jpg
│   │   ├── jupiter.jpg
│   │   ├── saturn.jpg
│   │   ├── uranus.jpg
│   │   ├── neptune.jpg
│   │   └── saturn_ring.png
│   └── favicon.svg
│
├── src/
│   ├── App.jsx
│   ├── Planet.jsx
│   ├── Earth.jsx
│   ├── Moon.jsx
│   ├── Saturn.jsx
│   ├── Uranus.jsx
│   ├── Neptune.jsx
│   ├── Orbit.jsx
│   ├── Label.jsx
│   ├── AsteroidBelt.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Install Dependencies
``` npm install ```

### 3️⃣ Start Development Server
``` npm run dev ```

Then open the local development URL (usually http://localhost:5173) in your browser.

---
