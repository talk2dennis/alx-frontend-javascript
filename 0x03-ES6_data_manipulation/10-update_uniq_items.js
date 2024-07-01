export default function updateUniqueItems(mapList) {
  if (!(mapList instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mapList) {
    if (value === 1) {
      mapList.set(key, 100);
    }
  }
}
