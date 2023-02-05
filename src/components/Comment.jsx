import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment, publishedDateCommentcurrent}){

    const [likeCount, setLikeCount] = useState(0) // é importante iniciar o estado com algum valor do mesmo tipo que será utilizado.

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
        // setLikeCount(likeCount + 1)
    }


    return (

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ThiagoTrajanoDev.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Trajano</strong>
                            <time title='25 de Janeiro às 15:51' dateTime='2023-01-25 15:51:40'>Há cerca de 1h.</time>
                        </div>
                        <button title='Deletar' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
            <footer>
                <button onClick={handleLikeComment} >
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}