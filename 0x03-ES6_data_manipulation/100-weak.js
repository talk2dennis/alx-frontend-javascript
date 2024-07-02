const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(obj) {
  if ((typeof obj !== 'object') || (obj === null) || !obj.protocol || !obj.name) {
    throw new Error('Invalid endpoint format');
  }
  // Get the count of queries for this endpoint from the WeakMap
  let count = weakMap.get(obj) || 0;
  // Increment the count for this endpoint
  count += 1;
  weakMap.set(obj, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
