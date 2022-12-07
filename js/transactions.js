
var list = document.getElementById('list2');
var availableBal = document.getElementById('availBalance');
var widthdraw = document.getElementById('withdraw-bttn');
var enteredAmount = document.getElementById('enteredAmount');
var deposit = document.getElementById('deposit-bttn');

//array of transactions
var fakeTransactions = [];

// class to make a transaction
class Transaction {
  constructor(date, description, type, amount){
    this.date = date;
    this.description = description;
    this.type = type;
    this.amount = amount;
  }
}

function loadData(){
  // calling the server
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //Use parse() method to convert JSON string to JSON object var
      let responseObj = JSON.parse(this.responseText);
      fakeTransactions = responseObj;
      displayList(fakeTransactions)
      availBalance(fakeTransactions)
    };
  };
  xmlhttp.open("GET", "http://localhost:3000/transactions", true);
  xmlhttp.send();
};

function displayList(fakeTransactions){
  for(var i = 0; i < fakeTransactions.length; i++){
    var Trans = document.createElement('div');
    let dateTrans = fakeTransactions[i].date;
    let descTrans = fakeTransactions[i].description;
    let typeTrans = fakeTransactions[i].type;
    let amountTrans = fakeTransactions[i].amount;
    Trans.innerHTML = `<p class = "transLine"><b>${typeTrans}</b> ${descTrans} $${amountTrans} (Nov: ${dateTrans}) <p>`;   
    list.appendChild(Trans);
  };
};


//function to get a date
const passedDays = (days, date = new Date()) =>{
  date.setDate(date.getDate() - days);
  date = date.getDate();
  return date;
}

function availBalance(fakeTransactions){
  var credit = [];
  var debit = [];
  var totalBalance = 0;
  var totalDebit = 0;
  var totalCredit = 0;
  //split off into debit and credit
  for(var i = 0; i < fakeTransactions.length; i++){
    if(fakeTransactions[i].type === "Credit" && credit.includes(fakeTransactions[i]) === false){
      credit.push(fakeTransactions[i]);
    }else if(fakeTransactions[i].type === "Debit" && debit.includes(fakeTransactions[i]) === false){
      debit.push(fakeTransactions[i]);
    }
  };
  //Get Total Credit
  totalCredit = credit.reduce((acc, cur)=>{
    return acc + cur.amount;
  },0);
  //Get Total Debit
  totalDebit = debit.reduce((acc, cur)=>{
    return acc + cur.amount;
  },0);
  //Get Balance
  totalBalance = totalCredit - totalDebit;
  //display Balance
  availableBal.textContent = `Available Balance
  -  $${totalBalance}`;
};


widthdraw.addEventListener('click',()=>{
  fakeTransactions.push(new Transaction(passedDays(0),"Widthraw", "Debit", parseInt(enteredAmount.value)));
  list.innerHTML="";
  displayList();
  availBalance();
});

deposit.addEventListener('click',()=>{
  fakeTransactions.push(new Transaction(passedDays(0),"Deposit", "Credit", parseInt(enteredAmount.value)));
  list.innerHTML="";
  displayList();
  availBalance();
});

window.onload = function(){
  loadData();
  //displayList();
};