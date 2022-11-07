//https://school.programmers.co.kr/learn/courses/30/lessons/120841

//내가 푼 풀이

function solution(dot) {
  if(dot[0]>0&&dot[1]>0){
      return 1
  }else if(dot[0]<0&&dot[1]>0){
      return 2
  }else if(dot[0]<0&&dot[1]<0){
      return 3
  }else if(dot[0]>0&&dot[1]<0){
      return 4
  }
}

//다른 사람이 푼 풀이

function solution(dot) {
    const x = dot[0];
    const y = dot[1];

    //if문을 작성할때 실행부가 한줄로 끝나는 경우 {}를 생략하고 조건식을 감싸고 있는 () 괄호 옆에 작성할 수 있다.
    if (x > 0 && y > 0) answer = 1
    if (x < 0 && y > 0) answer = 2
    if (x < 0 && y < 0) answer = 3
    if (x > 0 && y < 0) answer = 4

    return answer;
}