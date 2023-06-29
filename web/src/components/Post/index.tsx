'use client'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from './Comment'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType {
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!',
    'Sensacional!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true, // há, cerca de, daqui a
  })

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('') // property to reset the error message of browser
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    // ! TODO: change to use the id of comment, probably the API will return an id
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  // validation to comment <> empty or only spaces
  const isNewCommentEmpty = newCommentText.trim().length === 0

  return (
    <article className="rounded-lg bg-dark-500 p-5 sm:p-10">
      <header className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Avatar
            src={post.author.avatarUrl}
            width={60}
            height={60}
            alt={`Avatar de ${post.author.name}`}
          />
          <div>
            <strong className="block">{post.author.name}</strong>
            <span className="body2 block text-tGray">{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
          className="body2 mt-4 text-tGray sm:mt-0"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 text-tGray">
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content} className="mt-4">
                {line.content}
              </p> // ! TODO: change key, probably the API will return an id
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content} className="mt-4">
                <a
                  href="#"
                  className="accessibilityFocus font-bold text-primary transition-colors lg:hover:text-tertiary"
                >
                  {line.content}
                </a>
              </p> // ! TODO: change key, probably the API will return an id
            )
          } else {
            return null
          }
        })}
      </div>

      <form
        onSubmit={handleCrateNewComment}
        className="mt-6 w-full border-t-2 border-dark-300 pt-6"
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
          className="accessibilityFocus mt-4 h-24 w-full resize-none rounded-lg bg-dark-700 p-4"
        />

        <footer className="mt-4">
          <button
            type="submit"
            disabled={isNewCommentEmpty}
            className="button accessibilityFocus cursor-pointer rounded-lg border-0 bg-primary px-6 py-4 transition-colors disabled:cursor-not-allowed disabled:bg-primary disabled:opacity-50 lg:hover:bg-tertiary"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment} // ! TODO: change key, probably the API will return an id
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
