/* Función 1: Abrir el telón */
function abrirTelon() {
  // Busco el telón por su id y lo guardo en una variable
  var telon = document.getElementById("telon");

  // Le agrego la clase "abierto": El CSS se encarga de moverlo
  telon.classList.add("abierto");

  // Después de 2,5 segundos (2500 milisegundos) lo borro para que no estorbe
  setTimeout(function () {
    telon.style.display = "none";
  }, 2500);
}

/* Función 2: Mostrar u ocultar el texto de un gusto
   "id" es el nombre del texto que queremos abrir (por ejemplo "musica") */
function mostrar(id) {
  var texto = document.getElementById(id);

  // toggle = Si tiene la clase "visible" se la saca, y si no la tiene se la pone
  texto.classList.toggle("visible");
}

/* Función 3: Hacer aparecer las secciones al bajar */

// Busco todas las secciones menos la del inicio y les pongo la clase "oculto"
var secciones = document.querySelectorAll("section:not(.inicio)");
for (var i = 0; i < secciones.length; i++) {
  secciones[i].classList.add("oculto");
}

// Esta función revisa cuáles secciones ya están en pantalla
function revisarSecciones() {
  for (var i = 0; i < secciones.length; i++) {
    // top = A cuántos píxeles del borde de arriba de la pantalla está la sección
    var top = secciones[i].getBoundingClientRect().top;

    // Si está en el 85% de arriba de la pantalla, le saco "oculto" y aparece
    if (top < window.innerHeight * 0.85) {
      secciones[i].classList.remove("oculto");
    }
  }
}

// Cada vez que se hace scroll, se revisan las secciones
window.addEventListener("scroll", revisarSecciones);
// Y también una vez al cargar la página
revisarSecciones();