

let userNum = prompt("Введите числа");

let modNum = userNum.split('').join('');

if (modNum[0] == modNum[1] || modNum[1] == modNum[2] || modNum[2] == modNum[0] ) {
    console.log(`числа совпадают: ${modNum}`);
} else if (modNum == " "){    // как сделать здесь ?
    console.log("вы нажали ОК ,без ввода")
}

else {
    console.log("числа не совпадают");
}




//4/4
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