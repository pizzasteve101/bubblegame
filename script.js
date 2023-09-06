var timer = 5;
var score = 0;
var newHit = 0;

function increaseScore(){
   score += 10;
    document.querySelector("#NewScore").textContent = score;

}

function GetNewHit(){
    newHit = Math.floor(Math.random() * 10);
    document.querySelector("#getHit").textContent = newHit
}
function makebubble(){
    var clutter = "";

for(var i = 1; i <=70; i++ ){
    var rm = Math.floor(Math.random()*10)
clutter += `<div class="bubble">${rm}</div>`;
}

document.querySelector("#pbt").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval( function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerint").textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbt").innerHTML = `<h1>game over</h1>`
        }
    } , 1000);  
}

document.querySelector("#pbt")
.addEventListener("click" , function(dets){
var clickednumber =Number(dets.target.textContent);
if( clickednumber === newHit){
    increaseScore();
    GetNewHit();
    makebubble();
}
});



runTimer()
GetNewHit()
makebubble();




