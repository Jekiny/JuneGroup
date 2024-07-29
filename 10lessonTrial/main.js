// // const Yevhen = {
// //     firstName: 'Yevhen',
// //     LastName: 'Maistrenko',
// //     Age: 35,
// // }

// // const keyYevhen = Object.keys(Yevhen)
// // console.log(keyYevhen)

// // const valueYevhen = Object.values(Yevhen)
// // console.log(valueYevhen)

// // const entriesYevhen = Object.entries(Yevhen)
// // console.log(entriesYevhen)


// // const Julia = {
// //     firstName: 'Julia',
// //     LastName: 'Doe',
// //     Age: 35,
// // }







// const yev =
//  { LastName: 'Yevhen',
//      age: 33 };
// const jul = 
// { LastName: 'Maistrenko'};


// const newFam = Object.assign({},yev,jul)
// // assign создает новый обьект они склеивают с приорететность на последний 
// // то есть последний заменит первый поле 

// const mergedSettings = Object.assign({}, yev, jul);

// // From here

// const julia = Object.assign({},yev)

// console.log(julia)

// const keyJulia = Object.keys(julia)
// console.log(keyJulia)
// const valueJulia = Object.values(julia)
// console.log(valueJulia)

// julia.LastName = 'Yaremenko';
// console.log(julia)

// julia.age = 35;
// console.log(julia)

// console.log(keyJulia)
// const newValueJulia = Object.values(julia);
// console.log(newValueJulia)

// const entriesJulia = Object.entries(julia)
// console.log(entriesJulia)

// julia.hometown = 'Kiev';

// console.log(julia)

// console.log(julia.hasOwnProperty('age'));

// // Деструктуризация создание с обькта новых констан



// const {age,LastName,country} = julia
// console.log(age,LastName,country );

// // console.log(yev);


// for (const key in julia){
//     console.log(`${key}: ${julia[key]}`)
    
// }

// yev.hometown = 'New york'
// for (const key in yev){
//     console.log(`${key}: ${yev[key]}`)
// }

// ARRAY TRIAL

// const herInitial = [ 'Julia', 35 , 'Yaremenko' ]
// herInitial[3] = 'Kyiv'
// console.log(herInitial)
// // ====================
// const firstInitial = herInitial[0].split();
// console.log(firstInitial)
// // ====================

// const removeInitial = herInitial.pop()
// console.log(herInitial)
// // ====================
// herInitial.unshift('name ${firstInitial} ')
// console.log(herInitial)



// yev.forEach ((yevhen ) => {
   
//     console.log(yevhen)
// })
// const result = yev.filter((lengtWords) => lengtWords.length > 6)

// console.log(result)

// const jul = [...yev]
//  jul[0] = 'Julia'
//  jul[1] = 33
// console.log(`Jul array: ${jul}`)

// const yev = [ 'Yevhen', 35, 'Maistrenko','New York','Salary:5000','Aze'];
// const users = [
//     { id: 10, name: 'Анна', isActive: true },
//     { id: 13, name: 'Петро', isActive: false },
//     { id: 12, name: 'Ірина', isActive: true },
//     { id: 15, name: 'Анна', isActive: true },
//     { id: 17, name: 'Петро', isActive: false },
//     { id: 6, name: 'Ірина', isActive: true },
//   ];
  
//   const activeUsers = users.filter(user =>  user.id % 2 === 0);
//   console.log(activeUsers);

