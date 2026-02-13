import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface GlowingTorusProps {
    position?: [number, number, number];
    radius?: number;
    tube?: number;
    color?: string;
    speed?: number;
    distort?: number;
}

const GlowingTorus: React.FC<GlowingTorusProps> = ({
    position = [0, 0, 0],
    radius = 1,
    tube = 0.3,
    color = '#00FFCC',
    speed = 2,
    distort = 0.3,
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const { mouse } = useThree();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Auto rotation
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.4;

            // Mouse influence on rotation
            const mouseX = mouse.x * 0.3;
            const mouseY = mouse.y * 0.3;

            meshRef.current.rotation.x += mouseY * delta * speed * 0.5;
            meshRef.current.rotation.y += mouseX * delta * speed * 0.5;
        }
    });

    return (
        <group position={position}>
            {/* Main torus knot */}
            <TorusKnot
                ref={meshRef}
                args={[radius, tube, 128, 32]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.6 : 0.3}
                    metalness={0.95}
                    roughness={0.05}
                    distort={distort}
                    speed={speed}
                    transparent
                    opacity={0.9}
                />
            </TorusKnot>

            {/* Glow effect */}
            <TorusKnot args={[radius * 1.05, tube * 1.2, 64, 16]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={hovered ? 0.25 : 0.15}
                    side={THREE.BackSide}
                />
            </TorusKnot>

            {/* Outer glow */}
            <TorusKnot args={[radius * 1.15, tube * 1.4, 64, 16]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                />
            </TorusKnot>

            {/* Point light */}
            <pointLight color={color} intensity={hovered ? 1.5 : 0.8} distance={4} decay={2} />
        </group>
    );
};

const InteractiveTorus: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={0.8}
                    castShadow
                />
                <GlowingTorus
                    position={[0, 0, 0]}
                    radius={0.8}
                    tube={0.25}
                    color="#3d3d3d"
                    speed={2.5}
                    distort={0.4}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default InteractiveTorus;
