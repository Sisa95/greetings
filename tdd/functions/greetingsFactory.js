function greet(){

    var lowerCase, index, del, textArea;
    var counter = 0;
///////// error messages ////
    //var errorMsg = document.querySelector(".errorMsg").innerHTML = "Please  Select Language And Enter Name";



    var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    function greetName(textArea){

        lowerCase = textArea.toLowerCase();
        index = textArea.charAt(0).toUpperCase(); //Changing case format of the 1st character.
        del = lowerCase.slice(1)

        return textArea = index + del
    }

    //function getGreetName(){
    //    return textArea;
    //}

    function errorMsg(){
        if(greetName('') == ""){
            return "Please Enter Name"
        } 
    }

    function errorMsg2(){
        if(!checkedRadioBtn && greetName(textArea)){
            return "Please Select Language";
        }
    }

    return{
        greetName,
        errorMsg,
        errorMsg2,
    }

}