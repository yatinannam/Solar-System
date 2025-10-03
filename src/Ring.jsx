import React from 'react'

export default function Ring({ innerRadius, outerRadius, color }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[innerRadius, outerRadius, 64]} />
      <meshBasicMaterial color={color} side={2} />
    </mesh>
  )
}
