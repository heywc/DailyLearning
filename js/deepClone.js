function deepClone(val) {
  const isObject = val !== null && typeof val === "object";
  if (isObject) {
    const newVal = Array.isArray(val) ? [] : {};
    // const keys = Object.keys(val);
    // for (const key of keys) {
    for (const key in val) {
      if (val.hasOwnProperty(key)) {
        newVal[key] = deepClone(val[key]);
      }
    }
    return newVal;
  } else {
    return val;
  }
}
