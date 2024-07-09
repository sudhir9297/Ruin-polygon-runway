import React from 'react'
import { Bounds, Center, MeshTransmissionMaterial, Sparkles, useGLTF, useTexture } from '@react-three/drei'

function Model(props) {
    const { nodes, materials } = useGLTF('./model/ruin.glb')
    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false

    return (
        <>
            <Bounds fit clip observe margin={1.2}>
                <Center Center >
                    <group {...props} dispose={null}>
                        <group>
                            <group scale={4}>
                                <mesh geometry={nodes.Plane.geometry} material={materials.Green} >
                                    <meshBasicMaterial map={bakedTexture} />
                                </mesh>
                                <mesh geometry={nodes.Plane_1.geometry} material={materials.Rock} >
                                    <meshBasicMaterial map={bakedTexture} />
                                </mesh>
                            </group>
                            <mesh geometry={nodes.Water.geometry} material={materials.Water} >
                                <MeshTransmissionMaterial color={'#0089E7'}
                                    reflectivity={1}
                                    clearcoat={1}
                                    clearcoatRoughness={0.1}
                                    samples={8}
                                    resolution={256}
                                    anisotropicBlur={1}
                                    thickness={0.3}
                                    roughness={0.1}
                                    toneMapped={true} />
                            </mesh>
                            <mesh geometry={nodes.Glyph.geometry} material={materials.Glyph} position={[2.905, 0.839, -1.638]} />
                        </group>
                    </group>
                    <Sparkles
                        size={6}
                        scale={[6, 4, 6]}
                        position-y={2}
                        speed={0.3}
                        count={60}
                        color={'#FDFF09'}
                    />
                </Center>
            </Bounds>

        </>

    )
}
export default Model;
useGLTF.preload('./model/ruin.glb')
