addEventListener("DOMContentLoaded", (e) => {
    let calculo = document.querySelector("#taller5");
    let sumar = 0;
    calculo.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = document.querySelector("#numero").value;
        if (numero > 0) {
            sumar += Number(numero);
            calculo.reset();
            document.querySelector("#resultado").innerHTML = `El resultado de la suma es ${sumar}`;

        } else {
            alert("Los numeros tienen que ser positivos");
            sumar = 0;
            document.querySelector("#resultado").innerHTML = ``;
            calculo.reset();
        }
    }
    )

}
)
let limpiar = (e) => {
    document.querySelector("#taller5").reset()
    document.querySelector("#resultado").innerHTML = ``;
}

addEventListener('reset', limpiar);