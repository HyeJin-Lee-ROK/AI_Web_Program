"""
2023.08.01.
과제

요구사항
1. Unnamed:0라고 표기되는 열을 지운다. 단 Unnamed:0라 쓰지말고 새롭게 컬럼 이름을 만들어서 지운다.
2. 0,1,2,3,4로 보여지는 index 부분을 지운다.
3. name에 해당되는 영문 이름을 한글로 바꾼다.
4. salary에 해당되는 숫자를 000 세자리 단위로 콤마를 넣어서 값을 바꿔 넣는다.
5. 1~4를 처리하고 나서 csv파일로 저장한다.
"""
import pandas as pd


## Step: 1, 2
## 방법1 - 데이터를 불러올 때, index 제거
my_data_ori = pd.read_csv('my_data.csv', index_col=0)
print(my_data_ori.shape)
print(my_data_ori.columns)
# print(my_data_ori)


## Step: 1, 2
## 방법2 - 새롭게 컬럼 이름을 바꿔 제거
my_data_ori_2 = pd.read_csv('my_data.csv')
# print(my_data_ori_2.columns)
# print(my_data_ori_2)

my_data_ori_2 = my_data_ori_2.rename(columns={"Unnamed: 0": "index"})
my_data_ori_2 = my_data_ori_2.drop("index", axis=1)
# print(my_data_ori_2)

## Step: 2.5
my_data = my_data_ori
# my_data = my_data.style.hide(axis="index")
# print(my_data)


## Step: 3
list_name = {"Alice": "앨리스", "Bob": "밥", "Charlie": "찰리", "james": "제임스"}
# print(my_data["name"])
my_data["name"] = my_data["name"].apply(lambda x: list_name.get(x))
# print(my_data)


## Step: 4
my_data["salary"] = my_data["salary"].apply(lambda x: format(x, ",d"))
print(my_data)


## Step: 5
my_data.to_csv("edited_my_data_1.csv", index=False)
