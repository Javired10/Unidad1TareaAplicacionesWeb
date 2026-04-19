$(document).ready(function () {
    // 1. Mostrar de inmediato el contenedor del spinner en la pantalla
    $("#spinner-container").removeClass("d-none");

    // Simulamos un retraso pesado de 5000 ms (5 segundos) para visualizar el spinner
    setTimeout(function() {
        $.ajax({
          url: "data/peliculas.json",
          method: "GET",
          dataType: "json",
          success: function (peliculas) {
            let html = "";
            peliculas.forEach(function (peli) {
              const imgUrl = peli.imagen.startsWith('http') ? peli.imagen : `img/${peli.imagen}`;
              const isEstreno = new Date(peli.estreno) > new Date();
              const estrenoBadge = isEstreno ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2">Próximamente</span>' : '';

              html += `
                <div class="col-md-4 mb-4">
                  <div class="card h-100 shadow border-0 position-relative">
                    ${estrenoBadge}
                    <img src="${imgUrl}" class="card-img-top" alt="${peli.titulo}" style="height: 400px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title fw-bold">${peli.titulo}</h5>
                      <p class="card-text text-muted small mb-3">${peli.generos.join(", ")}</p>
                      
                      <!-- Añadimos el nuevo botón de Tráiler invocando al modal global. Y un contenedor de botones -->
                      <div class="mt-auto d-flex flex-column gap-2">
                        <button class="btn btn-outline-danger w-100 shadow-sm play-trailer-btn" data-url="${peli.trailer}" data-bs-toggle="modal" data-bs-target="#trailerModal">
                             Ver Tráiler
                        </button>
                        <a href="pages/detalle.html?id=${peli.id}" class="btn btn-primary w-100 shadow-sm">Ver Detalles</a>
                      </div>
                    </div>
                  </div>
                </div>`;
            });
            
            // 2. Apagamos el flag de la carga (spinner), ocultamos el div
            $("#spinner-container").addClass("d-none");
            
            // 3. Renderizamos y utilizamos una animación en caída clásica "slideDown" de jQuery
            $("#lista-peliculas").html(html).slideDown(800);
            
          },
          error: function (xhr, status, error) {
            console.error("Error al cargar las películas:", error);
            // Igual si es error debemos retirar el spinner de la vista
            $("#spinner-container").addClass("d-none");
            
            $("#lista-peliculas").html(`
              <div class="col-12">
                <div class="alert alert-danger text-center" role="alert">
                  No se pudo cargar la lista de películas. Intenta nuevamente más tarde.
                </div>
              </div>
            `).show();
          }
        });
    }, 5000); // 5000 milisegundos

    // Evitemos que el video del tráiler siga sonando interrumpiendo todo en el background al cerrar el Modal. 
    // Vaciamos temporalmente su atributo fuente cuando se oculta de la pantalla
    $('#trailerModal').on('hidden.bs.modal', function () {
        $('#trailerModalIframe').attr('src', '');
    });

    // Un sencillo inyector. Ya que las tarjetas se agregan luego de 5 segundos (por ajax), el click se 
    // delega en el document global para capturar futuros botones de clase .play-trailer-btn
    $(document).on('click', '.play-trailer-btn', function() {
        // En base a la data adjunta en el boton html poblamos la ventana de bootstrap
        const trailerUrl = $(this).data('url');
        $('#trailerModalIframe').attr('src', trailerUrl);
    });
});