function toggleSeccion(id) {
    const elemento = document.getElementById(id);
    
    // Obtiene el estado actual de visualización
    const displayActual = window.getComputedStyle(elemento).display;

    if (displayActual === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}