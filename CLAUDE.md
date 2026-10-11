# New Website Workshop — jorgeossa.com

Brief para Claude Code. Este archivo resume las decisiones ya tomadas para construir el nuevo sitio de Jorge Ossa Silva (JOS). Léelo completo antes de empezar y úsalo como fuente de verdad durante todo el proyecto.

## Contexto

- JOS es director creativo, productor de video y fotógrafo, basado en Santiago, Chile.
- Su sitio actual es **photobyjos.com**, en Squarespace, y muestra solo fotografía.
- El nuevo sitio pasa de portafolio fotográfico a **presencia online completa**: currículum y portafolio de dirección creativa, video y fotografía.
- Nuevo dominio: **jorgeossa.com** (comprado el día del workshop). En pantalla se usa el seudónimo **JOS**.
- Se construye en un solo día de trabajo (workshop, lunes feriado). Parte del objetivo es medir cuánto toma sacar el sitio.

## Objetivo del día

Al cerrar el workshop:

- Sitio publicado y navegable en el dominio nuevo.
- About escrito y publicado.
- Al menos 8–12 trabajos cargados en Artworks con sus filtros, más los proyectos de Personal.
- photobyjos.com redirigiendo con 301 al dominio nuevo.

Si el día se aprieta, se recorta la cantidad de trabajos cargados, nunca el About ni la publicación. Un sitio con 8 trabajos en línea vale más que uno con 30 sin publicar.

## Decisiones tomadas

| Tema | Decisión |
| --- | --- |
| Plataforma | Sitio a medida, construido con Claude Code. Sin CMS ni constructor visual. |
| Código | Repositorio en GitHub (guarda el código y el historial de cambios). |
| Hosting | Hosting estático conectado al repo (Vercel por defecto; Netlify es alternativa válida). Cada push a `main` publica. |
| Migración | Redirección 301 de photobyjos.com a jorgeossa.com. Squarespace se cancela solo cuando el sitio nuevo esté en línea. |
| Tienda | No en esta versión. Más adelante, venta de algunos cuadros con un botón de pago por obra (Shopify Buy Button o Stripe Payment Links), embebido en el sitio. Dejar la estructura preparada para sumarlo sin rediseñar. |
| Videos | Embebidos desde Vimeo o YouTube, nunca alojados como archivos en el repo. |

## Stack técnico

- Sitio **estático**, simple y rápido. Recomendación: **Astro** con salida estática y content collections (un archivo markdown por trabajo). Si propones otra cosa, explica por qué antes de cambiar.
- Sin frameworks pesados ni dependencias innecesarias. Poco JavaScript; el filtrado de Artworks puede resolverse con JS mínimo o CSS.
- Imágenes optimizadas y responsivas (varios tamaños, lazy loading, formato moderno). Originales de ~2500 px en el lado largo, sRGB.
- Mobile first: todo se revisa en celular antes de darse por bueno.
- SEO básico: título, descripción e imagen para compartir por página.

**Principio clave:** agregar un trabajo nuevo tiene que ser trivial. Idealmente, crear un archivo markdown con su ficha y dejar las imágenes en su carpeta. JOS va a actualizar el sitio pidiéndoselo a Claude, así que la estructura de contenido debe ser clara y predecible.

## Arquitectura del sitio

Menú principal, en este orden:

1. **Artworks**
2. **Personal**
3. **About**
4. **Contacto**

### Artworks

- Todo el trabajo por encargo y obra en **una sola grilla**, imagen de portada + título debajo de cada trabajo.
- **Filtros** en una línea sobre la grilla: Todo · Fotografía · Video · Books · Commercial.
- Un trabajo puede tener más de un filtro (por ejemplo, un comercial grabado en video aparece en Video y en Commercial).
- Cada trabajo abre su **ficha**: portada, galería de imágenes o video embebido, título, año, cliente o contexto, y una línea de texto.

### Personal

- Sección propia en el menú, no un filtro de Artworks.
- Proyectos documentales a largo plazo: Palma Chilena, F83, Sant Antoni y los que vengan.
- Mantiene la lógica de proyectos que tiene hoy photobyjos.com.
- Pendiente definir si cada proyecto es una página larga tipo fotolibro o usa la misma ficha que Artworks (ver Preguntas abiertas).

### About

- Texto narrativo en primera persona: biografía, forma de trabajo, en qué está trabajando hoy, medios en los que trabaja (dirección creativa, video, fotografía).
- Columna de credenciales: colaboraciones, clientes, formación.
- Retrato opcional.
- **El texto lo escribe JOS.** Claude ayuda a ordenar y afinar, no a redactar por él.

### Contacto

- Email directo, Instagram, Vimeo. Santiago, Chile.

### Modelo de contenido sugerido (ficha de trabajo)

```yaml
title: ""
slug: ""
year: 2026
filters: [video, commercial]   # fotografia | video | books | commercial
client: ""                     # o contexto, opcional
description: ""                # una línea
cover: ./cover.jpg
gallery: []                    # imágenes, en orden
video: ""                      # URL de Vimeo o YouTube, opcional
order: 0                       # para ordenar la grilla manualmente
```

## Dirección de diseño

**La base es la estética propia de JOS: sobria, austera, con la fotografía como protagonista.** Las referencias son inspiración, no plantillas. No copiar ningún sitio.

