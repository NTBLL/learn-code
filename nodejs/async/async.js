//默认返回promise对象
// async function fn() {
//
// }
//
// console.log(fn());

//若指定了返回，则会将返回的内容当作promise对象的属性
// async  function fn() {
//     return `async`;
// }
// console.log(fn());

//return/resovle throw/reject
// let flag = false;
// async function fn() {
//     if(flag){
//         throw 'reject';
//     }
//     return 'resovle';
// }
//
// fn().then(msg => console.log(msg)).catch(msg => console.log(msg));

async function p1() {
    return `p1`;
}
async function p2() {
    return `p2`;
}
async function p3() {
    return `p3`;
}

async function run() {
    let r1 = await p1();
    let r2 = await p2();
    let r3 = await p3();
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

run();