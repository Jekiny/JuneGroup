
// 10.2 (v1)
const bankIdFirst= [
    {id: 35 , name : 'John' , amount : 11256},
    {id: 12 , name : 'Alex' , amount : 1235},
    {id: 11 , name : 'Matew' , amount : 867},
    {id: 5 , name : 'Alexa' , amount : 123},
    {id: 35 , name : 'Alena' , amount : 50},
    {id: 2 , name : 'Julia' , amount : 786},
    {id: 78 , name : 'Patryk' , amount : 451},
    {id: 22 , name : 'Winsent' , amount : 976},
];

const pairId = bankIdFirst.filter (user  => user.id % 2 === 0)
console.log(pairId);

const bankPairId = pairId .map((users) => users.id)

console.log(bankPairId)

// v2
const bankId= [
    {id: 35 , name : 'John' , amount : 11256},
    {id: 12 , name : 'Alex' , amount : 1235},
    {id: 11 , name : 'Matew' , amount : 867},
    {id: 5 , name : 'Alexa' , amount : 123},
    {id: 35 , name : 'Alena' , amount : 50},
    {id: 2 , name : 'Julia' , amount : 786},
    {id: 78 , name : 'Patryk' , amount : 451},
    {id: 22 , name : 'Winsent' , amount : 976},
];

const uptdateId = bankId.filter(userId => {
    if(userId.id % 2 === 0 ){
        return {...userId }
    }
})
console.log(uptdateId)