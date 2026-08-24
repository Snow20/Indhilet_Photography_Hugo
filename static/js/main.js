// Espera a que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Gestión del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    // Escucha el evento 'submit' (envío) del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Evita que el formulario se envíe realmente de forma predeterminada
            event.preventDefault();

            // Captura los valores de los campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validación básica adicional (HTML5 ya lo hace, pero es buena práctica)
            if (name === "" || email === "" || message === "") {
                alert("Por favor, rellena todos los campos.");
                return;
            }

            // Aquí es donde normalmente enviarías los datos a un servidor usando Fetch/AJAX
            // Por ahora, simularemos un éxito.
            console.log("Formulario simulado enviado:");
            console.log("Nombre:", name);
            console.log("Email:", email);
            console.log("Mensaje:", message);

            // Muestra un mensaje de éxito al usuario (puedes mejorar esto con CSS)
            alert("¡Gracias " + name + "! Tu mensaje ha sido simulado (mira la consola).");

            // Resetea el formulario
            contactForm.reset();
        });
    }

    // --- 2. Desplazamiento Suave (Opcional, manejado por CSS pero útil si falla) ---
    // Aunque 'scroll-behavior: smooth' está en CSS, algunos navegadores viejos 
    // podrían necesitar esto.
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Verifica que sea un enlace interno (#)
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Calcula la posición del elemento, restando un offset si tienes navbar fija
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. Efecto de aparición en scroll (Opcional, añade clase 'visible') ---
    // Detecta elementos que entran en la pantalla para animarlos (requiere CSS adicional)
    /*
    const faders = document.querySelectorAll('.about-grid, .portfolio-grid, .contact-grid');
    const appearOptions = {
        threshold: 0.15, // Porcentaje visible para activar
        rootMargin: "0px 0px -50px 0px" // Margen inferior antes de activar
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible'); // Añade clase para CSS
                appearOnScroll.unobserve(entry.target); // Deja de observar una vez visible
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        // Necesitarás añadir .fader { opacity: 0; transition: opacity 0.6s ease-in; } 
        // y .fader.visible { opacity: 1; } en tu CSS para que esto funcione.
        // fader.classList.add('fader'); 
        // appearOnScroll.observe(fader);
    });
    */

});

