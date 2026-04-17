let gameSeq=[];
let userSeq=[];
let color=["red","blue","yellow","purple"];
let started=false;
let level=0;
let highestScore=0;
document.addEventListener("keydown",function(){
    if(started==false){
        console.log("game started");
        started=true;   
        levelup();
    }
});
function levelup(){
    userSeq=[];
    level++;
    let h2=document.querySelector("h2");
    h2.innerText="Level " + level;
    let randomnum=Math.floor(Math.random()*4);
    let randomcolor=color[randomnum];
    let randomColorQ=document.querySelector(`.${randomcolor}`);
   btnFlash(randomColorQ);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    
}
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
}, 250);

}
function btnpress(){
btn=this;
    btnFlash(btn);
    console.log(this);
    let btnId=this.getAttribute("id");
    userSeq.push(btnId);
    console.log(userSeq);
    check(userSeq.length - 1);
}
let allbtns=document.querySelectorAll(".button");
for(btns of allbtns){
    btns.addEventListener("click",btnpress);
}
 
function check(index){
   
   if(userSeq[index]===gameSeq[index]){
if(userSeq.length===gameSeq.length){
    setTimeout(function(){
        levelup();
    }, 1000);   
}
highestScore=Math.max(highestScore,level);}

else{
    console.log("wrong");
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    }, 200);
    let h2=document.querySelector("h2");
   
h2.innerText=`Game Over, Your Score is ${level}. Press Any Key to Restart the Game, Highest Score is ${highestScore}`;

userSeq=[];
gameSeq=[];
started=false;
level=0;

    }
}

