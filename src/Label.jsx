import React from 'react'
import { Html } from '@react-three/drei'

export default function Label({ position, text }) {
  return (
    <Html position={position} style={{ pointerEvents: 'none' }}>
      <div style={{
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '0 0 3px black'
      }}>
        {text}
      </div>
    </Html>
  )
}
