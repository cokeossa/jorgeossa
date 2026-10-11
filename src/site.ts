// Datos generales del sitio. Cambiar aquí, se actualiza en todas las páginas.
export const SITE = {
  name: 'JOS', // seudónimo: logo y títulos de pestaña
  fullName: 'Jorge Ossa Silva', // para buscadores
  description: 'JOS (Jorge Ossa Silva). Director creativo, productor de video y fotógrafo. Santiago, Chile.',
  lang: 'es',
  email: 'jos@espacioblan.co',
  instagram: 'https://www.instagram.com/cokeossa/',
  spotify: 'https://open.spotify.com/user/cokeossasilva',
  youtube: 'https://www.youtube.com/channel/UChFEjgo4E8fyPB8PsKuJlFA',
  vimeo: '', // URL completa, pendiente
  city: 'Santiago, Chile',
};

// Calidad de compresión de las fotos (0–100). Astro usa 80 por defecto, lo que borra el grano
// de película; con 92 las fotos quedan casi iguales al archivo, a costa de pesar ~2 veces más.
export const IMAGE_QUALITY = 92;

export const FILTERS = [
  { id: 'fotografia', label: 'Fotografía' },
  { id: 'video', label: 'Video' },
  { id: 'books', label: 'Books' },
  { id: 'commercial', label: 'Commercial' },
] as const;

// Filtros de la página Personal (parte seleccionado el primero)
export const PERSONAL_FILTERS = [
  { id: 'personal', label: 'Personal' },
  { id: 'palma-chilena', label: 'Palma Chilena' },
  { id: 'barcelona', label: 'Barcelona' },
] as const;

// Convierte un link normal de Vimeo o YouTube en su versión para embeber.
export function embedUrl(url: string): string | null {
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/);
  // app_id es el que usa el código de inserción oficial de Vimeo; sin él el reproductor puede quedar en blanco
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?app_id=122963${vimeo[2] ? `&h=${vimeo[2]}` : ''}`;
  // Reproductor de Behance/Adobe: ya viene listo para insertar
  if (/^https:\/\/www-ccv\.adobe\.io\/.+\/embed/.test(url)) return url;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return null;
}
