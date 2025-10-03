// App.jsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Earth from './Earth'
import Planet from './Planet'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'
import AsteroidBelt from './AsteroidBelt'
import Orbit from './Orbit'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 70], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        {/* Background stars */}
        <Stars radius={300} depth={60} count={5000} factor={7} fade />

        <Suspense fallback={null}>
          {/* The Sun */}
          <mesh>
            <sphereGeometry args={[4, 32, 32]} />
            <meshStandardMaterial emissive={'#ffcc33'} color={'#ffcc33'} />
          </mesh>

          {/* Subtle Sun glow */}
          <mesh>
            <sphereGeometry args={[4.3, 32, 32]} />
            <meshStandardMaterial 
              color={'#ffcc33'} 
              emissive={'#ffcc33'} 
              transparent 
              opacity={0.2} 
            />
          </mesh>

          {/* Orbit paths */}
          <Orbit radius={7} />   {/* Mercury */}
          <Orbit radius={11} />  {/* Venus */}
          <Orbit radius={15} />  {/* Earth */}
          <Orbit radius={19} />  {/* Mars */}
          <Orbit radius={28} />  {/* Jupiter */}
          <Orbit radius={38} />  {/* Saturn */}
          <Orbit radius={45} />  {/* Uranus */}
          <Orbit radius={55} />  {/* Neptune */}

          {/* Planets in order */}
          <Planet size={0.3} texture={'/textures/mercury.jpg'} distance={7} speed={0.8} name="Mercury" />
          <Planet size={0.8} texture={'/textures/venus.jpg'} distance={11} speed={0.58} name="Venus" />
          <Earth /> {/* Earth + Moon */}
          <Planet size={0.5} texture={'/textures/mars.jpg'} distance={19} speed={0.405} name="Mars" />

          {/* Asteroid Belt between Mars and Jupiter */}
          <AsteroidBelt />

          <Planet size={3} texture={'/textures/jupiter.jpg'} distance={28} speed={0.22} name="Jupiter" />
          <Saturn speed={0.16} /> {/* Saturn + rings + label */}
          <Uranus speed={0.115} /> {/* Uranus with tilt + orbit + label */}
          <Neptune speed={0.09} /> {/* Neptune with slow orbit */}
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  )
}
