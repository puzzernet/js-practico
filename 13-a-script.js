
//Variables Globales
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#pResult");
const formSuma = document.querySelector("#formSuma");

formSuma.addEventListener("submit",sumarNumeros);//Llamando a la funcion fnBtnListener

function sumarNumeros(evento){
    console.log({evento});//Mostramos en consola que elementos tiene este evento
    evento.preventDefault();
    //Llamar a preventDefault en cualquier momento durante la ejecución, 
    //cancela el evento (Recargar la página que es lo normal que realiza un formulario),
    //lo que significa que cualquier acción por defecto que deba producirse (Recargar la página)
    //como resultado de este evento (onSubmit), no ocurrirá.
    //Para este caso ocurrirá el evento onSubmit del formulario 
    // pero no va a recargar la página, si quitas el preventDefault verás que al 
    //pulsar el botón "calcular" se recargará la página.
    //si vemos en la consola las propiedades del evento,
    //la propiedad defaultPrevented estará en True
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText="El resultado es: " + suma;
}
