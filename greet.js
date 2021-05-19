var greetButton = document.querySelector(".btn");
var greeetCounter = document.querySelector(".counter");
var clearText = document.querySelector(".text");
var errorMsg = document.querySelector(".errorMsg");
var counter = 0;
var newObject = {};
let data = [];

let storeCounter;
var getCounter;

window.addEventListener("load", function(){
    getCounter = parseInt(localStorage.getItem("counter"))
    var coo = JSON.stringify(getCounter);
  
   if(coo == "null"){
    greeetCounter.innerHTML = 0
    return
   }
   console.log(coo)
    greeetCounter.innerHTML = coo;
})

function greet(){

    var textArea = document.querySelector(".text").value;
    
    let list = document.getElementById("myList");
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var language = checkedRadioBtn;

    var lowerCase = textArea.toLowerCase();
    var index = textArea.charAt(0).toUpperCase(); //Changing case format of the 1st character.
    var del = lowerCase.slice(1) //removing 1st character the name input

    textArea = index + del;


    if(!data.includes(textArea)){

        if(!language && textArea === ""){

            errorMsg.style.color = "red";
            document.querySelector(".text").style.border = "2px solid red"
            errorMsg.innerHTML = "Please  Select Language And Enter Name"
            greeetCounter.innerHTML = counter;
        
            setTimeout(function(){ 
                document.querySelector(".text").style.border = ""
                errorMsg.innerHTML = ""
            }, 1500);
            return
        } else if (!language){

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
        return;
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
             
            data.push(textArea)
            newObject = {...data}
           
            console.log(data)
            console.log(newObject)
            var jsObj = localStorage.setItem("name", JSON.stringify(newObject));
            console.log(jsObj)
           
            counter++;
            storeCounter = parseInt(localStorage.setItem("counter",counter))
            getCounter = parseInt(localStorage.getItem("counter"))
            var coo = JSON.stringify(getCounter);
           
            
            console.log(coo)
            greeetCounter.innerHTML = coo;
    
            if(language.value === "english"){
    
                clearText.value = ""
                list.innerHTML = "Hello," + textArea;
    
            } else if(language.value === "shona"){
            
                clearText.value = ""
                list.innerHTML = "Mhoro," + textArea;
                
            } else if(language.value === "zulu"){
    
                clearText.value = ""
                list.innerHTML = "Sawubona," + textArea;
            }
    
        } else if(data.includes(textArea)){
                
            if(language.value === "english"){

            clearText.value = ""
            list.innerHTML = "Hello," + textArea;

        } else if(language.value === "shona"){
        
            clearText.value = ""
            list.innerHTML = "Mhoro," + textArea;
            
        } else if(language.value === "zulu"){
            
            clearText.value = ""
            list.innerHTML = "Sawubona," + textArea;
        }
    }
}

function uncheck_ (){
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    checkedRadioBtn.checked = false;
}

window.localStorage.clear();

greetButton.addEventListener("click", greet)
greetButton.addEventListener("click", uncheck_)
document.querySelector(".btnClear").addEventListener("click", function(){
let list = document.getElementById("myList");
counter = 0;
localStorage['counter'] = counter;
 newObject = {};
data = [];
greeetCounter.innerHTML = 0;
list.innerHTML  = "";
    

})