import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface GlowingSphereProps {
    position?: [number, number, number];
    radius?: number;
    color?: string;
    speed?: number;
    distort?: number;
}

const GlowingSphere: React.FC<GlowingSphereProps> = ({
    position = [0, 0, 0],
    radius = 1.5,
    color = '#00FFCC',
    speed = 2,
    distort = 0.4,
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const { viewport, mouse } = useThree();

    // Auto-rotation and mouse-based rotation
    useFrame((state, delta) => {
        if (meshRef.current) {
            // Auto rotation
            meshRef.current.rotation.y += delta * 0.3;
            meshRef.current.rotation.x += delta * 0.1;

            // Mouse influence on rotation
            const mouseX = mouse.x * 0.5;
            const mouseY = mouse.y * 0.5;

            meshRef.current.rotation.y += mouseX * delta * speed;
            meshRef.current.rotation.x += mouseY * delta * speed;
        }

        // Glow effect pulsation
        if (glowRef.current) {
            const scale = hovered ? 1.15 : 1.08;
            const currentScale = glowRef.current.scale.x;
            const newScale = THREE.MathUtils.lerp(currentScale, scale, delta * 5);
            glowRef.current.scale.setScalar(newScale);
        }
    });

    return (
        <group position={position}>
            {/* Main sphere with distortion */}
            <Sphere ref={meshRef} args={[radius, 64, 64]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                <MeshDistortMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.8 : 0.4}
                    metalness={0.9}
                    roughness={0.1}
                    distort={distort}
                    speed={speed}
                    transparent
                    opacity={0.95}
                />
            </Sphere>

            {/* Inner glow sphere */}
            <Sphere ref={glowRef} args={[radius * 0.9, 32, 32]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Outer glow halo */}
            <Sphere args={[radius * 1.2, 32, 32]}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Point light for additional lighting */}
            <pointLight color={color} intensity={hovered ? 2 : 1} distance={5} decay={2} />
        </group>
    );
};

const InteractiveSphere: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.3} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <GlowingSphere
                    position={[0, 0, 0]}
                    radius={1.2}
                    color="#f1f5f9"
                    speed={3}
                    distort={0.5}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default InteractiveSphere;
