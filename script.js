

const formulario = document.getElementById("formulariocontacto");
const respuesta = document.getElementById("respuestaformulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    respuesta.textContent =
        `¡Gracias, ${nombre}! Tu formulario se completó correctamente.`;

    formulario.reset();
});
