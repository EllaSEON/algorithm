//머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

//https://school.programmers.co.kr/learn/courses/30/lessons/120585

//1) 첫번째 풀이방법
// function solution(array, height) {
//   let newArray = array.sort((a,b)=>{return a-b})
//   var count = 0;
//   for(let i = 0;i<array.length;i++){
//       if(newArray[i]>height){
//           count+=1;
//       }
//   }return count
// }

//1. 오름차순대로 키 정렬
// 2. 키큰 사람 수를 세야하니까 수를 담을 변수 만듦
//3. 내 키(height)보다 크면 count 수가 올라가는 반복문 만들어줌

//2) 두번째 풀이방법 => filter 로 구하는 방법

// function solution(array, height) {
//   let newArray = array.filter((data)=>data>height)
//    return newArray.length
// }
// solution([1,2,3,4],2)

// function solution(array, height) {
//   return array.filter((el)=>{return el > height;}).length
// }

//3) 3번째 풀이방법 => forEach

// function solution(array, height) {
//   let count = 0;
//    array.forEach((data)=>{
//        if(data>height){
//            count+=1;
//        }
//    })
//    return count;
// }

// forof forin 반복문 연습 , 배열 요소 수만큼 반복
const 배열 =['바나나','사과','귤']

for (const 요소 of 배열) {
  console.log(요소)
} // 바나나-사과-귤

for (const 인덱스 in 배열) {
  console.log(인덱스,배열[인덱스])
}//0 바나나 1사과 2귤

//4) 4번째 풀이 방법 => for of문으로 해보기
function solution(array,height){
  let count = 0;
  for (const a of array) {
    if(a>height){
      count+=1;
        }
    }return count  
  }

//5) 5번째 풀이 방법 => for in 문으로 해보기

function solution(array,height){
 let count = 0;
  for(const i in array){
    if(array[i]>height){
      count+=1;
    }
  }return count
}
