function ingresarALaWeb() {
    document.getElementById('pantalla-inicio').classList.add('hidden');
    document.getElementById('pantalla-principal').classList.remove('hidden');
}

function toggleSeccion(id) {
    const elemento = document.getElementById(id);
    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        elemento.style.display = "block";
    }
}
