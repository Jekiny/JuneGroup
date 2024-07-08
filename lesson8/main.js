let ladder = {
    bankAccount: "Bofa",
    name: 'Alex',
    surname: 'Johnson',
    birthdate: "11.02.1991",
    bankAccountAmount: "1250$",

    up: function() {
        console.log(`Bank Account: ${this.bankAccount}\nName: ${this.name}\nSurname: ${this.surname}`);
    },
    down: function() {
        console.log(`Birthdate: ${this.birthdate}\nBank Account Amount: ${this.bankAccountAmount}`);
    },
    showStep: function() {
        this.up(); 
        this.down(); 
    }
};

ladder.showStep();
