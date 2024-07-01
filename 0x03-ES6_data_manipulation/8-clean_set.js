export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const result = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return result.join('-');
}