// Diccionario de traducciones
const translations = {
    'es': {
        // Navegación principal
        'nav_inicio': 'INICIO',
        'nav_sobre_mi': 'SOBRE MÍ',
        'nav_portafolio': 'PORTAFOLIO',
        'nav_contacto': 'CONTACTO',

        // Menú desplegable / Categorías
        'menu_retratos': 'RETRATOS',
        'sub_moda': 'MODA',
        'sub_estudio': 'ESTUDIO',
        'menu_paisajes': 'PAISAJES',
        'sub_urbano': 'URBANO',
        'sub_naturaleza': 'NATURALEZA',
        'sub_macro': 'MACRO',
        'menu_naturaleza': 'NATURALEZA MUERTA',
        'sub_bn': 'BLANCO Y NEGRO',
        'menu_proyectos': 'PROYECTOS',
        'sub_toyshow': 'LA MUERTE TOY SHOW',

        // Sección Sobre Mí
        'about_title': 'Soy Nicole Leones...',
        'about_text': 'Soy Nicole Leones, una apasionada fotógrafa especializada en capturar la esencia...',
        'about_text2': 'En este espacio, comparto una selección de mis trabajos más significativos, donde la luz, la composición y la emoción se entrelazan para dar vida a momentos inolvidables.',
        'portfolio_title': 'TRABAJOS REALIZADOS',

        // Formulario y RGPD
        'placeholder_nombre': 'Nombre',
        'placeholder_email': 'Email',
        'placeholder_mensaje': 'Mensaje',
        'privacy_accept': 'He leído y acepto la ',
        'privacy_link': 'política de privacidad',
        'privacy_resp_lbl': 'Responsable:',
        'privacy_fin_lbl': 'Finalidad:',
        'privacy_fin_val': 'Gestión de consultas y solicitudes del formulario web.',
        'privacy_leg_lbl': 'Legitimación:',
        'privacy_leg_val': 'Consentimiento del interesado.',
        'privacy_der_lbl': 'Derechos:',
        'privacy_der_val': 'Acceso, rectificación, supresión y oposición mediante envío de correo electrónico a la dirección de contacto.',
        'contact_btn': 'Enviar'
    },
    'gl': {
        // Navegación principal
        'nav_inicio': 'INICIO',
        'nav_sobre_mi': 'SOBRE MIN',
        'nav_portafolio': 'PORTAFOLIO',
        'nav_contacto': 'CONTACTO',

        // Menú desplegable / Categorías
        'menu_retratos': 'RETRATOS',
        'sub_moda': 'MODA',
        'sub_estudio': 'ESTUDIO',
        'menu_paisajes': 'PAISAXES',
        'sub_urbano': 'URBANO',
        'sub_naturaleza': 'NATUREZA',
        'sub_macro': 'MACRO',
        'menu_naturaleza': 'NATUREZA MORTA',
        'sub_bn': 'BRANCO E NEGRO',
        'menu_proyectos': 'PROXECTOS',
        'sub_toyshow': 'LA MUERTE TOY SHOW',

        // Sección Sobre Mí
        'about_title': 'Son Nicole Leones...',
        'about_text': 'Son Nicole Leones, unha apaixonada fotógrafa especializada en capturar a esencia...',
        'about_text2': 'Neste espazo comparto unha selección dos meus traballos máis significativos onde a luz a composición e a emoción se entrelazan para dar vida a momentos inesquecibles.',
        'portfolio_title': 'TRABALLOS REALIZADOS',

        // Formulario y RGPD
        'placeholder_nombre': 'Nome',
        'placeholder_email': 'Correo electrónico',
        'placeholder_mensaje': 'Mensaxe',
        'privacy_accept': 'Li e acepto a ',
        'privacy_link': 'política de privacidade',
        'privacy_resp_lbl': 'Responsable:',
        'privacy_fin_lbl': 'Finalidade:',
        'privacy_fin_val': 'Xestión de consultas e solicitudes do formulario web.',
        'privacy_leg_lbl': 'Lexitimación:',
        'privacy_leg_val': 'Consentimento do interesado.',
        'privacy_der_lbl': 'Dereitos:',
        'privacy_der_val': 'Acceso, rectificación, supresión e oposición mediante correo electrónico á dirección de contacto.',
        'contact_btn': 'Enviar'
    },
    'en': {
        // Navegación principal
        'nav_inicio': 'HOME',
        'nav_sobre_mi': 'ABOUT ME',
        'nav_portafolio': 'PORTFOLIO',
        'nav_contacto': 'CONTACT',

        // Menú desplegable / Categorías
        'menu_retratos': 'PORTRAITS',
        'sub_moda': 'FASHION',
        'sub_estudio': 'STUDIO',
        'menu_paisajes': 'LANDSCAPES',
        'sub_urbano': 'URBAN',
        'sub_naturaleza': 'NATURE',
        'sub_macro': 'MACRO',
        'menu_naturaleza': 'STILL LIFE',
        'sub_bn': 'BLACK & WHITE',
        'menu_proyectos': 'PROJECTS',
        'sub_toyshow': 'LA MUERTE TOY SHOW',

        // Sección Sobre Mí
        'about_title': 'I am Nicole Leones...',
        'about_text': 'I am Nicole Leones, a passionate photographer specialized in capturing the essence...',
        'about_text2': 'In this space I share a selection of my most significant works where light composition and emotion intertwine to bring unforgettable moments to life.',
        'portfolio_title': 'PROJECTS COMPLETED',

        // Formulario y RGPD
        'placeholder_nombre': 'Name',
        'placeholder_email': 'Email',
        'placeholder_mensaje': 'Message',
        'privacy_accept': 'I have read and accept the ',
        'privacy_link': 'privacy policy',
        'privacy_resp_lbl': 'Responsible:',
        'privacy_fin_lbl': 'Purpose:',
        'privacy_fin_val': 'Management of queries and requests from the web form.',
        'privacy_leg_lbl': 'Legitimation:',
        'privacy_leg_val': 'Consent of the interested party.',
        'privacy_der_lbl': 'Rights:',
        'privacy_der_val': 'Access, rectification, erasure, and objection via email to the contact address.',
        'contact_btn': 'Send'
    }
};

