# Memoria del proyecto — CV de Ángel Cidoncha

Este documento recoge las decisiones, preferencias y correcciones indicadas por Ángel durante la creación de la web. Debe actualizarse cada vez que aporte una nueva sugerencia relevante.

## Objetivo

- Crear una nueva web para el currículum de Ángel Cidoncha.
- Tomar como referencia el CV publicado en `https://angelcidoncha.es/cv/`.
- Actualizar el posicionamiento profesional con la información más reciente de LinkedIn.
- Optimizar y sintetizar el contenido: es un CV, no una biografía ni un caso de estudio detallado.

## Posicionamiento profesional

- Perfil híbrido de diseño web, frontend, WordPress, SEO, automatización y coordinación de proyectos digitales.
- Más de 20 años de experiencia creando soluciones para empresas y equipos de marketing.
- Integrar diseño, desarrollo y estrategia en un único perfil profesional.
- Dar visibilidad a la experiencia reciente en inteligencia artificial y automatización, actualmente ausente o poco representada en el CV publicado.
- No presentar la IA como una simple lista de herramientas añadidas, sino como una capacidad integrada en el trabajo digital.

## Tecnologías y capacidades que deben aparecer

- WordPress.
- Advanced Custom Fields (ACF).
- Custom Post Types (CPT).
- HTML y CSS.
- Astro.
- Arquitecturas Headless CMS, especialmente WordPress + Astro.
- REST API y APIs.
- SEO.
- Core Web Vitals y rendimiento web.
- Codex.
- Claude.
- n8n.
- MCP.
- Agentes de IA.
- Skills.
- Automatización de flujos de trabajo.
- Coordinación de proyectos digitales.

## Herramientas que no deben aparecer

- Make.

## Criterios de contenido

- Mantener el CV directo, profesional, visual y fácil de escanear.
- No explicar en detalle cada automatización.
- No contar toda la trayectoria como una historia extensa.
- Evitar listas exageradas de herramientas.
- Sintetizar la aplicación de IA y automatización en desarrollo, SEO, documentación y coordinación.
- Conservar la experiencia con empresas relevantes cuando aporte credibilidad.
- No inventar proyectos, resultados, cifras ni responsabilidades.

## Calidad técnica y PageSpeed Insights

- Tratar SEO, rendimiento, accesibilidad y buenas prácticas como requisitos permanentes durante toda la construcción.
- Buscar una puntuación alta en las cuatro categorías de PageSpeed Insights/Lighthouse, tanto en móvil como en escritorio.
- Priorizar Core Web Vitals: LCP, INP y CLS.
- Mantener generación estática con Astro y enviar el mínimo JavaScript posible.
- Evitar dependencias, librerías, animaciones y recursos externos innecesarios.
- Optimizar y dimensionar correctamente cualquier imagen antes de incorporarla.
- Cargar fuentes de forma eficiente y evitar bloqueos de renderizado.
- Mantener HTML semántico, jerarquía correcta de encabezados, navegación por teclado y contraste suficiente.
- Incluir metadatos SEO, canonical, Open Graph, datos estructurados y sitemap cuando la estructura final esté definida.
- Revisar el peso total, solicitudes de red y posibles saltos de diseño después de cada módulo relevante.
- Ejecutar auditorías Lighthouse/PageSpeed antes de publicar y corregir problemas reales, sin perseguir puntuaciones mediante trucos que empeoren la experiencia.

## Método de trabajo

- Construir la web por módulos independientes.
- Considerar el Hero como un módulo propio.
- Diseñar, implementar y revisar cada módulo antes de continuar con el siguiente.
- Mantener cada módulo como un componente Astro separado cuando tenga sentido.
- Evitar construir toda la página de una vez sin validar previamente sus bloques principales.

## Dirección visual

- Usar `https://thelocalhost.es/` como referencia principal de look & feel.
- Adaptar ese lenguaje visual al CV de Ángel, sin realizar una copia literal.
- Mantener su contraste alto, composición editorial y estética tecnológica.
- Usar titulares expresivos inspirados en Bebas Neue y texto funcional inspirado en Inter.
- Tomar como referencia su base oscura, texto blanco cálido y acentos verde menta y lavanda.
- Reinterpretar sus recursos de interfaz técnica y terminal de forma adecuada para un CV.
- Incorporar un selector manual para alternar entre tema claro y tema oscuro.
- Ambos temas deben formar parte del sistema visual y estar cuidados por igual.
- Recordar la preferencia de tema del usuario entre visitas.

