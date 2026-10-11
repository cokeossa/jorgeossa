// Datos generales del sitio. Cambiar aquí, se actualiza en todas las páginas.
export const SITE = {
  name: 'JOS', // seudónimo: logo y títulos de pestaña
  fullName: 'Jorge Ossa Silva', // para buscadores
  description: 'JOS (Jorge Ossa Silva). Director creativo, productor de video y fotógrafo. Santiago, Chile.',
  lang: 'es',
  email: '', // pendiente
  instagram: '', // URL completa, pendiente
  vimeo: '', // URL completa, pendiente
  city: 'Santiago, Chile',
};

export const FILTERS = [
  { id: 'fotografia', label: 'Fotografía' },
  { id: 'video', label: 'Video' },
  { id: 'books', label: 'Books' },
  { id: 'commercial', label: 'Commercial' },
] as const;

// Convierte un link normal de Vimeo o YouTube en su versión para embeber.
export function embedUrl(url: string): string | null {
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/);
  // app_id es el que usa el código de inserción oficial de Vimeo; sin él el reproductor puede quedar en blanco
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?app_id=122963${vimeo[2] ? `&h=${vimeo[2]}` : ''}`;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return null;
}
