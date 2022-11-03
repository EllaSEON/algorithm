//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

//https://school.programmers.co.kr/learn/courses/30/lessons/120854

//내가 푼 방법

function solution(strlist) {
  var answer = [];
  
  strlist.forEach((data,i)=>{
    var lengthCount = strlist[i].length
    answer.push(lengthCount)
  })
  return answer;
}

//1. 빈 배열을 만들고
//2. 각 배열의 요소를 뽑아내서 길이를 잰다음에
//3. 각 길이를 빈 배열에 push


//다른사람이 푼 방법
function solution(strlist) {

  var answer = strlist.map((data,i)=>{return strlist[i]=strlist[i].length})
      
      return answer;
  }

  function solution(strlist) {

    return strlist.map((data,i)=>{return strlist[i]=strlist[i].length})
      
    }