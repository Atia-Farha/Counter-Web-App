const display = document.getElementById("display");
const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const popUp1 = document.getElementById("popUp1");
const popUp2 = document.getElementById("popUp2");
const popUp3 = document.getElementById("popUp3");
let counterValue = 0;

// Track the state of keys (pressed or not)
let keyPressed = { 
    Space: false, 
    Backspace: false, 
    Enter: false, 
    ArrowUp: false, 
    ArrowDown: false,
    s: false, // for increase
    a: false  // for decrease
};

// Load the counter value from localStorage when the page is loaded
const storedCounterValue = localStorage.getItem("counterValue");
if (storedCounterValue) {
    counterValue = parseInt(storedCounterValue, 10);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = counterValue;

    if (counterValue > 0) {
        reset.classList.add("show");
    } else {
        reset.classList.remove("show");
    }

    // Save the counter value to localStorage whenever it changes
    localStorage.setItem("counterValue", counterValue);
}

increase.addEventListener("click", () => {
    counterValue++;
    updateDisplay();

    popUp1.classList.add("show");
    popUp2.classList.remove("show");
    popUp3.classList.remove("show");

    setTimeout(() => popUp1.classList.remove("show"), 2000);
});

decrease.addEventListener("click", () => {
    if (counterValue > 0) {
        counterValue--;
        updateDisplay();

        popUp2.classList.add("show");
        popUp1.classList.remove("show");
        popUp3.classList.remove("show");

        setTimeout(() => popUp2.classList.remove("show"), 2000);
    }
});

reset.addEventListener("click", () => {
    counterValue = 0;
    updateDisplay();

    popUp3.classList.add("show");
    popUp1.classList.remove("show");
    popUp2.classList.remove("show");

    setTimeout(() => popUp3.classList.remove("show"), 2000);
});

// Keyboard shortcuts
document.addEventListener("keydown", (event) => {
    // Disable default behavior for arrow keys (scrolling)
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
        event.preventDefault();
    }

    if (event.code === "Space" && !keyPressed.Space) {
        keyPressed.Space = true; // Mark Space as pressed
        increase.click();
    } else if (event.code === "Backspace" && !keyPressed.Backspace) {
        keyPressed.Backspace = true; // Mark Backspace as pressed
        decrease.click();
    } else if (event.code === "Enter" && !keyPressed.Enter) {
        keyPressed.Enter = true; // Mark Enter as pressed
        reset.click();
    } else if (event.code === "ArrowUp" && !keyPressed.ArrowUp) {
        keyPressed.ArrowUp = true; // Mark ArrowUp as pressed
        increase.click();
    } else if (event.code === "ArrowDown" && !keyPressed.ArrowDown) {
        keyPressed.ArrowDown = true; // Mark ArrowDown as pressed
        decrease.click();
    } else if (event.key === "s" && !keyPressed.s) {
        keyPressed.s = true; // Mark "s" as pressed
        increase.click();
    } else if (event.key === "a" && !keyPressed.a) {
        keyPressed.a = true; // Mark "a" as pressed
        decrease.click();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        keyPressed.Space = false; // Reset Space to not pressed
    } else if (event.code === "Backspace") {
        keyPressed.Backspace = false; // Reset Backspace to not pressed
    } else if (event.code === "Enter") {
        keyPressed.Enter = false; // Reset Enter to not pressed
    } else if (event.code === "ArrowUp") {
        keyPressed.ArrowUp = false; // Reset ArrowUp to not pressed
    } else if (event.code === "ArrowDown") {
        keyPressed.ArrowDown = false; // Reset ArrowDown to not pressed
    } else if (event.key === "s") {
        keyPressed.s = false; // Reset "s" to not pressed
    } else if (event.key === "a") {
        keyPressed.a = false; // Reset "a" to not pressed
    }
});
