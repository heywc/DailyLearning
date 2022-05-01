// 判断某个变量是否是 js对象的方式
// 方法一： Object.prototype.toString.call(obj) === '[object Object]';

let obj = "111";
let obj2 = {
  name: "ywc",
};
console.log(Object.prototype.toString.call(obj));

// 方法二 constructor
if (obj !== null && typeof obj === "object" && obj.constructor === Object) {
  console.log(true);
} else {
  console.log(false);
}

if (obj !== null && obj.__proto__.constructor === Object) {
  console.log(true);
} else {
  console.log(false);
}

// 方法三 Object.getPrototypeOf

// console.log(Object.getPrototypeOf(obj));
// console.log(obj instanceof Object);

// 判断某个变量是否是js数组的方式
// 方法一： Object.prototype.toString.call(arr)  === '[object Array]';

let arr = [11];
console.log(Object.prototype.toString.call(arr) === "[object Array]");

//  方法二 Array.isArray()
console.log(Array.isArray(arr));

//  方法三: constructor
console.log(
  arr !== null && typeof arr === "object" && arr.constructor === Array
);

console.log(arr !== null && arr.__proto__.constructor === Array);
