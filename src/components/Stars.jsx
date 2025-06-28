// src/components/Stars.jsx

import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Stars({ count = 5000 }) {
  const meshRef = useRef();

  // Generate random positions for the stars inside a box volume
  const positions = useMemo(() => {
    const particles = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      particles[i] = (Math.random() - 0.5) * 100; // Adjust 100 to change the size of the starfield
    }
    return particles;
  }, [count]);

  // Animation: slowly rotate the entire starfield
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 25;
      meshRef.current.rotation.x += delta / 25;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
}