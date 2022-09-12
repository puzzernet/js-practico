
//Variables Globales
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#pResult");
const formSuma = document.querySelector("#formSuma");

//Si se utiliza en el boton del formulario type="button"
//ya no se hace el llamado al evento submit del formulario --> formSuma
//formSuma.addEventListener("submit",sumarNumeros);//Llamando a la funcion fnBtnListener

//Se hace el llamado directamente el evento click del botón --> btn
btn.addEventListener("click",sumarNumeros);//Llamando a la funcion fnBtnListener

function sumarNumeros(evento){
    console.log({evento});
    //Si se utiliza en el boton del formulario type="button"
    //ya no es necesario utilizar el método preventDefault
    //// evento.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText="El resultado es: " + suma;
}
