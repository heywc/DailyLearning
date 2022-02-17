
const  MyPromise = require('./myPromise')

let eg = new MyPromise((resolve, reject)=>{
    setTimeout(() => {
        resolve('success')
    }, 2000); 
})

eg.then( value1 => {
    console.log('resolve', value1)
}, value2 => {
    console.log('reject', value2)
})