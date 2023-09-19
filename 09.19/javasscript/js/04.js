const container = document.querySelector ('.container');
const myBox = document.querySelector('#myBox');

//3초 후 .container 요소의 끝에 #mybox요소를 추가
setTimeout(() => {      //setTimeout  --> 몇초 후에 실행해라.
  container.appendChild(myBox);   //---> container의 맨마지막에 mybox를 추가해라

},3000);

//★★ setTimeout ()    :  1000이 1초 /3000이면 3초 후에 실행해라. 
//set interval?

//=>는 function을 뜻함
//appendChild(myBox) --> 제일마지막에 자식요소로 myBox를 집어넣어라