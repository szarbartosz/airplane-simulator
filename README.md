# React Three Fiber airplane simulator :airplane:

## Deployed version :video_game:

Visit: [szarbartosz.github.io/airplane-simulator](https://szarbartosz.github.io/airplane-simulator/)

## Controls :joystick:

<kbd>w</kbd> and <kbd>s</kbd> for pitch control
<kbd>a</kbd> and <kbd>d</kbd> for roll control
<kbd>q</kbd> and <kbd>e</kbd> for yaw control
<kbd>Shift</kbd> for turbo speed

## Dev quickstart :rocket:

Clone the project and run the following in its root:

```bash
yarn
yarn dev
```

## Game screenshot :high_brightness:

![Game screenshot](public/assets/images/game_showcase.png)

## Project structure :deciduous_tree:

```bash
.
├── README.md
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── assets
│       ├── icons
│       │   └── balloon.png
│       ├── models
│       │   ├── aerobatic_airplane.glb
│       │   ├── airplane.glb
│       │   └── scene.glb
│       └── textures
│           ├── envmap.hdr
│           └── envmap.jpg
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Aerobatic.jsx
│   │   ├── Airplane.jsx
│   │   ├── Landscape.jsx
│   │   ├── SphereEnv.jsx
│   │   └── Targets.jsx
│   ├── controls.js
│   ├── effects
│   │   └── MotionBlur.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles
│       └── index.css
├── vite.config.js
└── yarn.lock
```
