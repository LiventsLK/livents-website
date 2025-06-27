// src/components/LogoScene.jsx

import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ isHovered, ...props }) {
  const { scene } = useGLTF('/logo-model.gltf');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      // Set initial rotation (if needed)
      modelRef.current.rotation.y = 0;
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      if (isHovered) {
        // STATE 1: HOVERING - Follow the mouse
        // Lerp to the target rotation based on the pointer
        const targetY = state.pointer.x * 1;
        const targetX = -state.pointer.y * 1;

        modelRef.current.rotation.y = THREE.MathUtils.lerp(
          modelRef.current.rotation.y,
          targetY,
          0.05
        );
        modelRef.current.rotation.x = THREE.MathUtils.lerp(
          modelRef.current.rotation.x,
          targetX,
          0.05
        );
      } else {
        // STATE 2: NOT HOVERING - Auto-rotate
        // The lerp from the hover state will create a smooth transition out.
        // Then, we add a continuous, slow rotation.
        modelRef.current.rotation.y += 0.2 * delta; // Use delta for frame-rate independence
      }
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

export default function LogoScene() {
  const [isHovered, setIsHovered] = useState(false);
  
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
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        <Model scale={0.5} isHovered={isHovered}/>
      </Suspense>
    </Canvas>
  );
}