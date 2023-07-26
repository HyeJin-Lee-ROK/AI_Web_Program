var person = {
    name: "홍길동", 
    birthday: "030219", 
    age: 30, 
    pId: "1234567", 
    fullId: function() {
        // return this.birthday + this.pId;
        return birthday + pId;
    },
};

console.log(person.fullId());
