import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export const OpeningLines = () => {
    const groupRef = useRef()

    // Significantly increased line count for "screen full" effect
    const lineCount = 150
    const lines = useMemo(() => {
        return new Array(lineCount).fill(0).map(() => {
            // Wider spread for full screen coverage
            const start = [
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20
            ]
            const end = [
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20
            ]
            const speed = 0.1 + Math.random() * 0.3
            const offset = Math.random() * 100
            // Randomize color slightly
            const color = Math.random() > 0.5 ? '#06b6d4' : '#22d3ee'
            return { start, end, speed, offset, color }
        })
    }, [])

    // Add floating particles (nodes)
    const particleCount = 100
    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20
            ],
            scale: Math.random() * 0.5 + 0.2
        }))
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (groupRef.current) {
            // Dynamic rotation
            groupRef.current.rotation.y = time * 0.05
            groupRef.current.rotation.z = Math.sin(time * 0.05) * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            {lines.map((line, i) => (
                <MovingLine key={`line-${i}`} {...line} />
            ))}
            {particles.map((p, i) => (
                <FloatingParticle key={`particle-${i}`} {...p} />
            ))}
            <fog attach="fog" args={['#ffffff', 5, 25]} />
        </group>
    )
}

const MovingLine = ({ start, end, speed, offset, color }) => {
    const ref = useRef()
    const points = useMemo(() => {
        // Create a slightly curved line
        const mid = [
            (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 5,
            (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 5,
            (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 5
        ]
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(...start),
            new THREE.Vector3(...mid),
            new THREE.Vector3(...end)
        ])
        return curve.getPoints(20)
    }, [start, end])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (ref.current) {
            // Flicker effect: mostly transparent with random spikes
            const pulse = Math.sin(time * speed + offset) * 0.5 + 0.5
            const flicker = Math.random() > 0.85 ? Math.random() * 0.5 : 0

            // Much more transparent base (0.02 - 0.12) + flicker
            ref.current.material.opacity = 0.02 + (pulse * 0.1) + flicker

            // Glitchy width
            ref.current.material.linewidth = 1 + (Math.random() > 0.9 ? 2 : 0)

            // Occasional color shift for "chika chika"
            if (Math.random() > 0.98) {
                ref.current.material.color.set('#ffffff')
            } else {
                ref.current.material.color.set(color)
            }
        }
    })

    return (
        <Line
            ref={ref}
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.1} // Initial low opacity
        />
    )
}

const FloatingParticle = ({ position, scale }) => {
    const ref = useRef()
    const initialPos = useRef(position)
    const randomOffset = useRef(Math.random() * 100)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (ref.current) {
            // Float around initial position
            ref.current.position.x = initialPos.current[0] + Math.sin(time * 0.5 + randomOffset.current) * 2
            ref.current.position.y = initialPos.current[1] + Math.cos(time * 0.3 + randomOffset.current) * 2
            ref.current.position.z = initialPos.current[2] + Math.sin(time * 0.2 + randomOffset.current) * 2

            // Flicker opacity
            ref.current.material.opacity = 0.1 + (Math.random() > 0.9 ? 0.4 : 0)
        }
    })

    return (
        <Sphere ref={ref} args={[0.05, 8, 8]} position={position}>
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
        </Sphere>
    )
}
