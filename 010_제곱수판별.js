//https://school.programmers.co.kr/learn/courses/30/lessons/120909#


function solution(n) {
  let x = Math.sqrt(n)
  if(Math.floor(x)*Math.floor(x)===n){
      return 1
  }else{
      return 2
  }
}

//1. n에 루트 씌우는 제곱근 메서드 Math.sqrt 쓰고 다시 곱해서 n이 되면 1을 반환시켜주게끔 함
/**
 * Math.floor 를 해줘야함. 
 * Math.sqrt(120) 10.954451150103322
 * Math.sqrt(120)*Math.sqrt(120) 120이 나옴
 * 따라서 sqrt에 어떤 자연수를 넣어서 다시 곱해도 n이 나올것임
 * Math.floor로 버려줘야함
 */

//다른사람 풀이

function solution(n) {
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}