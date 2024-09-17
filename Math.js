
/*
const add = (a, b) =>  a + b;
const sub = (a, b) =>  a - b;
const mul = (a, b) =>  a * b;
const div = (a, b) =>  a / b;

*/

// another way it is directly exports the function

exports.add = (a, b) =>  a + b;
exports.sub = (a, b) =>  a - b;
exports.mul = (a, b) =>  a * b;
exports.div = (a, b) =>  a / b;



// export the module in an object
// one way - common way

// module.exports = {add,sub,mul, div}