
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

const pairId = bankIdFirst.filter (user  => 
    user.id % 2 === 0)
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

// 10.1
const userId = {
    name: 'John',
    emial: 'jiko@gmail.com',
    mobilephone: '+347218908',
    homeadress: 'Kyiv',

};
for(const keyUserId in userId){
    console.log (`${keyUserId}: ${userId[keyUserId]}`)
}



// 10.3
const Bofa = {
    clients:[
        {accountId:34502 , openDate: '03.11.2024', email: "johncraford@gmail.com", mobilephone: 2137612763},
        {accountId:12302 , openDate: '05.05.2021', email: "johncraford@gmail.com", mobilephone: 165271908},
        {accountId:11023 , openDate: '06.11.2019', email: "alexa@gmail.com", mobilephone: 3471236781},
        {accountId:34012 , openDate: '01.01.2020', email: "petr@gmail.com", mobilephone: 98712315},
        {accountId:98172 , openDate: '07.04.2023', email: "lio@gmail.com", mobilephone: 87965713},
    ],
    clientId(id){
        return this.clients.find(accountsid =>
         accountsid.accountId === id)
    }
}
console.log(Bofa.clientId(34502))