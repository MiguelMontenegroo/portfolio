import {Post, PostType} from "./components/Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./app.module.css"
import { Sidebar } from "./components/Sidebar"



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MiguelMontenegroo.png",
      name: "Miguel Montenegro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portfolio. é uma rede social" },
      { type: "link", content: "https://www.labeddit-miguel.surge.sh/" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/projeto-completo" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/projeto-completo-back" }
    ],
    publishedAt: new Date("2023-11-06 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MiguelMontenegroo.png",
      name: "Miguel Montenegro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      { type: "paragraph", content: "checa a minha pokedex que usou a API publica" },
      { type: "link", content: "https://www.pokedex-miguel.surge.sh" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/projeto-react-apis" }
    ],
    publishedAt: new Date("2023-11-10 12:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/MiguelMontenegroo.png",
      name: "Miguel Montenegro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Novo projetinho" },
      { type: "paragraph", content: "uma gerenciador de tarefas" },
      { type: "link", content: "https://todo-list-eight-indol-49.vercel.app/" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/todo-list" }
    ],
    publishedAt: new Date("2023-11-14 09:00:00"),
  }, {
    id: 4,
    author: {
      avatarUrl: "https://github.com/MiguelMontenegroo.png",
      name: "Miguel Montenegro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Novo projeto" },
      { type: "paragraph", content: "desenvolvi um timer para tarefas utilizando styled-components,roteamento com react-router-dom,context,reducers,immer,react-hook-form,zod." },
      { type: "link", content: "https://timer-miguelmontenegroos-projects.vercel.app/" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/timer" }
    ],
    publishedAt: new Date("2023-12-04 11:00:00"),
  },{
    id: 5,
    author: {
      avatarUrl: "https://github.com/MiguelMontenegroo.png",
      name: "Miguel Montenegro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Novo projeto" },
      { type: "paragraph", content: "desenvolvi um delivery de café" },
      { type: "link", content: "https://coffe-delivery-gamma-teal.vercel.app/" },
      { type: "link", content: "https://github.com/MiguelMontenegroo/coffe-delivery" }
    ],
    publishedAt: new Date("2023-12-08 08:00:00"),
  }
];



export function App() {
  

  return (<>
   <Header/>


   <div className={styles.wrapper}>
   <Sidebar/>
   <main>
    {posts.map(post => {
      return (
      <Post
      key={post.id}
      post={post}
      />
      )
    })}
   </main>

   </div>
   

   </>
  )
}


