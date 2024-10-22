import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { OrbitControls, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Ruin from './Ruin.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            flat
            camera={{
                fov: 45,
                near: 0.1,
                far: 50,
                position: [5, 2, 6]
            }}
        >
            <color attach="background" args={['#181a19']} />
            <Suspense fallback={null}>
                <Ruin />
            </Suspense>

            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.9}
                maxDistance={14}
                minDistance={8}
                enablePan={false} />
        </Canvas>
        <Loader />
    </>
)