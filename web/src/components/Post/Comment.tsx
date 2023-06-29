'use client'

import { Dot, ThumbsUpIcon, Trash2Icon } from 'lucide-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row">
      <Avatar
        src="https://github.com/filipedeschamps.png"
        width={50}
        height={50}
        alt="img perfil Filipe Deschamps"
        hasBorder={false}
      />

      <div className="w-full flex-1">
        <div className="rounded-lg bg-dark-300 p-4">
          <header className="flex items-start justify-between">
            <div>
              <strong className="block">Filipe Deschamps</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-05-11 08:13:00"
                className="caption block text-tGray"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className="accessibilityFocus leading-0 group cursor-pointer rounded-sm border-0 bg-transparent transition-colors "
            >
              <Trash2Icon
                size={24}
                className="text-tGray lg:group-hover:text-fail"
              />
            </button>
          </header>

          <p className="mt-4 text-tGray">{content}</p>
        </div>

        <footer className="mt-4 text-tGray">
          <button
            onClick={handleLikeComment}
            className="accessibilityFocus flex cursor-pointer items-center rounded-sm border-0 bg-transparent transition-colors lg:hover:text-primary"
          >
            <ThumbsUpIcon size={20} className="mr-2" />
            Aplaudir
            <Dot className="ml-2" />
            <span className="px-1">{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
