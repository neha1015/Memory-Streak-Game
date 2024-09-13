let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["blue","pink","green","red"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    } ,250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    // btnFlash(randBtn);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("cur level: ",level);
    // let idx=level-1;

    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`GAME OVER! Your Score is <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}

const audio=new Audio();
audio.src ="clickbuttonSound.mp3";
