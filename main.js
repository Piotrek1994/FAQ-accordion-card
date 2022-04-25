const arrows = document.querySelectorAll('.arrow')
const answer1 = document.querySelector('.answ1')
const answer2 = document.querySelector('.answ2')
const answer3 = document.querySelector('.answ3')
const answer4 = document.querySelector('.answ4')
const answer5 = document.querySelector('.answ5')

const question1 = document.querySelector('.quest1')
const question2 = document.querySelector('.quest2')
const question3 = document.querySelector('.quest3')
const question4 = document.querySelector('.quest4')
const question5 = document.querySelector('.quest5')

const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')
const arrow4 = document.querySelector('.arrow4')
const arrow5 = document.querySelector('.arrow5')




const showAnswer1 = () => {
    answer1.classList.toggle('show')
    question1.classList.toggle('font-weight')
    arrow1.classList.toggle('rotate')
}
const showAnswer2 = () => {
    answer2.classList.toggle('show')
    question2.classList.toggle('font-weight')
    arrow2.classList.toggle('rotate')
}
const showAnswer3 = () => {
    answer3.classList.toggle('show')
    question3.classList.toggle('font-weight')
    arrow3.classList.toggle('rotate')
}
const showAnswer4 = () => {
    answer4.classList.toggle('show')
    question4.classList.toggle('font-weight')
    arrow4.classList.toggle('rotate')
}
const showAnswer5 = () => {
    answer5.classList.toggle('show')
    question5.classList.toggle('font-weight')
    arrow5.classList.toggle('rotate')
}




arrow1.addEventListener('click', showAnswer1)
arrow2.addEventListener('click', showAnswer2)
arrow3.addEventListener('click', showAnswer3)
arrow4.addEventListener('click', showAnswer4)
arrow5.addEventListener('click', showAnswer5)















