// global scope
var globalVar = "Im a global variable";
let globalLet = "im also global but scoped with let";
const globalConst = "im a global constant";

{
    //block scope
    var blockVar = "im a block-scoped var";
    let blockLet = "im a block-scoped let";
    const blockConst= "im a block-scoped const";
}

// global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//block scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "im a block scoped var";
    let functionLet = "im a block scoped let";
    const functionConst = "im a block scoped const";
}

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);