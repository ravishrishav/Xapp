//async await << promise chains << callback hell
//sync means line by line code run (sequence)
//async means some inctruction take time and due to this other will also have to wait but if this is async then it will not wait

console.log("Ravish1");
setTimeout(() => {
    console.log("Love"); //callback async
}, 4000);
console.log("Ravish");

//callback : call another function as an argument in another function

// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b,);
// }
// calculator(3, 4, (a, b) => {
//     console.log(a+b);
// });

//calllback hell  (nested callback)
function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success5")
        if (getNextData) {
            getNextData();
        }
    }, 6000);
});
}

//Async await method

// async function getAllData() {
//     await getData(11);
//     await getData(12);
//     await getData(13);
// };

//IIFE way 
(async function () {
    await getData(11);
    await getData(12);
    await getData(13);
})();
//callback hell - Pyramid of doom (Diffucult to understand and manages)
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     });
// });

// getData(5).then((res) => {
//     console.log(res);
//     getData(6).then((res) => {
//         console.log(res);
//     });
// });

//Another way promise chain
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     return getData(4);
// }).then((res) => {
//     console.log(res);
// });

//Promises - solve callback hell (eventual completion of task) - it is an object in js
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve(123);
//     reject('Some error occured');
// })

//Promise State- fullfilled state, rejected state, pending state
// reject or callback are callback provided by js

function getInfo(dataId, getNextInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId);
            // resolve('Success');
            reject('error');
            if (getNextInfo) {
                getNextInfo();
            }
        }, 2000);

    })
}

//Promise = .then() & .catch()
//promise.then((res) => {...})
//promises.catch((err) => {...})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("Success");
        reject("error not found");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log('promise fullfilled', res);
});
promise.catch((err) => {
    console.log('err', err);
});

//Promise chain

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data1");
            resolve("Success1");
        }, 4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data2");
            resolve("Success2");
        }, 4000);
    });
}

asyncFunc1().then((res) => {
    console.log(res);
    asyncFunc2().then((res) => {
        console.log(res);
    });
});


//Async - Await 
//Async function always return Promise
//async function myFunc() {...}
//Await pauses the ececution of its surrounding async function until the promise is settled 

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api(); //1st
    await api(); //2nd 
}

//IIFE - immediately invoked function expression
//Function that is called immediately as soon as defined
//(function)();