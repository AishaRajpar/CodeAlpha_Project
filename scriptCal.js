const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ((key >= "0" && key <= "9") || "+-*/.".includes(key)) {
    currentInput += key;
  } else if (key === "Enter") {
    try {
      input = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (key === "Escape") {
    currentInput = "";
  }

  display.textContent = currentInput;
});
