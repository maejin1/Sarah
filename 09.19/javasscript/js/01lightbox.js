// pic, lightbox, lightbox Image 변수 3개 잡음

const pics = document.querySelectorAll(".pic");   //이미지 6개  ---> querySelectorAll로 가져오면 배열로 들어옴~~~
const lightbox = document.querySelector("#lightbox");     //div
const lightboxImage = document.querySelector("#lightboxImage");   //그 안에 이미지

//6개기 떄문에 돌려봐야함 0번째가 돌려졌냐, 1번쨰가 돌려졌냐... --> for문~

for (let i=0; i<pics.length; i++){
  pics[i].addEventListener("click", showLightbox);
//adEventLister 할때는 함수 () 이렇게 쓰지 않고, 함수이름만~~
}

 

function showLightbox() {
  const bigLocation = this.getAttribute("data-src");  //this ---> 현재~~!!! 선택한거~~~ data-src를 읽어오라 (=getAttribute)
                                                      //bigLocation에 저장 
  lightboxImage.setAttribute("src", bigLocation);  //setAttribute  ---> 설정하라~~!!! 이미지가 바뀌는것~~~
  lightbox.style.display = "block";                // 클릭하면 보여라~~~~
}

lightbox.onclick = function(){              //큰 그림 클릭하면 사라지게
  lightbox.style.display = "none";
}