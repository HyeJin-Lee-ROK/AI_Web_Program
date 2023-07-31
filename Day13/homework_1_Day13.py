"""
2023.07.31.
과제 1번
"""
## 실행시간 측정을 위한 모듈을 호출
import time


def compare_integer(list_int: list):
    """
    숫자끼리 비교하는 함수
    """

    set_int = set(list_int)
    result = list(set_int)

    return result

def compare_string(list_str: list):
    """
    문자끼리 비교하는 함수
    """

    set_str = set(list_str)
    result = list(set_str)

    return result


## list_A: 숫자로만 이루어진 배열
## list_B: 문자로만 이루어진 배열
list_A = []
list_B = []

## 각 배열에 값을 추가하기 위한 반복문
## 각 배열에 맞는 자료형으로 값을 추가
for i in range(1,10,1):
    for j in range(1,100,1):
        list_A.append(i)
        list_B.append(str(i))

# print(list_A)
# print(list_B)

## 숫자끼리 비교하는 함수
## 실행시간 측정
start_A = time.time()
compare_integer(list_A)
end_A = time.time()

## 결과
## 1.7881393432617188e-05
result_time = end_A - start_A
print("time_A:", result_time)

## 문자끼리 비교하는 함수
## 실행시간 측정
start_B = time.time()
compare_string(list_B)
end_B = time.time()

## 결과
## 3.409385681152344e-05
result_time = end_B - start_B
print("time_B:", result_time)

### 결론
### 1.7881393432617188e-05(숫자비교) < 3.409385681152344e-05(문자비교)
### 숫자끼리 비교하는 것이 문자끼리 비교하는 것보다 더 빠르다
