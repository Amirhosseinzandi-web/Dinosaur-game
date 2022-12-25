let body = document.getElementsByTagName("body")[0];
let background = document.querySelector(".background");
let dinosaur = document.querySelector(".dinosaur");
let cactus = document.querySelector(".cactus");
let score = document.getElementById("score");
let btn = document.querySelector(".btn")
let hardVersion = document.querySelector(".hard")
let flag = false;
let point = 0;
let temp = true;
let z;
let run = true
let dif = false
let emp = false

function start(){
  btn.style.opacity = "0"
  setTimeout(()=>{
      btn.style.display = "none"
  },700)
  background.classList.remove("animationStop")
  dinosaur.classList.remove("animationStop")
  cactus.classList.remove("animationStop")
  if(dif==true){
      background.style.animationDuration = ".9s"
      cactus.style.animationTimingFunction = "cubic-bezier(0.19, 1, 0.22, 1)"
  }
  
  hardVersion.classList.add("none")
  // start()
    flag = true;
    setTimeout(()=>{
      emp = true
    },100)
    if(emp==true){
      dinosaur.classList.add("jump");
    setTimeout(() => {
      dinosaur.classList.remove("jump");
    }, 600);
  }
}

btn.addEventListener("click" , ()=>{
  start()
})

hardVersion.addEventListener("click" , (e)=>{
    dif = true
    hardVersion.style.boxShadow = "0px 0px 30px gray"
    e.target.classList.add("none")  
})

body.addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    start()
    }
});

function dinosaurJump() {
  let dinosaurTop = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("top")
  );
  let dinosaurLeft = parseInt(
    window.getComputedStyle(dinosaur).getPropertyValue("left")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < dinosaurLeft && flag == true && run==true) {
    point += 100;
    score.innerText = point;
    flag = false;
  }

  if (
    cactusLeft > 30 &&
    cactusLeft < 114 &&
    dinosaurTop > 220 &&
    temp == true
  ) {
    if (score.innerText > "100") {
      point -= 100;
      score.innerText = point;
    } else {
        score.innerText = 0
      
        alert("game over");
      background.style.animationPlayState = "paused";
      cactus.style.animationPlayState = "paused";
      window.history.go();
     
    }

    temp = false;
    run = false
  } 
  else if(cactusLeft<dinosaurLeft -30){
    run = false
  }
  else if (cactusLeft > 160) {
    temp = true;
    run = true
  }
  
}

z = setInterval(dinosaurJump, 0);