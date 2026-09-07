# Design QA — Módulo Habilidades

## Evidencia

- Fuente visual: `/Users/agcidoncha/Desktop/Captura de pantalla 2026-09-02 a las 13.52.11.png`
- Captura implementada, estado cerrado: `/Volumes/Macintosh HD2/Desarrollo AI/CVcidoncha/skills-reset-closed.png`
- Captura implementada, estado abierto: `/Volumes/Macintosh HD2/Desarrollo AI/CVcidoncha/skills-reset-open.png`
- Comparación conjunta: `/Volumes/Macintosh HD2/Desarrollo AI/CVcidoncha/qa-reset-closed.png`
- Viewport de implementación: 1834 × 900 CSS px, device scale 1.
- Fuente: 3668 × 1800 px, normalizada visualmente a 1834 × 900 para la comparación.
- Estado comprobado: cuadrícula cerrada y primera tarjeta abierta.

## Comparación visual

### Vista completa

- La composición reproduce el fondo oscuro, la cabecera fina, el titular condensado centrado, las tarjetas de gran formato, los bordes coloreados y la jerarquía tipográfica de la referencia.
- La implementación utiliza una cuadrícula 2×2 porque el CV tiene cuatro categorías; la referencia utiliza 3×2 porque contiene seis objetivos. Es una adaptación intencional del patrón, no una desviación.
- La marca, el título y el contenido se han sustituido por los del CV manteniendo las proporciones y el lenguaje visual.

### Región focal

- Se revisaron específicamente las tarjetas: radio, borde, fondo, metadatos superiores, titular, acción y separación entre filas.
- El estado abierto conserva una única tarjeta, amplía el título, ofrece cierre visible y presenta las competencias en una retícula interna.

## Superficies de fidelidad

- Tipografía: Bebas Neue para titulares e Inter/monoespaciada para interfaz; jerarquía, peso, mayúsculas y espaciado coherentes con la referencia.
- Ritmo y composición: cabecera, introducción y cuadrícula compactadas para mostrar las cuatro tarjetas en la primera pantalla.
- Color: fondo azul-negro, texto blanco, secundarios gris azulado y un acento distinto por categoría.
- Imágenes y recursos: el módulo no requiere imágenes; no hay recursos rasterizados ni placeholders.
- Contenido: cuatro categorías y listas adaptadas al perfil profesional solicitado.

## Interacción y accesibilidad

- Cuatro tarjetas detectadas en estado cerrado.
- Al abrir una tarjeta, solo esa tarjeta permanece visible y ocupa todo el ancho.
- El control alterna correctamente entre `Abrir` y `Cerrar`.
- No se detectaron errores de consola.
- Se usan elementos nativos `details` y `summary`, accesibles mediante teclado.

## Historial de ajustes

- P2 inicial: el encabezado ocupaba demasiada altura y recortaba la segunda fila en la primera pantalla.
- Corrección: se sustituyó por un título compacto de una línea, se redujeron los espacios verticales y la altura de las tarjetas.
- Evidencia posterior: la cuadrícula 2×2 queda visible y mantiene proporciones cercanas a la referencia.

## Resultado

No quedan diferencias P0, P1 o P2 accionables. Las diferencias de cantidad de columnas, marca, textos y botón con etiqueta son adaptaciones deliberadas al contenido del CV.

final result: passed
