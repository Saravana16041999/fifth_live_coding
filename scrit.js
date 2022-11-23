`use strict`;

const Name = document.getElementById(`Name`);
const testMarkEl = document.getElementById(`testMark`);
const PreFinalmarkEl = document.getElementById(`PreFinalmark`);
const finalMarkEl = document.getElementById(`finalMark`);
const submitEl = document.getElementById(`submit`);
const mainBox = document.getElementById("main");

sum = 5

function displaystudentname(){
        ulEl = document.createElement('div');
        mainBox.classList.add('main')
        mainBox.appendChild(ulEl)
        ulEl.classList.add('ulel')
    ulEl.innerHTML = `<p>name; ${Name.value}</p><samp>avrage 12</samp>`
    sum = sum -1 ;
}

submitEl.addEventListener("click", () => {
    if(sum !== 0){
        displaystudentname()
    }
});