## Estructura prevista

- Perfil.
- Capacidades principales.
- Experiencia profesional.
- Experiencia freelance.
- Tecnologías y herramientas.
- Contacto.

## Decisión — 7 de septiembre de 2026: Experiencia profesional fuera del alcance por ahora

- Ángel considera que detallar Experiencia profesional/freelance (puestos, fechas) es un "coñazo" y no aporta lo suficiente en la web.
- Decisión: con Habilidades + Empresas (Brands) + Portfolio es suficiente para la web. Si alguien se interesa por el detalle de la trayectoria, se lo puede facilitar él directamente.
- No proponer de nuevo un módulo de Experiencia salvo que Ángel lo pida explícitamente.
- Portfolio es el siguiente módulo a construir tras el Hero.

## Tecnología de la web

- Astro como framework principal.
- TypeScript en modo estricto.
- CSS propio y moderno.
- JavaScript mínimo y solo cuando sea necesario.
- Implementar el cambio de tema claro/oscuro con JavaScript ligero y variables CSS.
- Generación estática orientada a rendimiento, SEO y Core Web Vitals.
- Contenido estructurado para facilitar su mantenimiento.
- Preparar la web para español e inglés, pendiente de confirmación definitiva.
- Evitar WordPress, React, Next.js y arquitecturas innecesariamente complejas para este proyecto.

## Estado actual

- Base de Astro creada en la raíz del proyecto.
- Dependencias instaladas.
- Compilación estática verificada.
- Nombre del paquete: `cv-angel-cidoncha`.

## Reinicio visual — 2 de septiembre de 2026

- Descartar todo el diseño anterior de la página.
- Conservar la base Astro y el contenido profesional útil.
- Usar `thelocalhost.es` como referencia para un clon estético del sistema visual.
- Empezar únicamente por el módulo de Habilidades.
- Crear cuatro tarjetas: Diseño y maquetación, Desarrollo WordPress, Headless y rendimiento, e IA y automatización.
- Las tarjetas deben mostrarse cerradas en una cuadrícula 2×2 y expandirse individualmente al abrirse.
- Los títulos de las tarjetas deben ser más grandes en escritorio, manteniendo la escala móvil.
- Usar exactamente el logotipo de `thelocalhost.es` porque ambas páginas son hermanas.
- Adaptar el texto del logotipo para esta página: `A.G. Cidoncha` y el subtítulo `Diseño · Desarrollo · Automatización`.
- Compactar el encabezado para que las cuatro tarjetas puedan verse juntas en la primera pantalla.
- Título del módulo reiniciado: `Habilidades profesionales`.
- Título definitivo del módulo: `Perfil técnico y creativo`.
- Subtítulo definitivo: `Diseño, desarrollo e IA aplicados a proyectos digitales.`
- Recuperar el selector manual de tema claro y oscuro dentro de la nueva estética.
- Guardar la preferencia de tema entre visitas.
- Descartar el primer botón de tema con una única palabra por ser poco claro y visualmente débil.
- Usar un selector segmentado `Noche / Día` que muestre simultáneamente ambas opciones y destaque el estado activo.
- Representar Noche y Día mediante iconos de media luna y sol, manteniendo etiquetas accesibles y sin añadir dependencias.
- Mantener también las palabras `Noche` y `Día` junto a sus respectivos iconos.

## Propuestas pendientes de aprobación

### Hero

- Presentación editorial y tecnológica, con mucho aire y una jerarquía tipográfica contundente.
- Antetítulo: `DISEÑO · DESARROLLO · SEO · AUTOMATIZACIÓN · IA`.
- Nombre: `Ángel G. Cidoncha`.
- Titular propuesto: `Conecto diseño, tecnología e IA para convertir ideas en soluciones digitales.`
- Descripción propuesta: `Perfil híbrido con más de 20 años de experiencia en diseño web, frontend, WordPress, SEO, automatización y coordinación de proyectos.`
- Acciones propuestas: `Ver experiencia` y `Contactar`.
- Indicadores breves: `20+ años de experiencia`, `10+ años formando` y `Madrid · España`.
- Añadir una pieza visual técnica discreta inspirada en The Localhost, relacionada con el flujo `Diseño → Desarrollo → Automatización`, sin convertir el Hero en una demostración de producto.
- Incluir en la cabecera los controles de idioma y tema claro/oscuro.

