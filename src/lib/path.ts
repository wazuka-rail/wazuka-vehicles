import nextConfig from "@/../next.config";

const BASE_PATH = nextConfig.basePath ?? "";

const path = (path: string) => {
  if (path.startsWith("/")) {
    return BASE_PATH + path;
  }
  if (path.startsWith("http")) {
    return path;
  }
  return "";
};

export default path;
