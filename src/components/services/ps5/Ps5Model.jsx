import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Ps5Model(props) {
  const { nodes, materials } = useGLTF("/ps5Model.glb");
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage environment={"night"} intensity={0.5}>
          <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.Acrylic_Clear}
              />
              <mesh
                geometry={nodes.Object_3.geometry}
                material={materials.Paper_White}
              />
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.Paper_White_NONE}
              />
            </group>
          </group>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate />
          <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
        </Stage>
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/ps5Model.glb");