| Referencia | Qué se toma | Qué no se toma |
| --- | --- | --- |
| Max Siedentopf | Solo la estructura: grilla de trabajos con imagen + título, filtros por medio en una línea, navegación mínima | Su tipografía condensada gigante y su tono visual |
| Pablo Escudero | El protagonismo de la fotografía: fondo blanco, imágenes al centro, header discreto de una línea en tipografía pequeña | La densidad extrema de miniaturas, si esconde los trabajos comerciales |
| César Pesquera | El blanco y negro tipográfico: texto negro sobre blanco, About narrativo con links dentro del texto, columna lateral de credenciales | — |

Lineamientos:

- Blanco y negro. El color lo ponen las fotos.
- Una sola familia tipográfica, tamaños contenidos. Nada de tipografía decorativa.
- Mucho aire. Nada de sombras, gradientes, animaciones llamativas ni elementos de plantilla.
- Si algo compite con las imágenes, se quita.

## Cómo trabajar con JOS

JOS dirige el diseño describiendo y reaccionando; Claude traduce a medidas concretas. No esperes que hable en píxeles.

1. **Panel de ajuste.** Para decisiones de grilla y tipografía, arma una página de prueba con controles deslizables (columnas, espacio entre imágenes, tamaño de letra, márgenes). JOS los mueve hasta que se vea bien y esos valores quedan fijos en el código.
2. **Variantes lado a lado.** Para decisiones de fondo (por ejemplo, la grilla de inicio), muestra dos o tres versiones para elegir.
3. **Lenguaje natural.** Traduce frases como "más aire arriba" o "el menú se siente pesado" a un cambio concreto, y explica brevemente el porqué.
4. **Referencias marcadas.** JOS puede mandar screenshots con lo que le gusta anotado.
5. **Revisión en celular** de cada vista previa.

Preferencias de colaboración:

- Explica el *por qué* de cada recomendación técnica en términos simples. JOS no es programador.
- Nada de cambios estructurales que agreguen mantención sin un beneficio claro.
- Trabaja con su material real desde temprano, no con imágenes de relleno.
- Itera rápido: cada vuelta de diseño debería tomar minutos.
- Comunicación en español.

## Agenda del workshop (lunes)

| Hora | Bloque | Entregable |
| --- | --- | --- |
| 9:00–10:00 | Cerrar decisiones y setup | Dominio comprado, repo en GitHub, hosting conectado, esqueleto del sitio en línea |
| 10:00–12:00 | Diseño base | Tipografía, grilla, header y miniaturas definidos con el panel de ajuste |
| 12:00–13:00 | About | Texto final de JOS, columna de credenciales, contacto |
| 13:00–14:00 | Almuerzo | — |
| 14:00–17:00 | Carga de Artworks y Personal | Trabajos cargados con portada, ficha y filtros |
| 17:00–18:30 | Revisión y móvil | Sitio revisado en celular, textos corregidos, imágenes optimizadas |
| 18:30–19:30 | Publicación | Dominio conectado, 301 desde photobyjos.com, links de Instagram actualizados |

Recomendación: publicar el esqueleto en el dominio temprano (bloque 1) para que todo lo demás sea iterar sobre un sitio que ya está en línea.

## Lo que JOS trae o resuelve ese día

- Cuentas en GitHub y Vercel (gratuitas).
- Acceso al registrador del dominio y a Squarespace.
- Lista de trabajos con su filtro asignado, y lista de proyectos de Personal.
- Por trabajo: portada, imágenes o link de video, título, año, cliente o contexto, una línea de texto.
- Borrador propio del About y lista de colaboraciones, clientes y formación.

## Preguntas abiertas

- [x] Dominio: jorgeossa.com (Cloudflare DNS → Vercel). La dirección oficial es www.jorgeossa.com; jorgeossa.com redirige ahí.
- [ ] Idioma del sitio: inglés, español o bilingüe.
- [ ] Personal: página larga tipo fotolibro por proyecto, o misma ficha que Artworks.
- [ ] Commercial: ¿incluye trabajos de Espacio Blanco y Pinot, o solo encargos de foto y video?
- [ ] Primer trabajo de video a mostrar (por ejemplo, el comercial de Commencal) y si ya está listo para publicarse.

## Después del workshop

- Sumar trabajos de a poco.
- Botón de compra para cuadros seleccionados.
- Actualizar firma de correo y perfiles con el dominio nuevo.

## Estructura del código (creada en el bloque 1)

- `src/content/artworks/<slug>/index.md` + imágenes en la misma carpeta → un trabajo de Artworks. Plantilla en `plantillas/trabajo.md`.
- `src/content/personal/<slug>/index.md` → un proyecto de Personal (mismo formato, sin `filters`).
- `src/content.config.ts` → modelo de la ficha (campos y validación). `buyUrl` queda reservado para la futura tienda.
- `src/site.ts` → nombre, email, Instagram, Vimeo, ciudad, lista de filtros.
- `src/styles/global.css` → todos los valores de diseño (variables al inicio del archivo).
- `src/pages/` → páginas: `index.astro` (Artworks + filtros), `personal/`, `about.astro`, `contacto.astro`.
- `material/` → originales de JOS. No se sube al repo; de ahí se preparan las imágenes (sRGB, ~2500 px lado largo).
- Comandos: `npm run dev` (vista previa local en localhost:4321), `npm run build` (verifica que todo compila).
