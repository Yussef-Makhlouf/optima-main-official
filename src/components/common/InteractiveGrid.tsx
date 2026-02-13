import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface GridLineProps {
    start: [number, number, number];
    end: [number, number, number];
    color?: string;
    opacity?: number;
}

const GridLine: React.FC<GridLineProps> = ({ start, end, color = '#3d3d3d', opacity = 0.3 }) => {
    const points = useMemo(() => {
        return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    }, [start, end]);

    return (
        <Line
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={opacity}
        />
    );
};

interface NodeProps {
    position: [number, number, number];
    color: string;
    scale: number;
}

const GridNode: React.FC<NodeProps> = ({ position, color, scale }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        if (meshRef.current) {
            // Pulsing animation
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0] + position[1]) * 0.2;
            meshRef.current.scale.setScalar(scale * pulse);
        }
    });

    return (
        <group position={position}>
            <Sphere ref={meshRef} args={[0.05, 16, 16]}>
                <meshBasicMaterial color={color} transparent opacity={0.8} />
            </Sphere>
            <pointLight color={color} intensity={0.3} distance={1} decay={2} />
        </group>
    );
};

const GridPlane: React.FC<{ color?: string }> = ({ color = '#3d3d3d' }) => {
    const groupRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();
    const gridSize = 4;
    const divisions = 8;
    const step = (gridSize * 2) / divisions;

    // Generate grid lines
    const lines = useMemo(() => {
        const lineData: GridLineProps[] = [];

        // Horizontal lines (X axis)
        for (let i = 0; i <= divisions; i++) {
            const z = -gridSize + i * step;
            lineData.push({
                start: [-gridSize, 0, z],
                end: [gridSize, 0, z],
                color,
                opacity: 0.15
            });
        }

        // Vertical lines (Z axis)
        for (let i = 0; i <= divisions; i++) {
            const x = -gridSize + i * step;
            lineData.push({
                start: [x, 0, -gridSize],
                end: [x, 0, gridSize],
                color,
                opacity: 0.15
            });
        }

        return lineData;
    }, [gridSize, divisions, step, color]);

    // Generate node positions
    const nodes = useMemo(() => {
        const nodeData: NodeProps[] = [];

        for (let i = 0; i <= divisions; i++) {
            for (let j = 0; j <= divisions; j++) {
                const x = -gridSize + i * step;
                const z = -gridSize + j * step;
                nodeData.push({
                    position: [x, 0, z],
                    color,
                    scale: 0.8 + Math.random() * 0.4
                });
            }
        }

        return nodeData;
    }, [gridSize, divisions, step, color]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Gentle rotation influenced by mouse
            const mouseX = mouse.x * 0.2;
            const mouseY = mouse.y * 0.2;

            groupRef.current.rotation.x = -0.3 + mouseY;
            groupRef.current.rotation.y += delta * 0.1 + mouseX * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Grid lines */}
            {lines.map((line, index) => (
                <GridLine key={`line-${index}`} {...line} />
            ))}

            {/* Nodes at intersections */}
            {nodes.map((node, index) => (
                <GridNode key={`node-${index}`} {...node} />
            ))}
        </group>
    );
};

const InteractiveGrid: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [3, 3, 3], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.3} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={0.5}
                    castShadow
                />
                <GridPlane color="#3d3d3d" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default InteractiveGrid;
