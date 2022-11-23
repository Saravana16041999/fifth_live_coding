`use strict`;

const NameEl = document.getElementById(`Name`);
const testMarkEl = document.getElementById(`testMark`);
const PreFinalmarkEl = document.getElementById(`PreFinalmark`);
const finalMarkEl = document.getElementById(`finalMark`);
const submitEl = document.getElementById(`submit`);
const mainBox = document.getElementById("main");
const result = document.getElementById(`result`)

let times = 5 
let sum = 0
let studentprofile =[]

function displayUi(){
        
        newul = document.createElement('div');
        mainBox.classList.add('main')
        mainBox.appendChild(newul)
        newul.classList.add('ulel')
        liel = document.createElement('li')
        newul.appendChild(liel)
        studentprofile.forEach(elem =>{
            liel.innerHTML =`<p>Name ${elem.Name}</p>
            <p>Test Mark ${elem.testmark}</p>
            <p>preFinal Mark ${elem.prefinal}</p>
            <p>Finel Mark ${elem.finalMark}</p>
            <p>total Mark ${elem.total()}</p>`
            

        })
        times = times-1
    }



submitEl.addEventListener('click',()=>{
    if(NameEl !== '' || !testMarkEl || !PreFinalmarkEl || !finalMarkEl){
        if(times !== 0){
            let profile = {
                Name : NameEl.value,
                testmark : Number(testMarkEl.value),
                prefinal : Number(PreFinalmarkEl.value),
                finalMark : Number(finalMarkEl.value),
                total : function(){
                    return this.testmark + this.prefinal + this.finalMark
                }
            }
            studentprofile.push(profile)
            displayUi()

        }else{
            studentprofile.forEach(elem =>{
                if(elem.total() > sum){
                    sum = elem.total()
                    result.innerHTML = `<h1 class='result'>name ${elem.Name} and total ${sum} is the hight mark</h1> `
                }
            })

        }
        
    }else{
        alert('enter valide input')
    }
    // NameEl.value = null;
    // testMarkEl.value = null;
    // PreFinalmarkEl.value = null;
    // finalMarkEl.value = null;
})