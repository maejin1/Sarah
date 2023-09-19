const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');

//3초 후 .container 제일 앞에 #myBox1 요소 추가
setTimeout(() => {
  container.insertBefore(myBox1, container.firstElementChild); //container의 첫번째 요소("자식요소1") 앞에 myBox1이 추가된다는것
},3000);
//insertBefore  --> 앞에 추가하라

//4초 후 #box2요소의 앞에 #myBox2 요소 추가
setTimeout(() =>{
  container.insertBefore(myBox2, box2);  //-> box2앞에 myBox2를 추가하라
}, 4000);