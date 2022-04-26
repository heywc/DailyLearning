//实现apply只要把下一行中的...args换成args即可
Function.prototype.myApply = function (context = window, args) {
  let func = this; // this指的是当前执行的函数
  let fn = Symbol("fn");
  context[fn] = func; // 给目标对象增加执行函数
  let res = context[fn](args); //重点代码，利用this指向，相当于context.caller(args);
  delete context[fn];
  return res;
};
