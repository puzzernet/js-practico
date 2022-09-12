const h1 = document.querySelector("h1"); // Selecciona solo el primer <h1>
const h1_all = document.querySelectorAll("h1"); // Selecciona todos los <h1> y los devuelve en una lista
const p = document.querySelector("p"); // Selecciona solo el primer Parrafo <p> 
const p_all = document.querySelectorAll("p"); // Selecciona todos los Parrafos <p>  y los devuelve en una lista
const parrafo1 = document.querySelector(".parrafo1"); // Selecciona el primer elemento que tenga asignado el Class = "parrafo1"
const parrafo1_b = document.getElementsByClassName("parrafo1"); // Selleciona todos los elementos que tengan asignados el Class = "parrafo1"
const parrafo2 = document.querySelector("#parrafo2"); // Recoge el elemento con el atributo ID
const parrafo2_b = document.getElementById("parrafo2"); // Recoge el elemento con el atributo ID
const input = document.querySelector("input");

//Modificando DOM para el H1
//===================================
    //InnerText -> Soporta solo texto y si se escribe
    //              código HTML dentro transformará todo
    //              en String y no ejecutará el HTML.
    //              Evita inyeccion HTML Malicioso
    h1.innerText = "Este es un <br> nuevo título";

    //InnerHtml -> Soporta HTML y ejecuta el HTML
    h1.innerHTML = "Este es un <i>nuevo título</i>";

    //getAttribute -> Obteniendo el valor de un atributo
    console.log(h1.getAttribute("class")); // Imprimirá "tituloPrincipal"
    console.log(h1.getAttribute("id")); // Imprimirá "titulo"

    //setAttribute -> Setear o cambiar el valor de un atributo
    h1.setAttribute("class","tituloSecundario");// Si se verifica el inspeccionador de elementos se podrá notar el cambio
    h1.setAttribute("id","titulo80");

    //Si se trata de modificar especificamente clases 
    //classList.add --> Sirve para agregar una clase a un elemento
    h1.classList.add("TituloRojo"); //Ahora la etiqueta <h1> tendra asignada las clases class="tituloSecundario TituloRojo"

    //classList.remove --> Sirve para eliminar una clase a un elemento
    h1.classList.remove("tituloSecundario"); //Ahora la etiqueta <h1> tendra asignada solo la clase class="TituloRojo"

    //classList.toggle --> Sirve para agregar o eliminar una clase pero preguntando primero si ya existe dicha clase
    h1.classList.toggle("tituloSecundario"); //Agrega la clase "tituloSecundario" porque anteriormente no la tenía
    h1.classList.toggle("tituloSecundario"); //Elimina la clase "tituloSecundario" porque en la líne anterior ya se lo había agregado

    //classList.contains --> Devuelve TRUE o FALSE preguntando si existe la clase por la cual le preguntamos
    console.log(h1.classList.contains("TituloRojo")); //Devolvería TRUE porque la clase "TituloRojo" si está asignada a la etiqueta H1

//Modificando DOM para el INPUT
//===================================
    //placeholder -> Asignando un valor a la propiedad placeholder.
    input.placeholder="Ingresa Otro Nombre";

    //value -> Asignando un valor a la propiedad value.
    input.value="Carlos Urquizo Gomez";

//Agregando un elemento TAG desde Cero
//=====================================
    //Creando una imagen
    const img = document.createElement("img"); // el resultado será <img>
    //Agregando la propiedad SRC y WIDTH a la imagen
    img.setAttribute("src","https://agora.la/wp-content/uploads/2021/05/LogoAgoraWord.png");//El resultado será <img src="https://agora.la/wp-content/uploads/2021/05/LogoAgoraWord.png">
    img.setAttribute("width","200");
    //agregando la imagen al parrafo <p id="parrafo2"> sin borrar su contenido
    parrafo2_b.append(img);
    //Si quisieramos borrar el contenido para asignar un contenido nuevo sería asi
    parrafo2_b.innerHTML=img.outerHTML;
    //Tambíen podríamos hacer lo siguiente
    parrafo2_b.innerHTML="";
    parrafo2_b.append(img);