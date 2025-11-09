# 🎉 Modal de Invitación - Componente Reutilizable

Un componente completo de modal de bienvenida con efectos especiales, animaciones estilo TikTok y reproducción automática de música. Perfecto para invitaciones de eventos, páginas de bienvenida y landing pages especiales.

## ✨ Características

- 🎬 Modal de bienvenida con animaciones dramáticas
- 🎵 Reproductor de música con autoplay opcional
- ✨ Efectos de partículas y destellos animados
- 📱 Totalmente responsive (móvil, tablet, desktop)
- ⚡ Animaciones fluidas con efectos de fade
- 🎨 Fácilmente personalizable
- 🔧 Configuración mediante JavaScript
- ♿ Accesibilidad con soporte para teclado (Escape para cerrar)

## 📦 Archivos del Componente

```
components/
├── modal-invitacion.html    # Estructura HTML del modal
├── modal-invitacion.css     # Estilos y animaciones
├── modal-invitacion.js      # Lógica y controles
└── README.md               # Esta documentación
```

## 🚀 Instalación Rápida

### Paso 1: Copiar los archivos

Copia la carpeta `components` a tu proyecto.

### Paso 2: Incluir en tu HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Invitación</title>
    
    <!-- CSS del componente -->
    <link rel="stylesheet" href="components/modal-invitacion.css">
</head>
<body>
    <!-- Incluir el HTML del modal -->
    <!-- Opción 1: Copiar directamente desde modal-invitacion.html -->
    
    <!-- Modal de bienvenida -->
    <div id="modal-invitacion" class="modal" data-modal="welcome">
        <h2>Estás invitado</h2>
        <p>Una celebración muy especial te espera</p>
        <img src="lineas.svg" class="lineas" alt="">
        <img src="nombres.svg" class="nombre" alt="">
        <br><br>
        <button id="btn-ver-invitacion">
            <img src="cartas.png" class="carta" alt="">
        </button>
    </div>

    <!-- Lightbox para efecto fade -->
    <div class="lightbox" id="fade-lightbox"></div>

    <!-- Reproductor de música (opcional) -->
    <div class="player" role="region" style="display: none;" aria-label="Reproductor de música">
        <audio id="audio" preload="metadata">
            <source src="musica.mp3" type="audio/mp3">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <button id="playPause" aria-label="Reproducir" title="Reproducir">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
        </button>
    </div>

    <!-- Tu contenido principal -->
    <div id="contenido">
        <!-- Aquí va el contenido de tu página -->
    </div>

    <!-- JavaScript del componente -->
    <script src="components/modal-invitacion.js"></script>
</body>
</html>
```

## ⚙️ Configuración

### Configuración Básica (Automática)

El componente funciona automáticamente con la configuración por defecto. Solo necesitas incluir los archivos.

### Configuración Personalizada

Puedes personalizar el comportamiento del modal:

```javascript
// Crear instancia con configuración personalizada
const modalPersonalizado = new ModalInvitacion({
    // Reproducir música automáticamente al cerrar el modal
    autoplay: true,
    
    // Mostrar el reproductor de música
    showPlayer: true,
    
    // Tiempos de animación (en milisegundos)
    fadeTime: 300,
    modalCloseTime: 500,
    contentShowTime: 200,
    
    // Elementos a animar después del modal (opcional)
    elementosAnimacion: [
        { selector: '.titulo', delay: 500 },
        { selector: '.descripcion', delay: 800 },
        { selector: '.boton', delay: 1100 }
    ]
});
```

## 🎨 Personalización de Estilos

### Cambiar Colores

Edita las variables en `modal-invitacion.css`:

```css
/* Cambiar el color dorado por tu color de marca */
.modal button {
    background: linear-gradient(135deg, #tu-color-1 0%, #tu-color-2 50%, #tu-color-1 100%);
}

/* Cambiar colores de las partículas */
.modal::before {
    background: linear-gradient(45deg,
        rgba(tu-color-r, tu-color-g, tu-color-b, 0.8),
        rgba(tu-color-r, tu-color-g, tu-color-b, 0.3)
    );
}
```

### Cambiar Imagen de Fondo

```css
.modal {
    background: url("ruta/a/tu/imagen.jpg");
    background-size: cover;
}
```

### Cambiar Fuentes

```css
.modal h2,
.modal p {
    font-family: 'Tu-Fuente', sans-serif;
}
```

## 📝 Personalizar Contenido

### Cambiar Textos

```html
<div id="modal-invitacion" class="modal">
    <h2>Tu Título Aquí</h2>
    <p>Tu mensaje de bienvenida aquí</p>
    <!-- resto del código -->
</div>
```

### Cambiar Imágenes

Reemplaza las imágenes en el HTML:

```html
<img src="tu-imagen-lineas.svg" class="lineas" alt="">
<img src="tu-imagen-nombre.svg" class="nombre" alt="">
<img src="tu-imagen-boton.png" class="carta" alt="">
```

### Cambiar Música

```html
<audio id="audio" preload="metadata">
    <source src="ruta/a/tu/musica.mp3" type="audio/mp3">
</audio>
```

## 🎯 Ejemplos de Uso

### Ejemplo 1: Modal Simple Sin Música

```javascript
const modalSimple = new ModalInvitacion({
    autoplay: false,
    showPlayer: false,
    elementosAnimacion: [] // Sin animaciones adicionales
});
```

### Ejemplo 2: Modal con Animaciones Personalizadas

```javascript
const modalAnimado = new ModalInvitacion({
    autoplay: true,
    showPlayer: true,
    elementosAnimacion: [
        { selector: '.hero-title', delay: 300 },
        { selector: '.hero-subtitle', delay: 600 },
        { selector: '.cta-button', delay: 900 }
    ]
});
```

### Ejemplo 3: Controlar el Modal Programáticamente

```javascript
// Cerrar el modal desde código
window.modalInvitacion.close();

// Reproducir/pausar música
window.modalInvitacion.toggleMusic();
```

## 📱 Responsive

El componente es totalmente responsive:

- **Móvil** (< 768px): Botón del modal más grande, imágenes adaptadas
- **Tablet/Desktop** (≥ 768px): Vista completa con todas las animaciones

## ♿ Accesibilidad

- ✅ Soporte para navegación con teclado
- ✅ Cerrar modal con tecla `Escape`
- ✅ Atributos ARIA para lectores de pantalla
- ✅ Contraste de colores adecuado

## 🐛 Troubleshooting

### La música no se reproduce automáticamente

La mayoría de navegadores bloquean el autoplay de audio. Esto es normal. Los usuarios deben interactuar con la página primero (hacer clic en el botón del modal).

### Las animaciones no funcionan

Asegúrate de que:
1. El CSS está correctamente cargado
2. Los selectores en `elementosAnimacion` coinciden con tus elementos
3. Los elementos existen en el DOM

### El modal no se cierra

Verifica que:
1. El JavaScript está correctamente cargado
2. Los IDs de los elementos coinciden con la configuración
3. No hay errores en la consola del navegador

## 🔧 Requerimientos

- Navegadores modernos con soporte para:
  - CSS3 (animaciones, transformaciones, gradientes)
  - ES6 (clases, arrow functions, template literals)
  - HTML5 Audio

## 📄 Licencia

Este componente es de uso libre. Puedes usarlo en proyectos personales y comerciales.

## 🤝 Contribuciones

¿Mejoras o sugerencias? Siéntete libre de modificar y mejorar el componente según tus necesidades.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, consulta los ejemplos incluidos o revisa el código fuente comentado.

---

**¡Disfruta creando invitaciones increíbles! 🎉**
