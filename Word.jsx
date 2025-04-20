import {words} from './words.js'

export default function Word({word, lettersPressed}) {

    const arr = [...word]
    
    const wordEle = arr.map(c => {
        
        const letter = lettersPressed.includes(c) ? c : ""
        return <p>{letter}</p>
    })
    
    return (
        <div className="displayWord">
            {wordEle}
        </div>
    )
}