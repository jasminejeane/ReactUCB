const classmates = ["Christian", "CJ", "Tammer"];

const wrapper = document.getElementById("wrapper");

for (let i = 0; i < classmates.length; i++) {
  let classmate = classmates[i];
// so even tho classmate changes on each for loop it can still be a const
// same with button
  let button = document.createElement("button");
  button.innerHTML = "How many tacos did " + classmate + " eat?";

  button.addEventListener("click", function() {
    let tacoCount = i * 2;

    alert(classmate + " ate " + tacoCount + " tacos.");

    if (tacoCount > 3) {
      alert("That's a lot of tacos, " + classmate + ".\nTaco 'Bout Hungry!");
    }
  });

  wrapper.appendChild(button);
}

// 0
// 2
// 6
