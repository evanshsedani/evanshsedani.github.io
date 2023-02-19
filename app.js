let mydecider;
let score;
score = 0;


function myfunction() {
    mydecider = Math.floor(Math.random()*10);
    mydecider = Number(mydecider);
    console.log(mydecider);

    if(mydecider <= 3.3){
 console.log("Rock");
 mydecider = "rock";
    }
    if(mydecider <= 6.6 && mydecider >3.3){
        console.log("Paper");
        mydecider = "paper";
           }
           if(mydecider > 6.6){
            console.log("scissor");
            mydecider = "scissor";
               }
   document.getElementById("myid").innerHTML = "we got " + mydecider;
   if(document.getElementById("rockbutton").onclick && mydecider == "rock"){
      document.getElementById("myresult").innerHTML = "wow.. a tie?"
   }
   if(document.getElementById("rockbutton").onclick && mydecider == "paper"){
      document.getElementById("myresult").innerHTML = "you lost loser. this is why no one likes you. fucking pathetic"
      score -= 1;
      document.getElementById("myscore").innerHTML = score;
   }
   if(document.getElementById("rockbutton").onclick && mydecider == "scissor"){
      document.getElementById("myresult").innerHTML = "Wow, you w-won?... must be luck. asshole"
      score += 1;
      document.getElementById("myscore").innerHTML = score;
   }


}


function myfunction1() {
    mydecider = Math.floor(Math.random()*10);
    mydecider = Number(mydecider);
    console.log(mydecider);

    if(mydecider <= 3.3){
 console.log("Rock");
 mydecider = "rock";
    }
    if(mydecider <= 6.6 && mydecider >3.3){
        console.log("Paper");
        mydecider = "paper";
           }
           if(mydecider > 6.6){
            console.log("scissor");
            mydecider = "scissor";
               }
   document.getElementById("myid").innerHTML = "we got " + mydecider;

   if(document.getElementById("paperbutton").onclick && mydecider == "paper"){
      document.getElementById("myresult").innerHTML = "wow.. a tie?"
   }
   if(document.getElementById("paperbutton").onclick && mydecider == "scissor"){
      document.getElementById("myresult").innerHTML = "you lost loser. this is why no one likes you. fucking pathetic"
      score -= 1;
      document.getElementById("myscore").innerHTML = score;
   }
   if(document.getElementById("paperbutton").onclick && mydecider == "rock"){
      document.getElementById("myresult").innerHTML = "Wow, you w-won?... must be luck. asshole"
      score += 1;
      document.getElementById("myscore").innerHTML = score;
   }
   
}


function myfunction2() {
    mydecider = Math.floor(Math.random()*10);
    mydecider = Number(mydecider);
    console.log(mydecider);

    if(mydecider <= 3.3){
 console.log("Rock");
 mydecider = "rock";
    }
    if(mydecider <= 6.6 && mydecider >3.3){
        console.log("Paper");
        mydecider = "paper";
           }
           if(mydecider > 6.6){
            console.log("scissor");
            mydecider = "scissor";
               }
   document.getElementById("myid").innerHTML = "we got " + mydecider;

   if(document.getElementById("scissorbutton").onclick && mydecider == "scissor"){
      document.getElementById("myresult").innerHTML = "wow.. a tie?"
   }
   if(document.getElementById("scissorbutton").onclick && mydecider == "rock"){
      document.getElementById("myresult").innerHTML = "you lost loser. this is why no one likes you. fucking pathetic"
      score -= 1;
      document.getElementById("myscore").innerHTML = score;
   }
   if(document.getElementById("scissorbutton").onclick && mydecider == "paper"){
      document.getElementById("myresult").innerHTML = "Wow, you w-won?... must be luck. asshole"
      score += 1;
      document.getElementById("myscore").innerHTML = score;
   }
}

$(document).ready(function() {
   $("#resultbox").val('');
   $("#resultbox").keypress(function() {
       var textLength = $("#resultbox").val().length;
       if (textLength % 50 == 0) {
           var height = textLength/50;
           $("#resultbox").css('height', 20+(height*20));
       }
   });
});