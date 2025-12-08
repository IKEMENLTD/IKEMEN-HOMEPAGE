import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const DigitalGrid = ({ color = "#06b6d4" }) => {
    const particlesRef = useRef()

    // Volumetric Field Parameters
    const particleCount = 400
    const range = 30 // Spread of particles

    const particlePositions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            // Distribute uniformly in a 3D box
            positions[i * 3] = (Math.random() - 0.5) * range * 1.5 // X: Wider
            positions[i * 3 + 1] = (Math.random() - 0.5) * range     // Y: Height
            positions[i * 3 + 2] = (Math.random() - 0.5) * range * 0.5 // Z: Depth
        }
        return positions
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        // Rotate the entire field slowly for a "drifting" effect
        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.05
            particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
        }
    })

    return (
        <group>
            {/* Volumetric Particle Field */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    color={color}
                    transparent
                    opacity={0.6}
                    sizeAttenuation={true}
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Subtle Fog for depth fading */}
            <fog attach="fog" args={['#ffffff', 5, 20]} />
        </group>
    )
}
