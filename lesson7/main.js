function clousure(){
let someNum = 0;

function addSomeNum(){
    return someNum += 4;
}

return addSomeNum; 

}

let clousureFunc =  clousure();

console.log(clousureFunc());
console.log(clousureFunc());
console.log(clousureFunc());
console.log(clousureFunc());
console.log(clousureFunc());