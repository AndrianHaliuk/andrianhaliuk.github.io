const input = document.getElementById('numberInput');

input.addEventListener('blur', () => {
    const value = parseInt(input.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 100) {
        input.classList.add('green');
        input.classList.remove('red');
    } else {
        input.classList.add('red');
        input.classList.remove('green');
    }
});
