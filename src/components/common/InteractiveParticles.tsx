import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  radius?: number;
}

const ParticleField: React.FC<ParticlesProps> = ({
  count = 2000,
  color = "#00FFCC",
  size = 0.02,
  speed = 0.5,
  radius = 5,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Generate random positions for particles
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Rotate the entire particle system
      pointsRef.current.rotation.y += delta * speed * 0.2;
      pointsRef.current.rotation.x += delta * speed * 0.1;

      // Mouse influence
      const mouseX = mouse.x * 0.5;
      const mouseY = mouse.y * 0.5;
      pointsRef.current.rotation.y += mouseX * delta * speed * 0.5;
      pointsRef.current.rotation.x += mouseY * delta * speed * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </points>
  );
};

const InteractiveParticles: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <ParticleField
          count={1500}
          color="#3d3d3d"
          size={0.015}
          speed={0.5}
          radius={4}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveParticles;
