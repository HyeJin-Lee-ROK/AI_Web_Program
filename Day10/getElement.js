//HTML 태그 이름을 이용한 선택
console.log('aaa')

var selectedItem = document.getElementsByTagName("li");     // 모든 <li> 요소를 선택함.
var selectedItem_2 = document.querySelectorAll(".greeting")

console.log(selectedItem)
console.log(selectedItem_2.length)

var selectedItem = document.getElementsByTagName("li");     // 모든 <li> 요소를 선택함.
var selectedItem_2 = document.querySelectorAll(".greeting")

for (var i = 3; i < selectedItem_2.length; i++) {
    selectedItem.item(i).style.color = "red";   // 선택된 모든 요소의 텍스트 색상을 변경함.
}

for (var i = 0; i < selectedItem_2.length; i++) {
    // selectedItem.item(i).style.color = "red";   // 선택된 모든 요소의 텍스트 색상을 변경함.
    selectedItem_2.item(i).style.color = "blue";
}