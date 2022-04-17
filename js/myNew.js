function myNew(creator, ...args) {
  if (typeof creator !== "function") {
    throw "myNew's first param must be a function";
  }
  const obj = Object.create(creator.prototype);
  const res = creator.apply(obj, args);
  const isObject = typeof res === "object" && res != null;
  return isObject ? res : obj;
}

function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.sayName = function () {
  console.log(this.name);
};

const aa = myNew(Student, "ywc", 14);
console.log(aa);
aa.sayName();
