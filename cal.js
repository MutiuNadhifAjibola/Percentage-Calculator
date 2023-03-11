var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xiswhat%ofy');

form.addEventListener('submit', function (event) {
    if (!input1.value || !input2.value){
        alert("please enter values in the feild!");
    } else {
        var x = parseFloat(input1.value) ;
        var y = parseFloat(input2.value);
           
    var result = x/y ;
    var percntage = result * 100;
      resultField.innerText = "Answer: " + percntage + "%";
      event.preventDefault();

    }
        
});





















