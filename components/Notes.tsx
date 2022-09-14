/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react'
import styles from '../styles/Notes.module.css'

interface ImageProps {
  id: string
  src: string
  srcset?: string
  width: number
  height: number
  alt: string
}

const Image: React.FC<ImageProps> = ({ id, src, srcset, width, height, alt, ...nextProps }) => {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const imageElement = entries[0]
      if (imageElement.isIntersecting) {
        const lazyImage = imageElement.target
        if (imageRef.current !== null) {
          imageRef.current.src = src
          if (srcset !== undefined) imageRef.current.srcset = srcset
          observer.unobserve(lazyImage)
          observer.disconnect()
        }
      }
    })

    if (imageRef.current !== null) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  })

  return (
    <div id={id} className={styles.notesImageWrapper}>
      <img
        ref={imageRef}
        className={styles.notesImage}
        width={width}
        height={height}
        src="https://cds.neoauto.pe/neoauto3/img/point.png"
        alt={alt}
        {...nextProps} />
    </div>
  )
}

const Notes: React.FC = () => {
  return (
    <div className={styles.notes}>
      <Image
        id="gallery-one"
        src="https://cde.neoauto.pe/autos_usados/540x360/663162/663162_8574866.jpg"
        srcset="
          https://cde.neoauto.pe/autos_usados/196x165/663162/663162_8574866.jpg 196w,
          https://cde.neoauto.pe/autos_usados/360x240/663162/663162_8574866.jpg 360w,
          https://cde.neoauto.pe/autos_usados/540x360/663162/663162_8574866.jpg 540w,
          https://cde.neoauto.pe/autos_usados/960x584/663162/663162_8574866.jpg 960w"
        width={960}
        height={584}
        alt="gallery-one" />
      <Image
        id="gallery-two"
        src="https://cde.neoauto.pe/autos_usados/540x360/663162/663162_9022346.jpg"
        width={960}
        height={584}
        alt="gallery-two" />
    </div>
  )
}

export default Notes
