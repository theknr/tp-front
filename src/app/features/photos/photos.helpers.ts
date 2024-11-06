export const resizeImage = async (
  file: File,
  width: number,
  height?: number,
  quality: number = 0.8,
): Promise<string> => {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;

    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const aspectRatio = img.width / img.height;
  const targetWidth = width;
  const targetHeight = height || width / aspectRatio;

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  return canvas.toDataURL("image/jpeg", quality);
};
