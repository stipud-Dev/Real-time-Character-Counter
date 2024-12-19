const characterInput = document.getElementById('characterInput');
const total = document.getElementById('total');
let totalCount = total.textContent;
const remaining = document.getElementById('remaining');
let remainingCount = remaining.textContent;

characterInput.addEventListener('input', (e) => {
    let userInput = e.target.value.length;
    total.textContent = userInput;
    remaining.textContent = remainingCount - userInput;
});