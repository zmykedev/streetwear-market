import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

export const TresD = () => {
    return (
        <>
            {' '}
            <Canvas>
                <OrbitControls />

                <ambientLight intensity={10} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial color="#7440ba" />
                </mesh>
                <Stars
                    radius={100}
                    depth={20}
                    factor={2}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Canvas>
        </>
    )
}
