// Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
// Promise 会有三种状态

// Pending 等待
// Fulfilled 完成
// Rejected 失败


// 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
// Promise 中使用 resolve 和 reject 两个函数来更改状态；
// then 方法内部做但事情就是状态判断

// 如果状态是成功，调用成功回调函数
// 如果状态是失败，调用失败回调函数

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(fn){
        fn(this.resolve, this.reject)
    }
    status = PENDING; 
    res = null; // 完成的信息
    err = null; // 异常的信息
    onFulfilledCallback = null;// 存储成功回调函数
    onRejectedCallback = null;// 存储失败回调函数
    // 异步请求完成
    resolve = (res) => {
        if(this.status === PENDING) {
            this.status = FULFILLED;
            this.res = res;
            // 判断成功回调是否存在，如果存在就调用
            this.onFulfilledCallback && this.onFulfilledCallback(res);
        }
    }
    // 异步请求异常
    reject = (err) => {
        if(this.status === PENDING) {
            this.status = REJECTED;
            this.err = err;
            // 判断失败回调是否存在，如果存在就调用
            this.onRejectedCallback && this.onRejectedCallback(err)
        }
    }
    // 执行回调
    then = (onFulfilled, onRejected) => {
        if(this.status === FULFILLED) {
            onFulfilled(this.res);
        }
        if(this.status === REJECTED) {
            onRejected(this.err);
        }
        if(this.status === PENDING) {
            this.onFulfilledCallback = onFulfilled;
            this.onRejectedCallback = onRejected;
        }
    }
}

module.exports = MyPromise