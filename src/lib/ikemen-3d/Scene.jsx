import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Component, Suspense } from 'react'

const SceneFallback = () => (
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white/20 to-slate-100/50" />
)

class SceneBoundary extends Component {
    state = { failed: false }

    static getDerivedStateFromError() {
        return { failed: true }
    }

    render() {
        return this.state.failed ? <SceneFallback /> : this.props.children
    }
}

export const Scene = ({ children, className = "absolute inset-0 z-0" }) => {
    return (
        <div className={className}>
            <SceneBoundary>
            <Canvas
                fallback={<SceneFallback />}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Transparent background to let CSS background show through */}
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
                    <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#06b6d4" />
                    {children}
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            </SceneBoundary>
        </div>
    )
}
