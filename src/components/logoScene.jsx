// src/components/LogoScene.jsx

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model(props) {
  const { scene } = useGLTF('/logo-model.gltf');
  const modelRef = useRef();

  useFrame((state) => {
    const { pointer } = state;

    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        pointer.x * 1,
        0.05
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        -pointer.y * 1,
        0.05
      );
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

export default function LogoScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 75 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <Model scale={0.5} />
      </Suspense>
    </Canvas>
  );
}