var greetButton = document.querySelector(".btn");
var greeetCounter = document.querySelector(".counter");
var clearText = document.querySelector(".text");
var errorMsg = document.querySelector(".errorMsg");
var newObject = {};

let storeCounter;
var objStore;
if(localStorage['name']){
     objStore = JSON.parse(localStorage.getItem('name'));
}
var greetInstance = greetings(objStore);

greeetCounter.innerHTML = greetInstance.Counter();
var checkedRadioBtn = document.querySelector("input[name='language']:checked");
var language = checkedRadioBtn
      
function greets(){

    var textArea = document.querySelector(".text").value;
    let list = document.getElementById("myList");
    
    if(checkedRadioBtn){
        list.style.background = "white"
        list.style.width = "55%"
        list.style.margin= "auto"
        list.style.fontSize = "1.3rem";
        list.innerHTML = greetInstance.greet(language.value, textArea );
        greeetCounter.innerHTML = greetInstance.pushNames(textArea);
        localStorage.setItem("name", JSON.stringify(greetInstance.dataList()));

        greeetCounter.innerHTML = greetInstance.Counter();   
    } 
    document.querySelector(".text").value = ""
    checkedRadioBtn.checked = false;
  
}

function errorMsg_(){
    errorMsg.style.color = "red";
    document.querySelector(".text").style.border = "2px solid red"
    errorMsg.innerHTML = greetInstance.errorMessages(language, textArea)

    setTimeout(function(){ 
        document.querySelector(".text").style.border = ""
        errorMsg.innerHTML = ""
    }, 3000);
    return
}

greetButton.addEventListener("click", greets)
greetButton.addEventListener("click", errorMsg_)
clear_ = document.querySelector(".btnClear").addEventListener("click", function(){
    let list = document.getElementById("myList");
    newObject = {};
    data = [];
    greeetCounter.innerHTML = 0;
    list.innerHTML  = "";
    localStorage.clear()
    location.reload()
})