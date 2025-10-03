import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Moon({ earthRef }) {
  const moonRef = useRef()

  useFrame(({ clock }) => {
    if (!earthRef.current || !moonRef.current) return

    // Moon orbits relative to Earth's current position
    const t = clock.getElapsedTime()
    const distance = 2.5 // distance from Earth
    moonRef.current.position.x = earthRef.current.position.x + Math.sin(t * 2) * distance
    moonRef.current.position.z = earthRef.current.position.z + Math.cos(t * 2) * distance
    moonRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={'#aaaaaa'} />
    </mesh>
  )
}
