let currentInput = '0';
        let previousInput = '';
        let operation = null;
        let resetInput = false;
        const display = document.getElementById('display');

        function updateDisplay() {
            display.textContent = parseFloat(currentInput).toLocaleString('en');
        }

        function appendNumber(number) {
            if (currentInput === '0' || resetInput) {
                currentInput = number;
                resetInput = false;
            } else {
                currentInput += number;
            }
            updateDisplay();
        }

        function appendDecimal() {
            if (resetInput) {
                currentInput = '0.';
                resetInput = false;
            } else if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            updateDisplay();
        }

        function toggleSign() {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay();
        }

        function appendOperator(op) {
            if (operation !== null) calculate();
            previousInput = currentInput;
            operation = op;
            resetInput = true;
        }

        function calculate() {
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            if (isNaN(prev) || isNaN(current)) return;

            let result;
            switch (operation) {
                case '+': result = prev + current; break;
                case '-': result = prev - current; break;
                case '*': result = prev * current; break;
                case '/': result = current !== 0 ? prev / current : 'Error'; break;
                default: return;
            }

            currentInput = result.toString();
            operation = null;
            resetInput = true;
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '0';
            previousInput = '';
            operation = null;
            updateDisplay();
        }

        function clearEntry() {
            currentInput = '0';
            updateDisplay();
        }

        function backspace() {
            if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
                currentInput = '0';
            } else {
                currentInput = currentInput.slice(0, -1);
            }
            updateDisplay();
        }