### Correcciones aprobadas del Hero

- Eliminar el botón `Contactar` del Hero.
- Eliminar la tarjeta visual `workflow.cv` completa.
- Eliminar los indicadores `20+ años de experiencia`, `10+ años formando` y `Madrid · España · Remoto` del pie del Hero.
- Mantener el Hero más limpio y centrado en el mensaje principal.
- Descartar el titular `Conecto diseño, tecnología e IA para convertir ideas en soluciones digitales` por ser demasiado largo.
- El nuevo titular debe ser corto, directo y fácil de recordar.
- Titular principal aprobado: `Diseño, desarrollo y automatización.`
- Dar más separación vertical entre el nombre y el titular principal del Hero.
- La eliminación de `workflow.cv` no implica eliminar definitivamente la columna derecha del Hero.

### Pruebas visuales del Hero

- Probar una columna derecha abstracta con monograma `AGC`, retícula técnica y etiquetas mínimas de diseño, desarrollo y automatización.
- Esta pieza es una prueba pendiente de aprobación y no debe considerarse definitiva.

### Módulo Habilidades

- Título anterior descartado: `Diseño, frontend y estructura WordPress.`
- Título aprobado: `AI Solutions · Web & Digital Project Manager · WordPress · Frontend · SEO`.
- Introducción: `Un perfil construido alrededor de la calidad visual, la implementación técnica y la arquitectura de contenido.`
- Mantener los bloques de Diseño y maquetación, WordPress y Headless y rendimiento.
- Añadir un nuevo bloque específico de `IA y automatización`.
- Contenido inicial del bloque: Codex y Claude, automatización con n8n, APIs y conectores MCP, agentes y skills, y flujos de trabajo asistidos por IA.
- Mostrar IA y automatización como una capacidad integrada y con peso propio, manteniendo una redacción breve de CV.
- Mostrar el título aprobado centrado y en dos líneas exactas: `AI Solutions · Web & Digital Project Manager` / `WordPress · Frontend · SEO`.
- Descartar la cuadrícula de cuatro tarjetas más un bloque destacado porque resulta caótica y desalineada.
- Presentar las categorías como filas editoriales uniformes: número, nombre de categoría y habilidades alineadas.
- Integrar las habilidades de Frontend dentro de `Diseño y maquetación`, eliminando Frontend como categoría independiente.
- Sustituir las filas por tarjetas interactivas inspiradas en `thelocalhost.es`.
- Estado cerrado: cuadrícula de tarjetas grandes con número, categoría y acción de apertura.
- Estado abierto: una sola tarjeta ocupa todo el ancho y muestra sus habilidades; debe incluir una acción clara para cerrarla y volver a la cuadrícula.

## Ampliación módulo Habilidades — 4 de septiembre de 2026

- Proyecto hermano de referencia técnica: `/Volumes/Macintosh HD2/Desarrollo AI/Thelocalhost/astro-thelocalhost` (componente `Objectives.astro`), usado solo como fuente de patrones a adaptar. No se modifica ese proyecto.
- Se implementó el patrón "tactile board" de ese componente en las tarjetas de Habilidades: arrastre táctil con asa `···` (Pointer Events) para reordenar las cuatro tarjetas cuando ninguna está abierta.
- Cada tarjeta abierta añade, junto al listado de competencias ya existente, un párrafo de introducción y un flujo animado de 4 pasos (icono, título, descripción, estado) específico por categoría, con texto redactado para el CV (sin lenguaje de agencia ni resultados inventados).
- Todo el nuevo estilo reutiliza las variables de tema existentes (`--accent`, `--surface`, `--text`, etc.) mediante `color-mix()`, en vez del patrón `rgba(var(--card-accent))` del proyecto de referencia, para mantener compatibilidad con el selector Noche/Día.
- Implementado y verificado en navegador: apertura/cierre, animación del flujo y reordenación por arrastre funcionan sin errores de consola.
