export default function (set, arr) {
  return arr.every((elem) => set.has(elem));
}
