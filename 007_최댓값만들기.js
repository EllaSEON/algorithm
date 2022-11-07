//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
//https://school.programmers.co.kr/learn/courses/30/lessons/120847


//내가 푼 풀이

function solution(numbers) {
  let 정렬된값 = numbers.sort((a, b)=> b-a)
  return 정렬된값[0] * 정렬된값[1];
}
//1. 내림차순으로 정렬
//2. 첫번째 인덱스, 두번째 인덱스 곱셈

//다른 사람이 푼 풀이

function solution(numbers) {
    numbers.sort((a, b) => a - b).reverse();
    return numbers[0] * numbers[1];
}

//1.오름차순으로 정렬하고 reverse 역순으로 만든다.