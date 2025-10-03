// Planet.jsx
import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Label from './Label'

export default function Planet({ size, texture, distance, speed, name }) {
  const planetRef = useRef()

  // Load texture
  const planetTexture = useLoader(TextureLoader, texture)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    planetRef.current.position.x = Math.sin(t * speed) * distance
    planetRef.current.position.z = Math.cos(t * speed) * distance
    planetRef.current.rotation.y += 0.01
  })

  return (
    <group ref={planetRef}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={planetTexture} />
      </mesh>
      <Label position={[0, size + 0.5, 0]} text={name} />
    </group>
  )
}
