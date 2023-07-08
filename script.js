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
    ) 