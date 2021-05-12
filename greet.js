var greetButton = document.querySelector(".btn");
var greeetCounter = document.querySelector(".counter");
var errorMsg = document.querySelector(".errorMsg");
var counter = 0;
var objData;



var parametr
if (localStorage['name']){
    parametr = JSON.parse(localStorage.getItem('name'))
}

function greet(){

    var textArea = document.querySelector(".text").value;
    let data = [] || parametr;
    let list = document.getElementById("myList");
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    if(checkedRadioBtn == null && textArea == ""){
            
        errorMsg.style.color = "red";
        document.querySelector(".text").style.border = "2px solid red"
        errorMsg.innerHTML = "Please  Select Language And Enter Name"

        setTimeout(function(){ 
            document.querySelector(".text").style.border = ""
            errorMsg.innerHTML = ""
        }, 1500);
        
        return;
    } else if (checkedRadioBtn){
        var language = checkedRadioBtn.value;

        if(textArea == ""){
            
            errorMsg.style.color = "red";
        document.querySelector(".text").style.border = "2px solid red"
        errorMsg.innerHTML = "Please Enter Name"

            setTimeout(function(){ 
                errorMsg.style.border = "";
                errorMsg.style.fontSize = "";
                errorMsg.innerHTML = "";
            }, 1000);
            
            return;
        }


        if(language === "english"){

            data.push(textArea)
            
            data.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = "Hello," + item;
            list.appendChild(li);
            counter++;
            greeetCounter.innerHTML = counter;
            objData = JSON.stringify(data);
            localStorage.setItem("name", objData)
            })
        } else if(language === "shona"){

            data.push(textArea)
        
            data.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = "Mhoro," + item;
            list.appendChild(li);
            counter++;
            greeetCounter.innerHTML = counter;
            })
        } else if(language === "zulu"){

            data.push(textArea)
        
            data.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = "Sawubona," + item;
            list.appendChild(li);
            counter++;
            greeetCounter.innerHTML = counter;
            })
        }
       

    }


    else if(textArea !== ""){

        document.querySelector(".language").style.color = "red"
        errorMsg.innerHTML = "Please select language"

        setTimeout(function(){ 
            document.querySelector(".text").style.color = ""
            document.querySelector(".language").style.color = ""
            errorMsg.innerHTML = ""
        }, 1500);
        
        return;
    }
    
}

greetButton.addEventListener("click", greet)