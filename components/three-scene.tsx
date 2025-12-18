"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

import FloatingBoxes from "./ui/floating-boxes"
import ParticlesAnimation from "./particles-animation"

/* -------------------- SCENE -------------------- */

function Scene() {
  // Properly typed ref
  const groupRef = useRef<THREE.Group | null>(null)

  // Access camera if needed later
  const { camera } = useThree()

  // Animate on every frame
  useFrame(({ mouse }) => {
    if (!groupRef.current) return

    // Smooth rotation based on mouse movement
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.5,
      0.1
    )

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.5,
      0.1
    )
  })

  return (
    <group ref={groupRef}>
      <ParticlesAnimation />
      <FloatingBoxes />
    </group>
  )
}

/* -------------------- CANVAS -------------------- */

export default function ThreeScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Scene */}
      <Scene />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  )
}
