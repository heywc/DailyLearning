Array.prototype.myFilter = function (callbackfn, thisArg) {
  let O = Object(this);
  let len = O.length;
  let resLen = 0;
  let res = [];
  for (let i = 0; i < len; i++) {
    let element = O[i];
    if (callbackfn.call(thisArg, O[i], i, O)) {
      res[resLen++] = element;
    }
  }
  return res;
};

let arr = [
  {
    name: "ywc",
    age: 25,
  },
  {
    name: "232323",
    age: 25,
  },
  {
    name: "fggfgf",
    age: 34,
  },
  {
    name: "吧吧v",
    age: 67,
  },
  {
    name: "哈哈哈",
    age: 16,
  },
  {
    name: "2222",
    age: 12,
  },
];
console.log(arr.myFilter((item) => item.age > 18));

console.log(
  arr.myFilter(
    function (item) {
      return item.age + this.age > 25;
    },
    {
      name: "灌灌灌灌",
      age: 10,
    }
  )
);
