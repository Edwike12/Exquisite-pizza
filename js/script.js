function getSizeValue(){
    var selectedValue = document.getElementById("size").value;
    return parseInt (selectedValue);
}
function getType(){
    var selectedType = document.getElementById("type").value;
    return parseInt (selectedType);
}
function getCrust(){
    var selectedCrust = document.getElementById("crust").value;
    return parseInt (selectedCrust);
}
function getToppings(){
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt (selectedToppings);
}

function getTotalAmount(){
    var totalAmount = (getSizeValue() + getCrust() + getToppings()); 
    alert("You have Ordered" + getType("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    prompt("enter your location")
    alert("You delivery fee is 150/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")
}