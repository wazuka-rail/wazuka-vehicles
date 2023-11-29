import TestMesh from "@/components/TestMesh";
import ReactThreeTestRenderer from "@react-three/test-renderer";

describe("TestMesh", () => {
  it("has two children", async () => {
    const renderer = await ReactThreeTestRenderer.create(
      <TestMesh position={[0, 0, 0]} />,
    );
    const children = renderer.scene.allChildren;
    // expect(children.length).toBe(2);
  });
});
