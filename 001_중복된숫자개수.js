//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

//★ 풀이방법 1

// function solution(array,n){
//   //1. 갯수 담을 변수 생성
//      let count = 0;
 
//      for(let i=0;i<array.length;i++){
//          if(array[i]===n){
//              count+=1;
//          }
//      }return count
//  }

//1. 갯수 담을 변수 생성 -> array안의 요소 array[i]가 n이랑 같은지 확인
//2. 만약 같다면 갯수를 늘리기
//3. 반복문 만들기

//★풀이방법 2

function solution(array,n){
  let newArray = array.filter((data)=>{return data===n})
  return newArray.length
}