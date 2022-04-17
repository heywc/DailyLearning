function myInstanceof(target, pro) {
  // 基本数据类型直接返回false
  if (typeof target !== "object" || target === null) return false;
  // 获取target原型对象
  let proto = Object.getPrototypeOf(target);
  while (true) {
    // 和
    if (proto === pro.prototype) return true;
    if (proto == null) return false;
    proto = Object.getPrototypeOf(proto);
  }
}
