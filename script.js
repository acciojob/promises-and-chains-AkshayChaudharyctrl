//your JS code here. If required.
/your JS code here. If required.
var nameElement = document.querySelector("#name");
var ageElement = document.querySelector("#age");
var btnElement = document.querySelector("#btn");

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var age = ageElement.value;
    var name = nameElement.value;
   var age = ageElement.value;
    var name = nameElement.value;
   if (!(age && name)) {
     alert("Please enter valid details");
   }
    return;
    if (age < 18) {
      reject(`Oh sorry ${name}. You aren't old enough`);
    } else {
      resolve(`Welcome, ${name}. You can vote.`);
    }
  }, 4000);
});


function callPromise() {
   delayPromise
    .then((data) => {
      alert(`Welcome, ${data.name}. You can vote.`);
    })
    .catch((error) => {
      alert(`Oh sorry ${error.name}. You aren't old enough.`);
    });
}
function handleSubmit(e) {
    e.preventDefault();
  callPromise().then(alert).catch(alert);
}

btnElement.addEventListener("click", handleSubmit);