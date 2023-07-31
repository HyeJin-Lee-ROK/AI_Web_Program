"""
2023.07.31.
과제 2번
"""

## 중복값이 3개 있는 리스트
## 중복 없을 시, 9개의 값을 가진 리스트
list_duplicated = ["케이크", "탕후루", "사탕", "아이스크림", "빙수", "케이크", "젤리", "사탕", "스무디", "초콜릿", "빙수", "딸기빙수"]
list_not_duplicated = []

# print(len(list_duplicated))

for idx in range(0,len(list_duplicated),1):
    ## 중복 여부를 확인하기 위한 참/거짓 값
    ## 기본 설정: True
    FLAG_NOT_DUPLICATED = True

    for jdx in range(idx+1,len(list_duplicated),1):
        ## print(list_duplicated[idx], list_duplicated[jdx])

        ## 중복 시, 실행되는 조건문
        if list_duplicated[idx] == list_duplicated[jdx]:
            ## 중복 여부를 확인하기 위한 값 변경
            ## True -> False
            ## 중복되었다는 뜻
            FLAG_NOT_DUPLICATED = False

            ## print(FLAG_NOT_DUPLICATED)

            ## 중복되었을 경우, 더 이상의 반복문을 불필요함
            break

    ## break 이후, 중복 여부를 확인
    ## 중복이 없을 경우, 'list_not_duplicated'에 값 추가
    if FLAG_NOT_DUPLICATED:
        list_not_duplicated.append(list_duplicated[idx])

## 결과 확인
## 9개의 값을 가진 리스트가 나옴
print(list_not_duplicated)
print(len(list_not_duplicated))
