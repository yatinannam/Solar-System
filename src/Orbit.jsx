import React from 'react'

export default function Orbit({ radius }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
      <meshBasicMaterial color={'#888888'} side={2} />
    </mesh>
  )
}
