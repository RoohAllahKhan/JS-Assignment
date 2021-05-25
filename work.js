var productNames = [];
var totalUnits = [];
var costPerUnit = [];
var productList = [];
var productTotalPrice = [];
var counter = 0;
var totalBill = 0;
var alphaNumeric = /^[a-zA-Z ]+$/;
var prodName = document.getElementById("prodName");
var totalUnit = document.getElementById("totalProd");
var costPu = document.getElementById("prodCost");
var invoice = "";
function showMain(){
    var x = document.getElementById("mainPage");
    if(window.getComputedStyle(x).display === "none"){
        document.getElementById("mainPage").style.display = "block";
        document.getElementById("prodName").focus();
    }
    else{
        if(prodName.value.length == 0){
            alert("Enter the product Name!");
        }
        else if(totalUnit.value.length == 0){
            alert("Enter the no of Units!");
        }
        else if(costPu.value.length == 0){
            alert("Enter the Cost of per unit!");
        }
        else{
            if(prodName.value.match(alphaNumeric)){
                productNames[counter] = prodName.value;
                totalUnits[counter] = totalUnit.value;
                costPerUnit[counter] = costPu.value;
                productList.push({"productname": productNames[counter], "totalunits": totalUnits[counter], "costperunit": costPerUnit[counter]});
                counter++;
                prodName.value = "";
                totalUnit.value = "";
                costPu.value = "";
            }
            else {
                alert("Invalid product name");
                prodName.value = "";
                totalUnit.value = "";
                costPu.value = "";
            }
            }
    }
}
function calcBill(){
    var i;
    for(i = 0; i < productList.length; i++){
        productTotalPrice[i] = productList[i].totalunits * productList[i].costperunit;
        totalBill += productTotalPrice[i];
        console.log(productTotalPrice[i]);
    }
    console.log(totalBill);
    document.getElementById("result").innerHTML = "The Total Sum of Bill is: PKR "+totalBill+"/-";
    totalBill = 0;
}
function showProd(){
    var i;
    for( i = 0; i < productList.length; i++){
        console.log(productList[i].productname+" "+productList[i].totalunits+" "+productList[i].costperunit);
    }
}
function resetAll(){
    productNames = [];
    totalUnits = [];
    costPerUnit = [];
    productList = [];
    productTotalPrice = [];
    counter = 0;
    prodName.value = "";
    totalUnit.value = "";
    costPu.value = "";
    invoice = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("showBill").style.display = "none";
}
function showBill(){
    var i;
    document.getElementById("showBill").style.display = "table";
    invoice = "<tr><td>Product Name</td><td>Cost Per unit</td><td>Total No. of Products</td><td>Amount (PKR)</td></tr>";
    for(i = 0; i < productList.length; i++){
        productTotalPrice[i] = productList[i].totalunits * productList[i].costperunit;
        invoice += "<tr><td>"+productList[i].productname+"</td><td>"+productList[i].totalunits+"</td><td>"+productList[i].costperunit+
            "</td><td>"+productTotalPrice[i]+"</td>";
        totalBill += productTotalPrice[i];
    }
    invoice +="<tr><td colspan='3'>The total sum of bill is: "+"</td><td>"+totalBill+"/-</td></tr>";
    document.getElementById("showBill").innerHTML = invoice;
    if (totalBill > 0){document.getElementById("result").innerHTML = "The Total Sum of Bill is: PKR "+totalBill+"/-";}
    totalBill = 0;
}