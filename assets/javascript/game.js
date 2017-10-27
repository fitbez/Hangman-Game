// Global variables
// =============================================================
 // create an array of words
 var athletics = [ "running", "jumping", "throwing", "walking",  "track",  "relay", "races", "olympic" ];
 // choose words randomly
 var randNum = Math.floor(Math.random() * athletics.length);
 var choosenWord = athletics[randNum];
 var rightWord =[];
 var wrongWord =[];
 var underScore = [];


 // Gets Elements by Class Name

 var docUnderScore = document.getElementsByClassName("underScore");
 var docRightGuess= document.getElementsByClassName("rightGuess");
 var docWrongGuess= document.getElementsByClassName("wrongGuess");



 // Main
 // ============================================================

 // creates underscores based on length of word
 var generateUnderscore = () => {
   for(var i = 0; i < choosenWord.length; i++) {
     underScore.push("_");

   }
   return underScore;
 }

 // Get users guess

 document.addEventListener("keypress", (event) =>{
   var keyword = String.fromCharCode(event.keyCode);

 // if Users guess is right

   if(choosenWord.indexOf(keyword) > -1) {

 // add to the right word array
    rightWord.push(keyword.toUpperCase());

// add sound on the rightWord
  if(keyword == rightWord){
  notification.sound =  'audio/alert.mp3';
}
 // replace underscore with right letter
     underScore[choosenWord.indexOf(keyword)] = keyword;
      docUnderScore[0].innerHTML = underScore.join("");
     docRightGuess[0].innerHTML = rightWord;

 // Checks to see if user word matches guesses
     if (underScore.join("") == choosenWord) {
       alert("You Win");
     }

   }
   else {
     wrongWord.push(keyword);
     docWrongGuess[0].innerHTML = wrongWord;
   }

 });

docUnderScore[0].innerHTML = generateUnderscore().join(" ");
