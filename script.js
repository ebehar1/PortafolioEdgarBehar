  // 1. Navegación suave al hacer clic en los enlaces
 const enlaces = document.querySelectorAll('nav ul li a');
 
 // Agrega un evento de clic a cada enlace
 enlaces.forEach(enlace => {
     enlace.addEventListener('click', function (event) {
         event.preventDefault(); // Evita el comportamiento por defecto
         const seccionId = this.getAttribute('href'); // Obtén el id de la sección
         const seccion = document.querySelector(seccionId); // Encuentra la sección
 
         // Desplazamiento suave
         seccion.scrollIntoView({
             behavior: 'smooth',
             block: 'start'
         });
     });
 });
 
// 2. Mostrar proyectos dinámicamente
const proyectos = [
    { titulo: 'Proyecto 1', descripcion: 'Para este proyecto tuve que realizar un poster siguiendo una composicion, elegí sobre Stephen King ya que es un autor que admiro bastante.', imagen: 'Proyecto 1.png' },
    { titulo: 'Proyecto 2', descripcion: 'En este proyecto realice un isometrico sobre el videojuego Hollow Knight, ya que es uno de mis juegos favoritos y el arte me gusta bastante.', imagen: 'Proyecto 2.png' },
    { titulo: 'Proyecto 3', descripcion: 'Este dibujo lo realice por mi cuenta ya que el personaje de Kirby y los colores que use me agradaron bastante.', imagen: 'Proyecto 3.png' }
];

// Selecciona el contenedor de proyectos
const galeria = document.querySelector('.proyectos-galeria');

// Limpia el contenedor de proyectos antes de agregar los proyectos dinámicamente
galeria.innerHTML = ''; 

// Genera dinámicamente los proyectos
proyectos.forEach(proyecto => {
    const div = document.createElement('div');
    div.classList.add('proyecto');
    div.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}" onclick="abrirLightbox('${proyecto.imagen}')">
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
    `;
    galeria.appendChild(div);
});

// Función para abrir el lightbox
function abrirLightbox(imagenSrc) {
    var lightbox = document.getElementById('lightbox');
    var imagenLightbox = document.getElementById('imagen-lightbox');
    imagenLightbox.src = imagenSrc;
    lightbox.style.display = 'flex'; // Mostrar el lightbox
}

// Función para cerrar el lightbox
function cerrarLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Ocultar el lightbox
}

// Añadir un evento para cerrar el lightbox cuando se haga clic fuera de la imagen
document.getElementById('lightbox').addEventListener('click', function(event) {
    // Verificar si el clic fue en el fondo oscuro (no en la imagen)
    if (event.target === this) {
        cerrarLightbox(); // Cerrar el lightbox si se hizo clic fuera de la imagen
    }
});
