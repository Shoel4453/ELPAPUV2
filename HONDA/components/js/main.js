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



  const divimgs = document.querySelectorAll('.divimg');

  divimgs.forEach(divimg => {
      const img = divimg.querySelector('img');
  
      divimg.addEventListener('mouseenter', () => {
          img.classList.add('hovered');
      });
  
      divimg.addEventListener('mouseleave', () => {
          setTimeout(() => {
              img.classList.remove('hovered');
          }, 0);
      });
  });


window.addEventListener('load', function() {
    const elementosIniciales = document.querySelectorAll('.caja.initial-animation');
  
    elementosIniciales.forEach(elemento => {
      elemento.classList.add('visible');
    });
  });



window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.caja, .divimg');
    const triggerBottom = window.innerHeight * 0.99; // 80% de la altura de la ventana
  
    elementos.forEach(elemento => {
      const elementoTop = elemento.getBoundingClientRect().top;
  
      if (elementoTop < triggerBottom) {
        elemento.classList.add('visible');
      }
    });
  });


  document.querySelectorAll('.boxvids').forEach(box => {
    const video = box.querySelector('.background-video');
    let timeoutId;
  
    box.addEventListener('mouseover', () => {
      // Cancela cualquier temporizador previo
      clearTimeout(timeoutId);
      video.play();
    });
  
    box.addEventListener('mouseout', () => {
      // Programa la pausa del video después de 0.3 segundos
      timeoutId = setTimeout(() => {
        video.pause();
        video.currentTime = 0; // Opcional: Reinicia el video al comienzo
      }, 300); // 300 ms = 0.3 segundos
    });
  });
  
  
  

