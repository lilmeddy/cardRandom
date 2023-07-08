let random_number = Math.floor(Math.random() * 10000000000000);
  let myNetwork = document.getElementById("myNetwork");
  let myLoad = document.getElementById("myLoad");
  let myAmount = document.getElementById("myAmount");
  function myGen() {
    document.getElementById("number").textContent = random_number;
  }
  function load() {
    if (
      myLoad.value.startsWith("*556*") &&
      myLoad.value.endsWith("#") &&
      myLoad.value.includes(random_number) &&
      myNetwork.value === "mtn" &&
      myAmount.value != ""
    ) {
        alert("You have succesfully recharged Mtn " + myAmount.value);
      } else if (
        myLoad.value.startsWith("*123*") &&
        myLoad.value.endsWith("#") &&
        myLoad.value.includes(random_number) &&
        myNetwork.value === "glo" &&
        myAmount.value != ""
      ) {
        alert("You have succesfully recharged Glo " + myAmount.value);
      } else if (
        myLoad.value.startsWith("*444*") &&
        myLoad.value.endsWith("#") &&
        myLoad.value.includes(random_number) &&
        myNetwork.value === "airtel" &&
        myAmount.value != ""
      ) {
        alert("You have succesfully recharged Airtel " + myAmount.value);
      } else if (
        myLoad.value.startsWith("*222*") &&
        myLoad.value.endsWith("#") &&
        myLoad.value.includes(random_number) &&
        myNetwork.value === "mobile" &&
        myAmount.value != ""
      ) {
        alert("You have succesfully recharged 9Mobile " + myAmount.value);
      } else if (myLoad.value = "") {
        alert("please enter the recharge details");
      } else if (myNetwork.value === "") {
        alert("Please pick a Network of your choice");
      } else if (myAmount.value === "") {
        alert("please pick how much airtime you want to recharge");
      } else {
        alert("Try again");
        document.getElementById("number").innerHTML = "Airtime Number"
      }  
    }