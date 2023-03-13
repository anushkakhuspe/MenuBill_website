//declaration of variable and an array
var s1 = document.getElementById("s1");
var data = [];
//pushing the val, number and price 
data.push({ val: 0, name: "Vegetable Samosa", price: 60 });
data.push({ val: 1, name: " Veg Manchurian ", price: 90 });
data.push({ val: 2, name: " Pani Puri ", price: 20 });
data.push({ val: 3, name: " Paneer chilly ", price: 120 });
data.push({ val: 4, name: "Corn cheese ball", price: 100 });
data.push({ val: 5, name: "Grilled Sandwich", price: 80 });
for (var i = 0; i < 6; i++) //adding to list
 {
    //declaration of variable option
    var option = document.createElement("option");
    option.text = data[i].name;
    option.value = data[i].val.toString();
    s1.add(option);
}
//function to calculate total bill
var serial_no; //to display serial no. in bill
serial_no = 0; //initialisation of serial_no with zero
var total_bill;
total_bill = 0;
//function to calculate total bill
function calc() {
    var selectedoption = document.getElementById("s1");
    var quantity = parseInt(document.getElementById("n1").value);
    if (!isNaN(quantity) && quantity > 0) //exception handling
     {
        var price1;
        var name1;
        for (i = 0; i < 6; i++) {
            if (data[i].val.toString() == selectedoption.value) //check the condition for the selected option
             {
                name1 = data[i].name;
                price1 = data[i].price;
                var total;
                total = price1 * quantity;
                serial_no++;
                if (serial_no > 6) {
                    alert("Only 6 items are available!"); //alert for selection exceeding the number of list-items
                    break;
                }
                //display
                document.getElementById("answer").innerHTML += "--Sr no.: " + serial_no + "----Item name: " + name1 + "----Quantity: " + quantity + "----Total price: " + total.toString() + "--<br>";
                total_bill += total; //calculate the total bill 
            }
        }
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML += "Total bill is " + total_bill.toString(); //display total bill
    }
    else {
        alert("Input must be a natural number!"); //alert to enter natural numbers
    }
}
//# sourceMappingURL=bill.js.map