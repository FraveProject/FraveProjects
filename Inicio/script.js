// Obtener todos los botones de "Cargar más"
let loadMoreBtns = document.querySelectorAll('.load-more');

// Iterar sobre cada botón y agregar el manejo de clic
loadMoreBtns.forEach((btn, index) => {
    let currentItem = 4;
    let cargandoMas = true; // Variable para controlar si se está cargando más elementos

    btn.onclick = () => {
        // Obtener el contenedor correspondiente a este botón de carga
        let container = document.querySelector(`.box-container-${index + 1}`);
        let boxes = container.querySelectorAll('.box-' + (index + 1));

        if (cargandoMas) {
            // Iterar sobre los próximos 4 elementos a mostrar
            for (let i = currentItem; i < currentItem + 4 && i < boxes.length; i++) {
                boxes[i].style.display = 'block'; // Ajusta 'block' según tu diseño
            }
            
            currentItem += 4; // Actualizar el contador de elementos mostrados
            
            // Ocultar el botón de carga si no hay más elementos para mostrar
            if (currentItem >= boxes.length) {
                btn.textContent = 'Cargar menos'; // Cambiar texto a "Cargar menos"
                cargandoMas = false; // Cambiar estado a cargar menos
            }
        } else {
            // Ocultar los elementos cargados previamente
            for (let i = currentItem - 4; i < currentItem; i++) {
                boxes[i].style.display = 'none'; // Oculta los elementos cargados
            }
            
            currentItem -= 4; // Actualizar el contador de elementos mostrados
            btn.textContent = 'Cargar más'; // Cambiar texto a "Cargar más"
            cargandoMas = true; // Cambiar estado a cargar más
        }
    };
});

