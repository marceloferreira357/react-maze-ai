export const resetMap = (mapSize) => {
  return Array(mapSize.width)
    .fill()
    .map(() => Array(mapSize.height).fill(0));
};
