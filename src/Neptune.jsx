import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Label from './Label'

export default function Neptune() {
  const neptuneRef = useRef()

  // Load Neptune texture from public/textures/
  const neptuneTexture = useLoader(TextureLoader, '/textures/neptune.jpg')

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // Neptune orbits VERY slowly compared to Earth
    neptuneRef.current.position.x = Math.sin(t * 0.09) * 55
    neptuneRef.current.position.z = Math.cos(t * 0.09) * 55
    neptuneRef.current.rotation.y += 0.01
  })

  return (
    <group ref={neptuneRef}>
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial map={neptuneTexture} />
      </mesh>

      <Label position={[0, 1.6, 0]} text="Neptune" />
    </group>
  )
}
