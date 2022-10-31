//Day 2

//1) 배열 2배 만들기

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120809

// ★ 첫번째 풀이방법 ★
//1. numbers 에 배열이 들어가면 곱하기 2를 실행시켜줌
//2. 곱하기 2 된거를 answer 배열에 넣는다. 
//3. numbers의 배열의 길이만큼 반복을 해준다.

function solution(numbers){
  var answer = [];
  for(let i=0; i<numbers.length;i++){
  answer.push(numbers[i]*2);
  }
  return answer;
}
// ★ 두번째 풀이방법 ★
function solution(numbers) {
    return numbers.map((data)=>(data*2))};

function solution(numbers) {
  const newAnswer = numbers.map((data)=>{data*2})
  return newAnswer};

//2)분수의 덧셈
//첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.


function solution(denum1,num1,denum2,num2){
  const 분자 = (denum1*num2) + (denum2 * num1);
  const 분모 = num1 *num2

  //작은수 찾아보기
  let 작은수;
  if(분자<분모){
    작은수 = 분자;
  }else{
    작은수 = 분모;
  }

  //작은 수 찾고 나머지가 0 이면 최대 공약수
  //나머지가 0 이 아니면 작은수를 -1 해서 반복
  
  while(true){
    if(분자%작은수===0 && 분모%작은수===0){
      return [분자/작은수,분모/작은수]
    }
    작은수-=1
  }
}