function changeLanguage(lang) {
    // 1. Guardar la preferencia en el navegador
    localStorage.setItem('preferredLang', lang);

    // 2. Buscar todos los elementos que tengan el atributo data-key
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            // Si el elemento es un input o textarea, cambiamos el placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Si es un elemento normal, cambiamos el texto interno
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Al cargar la página, aplicar el idioma guardado o el español por defecto
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLanguage(savedLang);
});


function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Cambio cada 5 segundos

    if (slides.length === 0) return;

    function nextSlide() {
        // Quita la clase activa de la imagen actual
        slides[currentSlide].classList.remove('active');

        // Calcula el índice de la siguiente imagen
        currentSlide = (currentSlide + 1) % slides.length;

        // Añade la clase activa a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Inicia el temporizador
    setInterval(nextSlide, slideInterval);
}

// Llama a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCarousel);

document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTop');

    // Función para mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) { // Aparece tras bajar 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Función para volver al inicio suavemente
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// --- 4. Control del Menú Desplegable Horizontal Superior ---
document.addEventListener('DOMContentLoaded', function () {
    const portfolioTrigger = document.getElementById('nav-portfolio-trigger');
    const horizontalMenu = document.getElementById('horizontal-dropdown-menu');

    if (portfolioTrigger && horizontalMenu) {

        // Abre/Cierra el menú al hacer clic en el enlace PORTAFOLIO
        portfolioTrigger.addEventListener('click', function (event) {
            event.preventDefault();  /* Evita el desplazamiento inmediato del anclaje */
            event.stopPropagation(); /* Evita que el clic se propague al documento */

            horizontalMenu.classList.toggle('open');
        });

        // Evita que clics dentro del menú lo cierren prematuramente
        horizontalMenu.addEventListener('click', function (event) {
            event.stopPropagation();
        });

        // Cierra el menú automáticamente si se hace clic en cualquier otra parte del sitio
        document.addEventListener('click', function (event) {
            if (horizontalMenu.classList.contains('open')) {
                horizontalMenu.classList.remove('open');
            }
        });
    }
});

// --- 5. Sistema de Carrusel Automatizado del Hero ---
function initCarousel() {
    // Captura de forma estricta todas las diapositivas presentes en el contenedor
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Intervalo de transición exacta: 5 segundos

    // Validación de seguridad: si no existen diapositivas, aborta para evitar bucles infinitos
    if (slides.length === 0) {
        console.warn("Jarvis Alerta: No se encontraron elementos '.carousel-slide' en el DOM.");
        return;
    }

    // Registro en consola del total de fotos indexadas para doble verificación del desarrollador
    console.log(`Jarvis Verificación: Carrusel inicializado con ${slides.length} fotografías.`);

    function nextSlide() {
        // 1. Remueve la clase activa de la diapositiva que está visible actualmente
        slides[currentSlide].classList.remove('active');

        // 2. Cálculo matemático del índice de la siguiente imagen
        // El operador residuo (%) garantiza que al llegar a la última foto (16), el índice regrese a 0
        currentSlide = (currentSlide + 1) % slides.length;

        // 3. Aplica la clase activa a la nueva diapositiva para iniciar la transición de opacidad (CSS)
        slides[currentSlide].classList.add('active');
    }

    // Configura el hilo de ejecución cíclico en el navegador
    setInterval(nextSlide, slideInterval);
}

