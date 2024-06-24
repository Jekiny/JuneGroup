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
let numOrStr = prompt('input number or string');
switch (numOrStr ){
case null :
    console.log ('ви скасували');
    break;
    case '':
        console.log('Empty String');
        break;
        case isNaN(Number(numOrStr)):
            console.log(' number is Ba_NaN')
            break ;
            default :
            console.log('OK!')
}