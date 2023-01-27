import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Brunalu28.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luiza Bruna</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='25 de Janeiro às 15:51' dateTime='2023-01-25 15:51:40'>Publicado a 1h.</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite da Rocketseat. 🚀</p>
                <p>👉 <a href="https://github.com/Brunalu28/IgniteFeed">IgniteFeed</a></p>
                <p>
                    <a href="">#novoprojeto </a>
                    <a href=""> #ignite </a>
                    <a href=""> #rocketeat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}