//实现apply只要把下一行中的...args换成args即可
Function.prototype.myCall = function (context = window, ...args) {
  let func = this;
  let fn = Symbol("fn");
  context[fn] = func;
  let res = context[fn](...args); //重点代码，利用this指向，相当于context.caller(...args);
  delete context[fn];
  return res;
};
