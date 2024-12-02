import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tricost',
    short_name: 'Tricost',
    description: 'A cost accumulator for your next trip',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}