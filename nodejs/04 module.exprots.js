let name1 = "zs";
let name2 = "ls";
let age = 18;

//exports与module.exports默认是指向同一块内存地址
exports.name = name1;
// module.exports.name = name2;
module.exports.age = age;

module.exports = {
    name: "module.exports",
    age: 19
};

exports = {
    name: "module.exports",
    age: 19
};