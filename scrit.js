`use strict`;

const Name = document.getElementById(`Name`);
const testMarkEl = document.getElementById(`testMark`);
const PreFinalmarkEl = document.getElementById(`PreFinalmark`);
const finalMarkEl = document.getElementById(`finalMark`);
const submitEl = document.getElementById(`submit`);
const mainBox = document.getElementById("main");

sum = 5


let newmark = []

function displaystudentname(){
        ulEl = document.createElement('div');
        mainBox.classList.add('main')
        mainBox.appendChild(ulEl)
        ulEl.classList.add('ulel')
        let testavarage = Number(testMarkEl.value ) +  Number(PreFinalmarkEl.value ) + Number(finalMarkEl.value )
        total = Math.floor(testavarage / 10);
        newmark.push[total]
        ulEl.innerHTML = `<p>name; ${Name.value}</p><samp>avrage ${total}</samp>`
        sum = sum -1 ;
}
console.log(newmark)



submitEl.addEventListener("click", () => {
    if(sum !== 0){
        displaystudentname()
    }
});