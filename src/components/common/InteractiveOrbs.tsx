import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface OrbProps {
    position: [number, number, number];
    radius: number;
    color: string;
    speed: number;
    offset: number;
}

const FloatingOrb: React.FC<OrbProps> = ({ position, radius, color, speed, offset }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { mouse } = useThree();
    const initialY = position[1];

    useFrame((state) => {
        if (meshRef.current) {
            // Floating animation
            meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.2;

            // Gentle rotation
            meshRef.current.rotation.y += 0.005 * speed;
            meshRef.current.rotation.x += 0.003 * speed;

            // Mouse influence
            meshRef.current.position.x = position[0] + mouse.x * 0.3 * Math.sin(offset);
            meshRef.current.position.z = position[2] + mouse.y * 0.3 * Math.cos(offset);
        }
    });

    return (
        <group>
            {/* Main orb */}
            <Sphere ref={meshRef} args={[radius, 32, 32]} position={position}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.3}
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.9}
                />
            </Sphere>

            {/* Inner glow */}
            <Sphere args={[radius * 0.85, 32, 32]} position={position}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.4}
                />
            </Sphere>

            {/* Outer glow */}
            <Sphere args={[radius * 1.15, 32, 32]} position={position}>
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Point light */}
            <pointLight
                color={color}
                intensity={0.6}
                distance={3}
                decay={2}
                position={[position[0], initialY, position[2]]}
            />
        </group>
    );
};

const InteractiveOrbs: React.FC = () => {
    const orbs = [
        { position: [-1.5, 0, 0] as [number, number, number], radius: 0.4, color: '#3d3d3d', speed: 1.2, offset: 0 },
        { position: [1.5, 0.5, -0.5] as [number, number, number], radius: 0.3, color: '#4a4a4a', speed: 1.5, offset: Math.PI / 3 },
        { position: [0, -0.5, 1] as [number, number, number], radius: 0.5, color: '#2d2d2d', speed: 0.8, offset: Math.PI / 2 },
        { position: [-1, 1, -1] as [number, number, number], radius: 0.25, color: '#5a5a5a', speed: 1.8, offset: Math.PI },
        { position: [1, -1, 0.5] as [number, number, number], radius: 0.35, color: '#454545', speed: 1.0, offset: Math.PI * 1.5 },
    ];

    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={0.6}
                    castShadow
                />
                {orbs.map((orb, index) => (
                    <FloatingOrb
                        key={index}
                        position={orb.position}
                        radius={orb.radius}
                        color={orb.color}
                        speed={orb.speed}
                        offset={orb.offset}
                    />
                ))}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default InteractiveOrbs;
