import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

export const FloatyMesh = ({ position = [0, 0, 0], color = "#d4af37", scale = 1, geometry = "box" }) => {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2
            meshRef.current.rotation.y += delta * 0.3
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                position={position}
                scale={hovered ? scale * 1.2 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
                {geometry === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
                {geometry === 'octahedron' && <octahedronGeometry args={[0.8, 0]} />}
                <meshStandardMaterial
                    color={hovered ? "#ffffff" : color}
                    metalness={0.8}
                    roughness={0.2}
                    emissive={hovered ? color : "#000000"}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    )
}
