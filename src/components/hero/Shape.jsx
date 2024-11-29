import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Shape = () => {
  return (
    <Canvas>
      <Sphere args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color={"#db8b9b"}
          attach={"material"}
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </Canvas>
  );
};

export default Shape;
