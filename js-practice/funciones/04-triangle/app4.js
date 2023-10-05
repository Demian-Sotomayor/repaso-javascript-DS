const calcularAreaTriangulo = (base, altura) => {
    let result1 = multiplicar(base, altura);
    let result2 = dividir(result1, 2);
    return result2;
}

console.log("El area del triangulo es: " + calcularAreaTriangulo(10, 5));