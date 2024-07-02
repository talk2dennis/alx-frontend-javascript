export default function cleanSet(set, startString) {
  if (typeof set !== 'object' ||  typeof startString !== 'string' || !startString || startString.length === 0) {
    return '';
  }
  const arr = [];
  for (const ele of set) {
    if (ele.startsWith(startString)) {
      arr.push(ele.slice(startString.length));
    }
  }
  return arr.join('-');
}
