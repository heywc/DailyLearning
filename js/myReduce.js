Array.prototype.myReduce = function (callbackfn, initialValue) {
  // 处理数组类型异常
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'reduce' of null or undefined");
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
    throw new TypeError(callbackfn + " is not a function");
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let k = 0;
  let accumulator = initialValue;
  if (accumulator === undefined) {
    for (; k < len; k++) {
      // 查找原型链
      if (k in O) {
        accumulator = O[k];
        k++;
        break;
      }
    }
  }
  // 表示数组全为空
  if (k === len && accumulator === undefined)
    throw new Error("Each element of the array is empty");
  for (; k < len; k++) {
    if (k in O) {
      // 注意，核心！
      accumulator = callbackfn.call(undefined, accumulator, O[k], k, O);
    }
  }
  return accumulator;
};

// 简易版： 前提是数组正确
Array.prototype.mySympleReduce = function (callbackfn, initval) {
  let O = Object(this);
  let len = O.length;
  let k = 0;
  let res = initval;
  // 将数组的第一项当作起始值
  if (res === undefined) {
    res = O[k++];
  }
  while (k < len) {
    if (k in O) {
      res = callbackfn.call(undefined, res, O[k], k, O);
    }
    k++;
  }
  return res;
};

let arr = [1, 2, 3, 4, 5, 6];
// let sum = arr.myReduce((sum, item) => sum + item);
let sum2 = arr.mySympleReduce((sum, item) => sum + item, 123);

// console.log(sum);
console.log(sum2);
