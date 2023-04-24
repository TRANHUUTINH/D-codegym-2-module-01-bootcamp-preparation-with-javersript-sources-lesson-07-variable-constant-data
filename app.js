function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "VND" && To =="USD"){
        Result = "Result: " + (Amount / 23000) + " $";
    }
    else if (FromC == "VND" && To == "JPY"){
        Result = "Result: " + (Amount / 172.54) + " 円";
    }
    else if (FromC == "VND" && To == "CNY"){
        Result = "Result: " + (Amount / 3.577) + " CND";
    }
    else if (FromC == "JPY" && To == "VND"){
        Result = "Result: " + (Amount * 172.54) + " Đ";
    }
    else if (FromC == "USD" && To == "JPY"){
        Result = "Result: " + (Amount * 137.58) + " 円";
    }
    else if (FromC == "JPY" && To == "USD"){
        Result = "Result: " + (Amount / 137.58) + " $";
    }
    else if (FromC == "CND" && To == "VND"){
        Result = "Result: " + (Amount * 3.577) + " Đ";
    }
    else if (FromC == "CND" && To == "USD"){
        Result = "Result: " + (Amount *0.000043) + " $";
    }
    else if (FromC == "CND" && To == "JPY"){
        Result = "Result: " + (Amount * 0.0057) + " 円";
    }
    else if (FromC == "JPY" && To == "CND"){
        Result = "Result: " + (Amount / 0.0057) + " CND";
    }
    else if (FromC == "USD" && To == "CND"){
        Result = "Result: " + (Amount / 0.00043) + " 円";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } 
    else if (FromC == "USD"){
        Result = "Result: " + Amount + " $"
    }
    else if (FromC == "JPY") {
        Result = "Result: " + Amount + " 円"
    }else{
        Result = "Result: " + Amount + " CNY" 
    }
        
    document.getElementById("Result").innerHTML = Result;
}
