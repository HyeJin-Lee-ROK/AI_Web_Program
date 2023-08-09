"""
2023.08.09.
과제_Day21

<참고>
https://www.daleseo.com/python-json/
https://wikidocs.net/126088
https://rfriend.tistory.com/474

"""
## 파이썬에서 JSON 형태의 데이터를 처리하기 위해서 사용되는 내장 모듈
import json


### json to python object
### string to object
### 역직렬화(Deserialization)
JSON_STRING = """
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
"""

## JSON 문자열을 Python의 객체로 변환
json_to_python = json.loads(JSON_STRING)
print(json_to_python)


### python object to json
### object to string
### 직렬화(Serialization)
python_object = {
    'name' : 'HJ L', 
    'age' : 26, 
    'major' : 'computer sciend & statistics', 
    'birthplace' : 'jeju'
}

python_to_json = json.dumps(python_object, indent=4) ## Python의 객체를 JSON 문자열로 변환, indent : 들여쓰기
print(python_to_json)


## import a json file
with open('input.json', 'r', encoding='ASCII') as f:
    ## JSON 파일에 저장된 데이터를 읽어서 Python 객체로 불러오고 싶은 경우, loads() 대신에 load() 함수를 사용
    json_object = json.load(f)

print(json_object)


## export json file
with open('output.json', 'w', encoding='ASCII') as f:
    ## Python 객체를 JSON 문자로 변환한 결과를 파일에 바로 쓰고(write) 싶은 경우, dumps() 대신에 dump() 함수를 사용
    json.dump(json_object, f, indent=4)



"""
파일을 읽는 경우
    load(), dump()
문자열을 읽는 경우
    loads(), dumps()
"""


"""
JSON 저장 시 한글 깨짐 현상
    dump(), dumps() 함수는 기본적으로 데이터를 아스키 형태로 저장
    JSON 문자열을 딕셔너리로 다시 역변환하여 사용하는 데에는 전혀 문제가 없음
    한글 문자열이 아스키 형태의 문자열로 변경되는 것을 방지하는 방법 사용
        ensure_ascii=False 옵션을 사용
        데이터를 저장할 때 아스키 형태로 변환하지 않겠다는 뜻
        example
            json_data = json.dumps(d, ensure_ascii=False)
    인코딩 지정
        utf-8/cp949/euc-kr
"""