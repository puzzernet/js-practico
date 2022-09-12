//Variables Globales
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#pResult");

//Llamando a la una funcion con eventos desd el html
function fnCambiaCaja(id){
    console.log("cambio de valor la caja cuyo id es: " + id);
}
function fnClickBtn(){
    console.log("Se dió clic en el boton");
}

//Agregando evento al selector mediante addEventListener
input1.addEventListener("change",function(){
    //console.log("cambio de valor la caja cuyo id es: Calculo1");
})
input2.addEventListener("change",function(){
    //console.log("cambio de valor la caja cuyo id es: Calculo2");
})
btn.addEventListener("click",function(){
    //console.log("Se dió clic en el boton");    
    console.log(input1.value + input2.value);//Concatena
    console.log(Number(input1.value) + Number(input2.value));//Suma los Valores

    //Variable local "suma"
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText="El resultado es: " + suma;
});
