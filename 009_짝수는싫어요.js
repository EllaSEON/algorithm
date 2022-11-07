//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
//https://school.programmers.co.kr/learn/courses/30/lessons/120813



//내가 푼 풀이
function solution(n){
  return Array(n+1).fill().map((_,i)=>i).filter(n=>n%2===1)
}

//1. 배열 만들고
//2. 그 중에서 홀수만 남기자


//다른사람 풀이

function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}


function solution(n) {
    var answer = [];
    for(let i = 1; i<= n; i++)
        if(i % 2=== 1) answer.push(i);
    return answer;
}