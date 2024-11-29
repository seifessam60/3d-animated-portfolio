import React, { Suspense } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/computerModel.glb");
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage environment={"night"} intensity={0.5}>
          <group {...props} dispose={null}>
            <group position={[0.121, 0.007, 0]}>
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.MacBookPro}
              />
              <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.MacBookPro}
              />
            </group>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.MacBookPro}
            />
          </group>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
        </Stage>
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/computerModel.glb");
