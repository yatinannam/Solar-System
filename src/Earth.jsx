import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import Label from './Label'

export default function Earth() {
  const earthRef = useRef()
  const moonOrbitRef = useRef()

  const earthTexture = useLoader(TextureLoader, '/textures/earth.jpg')
  const moonTexture = useLoader(TextureLoader, '/textures/moon.jpg')

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Earth orbits Sun
    earthRef.current.position.x = Math.sin(t * 0.5) * 15
    earthRef.current.position.z = Math.cos(t * 0.5) * 15
    earthRef.current.rotation.y += 0.01

    // Moon orbit around Earth
    moonOrbitRef.current.rotation.y += 0.02
  })

  return (
    <group ref={earthRef}>
      {/* Earth */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Moon orbit group */}
      <group ref={moonOrbitRef}>
        <mesh position={[2.5, 0, 0]}>
          <sphereGeometry args={[0.27, 32, 32]} />
          <meshStandardMaterial map={moonTexture} />
        </mesh>
      </group>

      {/* Earth Label */}
      <Label position={[0, 1.6, 0]} text="Earth" />
    </group>
  )
}
