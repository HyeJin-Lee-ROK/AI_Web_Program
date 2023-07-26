// var human = {
//     name = "james", 
// }


// this
// 메서드를 호출할 때 사용된 객체를 나타냄
// this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능
// 하지만, 이 경우 다른 값으로 덮어 써서 원치 않는 값(null)을 참조하게 될 수 있고, 
// 엉뚱한 객체를 참고하면서 에러가 발생할 수도 있음


// json (Java Script Object Notation)
var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    // fullId: function(birthday, pId) {
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        // return this.birthday + this.pId;
        return this.birthday + this.pId;
    }, // dynamic bining
    addAge: function(number) {
        // return age + number;
        // return this.age + number;
        return number;
    }
};
// person.name    // 홍길동
// person["name"] // 홍길동

// class Person() {
//     name = "james", 
//     age = 30, 
//     function initialize() {

//     }

//     function sleep() {
//         console.log("zzzzzzzzzz")
//     }    
// }

// var str = new String();
// str.split();

// person = Person();
// person.name

person.name
person["name"]

console.log(person.fullId());


console.log(person.name)
console.log(person["name"])

var person = {
    name: "홍길동",
    birthday: "030219",
    pId: "1234567",
    fullId: function() {
        return this.birthday + this.pId;
    }
};

id = person.fullId();
id2 = person.fullId;

console.log(id)
console.log(id2)

person.fullId() // 0302191234567
person.fullId;  // function () { return this.birthday + this.pId; } 

//생성자(constructor)를 이용한 객체 생성
var day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성함.
console.log("올해는 " + day.getFullYear() + "년입니다.");



// // 외부 변수의 경우
// console.log("erson_external.name:", person_external.name);
// console.log("person_external['name']:", person_external['name']);

// // 외부 변수를 사용했을 때, 문제가 발생하는 경우_1
// // person_A의 이름이 "김철수", person_B의 이름이 "이영희"일 때,
// // person_B의 이름을 "이영희"으로 변경하면
// // person_A의 이름을 출력할 때도 "이영희"로 나오게 됨
// // 잘못된 값을 참조하게 되는 것
// let person_A = person_external;
// let person_B = person_external;

// person_A.name = "이영희"

// console.log("person_A['name']:", person_A['name'])
// console.log("person_A.fullId():", person_A.fullId())

// console.log("person_B.name:", person_B.name)
// console.log("person_B.fullId():", person_B.fullId())