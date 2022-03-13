// 1. 接收一个可以遍历的promise容器,假设这个容器是个数组
// 2. 返回一个新的promise实例
// 3. 只有容器中的所有promise实例都成功（从pendding转成fulfilled状态）,myPromiseAll才算成功；这些promise的resolve结果会按照原来在数组里的顺序集合在一个数组中作为myPromiseAll的resolve结果
// 4. 数组中只要有一个promise实例失败（从pendding转成rejected）,myPromiseAll就算失败。myPromiseAll.catch()会捕获到这个reject

Promise.myPromiseAll = function(promises) {
    let arr = [], count = 0;
    return new Promise((resolve, reject)=>{
        promises.forEach((item, i) => {
            Promise.resolve(item).then(res=>{
                arr[i] = res;
                count += 1;
                if(count === promises.length) resolve(arr); 
            }).catch(reject)
        });
    })
}

const p1 = Promise.resolve('p1');

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve p2 ')
    }, 1000)
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve p3 ')
    }, 2000)
})

const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve p4')
    }, 1000)
})

Promise.myPromiseAll([p1,p2,p3])
.then(res=> { console.log(res) })
.catch(err=> { console.log(err) })


