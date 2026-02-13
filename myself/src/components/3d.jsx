import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Background3D() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        background: 'transparent' // Make it transparent
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere visible args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#6EE7B7"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}
