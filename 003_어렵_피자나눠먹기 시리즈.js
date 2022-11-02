//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요
//https://school.programmers.co.kr/learn/courses/30/lessons/120814


//1) 첫번째 풀이법 : Math.ceil 은 무조건 올림 함수
function solution(n) {
  var count = Math.ceil(n/7)
  return count;
}

//내가 푼 방식
//7명이 7조각=> 1판, 15명이 21조각 =>3판, 1명이 7조각 => 1판
//공통점을 찾아서 나눠봤더니... 규칙을 찾음...
//사람수를 7조각으로 나눈다음 소수좀 올리면 안되니까 올림하기


//머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

//https://school.programmers.co.kr/learn/courses/30/lessons/120815ㄴ


function solution(n) {
  let pizzaCount = 1;
  while(true){
      if(pizzaCount*6%n===0){
          return pizzaCount
      }
      pizzaCount+=1;
  }
}


//1. 6의 배수를 n 으로 나눴을때 0으로 떨어지는 수를 찾아라
// 17과 같은 소수는 자기자신으로 나눠야지 나눠떨어진다. 그래서 17판 시켜야함

function solution(n) {
    for (let i = 1; ; i += 1) {
        const allPizzaSlices = i * 6;
        if (allPizzaSlices % n === 0) return i;
    }
    return -1;
}

function solution(n){
  var count = 0;
  for(let i=1;i<=n;i++){
    if((i*6)%n===0){
      count = i;
      break;
    }
  }
  return count;
}