import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiza Bruna"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nihil eveniet a labore provident ut totam voluptas temporibus quia consequuntur, non sint nemo quasi sapiente aspernatur, eius iste asperiores harum."
          />
          <Post
            author="Luiza"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nihil eveniet a labore provident ut totam voluptas temporibus quia consequuntur, non sint nemo quasi sapiente aspernatur, eius iste asperiores harum."
          />
          <Post
            author="Luiza"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nihil eveniet a labore provident ut totam voluptas temporibus quia consequuntur, non sint nemo quasi sapiente aspernatur, eius iste asperiores harum."
          />
        </main>
      </div>
    </div>
  )
}
