//const button = document.querySelector("button");


//for (const b in button){
    // button.addEventListener('click', changeText);
//}

const button1 = document.querySelector("button1");
button1.addEventListener('click', changeText);

//const button2= document.querySelector("button2");
const button2 = document.getElementbyId ("button 2");
button2.addEventListener ('click', changeItem);

const heading = document.querySelector("h1")

function changeText() {
   // alert('test successful!');
   const head = prompt("tell me something");
   heading.textContent = head;
}

function changeItem() {
    alert("test");
}
// const x = 'hello!';
// console.log(x)

//  const button = document.querySelector("button");
//   button.addEventListener('click', runFunction);

//  function runFunction() {
    // console.log("test");
    // const name = prompt ("please enter a name");  
   // button.textContent = `Player 1: s(name);          
// }