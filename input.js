const b0 = document.querySelector(".button0");
const b1 = document.querySelector(".button1");
const b2 = document.querySelector(".button2");
const b3 = document.querySelector(".button3");
const b4 = document.querySelector(".button4");
const b5 = document.querySelector(".button5");
const b6 = document.querySelector(".button6");
const b7 = document.querySelector(".button7");
const b8 = document.querySelector(".button8");
const b9 = document.querySelector(".button9");
const bAdd = document.querySelector(".button_add");
const bSub = document.querySelector(".button_sub");
const bMul = document.querySelector(".button_mul");
const bDiv = document.querySelector(".button_div");
const bEqual = document.querySelector(".button_equal");

const textArea = document.querySelector(".output_interface");

let temporary = 0;
let total = 0;
let currentFlag = "none";
let initFlag = true;

b0.addEventListener("click", () => {
  temporary *= 10;
  showText(temporary);
});
b1.addEventListener("click", () => {
  temporary *= 10;
  temporary += 1;
  showText(temporary);
});
b2.addEventListener("click", () => {
  temporary *= 10;
  temporary += 2;
  showText(temporary);
});
b3.addEventListener("click", () => {
  temporary *= 10;
  temporary += 3;
  showText(temporary);
});
b4.addEventListener("click", () => {
  temporary *= 10;
  temporary += 4;
  showText(temporary);
});
b5.addEventListener("click", () => {
  temporary *= 10;
  temporary += 5;
  showText(temporary);
});
b6.addEventListener("click", () => {
  temporary *= 10;
  temporary += 6;
  showText(temporary);
});
b7.addEventListener("click", () => {
  temporary *= 10;
  temporary += 7;
  showText(temporary);
});
b8.addEventListener("click", () => {
  temporary *= 10;
  temporary += 8;
  showText(temporary);
});
b9.addEventListener("click", () => {
  temporary *= 10;
  temporary += 9;
  showText(temporary);
});

bAdd.addEventListener("click", () => {
  currentFlag = "add";
  if (initFlag) {
    total = temporary;
    temporary = 0;
    initFlag = false;
  }
});
bSub.addEventListener("click", () => {
  currentFlag = "sub";
  if (initFlag) {
    total = temporary;
    temporary = 0;
    initFlag = false;
  }
});
bMul.addEventListener("click", () => {
  currentFlag = "mul";
  if (initFlag) {
    total = temporary;
    temporary = 0;
    initFlag = false;
  }
});
bDiv.addEventListener("click", () => {
  currentFlag = "div";
  if (initFlag) {
    total = temporary;
    temporary = 0;
    initFlag = false;
  }
});
bEqual.addEventListener("click", () => {
  switch (currentFlag) {
    case "add": {
      total += temporary;

      break;
    }
    case "sub": {
      total -= temporary;

      break;
    }
    case "mul": {
      total *= temporary;

      break;
    }
    case "div": {
      if (temporary === 0) {
        showText("Error!");
        total = 0;
        initFlag = true;
        currentFlag = "none";
      } else {
        total = Math.round(total / Number.parseFloat(temporary));
      }

      break;
    }
    // No default
  }
  if (currentFlag !== "none") {
    showText(total);
  }
  temporary = 0;
  currentFlag = "none";
  initFlag = total === 0 ? true : false;
});

const keyboard = document.querySelector(".keyboard");

keyboard.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0": {
      temporary *= 10;
      showText(temporary);

      break;
    }
    case "1": {
      temporary *= 10;
      temporary += 1;
      showText(temporary);

      break;
    }
    case "2": {
      temporary *= 10;
      temporary += 2;
      showText(temporary);

      break;
    }
    case "3": {
      temporary *= 10;
      temporary += 3;
      showText(temporary);

      break;
    }
    case "4": {
      temporary *= 10;
      temporary += 4;
      showText(temporary);

      break;
    }
    case "5": {
      temporary *= 10;
      temporary += 5;
      showText(temporary);

      break;
    }
    case "6": {
      temporary *= 10;
      temporary += 6;
      showText(temporary);

      break;
    }
    case "7": {
      temporary *= 10;
      temporary += 7;
      showText(temporary);

      break;
    }
    case "8": {
      temporary *= 10;
      temporary += 8;
      showText(temporary);

      break;
    }
    case "9": {
      temporary *= 10;
      temporary += 9;
      showText(temporary);

      break;
    }
    case "+": {
      currentFlag = "add";
      if (initFlag) {
        total = temporary;
        temporary = 0;
        initFlag = false;
      }

      break;
    }
    case "-": {
      currentFlag = "sub";
      if (initFlag) {
        total = temporary;
        temporary = 0;
        initFlag = false;
      }

      break;
    }
    case "*": {
      currentFlag = "mul";
      if (initFlag) {
        total = temporary;
        temporary = 0;
        initFlag = false;
      }

      break;
    }
    case "/":
    case "%": {
      currentFlag = "div";
      if (initFlag) {
        total = temporary;
        temporary = 0;
        initFlag = false;
      }

      break;
    }
    case "=":
    case "Enter": {
      switch (currentFlag) {
        case "add": {
          total += temporary;

          break;
        }
        case "sub": {
          total -= temporary;

          break;
        }
        case "mul": {
          total *= temporary;

          break;
        }
        case "div": {
          if (temporary === 0) {
            showText("Error!");
            total = 0;
            initFlag = true;
            currentFlag = "none";
          } else {
            total = Math.round(total / Number.parseFloat(temporary));
          }

          break;
        }
        // No default
      }
      if (currentFlag !== "none") {
        showText(total);
      }
      temporary = 0;
      currentFlag = "none";
      initFlag = total === 0 ? true : false;

      break;
    }
    // No default
  }
});

const showText = (output) => {
  textArea.value = `${output}`;
};
