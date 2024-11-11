'use client'
 
export default function ImageLoader({ src, width, quality }) {
  return `${src}?w=${width || 200}&q=${quality || 75}`
}