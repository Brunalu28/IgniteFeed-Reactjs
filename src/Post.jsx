import { App } from "./App";

export function Post(caracters){
    return (
        <div>
            <strong>{caracters.author}</strong>
            <p>{caracters.content}</p>
        </div>
    )
}