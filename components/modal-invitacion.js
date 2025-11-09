/**
 * COMPONENTE: MODAL DE INVITACIÓN
 * Script para controlar el modal de bienvenida, efectos fade y reproducción automática de música
 * 
 * DEPENDENCIAS:
 * - modal-invitacion.html
 * - modal-invitacion.css
 * 
 * CONFIGURACIÓN:
 * Personaliza las opciones en el objeto CONFIG al inicio del archivo
 */

// ===================================
// CONFIGURACIÓN DEL COMPONENTE
// ===================================
const MODAL_CONFIG = {
    // IDs de elementos del DOM
    modalId: 'modal-invitacion',
    btnVerId: 'btn-ver-invitacion',
    fadeLightboxId: 'fade-lightbox',
    contenidoId: 'contenido',
    audioId: 'audio',
    playPauseId: 'playPause',

    // Tiempos de animación (en milisegundos)
    fadeTime: 300,
    modalCloseTime: 500,
    contentShowTime: 200,

    // Elementos a animar en la segunda página (opcional)
    // Deja este array vacío si no quieres animar elementos después del modal
    elementosAnimacion: [
        { selector: '.terno', delay: 500 },
        { selector: '.saludo h1', delay: 800 },
        { selector: '.saludo .info > p:first-of-type', delay: 1100 },
        { selector: '.fechacruz', delay: 1400 },
        { selector: '.fechacruz .dia', delay: 1600 },
        { selector: '.fechacruz .g3 .item:first-child', delay: 1700 },
        { selector: '.fechacruz .g3 .d2', delay: 1800 },
        { selector: '.fechacruz .g3 .item:last-child', delay: 1900 },
        { selector: '.saludo .info > p:nth-of-type(2)', delay: 2100 },
        { selector: '.r3', delay: 2400 },
        { selector: '.r3 li:first-child', delay: 2600 },
        { selector: '.r3 li:first-child img', delay: 2700 },
        { selector: '.r3 li:first-child p', delay: 2800 },
        { selector: '.r3 li:last-child', delay: 2900 },
        { selector: '.r3 li:last-child img', delay: 3000 },
        { selector: '.r3 li:last-child p', delay: 3100 },
        { selector: '.links', delay: 3400 },
        { selector: '.links li:first-child', delay: 3600 },
        { selector: '.links li:last-child', delay: 3800 },
        { selector: '.nofaltes', delay: 4100 }
    ],

    // Opciones de reproducción automática
    autoplay: true, // Reproducir música al cerrar el modal
    showPlayer: true // Mostrar el reproductor de música
};

// ===================================
// CLASE PRINCIPAL DEL MODAL
// ===================================
class ModalInvitacion {
    constructor(config = {}) {
        // Merge configuración personalizada con la por defecto
        this.config = { ...MODAL_CONFIG, ...config };

        // Obtener elementos del DOM
        this.modal = document.getElementById(this.config.modalId);
        this.btnVer = document.getElementById(this.config.btnVerId);
        this.fadeLightbox = document.getElementById(this.config.fadeLightboxId);
        this.contenido = document.getElementById(this.config.contenidoId);
        this.audio = document.getElementById(this.config.audioId);
        this.playPauseBtn = document.getElementById(this.config.playPauseId);

        // Validar que existan los elementos necesarios
        if (!this.modal || !this.btnVer || !this.fadeLightbox) {
            console.error('ModalInvitacion: Faltan elementos requeridos en el DOM');
            return;
        }

        // SVGs para el botón de reproducción
        this.playSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>`;
        this.pauseSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor"/></svg>`;

        // Inicializar
        this.init();
    }

    init() {
        // Configurar reproductor de música si existe
        if (this.audio && this.playPauseBtn) {
            this.setupAudioPlayer();
        }

        // Event listener para el botón del modal
        this.btnVer.addEventListener('click', () => this.cerrarModal());

        // Event listener para cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display !== 'none') {
                this.cerrarModal();
            }
        });
    }

    setupAudioPlayer() {
        this.playPauseBtn.innerHTML = this.playSVG;

        this.playPauseBtn.addEventListener('click', () => {
            if (this.audio.paused) {
                this.audio.play();
                this.playPauseBtn.innerHTML = this.pauseSVG;
                this.playPauseBtn.setAttribute('aria-label', 'Pausar');
            } else {
                this.audio.pause();
                this.playPauseBtn.innerHTML = this.playSVG;
                this.playPauseBtn.setAttribute('aria-label', 'Reproducir');
            }
        });
    }

    cerrarModal() {
        // Activar lightbox fade
        this.fadeLightbox.classList.add('fade-opening');

        // Después del efecto fade, ocultar modal
        setTimeout(() => {
            this.modal.classList.add('closing');

            setTimeout(() => {
                this.modal.style.display = 'none';

                // Mostrar y animar el contenido principal
                this.mostrarContenido();

                // Cerrar lightbox
                setTimeout(() => {
                    this.fadeLightbox.classList.remove('fade-opening');
                    this.fadeLightbox.classList.add('fade-closing');

                    setTimeout(() => {
                        this.fadeLightbox.classList.remove('fade-closing');
                    }, 600);
                }, 300);

            }, this.config.modalCloseTime);
        }, this.config.fadeTime);

        // Iniciar música automáticamente si está configurado
        if (this.config.autoplay && this.audio) {
            this.reproducirMusica();
        }
    }

    mostrarContenido() {
        // Si no hay contenido definido, skip
        if (!this.contenido) return;

        // Mostrar el contenedor principal primero
        setTimeout(() => {
            this.contenido.classList.add('contenido-visible');
        }, this.config.contentShowTime);

        // Animar elementos si están configurados
        if (this.config.elementosAnimacion && this.config.elementosAnimacion.length > 0) {
            this.animarElementos();
        }

        // Mostrar reproductor si está configurado
        if (this.config.showPlayer && this.playPauseBtn) {
            this.mostrarReproductor();
        }
    }

    animarElementos() {
        this.config.elementosAnimacion.forEach((item) => {
            setTimeout(() => {
                const elemento = document.querySelector(item.selector);
                if (elemento) {
                    elemento.classList.add('animate-in');
                    console.log(`ModalInvitacion: Animando ${item.selector}`);
                }
            }, item.delay);
        });
    }

    reproducirMusica() {
        this.audio.play().then(() => {
            this.playPauseBtn.innerHTML = this.pauseSVG;
            this.playPauseBtn.setAttribute('aria-label', 'Pausar');
        }).catch((error) => {
            console.log('ModalInvitacion: Autoplay bloqueado por el navegador', error);
        });
    }

    mostrarReproductor() {
        const player = document.querySelector('.player');
        if (player) {
            setTimeout(() => {
                player.style.display = 'flex';
                player.classList.add('player-animated');
            }, 3000);
        }
    }

    // Método público para cerrar el modal programáticamente
    close() {
        this.cerrarModal();
    }

    // Método público para reproducir/pausar música
    toggleMusic() {
        if (!this.audio) return;

        if (this.audio.paused) {
            this.reproducirMusica();
        } else {
            this.audio.pause();
            this.playPauseBtn.innerHTML = this.playSVG;
            this.playPauseBtn.setAttribute('aria-label', 'Reproducir');
        }
    }
}

// ===================================
// INICIALIZACIÓN AUTOMÁTICA
// ===================================
// Se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el modal con la configuración por defecto
    window.modalInvitacion = new ModalInvitacion();
});

// ===================================
// EXPORTAR PARA USO EN MÓDULOS
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ModalInvitacion, MODAL_CONFIG };
}
