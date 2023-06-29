import { Edit3Icon } from 'lucide-react'
import Image from 'next/image'
import { Avatar } from '../Avatar'

export function Sidebar() {
  return (
    <aside className="w-full overflow-hidden rounded-lg bg-dark-500 sm:mx-auto sm:max-w-[300px]">
      <figure className="relative h-[120px] w-full">
        <Image
          src="/background-perfil.jpg"
          fill
          priority={true}
          alt="imagem de fundo preto com letras e caracteres de programação verdes caindo verticalmente"
          className="object-cover"
        />
      </figure>

      <div className="relative mt-[calc(0px_-_1.5rem_-_6px)] flex flex-col items-center">
        <Avatar
          src="https://github.com/LivioAlvarenga.png"
          width={60}
          height={60}
          alt="img perfil Livio Alvarenga"
        />

        <strong className="mt-4">Livio Alvarenga</strong>
        <span className="caption text-tGray">Fullstack Developer</span>
      </div>

      <footer className="mt-5 border-t border-dark-300 px-8 py-6">
        <a
          href="#"
          className="accessibilityFocus button flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-4 font-bold text-primary decoration-0 duration-100 lg:hover:bg-primary lg:hover:text-dark-500"
        >
          <Edit3Icon size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
