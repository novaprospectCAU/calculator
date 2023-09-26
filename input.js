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

let temp = 0;
let total = 0;
let currentFlag = "none";
let initFlag = true;

b0.addEventListener("click", () => {
  temp *= 10;
  showText(temp);
});
b1.addEventListener("click", () => {
  temp *= 10;
  temp += 1;
  showText(temp);
});
b2.addEventListener("click", () => {
  temp *= 10;
  temp += 2;
  showText(temp);
});
b3.addEventListener("click", () => {
  temp *= 10;
  temp += 3;
  showText(temp);
});
b4.addEventListener("click", () => {
  temp *= 10;
  temp += 4;
  showText(temp);
});
b5.addEventListener("click", () => {
  temp *= 10;
  temp += 5;
  showText(temp);
});
b6.addEventListener("click", () => {
  temp *= 10;
  temp += 6;
  showText(temp);
});
b7.addEventListener("click", () => {
  temp *= 10;
  temp += 7;
  showText(temp);
});
b8.addEventListener("click", () => {
  temp *= 10;
  temp += 8;
  showText(temp);
});
b9.addEventListener("click", () => {
  temp *= 10;
  temp += 9;
  showText(temp);
});

bAdd.addEventListener("click", () => {
  currentFlag = "add";
  if (initFlag === true) {
    total = temp;
    temp = 0;
    initFlag = false;
  }
});
bSub.addEventListener("click", () => {
  currentFlag = "sub";
  if (initFlag === true) {
    total = temp;
    temp = 0;
    initFlag = false;
  }
});
bMul.addEventListener("click", () => {
  currentFlag = "mul";
  if (initFlag === true) {
    total = temp;
    temp = 0;
    initFlag = false;
  }
});
bDiv.addEventListener("click", () => {
  currentFlag = "div";
  if (initFlag === true) {
    total = temp;
    temp = 0;
    initFlag = false;
  }
});
bEqual.addEventListener("click", () => {
  if (currentFlag === "add") {
    total += temp;
  } else if (currentFlag === "sub") {
    total -= temp;
  } else if (currentFlag === "mul") {
    total *= temp;
  } else if (currentFlag === "div") {
    if (temp === 0) {
      showText("Error!");
      total = 0;
      initFlag = true;
      currentFlag = "none";
    } else {
      total = Math.round(total / Number.parseFloat(temp));
    }
  }
  if (currentFlag !== "none") {
    showText(total);
  }
  temp = 0;
  currentFlag = "none";
  if (total === 0) {
    initFlag = true;
  } else {
    initFlag = false;
  }
});

const keyboard = document.querySelector(".keyboard");

keyboard.addEventListener("keydown", (e) => {
  if (e.key === "0") {
    temp *= 10;
    showText(temp);
  } else if (e.key === "1") {
    temp *= 10;
    temp += 1;
    showText(temp);
  } else if (e.key === "2") {
    temp *= 10;
    temp += 2;
    showText(temp);
  } else if (e.key === "3") {
    temp *= 10;
    temp += 3;
    showText(temp);
  } else if (e.key === "4") {
    temp *= 10;
    temp += 4;
    showText(temp);
  } else if (e.key === "5") {
    temp *= 10;
    temp += 5;
    showText(temp);
  } else if (e.key === "6") {
    temp *= 10;
    temp += 6;
    showText(temp);
  } else if (e.key === "7") {
    temp *= 10;
    temp += 7;
    showText(temp);
  } else if (e.key === "8") {
    temp *= 10;
    temp += 8;
    showText(temp);
  } else if (e.key === "9") {
    temp *= 10;
    temp += 9;
    showText(temp);
  } else if (e.key === "+") {
    currentFlag = "add";
    if (initFlag === true) {
      total = temp;
      temp = 0;
      initFlag = false;
    }
  } else if (e.key === "-") {
    currentFlag = "sub";
    if (initFlag === true) {
      total = temp;
      temp = 0;
      initFlag = false;
    }
  } else if (e.key === "*") {
    currentFlag = "mul";
    if (initFlag === true) {
      total = temp;
      temp = 0;
      initFlag = false;
    }
  } else if (e.key === "/" || e.key === "%") {
    currentFlag = "div";
    if (initFlag === true) {
      total = temp;
      temp = 0;
      initFlag = false;
    }
  } else if (e.key === "=" || e.key === "Enter") {
    if (currentFlag === "add") {
      total += temp;
    } else if (currentFlag === "sub") {
      total -= temp;
    } else if (currentFlag === "mul") {
      total *= temp;
    } else if (currentFlag === "div") {
      if (temp === 0) {
        showText("Error!");
        total = 0;
        initFlag = true;
        currentFlag = "none";
      } else {
        total = Math.round(total / Number.parseFloat(temp));
      }
    }
    if (currentFlag !== "none") {
      showText(total);
    }
    temp = 0;
    currentFlag = "none";
    if (total === 0) {
      initFlag = true;
    } else {
      initFlag = false;
    }
  }
});

const showText = (output) => {
  textArea.value = `${output}`;
};
