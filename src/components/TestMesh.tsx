"use client";
import path from "@/lib/path";
import { useHelper, useTexture } from "@react-three/drei";
import { StrictMode, useRef } from "react";
import { Mesh } from "three";
import { VertexNormalsHelper } from "three-stdlib";

type TestMeshProps = {
  position: [x: number, y: number, z: number];
};

/*
      6-------7
      |       |
  10--2-------3--11
  |   |       |   |
  8---0-------1---9
      |       |
      4-------5
*/

// dprint-ignore
const indices = new Uint32Array([
  4, 5, 0, 0, 5, 1, // left
  0, 1, 2, 2, 1, 3, // top
  2, 3, 6, 6, 3, 7, // right
  8, 0, 10, 10, 0, 2, // front
  11, 3, 9, 9, 3, 1, // back
]);

const W = 3.6;
const H = 3.7;
const L = 10.6;
const F = 1.0;

// dprint-ignore
const positions = new Float32Array([
  -L / 2, H + F, +W / 2,
  +L / 2, H + F, +W / 2,
  -L / 2, H + F, -W / 2,
  +L / 2, H + F, -W / 2,
  -L / 2, F, +W / 2,
  +L / 2, F, +W / 2,
  -L / 2, F, -W / 2,
  +L / 2, F, -W / 2,
  -L / 2, F, +W / 2, // 8 -- 4
  +L / 2, F, +W / 2, // 9 -- 5
  -L / 2, F, -W / 2, // 10 -- 6
  +L / 2, F, -W / 2, // 11 -- 7
]);

// dprint-ignore
const normals = new Float32Array([
  -1, +1, +1,
  +1, +1, +1,
  -1, +1, -1,
  +1, +1, -1,
  -1, -1, +1,
  +1, -1, +1,
  -1, -1, -1,
  +1, -1, -1,
  -1, -1, +1,
  +1, -1, +1,
  -1, -1, -1,
  +1, -1, -1,
].map(v => v * Math.sqrt(1 / 3)));

// dprint-ignore
const uvs = new Float32Array([
  -L / 2, -W / 2,
  +L / 2, -W / 2,
  -L / 2, +W / 2,
  +L / 2, +W / 2,
  -L / 2, -W / 2 - H,
  +L / 2, -W / 2 - H,
  -L / 2, +W / 2 + H,
  +L / 2, +W / 2 + H,
  -L / 2 - H, -W / 2,
  +L / 2 + H, -W / 2,
  -L / 2 - H, +W / 2,
  +L / 2 + H, +W / 2,
].map(v => v / 25.6 + 0.5));

const TestMesh: React.FC<TestMeshProps> = (props) => {
  const meshRef = useRef<Mesh>(null!);
  useHelper(meshRef, VertexNormalsHelper, 1, 0xffffff);
  const diffMap = useTexture(path("/test/test_diff_lod1.png"));

  return (
    <StrictMode>
      <mesh
        ref={meshRef}
        {...props}
      >
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="index"
            array={indices}
            count={indices.length}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-normal"
            array={normals}
            count={normals.length / 3}
            itemSize={3}
            normalized={true}
          />
          <bufferAttribute
            attach="attributes-uv"
            array={uvs}
            count={uvs.length / 2}
            itemSize={2}
            normalized={true}
          />
        </bufferGeometry>
        <meshStandardMaterial
          color="#ffffff"
          flatShading={false}
          map={diffMap}
        />
      </mesh>
    </StrictMode>
  );
};

export default TestMesh;
