import React, { Suspense } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function MugModel(props) {
  const { nodes, materials } = useGLTF("/mugModel.glb");
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage environment={"night"} intensity={0.1}>
          <group {...props} dispose={null}>
            <group scale={0.01}>
              <mesh
                geometry={nodes.polySurface78_phong10_0.geometry}
                material={materials.phong10}
                position={[37.858, 4.223, -37.858]}
                scale={0.631}
              />
            </group>
          </group>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.7} makeDefault />
        </Stage>
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/mugModel.glb");
