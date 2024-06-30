// let str = "Please visit Microsoft because its more beeter  ";
// let newStr = str.replace("Microsoft", "hilelShchool").replace("because","after");

// console.log(newStr);


// let str = "Please visit Microsoft because its more beeter  ";
 


// console.log(str.substring(0,6));
// console.log(str.substring(40,46));
// console.log(str.length);

//  let str = "Please visit Microsoft because its more beeter  ";
//  console.log(str.slice(40));

// const result = 11%2 === 0 ;
// console.log(result);

// let bankAccount = 1473;
// let banknoteDenomination = 20;

// let remainder = bankAccount % banknoteDenomination;

// console.log(remainder);

//     let amountEarn = prompt("How much you earned ");
//     let numEarn = +amountEarn;

//     function calculateTaxes(numEarn) {
//     if(numEarn <= 1000){
//     return numEarn * 0.02;

//     }if(numEarn <= 10000){
//     return numEarn * 0.03;  
//     } if (numEarn >10000){
//     return numEarn * 0.05;
//     }
//     }
//  let taxAmount = calculateTaxes(numEarn);
//     console.log(taxAmount);

// function getPrice(amount) { 
//     if (amount < 20) {
//       return amount * 10; 
//     } else if (amount < 50) { 
//       return amount * 8; 
//     }
  
//     return amount * 5;
//   }
  
//   getPrice(10);

// let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid','lilac',];

// flowers[1] = 'peony';
// flowers[flowers.length - 1] = "New your";
// console.log(flowers[flowers.length - 1]);// последний массив получить

// let fruits = ['apple', 'orange', 'pineapple', 'mango'];



// fruits.push('make', 'obi');
// fruits[fruits.length] =  'orange';

// console.log (fruits);
 
// for (let age = 20 ; age >= 3 ; age = age -2)
//     {
//     console.log(`I am ${age}`);
// }
// for ( let num = 2; num >= 7 ; num += num){
//     console.log(`all numbers ${num}`)
//   }
// for (let age =3; age <=11 ; age +=2 ){
//     console.log(age);
//   }

// let str = "123";
// let a =str.split("").join("");

// console.log(a);


// если водителю больше 18 лет он сможет ездить по обьездной,если ему 21 год он может заезжать в город,
// если у него машина белая инфинити-он может заезжать в город а если черная митсубиси не может

// let ageDriver = 21;
// let ageRequire =18;
// let ageReguireCity = 21
//  let driverCarInfinity = "Infiniti";
//  let driverCarMitsu = "Mitsu";

// let driverInfo ;bhggggggggggggggggggggggggggggggg
// let driverCar;

// if (ageDriver >= ageRequire && ageDriver < ageReguireCity  )
//     {
//         // driverInfo = true;
//         // driverCar = true
//         console.log(`его возраст ${ageDriver} и позволяет ездить по окружной и его  марка авто ${driverCarMitsu}`);

//     }
        
//         else if (ageDriver >= ageReguireCity && driverCarInfinity == "Infiniti" ){
//         // driverInfo = true;
//         // driverCar = true
//         console.log(`его возраст ${ageDriver} позволяет заезжать в город и его  марка авто ${driverCarInfinity}`);
//     }
         

//     else{
//         // driverInfo = false;
//         console.log(`его возраст ${ageDriver} он не имеет права садится за руль`)
//     };

// //   if (ageDriver >= ageRequire  && ageDriver < ageReguireCity && ageReguireCity == driverCarInfinity )

// // ageReguireCity == driverCarInfinity
// //ему 21 но машина не инфити  он не может заезжать в город тогда 
// if()
// //ему 18 но машина не митсык  он не может заезжать в город тогда 


// let ageDriver = 18;
// let ageRequire =18;
// let ageAroundCity = 18;
// let ageReguireCity = 21
//  let driverCarInfinity = "Infiniti";
//  let driverCarMitsu = "Mitsu";

//первое if нам надо узнать возраст 
// второе иф определить куда он может заезжать
// третье иф определить марку автомобиля

// if (ageDriver == ageRequire){ // 1 
//     console.log(`возраст водителя ${ageDriver} позволяет ездить по окружной `)
// }else if  (ageDriver == ageReguireCity){ 
//     console.log(`возраст водителя ${ageReguireCity} позволяет ездить по городу `)
// }

// if (ageDriver == ageReguireCity && driverCarInfinity == "Infiniti"){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить по городу так как он ездит на ${driverCarInfinity} `)

// }else if (ageDriver == ageRequire && driverCarMitsu == "Mitsu"){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить по окружной так как он ездит на ${driverCarMitsu} `)
// }

