// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

appDiv.innerHTML = `<h1>JS Starter</h1>`;
var callback = function() {
  delete person.age;
  
  document.getElementById("tet").innerHTML =
  person.firstname + " is " + person.age + " years old.";
  console.log("Done!");
}
 window.x = (x, y) =>{
   var jj;
   let kk=null;
  console.log(jj+"......"+kk);
  // console.log(x * y);
  // console.log(x * y);

  
 }
window.newt= function() {

  document.getElementById("tet").innerHTML =
  person.firstname + " is " + person.age + " years old.";
  setTimeout(callback, 5000)
};
