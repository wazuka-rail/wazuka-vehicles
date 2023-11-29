"use client";
import TestMesh from "@/components/TestMesh";
import path from "@/lib/path";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";

const App: NextPage = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 100, position: [0, 1.5, 20] }}
    >
      <Environment
        files={path("/alps_field_1k.hdr")}
        background
        blur={0.1}
      />
      <ambientLight intensity={0.5} />
      <TestMesh position={[0, 0, 0]} />
      <axesHelper args={[100]} />
      <OrbitControls makeDefault autoRotate />
    </Canvas>
  </div>
);

export default App;
