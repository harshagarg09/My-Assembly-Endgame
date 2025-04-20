import Languages from './Languages.jsx'
import Word from './Word.jsx'
import Keyboard from './Keyboard.jsx'
import Display from './Display.jsx'
import {getRandomWord} from './utils.js'
import {useState} from 'react'
import {languages} from './languages.js'
import Confetti from 'react-confetti'

export default function App() {
    
    const [word, setWord] = useState(getRandomWord())
    const [lettersPressed, setLettersPressed] = useState([])
    const [languageKilled, setLanguageKilled] = useState("")
    const [incorrectlyGuessedLettersCount, setIncorrectlyGuessedLettersCount] = useState(0)
    
        
    function addLetter(letter) {
        setLettersPressed(prev => [...prev, letter])
        if (!word.includes(letter)) {
            setIncorrectlyGuessedLettersCount(prev => prev+1)
            setLanguageKilled(languages[incorrectlyGuessedLettersCount].name)
        } else {
            setLanguageKilled("")
        }
    }
    
    function determineWinner() {
        let isWinner = true
        
         for(let l of word){
            if(!lettersPressed.includes(l)) {
                isWinner = false
            }
        }
        return isWinner
    }
    
    function determineLoser() {
        return incorrectlyGuessedLettersCount == languages.length
    }
    
    let isWinner = determineWinner()
    console.log(isWinner)
    
    let isLoser = determineLoser()
    console.log(isLoser)
    
    function newGame() {
        isWinner = false
        setWord(getRandomWord())
        setLettersPressed([])
        setLanguageKilled("")
        setIncorrectlyGuessedLettersCount(0)
    }
    
    return (
        <main className="container">
            {isWinner && <Confetti />}
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            <Display languageKilled={languageKilled} isWinner={isWinner} isLoser={isLoser} />
            <Languages languages={languages}
            incorrectlyGuessedLettersCount={incorrectlyGuessedLettersCount} />
            <Word word={word} lettersPressed={lettersPressed}/>
            <Keyboard addLetter={addLetter} lettersPressed={lettersPressed} word={word} />
            {(isWinner || isLoser) && <button className="new-game-btn" onClick={newGame}>New Game</button>}
        </main>
    )
}
