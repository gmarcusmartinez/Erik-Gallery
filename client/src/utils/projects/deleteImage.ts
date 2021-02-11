export const deleteImage = (url: string, images: string[]) =>
  images.filter((img) => img !== url);
