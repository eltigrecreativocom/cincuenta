/**
 * CONFIGURACIONES PREDEFINIDAS PARA EL MODAL DE INVITACIÓN
 * Usa estas configuraciones como punto de partida para diferentes tipos de eventos
 */

// ===================================
// CONFIGURACIÓN 1: BODA
// ===================================
const CONFIG_BODA = {
    autoplay: true,
    showPlayer: true,
    fadeTime: 500,
    modalCloseTime: 800,
    elementosAnimacion: [
        { selector: '.nombres-novios', delay: 500 },
        { selector: '.fecha-boda', delay: 800 },
        { selector: '.lugar-boda', delay: 1100 },
        { selector: '.detalles', delay: 1400 },
        { selector: '.confirmacion-btn', delay: 1700 }
    ]
};

// ===================================
// CONFIGURACIÓN 2: CUMPLEAÑOS
// ===================================
const CONFIG_CUMPLEAÑOS = {
    autoplay: true,
    showPlayer: true,
    fadeTime: 300,
    modalCloseTime: 500,
    elementosAnimacion: [
        { selector: '.nombre-cumpleañero', delay: 500 },
        { selector: '.edad', delay: 800 },
        { selector: '.fecha', delay: 1100 },
        { selector: '.lugar', delay: 1400 },
        { selector: '.dresscode', delay: 1700 },
        { selector: '.botones', delay: 2000 }
    ]
};

// ===================================
// CONFIGURACIÓN 3: EVENTO CORPORATIVO
// ===================================
const CONFIG_CORPORATIVO = {
    autoplay: false, // Sin música para eventos corporativos
    showPlayer: false,
    fadeTime: 200,
    modalCloseTime: 400,
    elementosAnimacion: [
        { selector: '.logo-empresa', delay: 300 },
        { selector: '.titulo-evento', delay: 600 },
        { selector: '.descripcion', delay: 900 },
        { selector: '.agenda', delay: 1200 },
        { selector: '.registro-btn', delay: 1500 }
    ]
};

// ===================================
// CONFIGURACIÓN 4: QUINCEAÑERA
// ===================================
const CONFIG_QUINCEAÑERA = {
    autoplay: true,
    showPlayer: true,
    fadeTime: 400,
    modalCloseTime: 600,
    elementosAnimacion: [
        { selector: '.foto-quinceañera', delay: 500 },
        { selector: '.nombre', delay: 800 },
        { selector: '.mensaje', delay: 1100 },
        { selector: '.fecha-hora', delay: 1400 },
        { selector: '.iglesia', delay: 1700 },
        { selector: '.salon', delay: 2000 },
        { selector: '.mesa-regalos', delay: 2300 }
    ]
};

// ===================================
// CONFIGURACIÓN 5: BABY SHOWER
// ===================================
const CONFIG_BABYSHOWER = {
    autoplay: true,
    showPlayer: true,
    fadeTime: 300,
    modalCloseTime: 500,
    elementosAnimacion: [
        { selector: '.nombre-bebe', delay: 500 },
        { selector: '.padres', delay: 800 },
        { selector: '.fecha-evento', delay: 1100 },
        { selector: '.lugar-evento', delay: 1400 },
        { selector: '.registro-regalos', delay: 1700 }
    ]
};

// ===================================
// CONFIGURACIÓN 6: LANDING PAGE
// ===================================
const CONFIG_LANDING = {
    autoplay: false,
    showPlayer: false,
    fadeTime: 200,
    modalCloseTime: 300,
    elementosAnimacion: [
        { selector: '.hero-title', delay: 300 },
        { selector: '.hero-subtitle', delay: 600 },
        { selector: '.features', delay: 900 },
        { selector: '.cta-button', delay: 1200 }
    ]
};

// ===================================
// CONFIGURACIÓN 7: MINIMALISTA (Sin animaciones extras)
// ===================================
const CONFIG_MINIMALISTA = {
    autoplay: false,
    showPlayer: false,
    fadeTime: 200,
    modalCloseTime: 300,
    elementosAnimacion: [] // Sin animaciones adicionales
};

// ===================================
// CONFIGURACIÓN 8: MÁXIMA EXPERIENCIA
// ===================================
const CONFIG_MAXIMA = {
    autoplay: true,
    showPlayer: true,
    fadeTime: 500,
    modalCloseTime: 800,
    elementosAnimacion: [
        { selector: '.elemento-1', delay: 300 },
        { selector: '.elemento-2', delay: 500 },
        { selector: '.elemento-3', delay: 700 },
        { selector: '.elemento-4', delay: 900 },
        { selector: '.elemento-5', delay: 1100 },
        { selector: '.elemento-6', delay: 1300 },
        { selector: '.elemento-7', delay: 1500 },
        { selector: '.elemento-8', delay: 1700 },
        { selector: '.elemento-9', delay: 1900 },
        { selector: '.elemento-10', delay: 2100 }
    ]
};

// ===================================
// CÓMO USAR ESTAS CONFIGURACIONES
// ===================================
/*
// En tu archivo HTML, después de cargar modal-invitacion.js:

<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Opción 1: Usar una configuración predefinida
        window.modalInvitacion = new ModalInvitacion(CONFIG_BODA);
        
        // Opción 2: Personalizar una configuración existente
        const miConfig = {
            ...CONFIG_CUMPLEAÑOS,
            autoplay: false, // Sobrescribir solo esto
        };
        window.modalInvitacion = new ModalInvitacion(miConfig);
        
        // Opción 3: Crear tu propia configuración
        window.modalInvitacion = new ModalInvitacion({
            autoplay: true,
            showPlayer: true,
            elementosAnimacion: [
                { selector: '.mi-elemento', delay: 500 }
            ]
        });
    });
</script>
*/

// Exportar configuraciones para usar en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG_BODA,
        CONFIG_CUMPLEAÑOS,
        CONFIG_CORPORATIVO,
        CONFIG_QUINCEAÑERA,
        CONFIG_BABYSHOWER,
        CONFIG_LANDING,
        CONFIG_MINIMALISTA,
        CONFIG_MAXIMA
    };
}
