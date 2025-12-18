"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type BoxProps = {
  position: [number, number, number]
  size?: number
  color?: string
}

/* -------------------- SINGLE FLOATING BOX -------------------- */

function FloatingBox({ position, size = 1, color = "#8b5cf6" }: BoxProps) {
  const meshRef = useRef<THREE.Mesh | null>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime

    // Floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(time + position[0]) * 0.5

    // Slow rotation
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.008
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
    </mesh>
  )
}

/* -------------------- MULTIPLE BOXES -------------------- */

export default function FloatingBoxes() {
  const boxes: BoxProps[] = [
    { position: [-3, 0, 0], size: 1.2, color: "#ec4899" },
    { position: [0, 1, -2], size: 1, color: "#8b5cf6" },
    { position: [3, -1, 1], size: 1.4, color: "#22d3ee" },
    { position: [-1.5, 2, 2], size: 0.9, color: "#a855f7" },
    { position: [2, 0.5, -3], size: 1.1, color: "#f472b6" },
  ]

  return (
    <>
      {boxes.map((box, index) => (
        <FloatingBox
          key={index}
          position={box.position}
          size={box.size}
          color={box.color}
        />
      ))}
    </>
  )
}
