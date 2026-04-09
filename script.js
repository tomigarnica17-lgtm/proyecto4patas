// Función para ingresar a la web desde la portada
function ingresarALaWeb() {
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaPrincipal = document.getElementById('pantalla-principal');

    // Oculta la pantalla de inicio y muestra la principal
    pantallaInicio.classList.add('hidden');
    pantallaPrincipal.classList.remove('hidden');
}

// Función que ya teníamos para desplegar las secciones
function toggleSeccion(id) {
    const elemento = document.getElementById(id);
    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}
