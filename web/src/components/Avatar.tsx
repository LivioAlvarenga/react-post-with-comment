import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

interface AvatarProps extends ImageProps {
  hasBorder?: boolean
  alt: string
  width: number
  height: number
  src: string
}

export function Avatar({
  hasBorder = true,
  src,
  alt,
  width,
  height,
  ...props
}: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
      className={clsx(' rounded-lg ', {
        'box-content border-2 border-transparent outline outline-2 outline-primary':
          hasBorder,
        '': !hasBorder,
      })}
    />
  )
}