// if(ageDriver == ageReguireCity && driverCarInfinity != "Infiniti"){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить но не заезжать в городу так как он ездит на ${driverCarInfinity} `)

// }else if (ageDriver == ageRequire && driverCarMitsu != "Mitsu"){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить но не по окружной так как он ездит на ${driverCarMitsu} `)
// }

// else{
//     console.log(`возраст водителя ${ageDriver} не позволяет сесть за руль `)
// }

// let ageDriver = 18;
// let ageRequire =18;
// let ageAroundCity = 18;
// let ageReguireCity = 21
//  let driverCarInfinity = "Infiniti";
//  let driverCarMitsu = "Mitsu";


//  if ( ageDriver == ageRequire){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить  `)
//  }  if (ageDriver == ageAroundCity){
//     console.log(`возраст водителя ${ageDriver} позволяет ездить по окружной  `)
//  }else if(ageDriver >= ageReguireCity){
//     console.log(`возраст водителя ${ageDriver} позволяет заезжать в город  `)
    
//  }if(age)

//  else {
//     console.log(`возраст водителя ${ageDriver} не соответсвует  мин требованием которые : ${ageRequire}  `)
//  }

// let userNum = prompt("Введите числа");

// let modNum = userNum.split('').join('');

// if (modNum[0] == modNum[1] || modNum[1] == modNum[2] || modNum[2] == modNum[0] ) {
//     console.log(`числа совпадают: ${modNum}`);
// } else if (modNum == " "){
//     console.log("вы нажали ОК ,без ввода")
// }

// else {
//     console.log("числа не совпадают");
// }  




// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }
// let numOrStr = prompt('input number or string');
// switch (numOrStr ){
// case null :
//     console.log ('ви скасували');
//     break;
//     case '':
//         console.log('Empty String');
//         break;
//         case isNaN(Number(numOrStr)):
//             console.log(' number is Ba_NaN')
//             break ;
//             default :
//             console.log('OK!')
// }

let str = "im a string look, this ";
//  console.log(str);
//  console.log(str.length);

// //  let subStr = str.substring(2,1)
// //  console.log(subStr);

//  let subStr = str.substring(str.length-2,2)
//  console.log(subStr);
// let numOrStr = prompt('Введіть число або рядок:');
// console.log(numOrStr);

// switch (true) {
//     case numOrStr === null:
//         console.log('Ви скасували ввід.');
//         break;
//     case numOrStr === '':
//         console.log('Пустий рядок.');
//         break;
//     case NaN = (Number(numOrStr)) :
//         console.log('Це не число (NaN).');
//         break;
//     default:
//         console.log('Все в порядку!');
// }


// let numOrStr = prompt('input number or string');
// switch (numOrStr ){
// case null :
//     console.log ('ви скасували');
//     break;
//     case '':
//         console.log('Empty String');
//         break;
//         case isNaN(Number(numOrStr)):
//             console.log(' number is _NaN')
//             break ;
//             default :
//             console.log('OK!')
// }

// let ageDriver = 18;
// let driverCar = 'VW';
// let ageRequiredInCity = 21;
// let ageRequiredAroundcity = 18;

// let exceptionCarsInCity =[ 'Infinity' , 'Mercedes'];

// allowedArroundCity = false;

// allowedInCity = false;

// if(ageDriver >= ageRequiredInCity) {

//     allowedInCity = true;

// } else if(ageDriver >= ageRequiredAroundCity) {

//     allowedArroundCity = true;

//     if (exceptionCarsInCity.contains(driverCar)) {

//         allowedInCity = true;

//     }

// }




// if (allowedInCity) {

//     console.log("Allowed In City");

// } else if (allowedArroundCity) {

//     console.log("Alowed Around City");

// } else {

//     console.log("NMot Allowrd");

// }

//


// function sumFromTo(min, max){
//     let sum = 0; 
//     for (let n = min; n<=max;n = n + 0.5 ){
//         console.log(n);
//   sum +=n;
//     }
//     return sum;
//   }console.log(
//     sumFromTo(20,30)
//   );
  
// function num (min,max){
// let sum =20;
// for (let n= min; n<=max; n = n + 0.5){
    
// }
// return sum;
// }
// console.log(num(20,30));

// function hereNum(min,max){

// }

// // for ( let num = 20; num <= 30; num = num / 1){
// //     console.log(num);
// // }

// function num(min, max) {
//     let sum = 0;
//     for (let n = min; n <= max; n =n / 1 ) {
//         sum /= n;//20 +20.5 
//           console.log(n);
//     }
//     return sum;
// }

// console.log(num(10, 100)); 


