//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
//https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list){
  let answer =[];
  
  for(let i=num_list.length-1;i>=0;i--){
      answer.push(num_list[i])
  }
  return answer
}


//다른 사람이 푼 문제
//reverse() 배열의 순서를 거꾸로 만들어줌

function solution(num_list) {
    return num_list.reverse()
}

