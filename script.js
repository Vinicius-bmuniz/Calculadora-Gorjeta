function calculateTip(event) {
  event.preventDefault();

  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let peopleNumber = document.getElementById("peopleNumber").value;

  if (bill == "" || service == "0") {
    alert("preencha os valores!");
    return;
  }

  if (service == 0) {
    document.getElementById("eachTip").style.display = "none";
    document.getElementById("showTotalTip").style.display = "none";
    document.getElementById("noTip").style.display = "block";

    document.getElementById("result").style.display = "block";
    return;
  }

  let total = bill * service;
  total = total.toFixed(2);

  let cada = total / peopleNumber;
  cada = cada.toFixed(2);

  document.getElementById("totalTip").innerHTML = total;
  document.getElementById("each").innerHTML = cada;

  if (peopleNumber == "" || peopleNumber <= 1) {
    peopleNumber = 1;
    document.getElementById("eachTip").style.display = "none";
    document.getElementById("noTip").style.display = "none";
    document.getElementById("showTotalTip").style.display = "block";
    
    document.getElementById("result").style.display = "block";
  } else {
    document.getElementById("eachTip").style.display = "block";
    document.getElementById("noTip").style.display = "none";

    document.getElementById("result").style.display = "block";

  }
}

document.getElementById("result").style.display = "none";
document.getElementById("formId").addEventListener("submit", calculateTip);
