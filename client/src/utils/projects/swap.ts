interface IProps {
  images: string[];
}
export const swap = (direction: string, i: number, item: IProps) => {
  const { images } = item;
  const targetIndex = direction === 'left' ? i - 1 : i + 1;
  if (targetIndex < 0 || targetIndex > images.length - 1) return images;
  [images[i], images[targetIndex]] = [images[targetIndex], images[i]];
  return images;
};
