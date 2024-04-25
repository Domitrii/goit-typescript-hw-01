

function merge<T, O>(objA: T, objB: O): T & O {
  return Object.assign({},objA, objB);
}