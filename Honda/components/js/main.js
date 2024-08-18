document.getElementById('navbarSideCollapse').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.toggle('open');
});

document.getElementById('openText').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.toggle('open');
});

function toggleMenu() {
    var menu = document.getElementById('navbarSideCollapse');
    var dark = document.getElementById('dark');
    var body = document.body;
    
    menu.classList.toggle('active');
    body.classList.toggle('menu-open');

    dark.classList.toggle('is-show');


    

    // Desplazar al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (menu.classList.contains('active')) {

        setTimeout(function() {
            menu.classList.add('second-animation');
        }, 300);
    } else {
        menu.classList.remove('second-animation');
    }
}

const circles = document.querySelectorAll('.active-item i');
  
  document.getElementById('Honda-Carousel').addEventListener('slid.bs.carousel', function (event) {
    circles.forEach(circle => {
      circle.classList.remove('active-bullet');
    });
    
    circles[event.to].classList.add('active-bullet');
  });

  circles[0].classList.add('bi-circle-fill');


