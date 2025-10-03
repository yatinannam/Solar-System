// AsteroidBelt.jsx
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AsteroidBelt({
  innerRadius = 21,  // slightly inward from Jupiter
  outerRadius = 25,
  count = 1500,      // denser belt
}) {
  const beltRef = useRef()

  // Generate random positions & scales for asteroids
  const asteroids = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius)
      const angle = Math.random() * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 0.8  // slightly thicker vertically
      const scale = 0.08 + Math.random() * 0.08
      temp.push({ x, y, z, scale, angle })
    }
    return temp
  }, [innerRadius, outerRadius, count])

  const tempMatrix = new THREE.Matrix4()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    asteroids.forEach((ast, i) => {
      const angle = ast.angle + t * 0.008  // faster orbit
      const radius = (innerRadius + outerRadius) / 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      tempMatrix.identity()
      tempMatrix.setPosition(x, ast.y, z)
      tempMatrix.scale(new THREE.Vector3(ast.scale, ast.scale, ast.scale))
      beltRef.current.setMatrixAt(i, tempMatrix)
    })
    beltRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={beltRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={'#dddddd'} metalness={0.3} roughness={0.7} />
    </instancedMesh>
  )
}
