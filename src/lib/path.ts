import { basePath } from "@/../next.config";

const BASE_PATH = basePath ? basePath : "";

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
