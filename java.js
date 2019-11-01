


const card = document.querySelector('.card').onclick = function(){ lekkerDraaien()}
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const newQuestion = document.getElementById('newFlashCard');
const resetCards = document.getElementById('resetFlashCards');




var rotated = true;


function lekkerDraaien() {
    var img = document.querySelector('.card');
    rotated = !rotated;
    if(!rotated){
        img.setAttribute('style','transform:rotate(360deg)');
    }else{
        img.setAttribute('style','transform:rotateY(180deg)');
    }
}   

let question1 = 
`How much is 2 + 2`

let awnser1 =
`4`

let question2 = 
`How much is 4 + 2`

let awnser2 = 
`6`
   

function showQuestion1(){
    answerElement.innerHTML = question1
    questionElement.innerHTML = awnser1
    
}

function showQuestion2(){
    answerElement.innerHTML = question2
    questionElement.innerHTML = awnser2
    
}


newQuestion.addEventListener('click', showQuestion1);
resetCards.addEventListener('click', clearLocalUserStorage);


// empty localStorage
function clearLocalUserStorage() {
    confirmedClear = confirm(
        'Are you sure you want to delete all the flashcards ?'
    );
    if (confirmedClear) {
        showQuestion1.clear();
        jumpToAnchor('top');
        alert("And we're back to the standard flashcards!");
    }
}
