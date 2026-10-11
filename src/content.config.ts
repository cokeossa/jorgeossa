import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ficha de trabajo. Cada trabajo es una carpeta con un index.md y sus imágenes:
//   src/content/artworks/<slug>/index.md
//   src/content/artworks/<slug>/cover.jpg, 01.jpg, 02.jpg...
const ficha = ({ image }: { image: () => any }) =>
  z.object({
    title: z.string(),
    heading: z.string().optional(), // título dentro de la ficha, si es distinto al de la grilla
    year: z.number().optional(),
    client: z.string().optional(), // cliente o contexto
    description: z.string().optional(), // una línea
    cover: image(),
    gallery: z.array(image()).default([]), // en orden
    // Disposición de la galería:
    //   grid  → grilla pareja: columns y ratio (recorte), ej. { type: grid, columns: 4, ratio: 4 / 3 }
    //   free  → collage: una caja [x, y, ancho, alto] por foto, en % del ancho de la página
    //   stack → una foto bajo otra (por defecto)
    galleryLayout: z
      .object({
        type: z.enum(['stack', 'grid', 'free']),
        columns: z.number().default(2),
        ratio: z.string().optional(),
        boxes: z.array(z.array(z.number()).length(4)).optional(),
      })
      .default({ type: 'stack', columns: 2 }),
    video: z.string().url().optional(), // URL de Vimeo o YouTube
    order: z.number().default(0), // menor número = más arriba en la grilla
    size: z.number().min(10).max(100).optional(), // % del ancho de su columna en la grilla (100 = completo)
    draft: z.boolean().default(false), // true = no se publica
    // Preparado para la tienda (aún no se usa): link de pago por obra
    buyUrl: z.string().url().optional(),
  });

const artworks = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/artworks' }),
  schema: ({ image }) =>
    ficha({ image }).extend({
      filters: z.array(z.enum(['fotografia', 'video', 'books', 'commercial'])).default([]),
    }),
});

const personal = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/personal' }),
  schema: ({ image }) =>
    ficha({ image }).extend({
      filters: z.array(z.enum(['personal', 'palma-chilena', 'barcelona'])).default([]),
    }),
});

export const collections = { artworks, personal };
