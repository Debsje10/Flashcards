


const card = document.querySelector('.card').onclick = function(){ lekkerDraaien()}
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');

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



// setting the local storage
userStorage = window.localStorage;


let questions = JSON.parse(userStorage.getItem('questions')) || "";

let questionsData = [{
        id: 1,
        question: 'What is the use of <em>isNaN function</em>?',
        answer: 'isNan function returns true if the argument is not a number otherwise it is false',
        flipped: false,    
    },
    {
        id: 2,
        question: 'Explain what is pop()method in JavaScript?',
        answer: 'The pop() method is similar as the shift() method but the difference is that the Shift method works at the start of the array. Also the pop() method take the last element off of the given array and returns it. The array on which is called is then altered.',
        flipped: false,    
    },
    {
        id: 3,
        question: 'What is "this" keyword in JavaScript?',
        answer: '"this" keyword refers to the object from where it was called',
        flipped: false,    
    },
    {
        id: 4,
        question: 'Operators: What is the <em>===</em> operator?',
        answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion',
        flipped: false,    
    },
    {
        id: 5,
        question: 'What are all the <em>looping</em> structures in JavaScript?',
        answer: 'Following are looping structures in Javascript: for while, do-while',
        flipped: false,    
    },
    {
        id: 6,
        question: 'Explain the difference between <em>"=="</em> and <em>"==="</em>?',
        answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different',
        flipped: false,    
    },
    {
        id: 7,
        question: 'What do we mean by <em>NULL</em> in Javascript?',
        answer: 'The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object',
        flipped: false,    
    },
    {
        id: 8,
        question: 'What are all the types of Pop up boxes available in JavaScript?',
        answer: 'Alert(), Confirm() and Prompt()',
        flipped: false,        
    },
    {
        id: 9,
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        flipped: false,    
    },
    {
        id: 10,
        question: 'What is HTML?',
        answer: 'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.',
        flipped: false,        
    },
    {
        id: 11,
        question: 'What is the use of Canvas element?',
        answer: 'The canvas element helps to build charts, graphs, bypass Photoshop to create 2D images and place them directly into HTML5 code',
        flipped: false,         
    }
];





