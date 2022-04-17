Array.prototype.myPush = function (...items) {
  let obj = Object(this);
  const itemsLen = items.length;
  const len = obj.length;
  for (let i = 0; i < itemsLen; i++) {
    obj[len + i] = items[i];
  }
  return len + itemsLen;
};

let arr = [12, 23, 4, 35];

arr.myPush("123", 1);
