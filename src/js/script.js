const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById("resetBtn");

const MIN_LIMIT = 0;
const MAX_LIMIT = 50000;

let incrementPressed = false;
let decrementPressed = false;
let resetPressed = false;

let counter = parseInt(localStorage.getItem('counter')) || 0;
counterDisplay.textContent = counter;

incrementBtn.addEventListener('click', () => {
    increment();
});

decrementBtn.addEventListener("click", () => {
    decrement();
});

resetBtn.addEventListener("click", () => {
    reset();
});

document.addEventListener('keydown', (event) => {
    if ((event.code === 'Space' || event.code === 'ArrowUp' || event.key === 'a') && !incrementPressed) {
        incrementPressed = true;
        increment();
    }

    if ((event.code === 'Backspace' || event.code === 'ArrowDown' || event.key === 's') && !decrementPressed) {
        decrementPressed = true;
        decrement();
    }

    if (event.code === 'Enter' && !resetPressed) {
        resetPressed = true;
        reset();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp' || event.key === 'a') {
        incrementPressed = false;
    }

    if (event.code === 'Backspace' || event.code === 'ArrowDown' || event.key === 's') {
        decrementPressed = false;
    }

    if (event.code === 'Enter') {
        resetPressed = false;
    }
});

function increment() {
    if (counter < MAX_LIMIT) {
        ++counter;
        updateDisplay();
    }
}

function decrement() {
    if (counter > MIN_LIMIT) {
        --counter;
        updateDisplay();
    }
}

function reset() {
    counter = 0;
    updateDisplay();
}

function updateDisplay() {
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter);
    updateBtn();
}

function updateBtn() {
    incrementBtn.disabled = counter >= MAX_LIMIT;
    decrementBtn.disabled = counter <= MIN_LIMIT;
    resetBtn.disabled = counter <= MIN_LIMIT;
}

updateBtn();