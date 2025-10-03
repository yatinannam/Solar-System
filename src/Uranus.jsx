// Uranus.jsx
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import React, { useRef } from 'react'
import Label from './Label'

export default function Uranus({ speed = 0.115 }) {
  const uranusRef = useRef()

  // Load Uranus texture
  const uranusTexture = useLoader(TextureLoader, '/textures/uranus.jpg')

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    uranusRef.current.position.x = Math.sin(t * speed) * 45
    uranusRef.current.position.z = Math.cos(t * speed) * 45
    uranusRef.current.rotation.y += 0.01
  })

  return (
    <group ref={uranusRef}>
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial map={uranusTexture} />
      </mesh>

      <Label position={[0, 1.8, 0]} text="Uranus" />
    </group>
  )
}