// for (let dollars = 10; dollars <= 100; dollars += 10) {
//     const grivna = dollars / 26;
//     console.log(`${dollars} долар = ${grivna} гривня`);
// }
    // function sumNumber(min,max, steep = 2 ){
    //     let sum = 0;
    //     for( let n = min; n <= max ; n += steep){
    //         console.log(n);
    //          sum += n;
    //     }
    //     return sum;
    // }
    // console.log(sumNumber(1,10));



    // function printFromTo(input, start, end) {

    //     for (let i = start ; i <= end; i++){
    //       console.log(input[i]);
    //     }
        
        
          
    //     }
    //     printFromTo("Helllo", 0 , 5 );

    // function printFromTo(input, start, end) {
    //     if (typeof input !== 'string' ) {
    //       console.log('Помилка: значення input не є рядком');
    //       return;
        
    //     }
    //     for (let i = start ; i <= end  ; i++) {
    //      console.log(input.slice(start, end + 1))
    //     }
    //   }
      
    //   printFromTo("Hello", 0, 4);
      
// const title = 'Hello world';

// for (let i = title.length -1; i >= 0; i -- ){
//   console.log(title[i]);
// }
// function printBackwards(input, start, end) {
//   for (let i = input.length - 1; i >= start; i--) {
//     console.log(input[i]);
//   }
// }

// printBackwards('Hello', 0, 4);
// function printBackwards(input, start, end) {
  
//   for ( let i = input.length - 1 ; i >= start; i --){

//     console.log(input[i]);
//   }
// }
// printBackwards('Hello', 0 , 4);

const title = 'String';

// for (let perebor of title) {
//   console.log(perebor);
// }

const text = 'Working with Strings ';
let spacesCount = 0;

// for (let char of text) {
//   // рахуємо скільки пробілів у рядку
//   if (char === ' ') {
//     spacesCount++;
//   }
// }

// console.log(spacesCount); // 2

// const arrayElements = [ 'Michael', 'Lena', 'Misha'];

// arrayElements.forEach(function(elem, index, arrayElements) {
//   console.log('Hi ' + elem + '!');
// });




// ageArray.forEach(function(hui,vtoroixui,pAgeArray){

//   console.log(hui,vtoroixui);
// })


// const newAgeArray = ageArray.map(age => {
//   return `${age.name} ${age.age}`;
// })
// console.log (newAgeArray );

// const people = [ 
//   {name:"Michael", age: 23,budget : 3400, finance: 9},
//   {name:"Rachael", age: 18,budget : 2200, finance: 9},
//   {name:"Amigo", age: 32,budget : 1800, finance: 9},
//   {name:"Fery", age: 56,budget : 1900, finance: 9},
//   {name:"Lena", age: 15,    budget : 4000 , finance: 9}

// ];
// const adults = people.filter(person  => {
//   if ( person.age >= 18){
    
//     return true


//   }
// })

// console.log(adults);

// const nameArray = ['Michael','Alice', 'John', 'Patryk'] 
// function removeElement(array,item){

//     console.log(removeElement.splice (0,1))

// }

// const amount = people.reduce((total, person) =>{
//  return total +person.budget
// } , 0 )




// const nameArray = ['Michael','Alice', 'John', 'Patryk', 'Patasryk'] ;

// // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// const newAr = nameArray.splice(1[,2])
// const newAr = nameArray.splice((array,index) => {
//    return array - index
// } , 2 , 2 ) 

// console.log (newAr)

// nameArray.splice(2, 1);

// console.log(nameArray);

//  nameArray.splice(function(2,0){
//     console.log(index);
//  },2)


// const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// const removed = myFish.splice(3, 1);

// console.log (removed);


//========================

// const array = [1, 3, 4, 6, 2, 5, 7];

// const newAr = array.splice(number => {
//     return number.newAr[2]
// })
// console.log (newAr)

// // const newAr = array.splice(2, 0, "drum")
// // //(8) [1, 3, 'drum', 4, 6, 2, 5, 7]

// // console.log (array)

// function removeElement(asdad, index) {
//     asdad.splice(index, 2);
// }

// removeElement(array, 3); // Удаляем элемент с индексом 2 (значение 4)
// console.log(array); 

// const nameArray = ['Michael','Alice', 'John', 'Patryk', 'Patasryk'] ;

// function removeElement(someNewArr,index){
//     someNewArr.splice(index ,2 )

// }
// removeElement(nameArray,2)
// console.log (nameArray)

// const thisNameArray = nameArray.map((item) => {
//     return {
//         info: `${item} новый массив`,
//     };
// });


// console.log(thisNameArray)

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(thisArr, indexArr){
    thisArr.splice(indexArr,2)
}
removeElement(array,2)
console.log(array)

const mapArr = array.map((elemArr) =>{
    return {
        infoNumber: `${elemArr}`
    }
})
console.log(mapArr)
