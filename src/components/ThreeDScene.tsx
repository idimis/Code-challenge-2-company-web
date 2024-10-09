"use client";

import { useEffect } from 'react';
import * as THREE from 'three';

const BirdFlyingScene = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Set background color for the sky
    scene.background = new THREE.Color(0x87CEEB); // Light blue sky color

    // Add trees to the scene
    const createTree = (x: number, z: number) => {
      const trunkGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
      const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Brown color for trunk
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, 1, z);
      scene.add(trunk);

      const leavesGeometry = new THREE.SphereGeometry(1, 32, 32);
      const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); // Green color for leaves
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.set(x, 3, z);
      scene.add(leaves);
    };

    // Create multiple trees
    for (let i = -10; i <= 10; i += 5) {
      for (let j = -10; j <= 10; j += 5) {
        createTree(i, j);
      }
    }

    // Create a bird
    const createBird = () => {
      const birdGeometry = new THREE.ConeGeometry(0.5, 1, 32);
      const birdMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red color for the bird
      const bird = new THREE.Mesh(birdGeometry, birdMaterial);
      return bird;
    };

    const bird = createBird();
    scene.add(bird);

    // Position the camera
    camera.position.set(0, 10, 30);
    camera.lookAt(0, 0, 0);

    let birdAngle = 0; // Angle for bird's flight

    const animateBird = () => {
      birdAngle += 0.02; // Increment the angle for flight

      // Update bird position to simulate flying
      bird.position.x = Math.sin(birdAngle) * 10; // Horizontal movement
      bird.position.y = Math.sin(birdAngle * 2) + 2; // Vertical movement

      renderer.render(scene, camera);
      requestAnimationFrame(animateBird);
    };

    animateBird();

    // Cleanup function
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default BirdFlyingScene;
