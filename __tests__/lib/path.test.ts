describe("path", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("adds `basePath` if defined", () => {
    jest.doMock("@/../next.config", () => ({ basePath: "basepath" }));
    return import("@/lib/path").then(m => {
      const path = m.default;
      expect(path("/test/image.png")).toBe("basepath/test/image.png");
      expect(path("https://example.com/")).toBe("https://example.com/");
    });
  });

  it("does not add `basePath` if not defined", () => {
    jest.doMock("@/../next.config", () => ({}));
    return import("@/lib/path").then(m => {
      const path = m.default;
      expect(path("/test/image.png")).toBe("/test/image.png");
      expect(path("https://example.com/")).toBe("https://example.com/");
    });
  });
});
