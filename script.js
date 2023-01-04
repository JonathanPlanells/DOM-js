
// Listener
// Este evento escucha lo que esta haciendo el usurio, puede ser un click, 
// el movimiento de algo en el entorno o el teclado

// Al saber que todos los elementos son objetos, la constante btn también lo es. 
// Al ser un método, esta tiene varios métodos entre ellos addEventListener. 
// Este recibe dos parámetros: la acción o lo que va a escuchar, en este caso el click, y lo que va a realizar. 
// Allí mismo, dentro de los parámetros, podemos crear la función anónima o función flecha. 
//  ----  Más abajo está el ejemplo de una función sin ser anónima.---- 

// ahora a dicha función anonima le agregamos el evento que es lo que va a recibir
// este evento es el click, al capturar el click podemos impedir que la pagina se refresque

// Arrow functions o funciones flecha o funciones anonimas =>

/* btn.addEventListener("click",(evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}); */

/* btn.addEventListener("click", function (evento){
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
})
 */

//  ----- LIMPIEZA DE CODIGO -----
// Se crea por aparte la función anonima para luego llamarla con el meotodo del addEventListener


const btn = document.querySelector("[data-form-btn]")


const creatTask = (evento) => {
    evento.preventDefault();
    const entradaTexto = document.querySelector("[data-form-input]"); // Obtenemos todo el input
    const valor = entradaTexto.value // obtenemos el texto ingresdo en el input
    const lista = document.querySelector("[data-list]") // Obtenemos el espacio donde se ubica la lista
    const tareaNueva = document.createElement("li") // Se crea el elemento <li> para hacer cada card
    tareaNueva.classList.add("card") // Se agrega clase al elemento <li>
    entradaTexto.value = ""
    const contenidoNuevo = ` 
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${valor}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`

    tareaNueva.innerHTML = contenidoNuevo; // Se agrega el contenido para cada card

    lista.appendChild(tareaNueva) // Se crea el hijo para ir agregando varias cards

    console.log(contenidoNuevo)
}

btn.addEventListener('click', creatTask)



