//
// console.log(`before`);
//
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(0);
// });
// for (let i = 0; i < 1000; i++) {
//     console.log('....');
// }
// console.log(`after`);

// for (var i = 0; i < 5; i++) {
//     setTimeout(()=>{
//         console.log('我是回调函数' + i);
//     },1000);
// }
//
// console.log(i);

function callback(msg){
    console.log(msg);
}

function testAsync(callback){
    setTimeout(()=>{
        callback(`setTimeout1`);
    },1000);
    setTimeout(()=>{
        callback(`setTimeout2`);
    },500);
}

console.log(`before`);
testAsync(callback);
console.log(`after`);


