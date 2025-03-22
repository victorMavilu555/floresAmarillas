function showLove() {
    const loveMessage = document.getElementById('loveMessage');

    // Mostrar el mensaje de amor
    loveMessage.classList.remove('hidden');
}

// Función para crear rosas que caen
function createRoses() {
    const roseContainer = document.getElementById('roseContainer');

    setInterval(() => {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        rose.style.animationDuration = `${Math.random() * 6 + 8}s`; // Velocidad más lenta (entre 8 y 14 segundos)
        roseContainer.appendChild(rose);

        // Eliminar la rosa después de que termine la animación
        setTimeout(() => {
            rose.remove();
        }, 15000); // Ajusta el tiempo según la duración de la animación
    }, 500); // Crea una nueva rosa cada 500ms
}

// Iniciar el efecto de rosas cayendo
createRoses();