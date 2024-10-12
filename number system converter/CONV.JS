function convert() {
    const inputNumber = document.getElementById('inputNumber').value;
    const inputBase = parseInt(document.getElementById('inputBase').value);
    let result;
    // Convert input to decimal
    let decimalNumber;
    if (inputBase === 2) {
        decimalNumber = parseInt(inputNumber, 2);
    } else if (inputBase === 10) {
        decimalNumber = parseInt(inputNumber, 10);
    } else if (inputBase === 16) {
        decimalNumber = parseInt(inputNumber, 16);
    }
    // Convert decimal to other bases
    if (isNaN(decimalNumber)) {
        result = "Invalid number!";
    } else {
        result = `
            Binary: ${decimalNumber.toString(2)}<br>
            Decimal: ${decimalNumber}<br>
            Hexadecimal: ${decimalNumber.toString(16).toUpperCase()}
        `;
    }
    document.getElementById('result').innerHTML = result;
}