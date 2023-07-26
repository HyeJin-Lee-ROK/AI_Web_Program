//과제_20230726
//참고: https://ko.javascript.info/object-methods
//참고: https://blog.rhostem.com/posts/2018-07-20-this-in-javascript
//참고: https://hanamon.kr/javascript-this란-무엇일까

// this
// 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수
// 메서드를 호출할 때 사용된 객체를 나타냄
// this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능
// 하지만, 이 경우 다른 값으로 덮어 써서 원치 않는 값(null)을 참조하게 되어 
// 엉뚱한 객체를 참고하면서 에러가 발생할 수도 있음

// this를 사용하지 않을 경우, Reference Error 발생
// 변수가 정의되지 않았기 때문에 발생한 오류
// 이는 this를 쓰지 않아서 객체 속의 생성된 변수, 즉 객체의 속성에 접근할 수 없어 발생하게 됨

var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId: function() { 
        // return birthday + pId; // this를 사용하지 않을 경우, Reference Error 발생
        return this.birthday + this.pId;
    }
};

// this를 사용하는 경우
var person_internal = {
    name: "김철수",
    birthday: "050819",
    age: 20,
    pId: "7897890",
    fullId: function() { 
        return this.birthday + this.pId;
    }
}

// 외부 변수를 참조해 객체에 접근하는 경우
var person_external = {
    name: "김철수",
    birthday: "050819",
    age: 20,
    pId: "7897890",
    fullId: function() { 
        return person_external.name;
    }
}

// this 사용해서 출력 잘 됨
// Reference Error 발생하지 않음
console.log("person.name:", person.name);
console.log("person['name']:", person["name"]);

console.log("person.fullId()". person.fullId());
console.log("person['fullId']", person["fullId"]);

console.log("person_internal.name:", person_internal.name);
console.log("person_internal.fullId():", person_internal.fullId());


// 외부 변수를 사용했을 때, 문제가 발생하는 경우
// 엉뚱한 객체를 참고하면서 에러가 발생
// 에러 - TypeError: Cannot read properties of null
let person_C = person_external;

//다른 값으로 덮어써서, 원치 않은 값(null)을 참조하게 됨
person_external = null;

// console.log(person_C.fullId()); // 잘못된 값을 참조하면서 TypeError 발생

// 비교
// 같은 경우에서의 this
let person_D = person_internal;
let person_E = person_internal;

person_internal = null

console.log("person_D.name:", person_D.name)
console.log("person_D.fullId():", person_D.fullId())
console.log("person_E.name:", person_E.name)
console.log("person_E.fullId():", person_E.fullId())
