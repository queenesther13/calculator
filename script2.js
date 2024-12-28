let balance = 0;
function updateBalance(){
    document.getElementById("balance").textContent = balance;
}
function makeTransaction(type){
    let name = document.getElementById("userName").value;
    let description = document.getElementById("description").value;
    let amount = parseFloat(document.getElementById("amount").value);
    if(!name||!description||isNaN(amount)||amount<=0){
        alert("Please fill out all fields correctly.");
        return;
    }
    if(type==="debit"){
        if(balance>=amount){
            balance-=amount;
            alert(${name},you have debited $${amount}.Description:${description});
        }
        else{
            alert("Insufficient balance for deit!");
        }
    }
    else if(type==="credit"){
        balance+=amount;
        alert(${name},you have debited $${amount}.Description:${description});
    }
    updateBalance();
}
function addTransaction(){
    let name = document.getElementById("userName").value;
    let description = document.getElementById("description").value;
    let amount = parseFloat(document.getElementById("amount").value);
    if(!name||!description||isNaN(amount)||amount<=0){
        alert("Please fill out all fields correctly.");
        return;
    }
    alert(Transaction added: ${description}for $${amount} by $ {name});
}