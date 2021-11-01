function getSizeValue(){
    var selectedValue = document.getElementById("size").value;
    return parseInt (selectedValue);
}
function getSizeValue(){
    var selectedType = document.getElementById("type").value;
    return parseInt (selectedType);
}
function getSizeValue(){
    var selectedCrust = document.getElementById("crust").value;
    return parseInt (selectedCrust);
}
function getSizeValue(){
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt (selectedToppings);
}

function getTotalAmount(){
    var totalAmount = (getSizeValue() + getCrust() + getToppings()); 
    alert("You have Ordered" + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
}