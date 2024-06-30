//Методы массивов forEach,Map,Filter,Reduce,find,findIndex

const people = [ 
    {name:"Michael", age: 23,budget : 3400, finance: 9},
    {name:"Rachael", age: 17,budget : 2200, finance: 9},
    {name:"Amigo", age: 32,budget : 1800, finance: 9},
    {name:"Fery", age: 56,budget : 1900, finance: 9},
    {name:"Lena", age: 15,    budget : 4000 , finance: 9}
  
  ];

  // через for

//   for (let i = 0; i < people.length ; i ++){
//     console.log(people[i];)
//   }

//через for Of

// for (let person of people){
//     console.log(person);
// }

//forEach принимает 3 параметра (1 элемент массива в текущей итерации,2 эл это индекс в массиве,3 эл название самого массива)

people.forEach(function(person,index,peopleArray){
    console.log(person);
    // console.log(index);
})
//es6 синтаксис

// people.forEach(person => console.log (person));



//=========== MAP создавать новые массивы 

// const newPeople = people.map(person => {
//     return person
//     //   return ` ${person.name}, ${person.age}` можно создавть выборочно что нужно с массива
// })
// console.log(newPeople);

//=====================
// Сокращеная запись 

// const newPeople = people.map(person => ` ${person.name}, ${person.age}` )
    
    
// console.log(newPeople);

//======================================================
//=========== Filter (возвращает новы массив)

// const adults = [];
// for (let i = 0 ; i < people.length ; i++){
//     if (people[i].age > 18 ){
//         adults.push(people[i])
//     }
// }
// console.log(adults);


// создается новый массив adults,в метод  filter принимает три параметра (сам элемент ,index ,саммассив ) 
// const adults = people.filter(person =>{
//     if(person.age <= 18 ){
//         return true
//     }
// })
// console.log(adults)

// const adults = people.filter(person => person.age <= 18)
// console.log(adults)

//==============================================Reduce (сложение )принимает два параметра call back 


// let  amoount = 0;
// for (let i = 0 ; i < people.length ; i++){
   
//     amoount += people[i].budget ;
// }
// console.log(amoount);

// const amount = people.reduce((total, person) =>{
//  return total +person.budget
// } , 0 )

// console.log(amount);

// const amount = people.reduce((total, person) => total +person.budget , 0 )
// console.log(amount);

//==============================================Find  

//  const newPeople = people.find ( person => person.name === "Michael")
//  console.log(newPeople);

 //==============================================FindIndex

//  const newIndex = people.findIndex ( person => person.name === "Michael")
//  console.log(newIndex);