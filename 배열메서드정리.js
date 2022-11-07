//1) splice
//원본 배열자체를 수정
//https://www.daleseo.com/js-array-slice-splice/

const array = [1,2,3,4,5]
array.splice(2) //[3,4,5] 시작 인덱스 1개만 주어질 경우, 시작 인덱스 포함해서 배열의 마지막 요소까지 모두 제거함
console.log(array) //[1,2]

const 어레이 = [1,2,3,4,5]
어레이.splice(2,2) //[3,4] 2번인덱스 포함해서 2개 제거
console.log(어레이)//[1,2,5]


//2)reverse()
//배열 원소의 순서를 거꾸로 만든다.
const arr = ['Apple', 'Banana', 'Orange'];
arr.reverse()
