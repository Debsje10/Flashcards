


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

let anwser1 =
`4`

let question2 = 
`How much is 7 + 2`

let anwser2 = 
`9`



   

function showQuestion1(){
    answerElement.innerHTML = question1
    questionElement.innerHTML = anwser1
    
    
}


function showQuestion2(){
    answerElement.innerHTML = question2
    questionElement.innerHTML = anwser2

}
    
    

var ispurple = true;


newQuestion.addEventListener('click', function() {
    if (ispurple) {
        answerElement.innerHTML = question1
        questionElement.innerHTML = anwser1
        
    }
    
    else { 
        answerElement.innerHTML = question2
        questionElement.innerHTML = anwser2

    }

    
    ispurple = !ispurple;
}

)
