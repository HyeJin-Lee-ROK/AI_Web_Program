alert("Test")

var a = 1

function test() {
    var b = 11;
    return b;
}

console.log(window);
console.log(window.a);
console.log(window.test());
console.log(document);
// console.log(document.a);
// console.log(document.test());
console.log(a);
console.log(test());