Function.prototype.mybind = function (context, ...args) {
  // 异常处理
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound isnot callable"
    );
  }
  // 保存this的值，它代表调用 bind 的函数
  var self = this;
  var fNOP = function () {};
  var fbound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP();
  return fbound;
};
