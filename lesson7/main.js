//замыкание 

// function clousure(){
// let someNum = 0;

// function addSomeNum(){
//     return someNum += 4;
// }

// return addSomeNum; 

// }

// const clousureFunc =  clousure();

// console.log(clousureFunc());
// console.log(clousureFunc());
// console.log(clousureFunc());
// console.log(clousureFunc());
// console.log(clousureFunc());

// function clousure(someNum){
   
    


// 7.2

function sumNum(a){
    return function (b){
        return a + b ;
    }

}

console.log(sumNum(2)(2))
    
// 7.3 error


// function userNum() {
//     let userInput = prompt('Введите число');

//     if (userInput === null) {

//         alert('Вы отменили ввод');

//     }  else if (parseInt(userInput) > 100) {
//         alert('Введенное число больше  100');

//     }

//     else if (parseInt(userInput) < 100) {
//         alert('Введенное число меньше 100');

//     } else {
//         alert('Вы отменили');
//     }
// }

// userNum();

// function userNum(){

//     let userInput = prompt('Введите число');

//     for (let userInput = 0; userInput < 10 ; userInput++){
//         if (userInput === null) {

//                     alert('Вы отменили ввод');
            
//                 }  else if (parseInt(userInput) > 100) {
//                     alert('Введенное число больше  100');
            
//                 }
            
//                 else if (parseInt(userInput) < 100) {
//                     alert('Введенное число меньше 100');
            
//                 } else {
//                     alert('Вы отменили');
//                 }


// }

// userNum()