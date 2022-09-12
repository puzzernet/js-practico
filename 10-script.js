const h1 = document.querySelector("h1"); // Selecciona solo el primer <h1>
const h1_all = document.querySelectorAll("h1"); // Selecciona todos los <h1> y los devuelve en una lista
const p = document.querySelector("p"); // Selecciona solo el primer Parrafo <p> 
const p_all = document.querySelectorAll("p"); // Selecciona todos los Parrafos <p>  y los devuelve en una lista
const parrafo1 = document.querySelector(".parrafo1"); // Selecciona el primer elemento que tenga asignado el Class = "parrafo1"
const parrafo1_b = document.getElementsByClassName("parrafo1"); // Selleciona todos los elementos que tengan asignados el Class = "parrafo1"
const parrafo2 = document.querySelector("#parrafo2"); // Recoge el elemento con el atributo ID
const parrafo2_b = document.getElementById("#parrafo2"); // Recoge el elemento con el atributo ID
const input = document.querySelector("input");

//Imprime solo el elemento (input) y su propiedad (value) seleccionadas
console.log(input.value);

//Imprimimos como un objeto para ver todas las propiedades de cada elelemnto
console.log({
    h1,
    h1_all,
    p,
    p_all,
    parrafo1,
    parrafo1_b,
    parrafo2,
    input
});