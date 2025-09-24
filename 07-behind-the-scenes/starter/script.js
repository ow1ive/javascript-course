'use strict';

//function alpha() {
    //console.log('alpha:start');
   // beta();
    //console.log('alpha:end');
//}

//function beta() {
 //   console.log('beta');
//}

//alpha();

//const outer = 'global';

//function demoScope() {
    //const inner = 'function';
    //if (true) {
        //const blockConst = 'block';
        //var functionVar = 'var-function-scoped';
        //console.log(outer, inner, blockConst, functionVar);
    //}

    //console.log(outer, inner, functionVar);
//}
//demoScope();

console.log(varX); // undefined
//console.log(letX); // ReferenceError
//console.log(constX); // ReferenceError

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDec1(2, 3)); // 5
console.log(addExpr(2, 3)); // 5

function addDec1(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

