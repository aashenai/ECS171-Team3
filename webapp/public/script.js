////////////////////////////////////////////////////////
//            USER INFO SUBMISSON
////////////////////////////////////////////////////////

const submitBton=document.getElementById("submit");
if(submitBton){
  submitBton.addEventListener("click", sendInfo);
  console.log("attatched submit button listener")
}

function sendInfo(){
  let firstname = document.querySelector("#firstname").value;
  let lastname = document.querySelector("#lastname").value;
  let gender = document.querySelector("#gender").value;
  let birthday = document.querySelector("#bday");
  let car = document.querySelector("#car").value;
  let property = document.querySelector("#property").value;
  let childnum = document.querySelector("#childnum");
  let income = document.querySelector("#income");
  let incomeType = document.querySelector("#incomeType").value;
  let eduLevel = document.querySelector("#eduLevel").value;
  let marital = document.querySelector("#marital_status").value;
  let livingType = document.querySelector("#living").value;
  let data = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    birthday: birthday,
    property: property,
    car: car,
    income: income,
    childnum: childnum,
    eduLevel: eduLevel,
    incomeType: incomeType,
    livingType:livingType,
    marital: marital
  }
  console.log(data);
  
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "/saveData");

  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.onloadend = function(e) {
    console.log(xmlhttp.responseText);
    window.location = "https://credit-app-new.glitch.me/result.html";
  }
  xmlhttp.send(JSON.stringify(data));
}


////////////////////////////////////////////////////////
//            RESULTS TABLE RETRIEVAL
////////////////////////////////////////////////////////

const resultsBton = document.getElementById("load_table");
if(resultsBton){
  resultsBton.addEventListener("click", getTable);
  console.log("attatched results button listener")
}

function getTable() {
  
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "/result");

  xmlhttp.setRequestHeader("Content-Type", "text/html; charset=UTF-8");

  xmlhttp.onloadend = function(e) {
    console.log(xmlhttp.responseText);
    
    let theDiv = document.getElementById("appli_record_tabl");
    let content = document.createTextNode(xmlhttp.responseText);
    theDiv.appendChild(content);     
  }
  
  console.log('sending response')
  xmlhttp.send();
    
};
