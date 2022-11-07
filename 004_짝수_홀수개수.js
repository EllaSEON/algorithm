//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
//https://school.programmers.co.kr/learn/courses/30/lessons/120824

// 내가 푼 방법
function solution(num_list) {
  let evenCount = 0;
  let oddCount = 0;

  num_list.forEach((data)=>{
      if(data%2===0){
      evenCount+=1;
      }else{ 
          oddCount+=1;   
      }
  })   
  return [evenCount,oddCount]
}

//다른사람 풀이
function solution(num_list) {
  let 짝수 = num_list.filter((data)=>data%2===0).length;
  let 홀수 = num_list.filter((data)=>data%2!==0).length;
  return [짝수,홀수]
}

//다른 사람 풀이
function solution(num_list) {
  let answer = [0, 0]
  for (i of num_list){
      answer[i % 2] += 1
  }
  return answer
}