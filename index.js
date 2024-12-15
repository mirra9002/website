let input1 = document.getElementById("input1");
input1.onkeyup = function(){
    console.log(input1.value);
    if(input1.value == "привет, козел")
    {
        input1.value = "привет, петя";
    }
}
