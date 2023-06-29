import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Post, PostType } from '@/components/Post'
import { Sidebar } from '@/components/Sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/omariosouto.png',
      name: 'Mario Souto',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo architecto beatae eaque sed alias, reiciendis totam, ipsam ratione error deserunt nobis est, sit rem tempore harum dicta nesciunt pariatur delectus',
      },
      { type: 'link', content: 'www.design/lorem' },
      { type: 'link', content: '#react #project #helloWorld' },
    ],
    publishedAt: new Date('2023-06-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😁' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo architecto beatae eaque sed alias, reiciendis totam, ipsam ratione error deserunt nobis est, sit rem tempore harum dicta nesciunt pariatur delectus fdgfg',
      },
      { type: 'link', content: 'jwww.design/lorem' },
      { type: 'link', content: '#react #project #typescript' },
    ],
    publishedAt: new Date('2023-06-10 20:00:00'),
  },
]

export default function Home() {
  const textShadow = {
    color: '#ffffff',
    textShadow:
      '0 0 10px #26a9e0, 0 0 20px #26a9e0, 0 0 40px #26a9e0, 0 0 80px #26a9e0',
  }
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Header />
      <h1 className="wrapper headline6 sm:headline4 lg:headline2 mt-5 font-playfair400 text-tGray  sm:text-center lg:max-w-5xl">
        Projeto de post com comentário utilizando{' '}
        <b style={textShadow}>Nextjs 13 App Router</b>, React, Typescript e
        Tailwindcss.
      </h1>
      <div className="wrapper my-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[300px,1fr]">
        <Sidebar />
        <main className="flex flex-col gap-8">
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
      <Footer />
    </main>
  )
}
