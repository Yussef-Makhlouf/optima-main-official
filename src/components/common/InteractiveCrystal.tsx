import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Octahedron,
  Icosahedron,
  MeshDistortMaterial,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

interface CrystalProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
}

const CrystalShape: React.FC<CrystalProps> = ({
  position = [0, 0, 0],
  scale = 1,
  color = "#00FFCC",
  speed = 2,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;

      // Auto rotation
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;

      // Mouse influence
      const mouseX = mouse.x * 0.4;
      const mouseY = mouse.y * 0.4;
      meshRef.current.rotation.y += mouseX * delta * speed * 0.3;
      meshRef.current.rotation.x += mouseY * delta * speed * 0.3;
    }

    if (innerRef.current) {
      // Counter rotation for inner crystal
      innerRef.current.rotation.y -= delta * 0.5;
      innerRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Main outer crystal - Octahedron */}
      <Octahedron
        ref={meshRef}
        args={[1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.25}
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={speed}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </Octahedron>

      {/* Inner glowing crystal - Icosahedron */}
      <Icosahedron ref={innerRef} args={[0.5, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.6 : 0.4}
          wireframe
        />
      </Icosahedron>

      {/* Core glow */}
      <Octahedron args={[0.3, 0]}>
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </Octahedron>

      {/* Outer halo */}
      <Octahedron args={[1.3, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Octahedron>

      {/* Point lights */}
      <pointLight
        color={color}
        intensity={hovered ? 2 : 1}
        distance={4}
        decay={2}
        position={[0, 1, 0]}
      />
      <pointLight
        color={color}
        intensity={hovered ? 1 : 0.5}
        distance={3}
        decay={2}
        position={[0, -1, 0]}
      />
    </group>
  );
};

const InteractiveCrystal: React.FC = React.memo(() => {
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
        <CrystalShape
          position={[0, 0, 0]}
          scale={1.2}
          color="#3d3d3d"
          speed={1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
});

export default InteractiveCrystal;
