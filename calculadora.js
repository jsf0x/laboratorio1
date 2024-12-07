// Función para realizar operaciones matemáticas
function realizarOperacion() {
    // Obtener los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('operation').value;
    let resultDiv = document.getElementById('result');

    // Comprobamos que los números son válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = "Por favor, ingrese valores válidos para los números.";
        return;
    }

    // Realizar la operación según la elección
    let resultado;
    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            resultDiv.innerHTML = "Error: No se puede dividir por cero.";
            return;
        }
        resultado = num1 / num2;
    } else {
        resultDiv.innerHTML = "Operación no válida.";
        return;
    }

    // Mostrar el resultado de la operación
    resultDiv.innerHTML = `El resultado es: ${resultado}`;
}

// Función para reiniciar el formulario y los resultados
function resetForm() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operation').value = 'suma';
    document.getElementById('result').innerHTML = '';
}