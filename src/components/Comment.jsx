import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/LucenaDanilo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danilo Lucena</strong>
                            <time title='25 de Janeiro às 15:51' dateTime='2023-01-25 15:51:40'>Há cerca de 1h.</time>
                        </div>
                        <button title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bem Luiza, Parabéns! 😊</p>

                </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
            </div>
        </div>
    )
}