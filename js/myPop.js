Array.prototype.myPop = function () {
  const len = this.length;
  const popVal = this[len - 1];
  this.length -= 1;
  return popVal;
};
let arr = [123, 23, 23, 43, 4, 54, 65];
