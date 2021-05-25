var greetButton = document.querySelector(".btn");
var greeetCounter = document.querySelector(".counter");
var clearText = document.querySelector(".text");
var errorMsg = document.querySelector(".errorMsg");
// var counter = 0;
var newObject = {};

let storeCounter;
// var getCounter;
 var objStore;
if(localStorage['name']){
     objStore = JSON.parse(localStorage.getItem('name'));
}
var greetInstance = greetings(objStore);

   greeetCounter.innerHTML = greetInstance.Counter();   

   
   
// })

function greets(){

    var textArea = document.querySelector(".text").value;
    
    let list = document.getElementById("myList");
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var language = checkedRadioBtn;


    if(checkedRadioBtn === null && textArea === ""){
        alert("11")
        errorMsg.style.color = "red";
        document.querySelector(".text").style.border = "2px solid red"
        errorMsg.innerHTML = greetInstance.errorMessages(language, textArea)
    
        setTimeout(function(){ 
            document.querySelector(".text").style.border = ""
            errorMsg.innerHTML = ""
        }, 3000);
        return
    } else if (checkedRadioBtn === null){
    
    errorMsg.style.color = "red";
    document.querySelector(".text").style.border = "2px solid red"
    errorMsg.innerHTML = "Please Select Language"
    greeetCounter.innerHTML = counter;
    
        setTimeout(function(){ 
            errorMsg.style.border = "";
            errorMsg.style.fontSize = "";
            errorMsg.innerHTML = "";
            document.querySelector(".text").style.border = ""
        }, 1000);
    } 
    
    if(textArea === ""){
        
        errorMsg.style.color = "red";
        document.querySelector(".text").style.border = "2px solid red"
        errorMsg.innerHTML = "Please Enter Name"
        greeetCounter.innerHTML = counter;
    
            setTimeout(function(){ 
                errorMsg.style.border = "";
                errorMsg.style.fontSize = "";
                errorMsg.innerHTML = "";
                document.querySelector(".text").style.border = ""
            }, 1000);
            return
        }
    


    if(checkedRadioBtn){

        list.innerHTML = greetInstance.greet(language.value, textArea );
        greeetCounter.innerHTML = greetInstance.pushNames(textArea);
        localStorage.setItem("name", JSON.stringify(greetInstance.dataList()));
        // localStorage.setItem("counter ", JSON.stringify( greetInstance.Counter()));


        greeetCounter.innerHTML = greetInstance.Counter();   
    } 

    textArea = ""
}

function uncheck_ (){
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    checkedRadioBtn;
}

//window.localStorage.clear();

greetButton.addEventListener("click", greets)
greetButton.addEventListener("click", uncheck_)
document.querySelector(".btnClear").addEventListener("click", function(){
let list = document.getElementById("myList");
// counter = 0;
// localStorage['counter'] = counter;
 newObject = {};
data = [];
greeetCounter.innerHTML = 0;
list.innerHTML  = "";
localStorage.clear()
    location.reload()

})