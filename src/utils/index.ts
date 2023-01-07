export const deepClone = (target: any, map = new Map()) => {
  if (target !== null && typeof target === 'object') {
    let cloneTarget = map.get(target);
    // 如果之前克隆过，就返回之前克隆过的数据
    if (cloneTarget) {
      return cloneTarget;
    }
    cloneTarget = target instanceof Array ? [] : {};
    map.set(target, cloneTarget);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(target[key], map);
      }
    }
    return cloneTarget;
  }
  return target;
}