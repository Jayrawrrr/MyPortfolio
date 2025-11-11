import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import { Float, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

const FloatingPoly = ({ color, position, scale }) => {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.3
    meshRef.current.rotation.y += delta * 0.25
  })

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1.4}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          metalness={0.3}
          roughness={0.2}
          color={color}
          emissive={new THREE.Color(color).multiplyScalar(0.25)}
        />
      </mesh>
    </Float>
  )
}

const FloatingRing = ({ color, position, rotation, scale }) => {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.z += delta * 0.2
  })

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow>
        <torusGeometry args={[1.6, 0.06, 32, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.35}
          emissive={new THREE.Color(color).multiplyScalar(0.15)}
        />
      </mesh>
    </Float>
  )
}

const ParticleField = ({ color }) => {
  const positions = useMemo(() => {
    const particles = 1200
    const array = new Float32Array(particles * 3)
    for (let i = 0; i < particles * 3; i++) {
      array[i] = (Math.random() - 0.5) * 18
    }
    return array
  }, [])

  return (
    <points position={[0, 0, -4]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        color={color}
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </points>
  )
}

const ThreeScene = ({ darkMode }) => {
  const background = darkMode ? '#05070b' : '#f8fafc'
  const primary = darkMode ? '#22d3ee' : '#0ea5e9'
  const accent = darkMode ? '#38bdf8' : '#22d3ee'

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        dpr={[1, 1.75]}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={[background]} />
          <ambientLight intensity={0.45} />
          <directionalLight
            position={[6, 8, 5]}
            intensity={1.2}
            color={primary}
            castShadow
          />
          <directionalLight
            position={[-8, -6, -4]}
            intensity={0.7}
            color={accent}
          />

          <ParticleField color={darkMode ? '#1f2937' : '#94a3b8'} />

          <FloatingPoly color={primary} position={[0, 1.2, 0]} scale={2.2} />
          <FloatingRing
            color={accent}
            position={[0, -0.5, 0]}
            rotation={[Math.PI / 2.6, 0, 0]}
            scale={1.6}
          />
          <FloatingRing
            color={darkMode ? '#0f172a' : '#cbd5f5'}
            position={[0, 0.8, -1.2]}
            rotation={[Math.PI / 1.5, Math.PI / 4, 0]}
            scale={1.8}
          />

          <Environment resolution={256} background={false}>
            <Lightformer
              form="circle"
              intensity={2}
              position={[0, 5, 5]}
              scale={6}
              color={primary}
            />
            <Lightformer
              form="ring"
              intensity={1.5}
              position={[-5, -4, -6]}
              scale={8}
              color={accent}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeScene
