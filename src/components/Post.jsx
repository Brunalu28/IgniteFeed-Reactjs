import styles from './Post.module.css';
export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Brunalu28.png" />
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
        </article>
    )
}