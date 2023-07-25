//2023.07.24. 과제2
//참고: https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/13_undefined&null.html
//참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/null
//참고: https://developer.mozilla.org/ko/docs/Glossary/undefined
//참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined
//참고: https://siyoon210.tistory.com/148
//참고: https://minify.tistory.com/50
//참고: https://mygumi.tistory.com/335
//참고: https://for-it-study.tistory.com/92

// null, undefiend 출력
console.log("null:", null); // null
console.log("undefined:", undefined); // undefined

//null, undefined 지료형(type) 확인
var a_null = null;
var a_undefiend = undefined;
console.log("typeof null:", typeof a_null); // type: 'object'
console.log("typeof null:", typeof a_undefiend); // type: 'undefined'

// 비교연산자
// == : 동등연산자, 숫자 1 == 문자 '1': true
// === : 일치연산자
console.log("undefined:", null === undefined); // false, 값만 확인, null과 undefined 모두 값이 없음(null-의도적으로 값 없음, undefined-자료형(type)까지 없음)
console.log("undefined:", null == undefined); // true, 값과 자료형(type) 확인, 자료형이 서로 다름(object, undefined)

// null끼리 비교연산자
console.log("null === null:", null === null); // true
console.log("null == null:", null == null); // true

// undefined 비교연산자
console.log("undefined === undefined:", undefined === undefined); // true
console.log("undefined == undefined:", undefined == undefined);  // true

// Boolean() 사용
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));

// 논리연산자 ! 사용
console.log("!null:", !null); // true
console.log("!undefined:", !undefined); //true

// true/false 와의 비교
// Boolean() 사용, true/false 와의 비교를 통해 null/undefined은 false는 아니지만 false와 동일시함
console.log("null == true:", null == true);
console.log("undefined == true:", undefined == true);
console.log("null == false:", null == false);
console.log("undefined == false:", undefined == false);

// isNaN() 사용
console.log("isNaN(null):", isNaN(null)); // false
console.log("isNaN(undefined):", isNaN(undefined)); // true
console.log("Number(null):", Number(null)); // 0, 값이 없는 것 != 숫자가 아닌 것
// console.log("Number(undefined)", iNumber(undefined)); // error 발생, 값이 할당되지 않았기 때문
console.log("isNaN(0):", isNaN(0)); // false
console.log("isNaN(1):", isNaN(1)); // false
console.log("isNaN(1 + null):", isNaN(1 + null)); // false
console.log("isNaN(1 + undefined):", isNaN(1 + undefined)); // true

//null, undefined 할당할 경우
var a; // 값을 할당하지 않음
var b = 1; // 값을 할당함
var c = null; // null, 더 이상 참조하지 않겠다고 명시해줄 때 사용
var d = undefined; // undefined, 자바스크립트 엔진이 변수를 초기화하는 데 사용
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

// var, let, const 사용
var t1;
let t2;
const t3 = null;
console.log("t1:", t1);
console.log("t2:", t2);
console.log("t3:", t3);

// 할당되지 않은 인자가 올 경우
function test(t) {
    if (t === undefined) {
      return 'Undefined value!';
    }
    return t;
}
  
// 반환하지 않는 함수
function ttest(t) {

}

// 값을 할당하지 않은 변수
// x를 test(), ttest()의 인자로 함
let x;

// Expected output: "Undefined value!"
// t가 undefined 이기 때문에 'Undefined value!' 반화
console.log("test(x):", test(x));

// undefiend
// 함수가 값을 리턴하지 않음
console.log("ttest(x):", ttest(x));

function getVowels(str) {
    const m = str.match(/[aeiou]/gi); // 문자열에서 모음을 찾는 코드
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
// Expected output: 0
// 'sky'에는 모음 없음, null
console.log(getVowels('sky'));
