
//start
let start = document.querySelector('#start');
start.addEventListener("click",()=>{
    let firstPatApp = document.querySelector('#firstPatApp');
    firstPatApp.style.display = "block";
})

//App
let canasto = 100;
let inputSubtract = document.querySelector("#input-1");
let btnSubtract = document.querySelector('#restar');
let firstResult = document.querySelector('.firstResult');

let lastinput21 = document.querySelector('#last-input');
let add = document.querySelector('#add');
let lastResult = document.querySelector('.lastResult');

let LastpartApp = document.querySelector('.Last-part-App');

let dateShow = document.querySelector('.date');
btnSubtract.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(inputSubtract.value == ""){
        alert("the file Age is empty");
        firstResult.innerHTML = `${"sorry!"}<br>${"you haven't"}<br> ${"subract your age"}`;
    }else{

        var result1 = canasto - parseInt(inputSubtract.value);
        firstResult.innerHTML = `${"now you've got "}<br>${result1}`;
        inputSubtract.value = "";
        LastpartApp.style.display = "block";
        dateShow.style.display = "flex";
    }
   

    
    //firstPatApp.style.display = "none";



    add.addEventListener("click",(e)=>{
        e.preventDefault();
        if(lastinput21.value == ""){
            alert("the file add 21 is empty");
            lastResult.textContent = `${"sorry!"}<br>${"you must add 21 to proceed"}`
        }
        date = result1 + parseInt(lastinput21.value);

        lastResult.textContent = date; 
        lastinput21.value = "";
})
  
});






//e.preventDefault();
  //      