// Inserción segura en el ciclo de vida del documento
document.addEventListener('DOMContentLoaded', function () {
    // Encapsulamos en una función autoejecutable o directa para aislamiento de errores
    try {
        initCarousel();
    } catch (error) {
        console.error("Error crítico al inicializar el carrusel de imágenes:", error);
    }


    // 1. Gestión de pestañas internas del submenú
    const tabTriggers = document.querySelectorAll('.portfolio-tab-trigger');
    const galleryPanes = document.querySelectorAll('.dropdown-gallery-pane');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault(); // Previene la recarga o saltos abruptos de scroll

            const targetId = this.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);

            if (targetPane && !targetPane.classList.contains('active')) {
                // Desvanecer paneles activos anteriores
                galleryPanes.forEach(pane => {
                    pane.style.opacity = '0';
                    setTimeout(() => {
                        pane.classList.remove('active');
                    }, 150);
                });

                // Mostrar el panel de la categoría seleccionada de forma orgánica
                setTimeout(() => {
                    targetPane.classList.add('active');
                    void targetPane.offsetWidth; // Forzar reflow mecánico
                    targetPane.style.opacity = '1';
                }, 180);
            }
        });
    });

    // 2. Lógica del Visualizador Lightbox con Navegación Secuencial
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img-target');
    const closeBtn = document.querySelector('.gallery-modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    let currentImagesArray = []; // Almacena temporalmente las fotos de la galería abierta
    let currentImgIndex = 0;     // Puntero del índice activo

    // Escucha delegada para capturar clics en las imágenes de las galerías
    document.querySelectorAll('.dropdown-gallery-container').forEach(container => {
        container.addEventListener('click', function (e) {
            const clickedImg = e.target.closest('.dropdown-gallery-item img');
            if (!clickedImg) return;

            // Encontrar el panel padre activo en el que se encuentra la imagen clicada
            const activePane = clickedImg.closest('.dropdown-gallery-pane');
            if (!activePane) return;

            // Indexar todas las imágenes pertenecientes de forma exclusiva a esa categoría activa
            currentImagesArray = Array.from(activePane.querySelectorAll('.dropdown-gallery-item img'));
            currentImgIndex = currentImagesArray.indexOf(clickedImg);

            updateModalContent();
            modal.classList.add('show');
        });
    });

    // Función encargada de actualizar dinámicamente el source y atributos del visualizador
    function updateModalContent() {
        if (currentImagesArray.length > 0 && currentImagesArray[currentImgIndex]) {
            const targetData = currentImagesArray[currentImgIndex];
            modalImg.style.opacity = '0';

            setTimeout(() => {
                modalImg.src = targetData.src;
                modalImg.alt = targetData.alt;
                modalImg.style.opacity = '1';
            }, 100);
        }
    }

    // Funciones de control direccional
    function navigateNext() {
        if (currentImagesArray.length === 0) return;
        currentImgIndex = (currentImgIndex + 1) % currentImagesArray.length;
        updateModalContent();
    }

    function navigatePrev() {
        if (currentImagesArray.length === 0) return;
        currentImgIndex = (currentImgIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
        updateModalContent();
    }

    // Asignación de manejadores de eventos para la navegación
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
    if (prevBtn) prevBtn.addEventListener('click', navigatePrev);

    // Cerrar la modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

    // Soporte para navegación interactiva rápida por medio del teclado
    document.addEventListener('keydown', function (e) {
        if (!modal || !modal.classList.contains('show')) return;
        if (e.key === 'ArrowRight') navigateNext();
        if (e.key === 'ArrowLeft') navigatePrev();
        if (e.key === 'Escape') modal.classList.remove('show');
    });

    // hamburguesa


});



document.addEventListener('DOMContentLoaded', () => {
    const tabTriggers = document.querySelectorAll('.portfolio-tab-trigger');
    const galleryPanes = document.querySelectorAll('.dropdown-gallery-pane');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // Detiene el salto abrupto por defecto del navegador

            const targetId = trigger.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);

            if (targetPane) {
                // Oculta las galerías inactivas y muestra la seleccionada
                galleryPanes.forEach(pane => pane.classList.remove('active'));
                targetPane.classList.add('active');

                // Desplaza la vista en móvil directamente hasta el contenedor de las fotos
                targetPane.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const privacyCheckbox = document.getElementById('privacy_policy');

        if (!privacyCheckbox.checked) {
            e.preventDefault();
            alert('Debes aceptar la política de privacidad para enviar el formulario.');
            return false;
        }

        // Lógica de envío de datos
    });
}