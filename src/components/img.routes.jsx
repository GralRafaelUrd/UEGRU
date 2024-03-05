export const ImgRouteFolder = () => {
  const imgFolderPath = new URL("../public", import.meta.url).toString();
  return imgFolderPath;
};

export default ImgRouteFolder;
