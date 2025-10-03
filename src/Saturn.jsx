// Saturn.jsx
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import React, { useRef } from 'react'
import * as THREE from 'three'
import Label from './Label'

export default function Saturn({ speed = 0.16 }) {
  const saturnRef = useRef()
  const ringRef = useRef()

  // Load Saturn texture
  const saturnTexture = useLoader(TextureLoader, '/textures/saturn.jpg')

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    saturnRef.current.position.x = Math.sin(t * speed) * 38
    saturnRef.current.position.z = Math.cos(t * speed) * 38
    saturnRef.current.rotation.y += 0.01

    // rotate ring a little
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001
    }
  })

  return (
    <group ref={saturnRef}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>

      {/* Procedural ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 3.5, 64]} />
        <meshStandardMaterial
          color={'#d8c27a'}
          side={THREE.DoubleSide}
          transparent
          opacity={0.6}
        />
      </mesh>

      <Label position={[0, 2.2, 0]} text="Saturn" />
    </group>
  )
}
