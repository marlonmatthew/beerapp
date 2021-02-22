document.getElementById("age").addEventListener("click", myFunction);

function myFunction() {
  const bdayInput = document.getElementById("bday").value;
  // const approvedAge = new Date(Date.now());
  console.log(bdayInput);
  console.log(Date.now());
  // window.location.href = "/index";
  console.log("this is a test");
}
