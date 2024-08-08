document.getElementById('navbarSideCollapse').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.toggle('open');
});

document.getElementById('openText').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.toggle('open');
});

function toggleMenu() {
    var menu = document.getElementById('navbarSideCollapse');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        // Esperar a que la primera animación termine antes de comenzar la segunda
        setTimeout(function() {
            menu.classList.add('second-animation');
        }, 300); // Tiempo en milisegundos que corresponde a la duración de la primera animación
    } else {
        // Eliminar la clase de la segunda animación inmediatamente si se desactiva
        menu.classList.remove('second-animation');
    }
}