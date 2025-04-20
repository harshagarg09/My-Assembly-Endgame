export default function Display(props) {
    const {languageKilled, isWinner, isLoser} = props
    
    let backgroundColor
    let text
    if (isWinner) {
        backgroundColor = "#10A95B"
        text = <div><h2>You win!</h2><p>Well done! 🎉</p></div>
    } else if (isLoser) {
        backgroundColor = "#BA2A2A"
        text = <div><h2>Game over!</h2><p>You lose! Better start learning Assembly 😭</p></div>
    } else if (languageKilled) {
        backgroundColor = "#7A5EA7"   
        text = <p>Farewell {languageKilled} 🫡 </p>    
    } else {
        backgroundColor = ""
        text = ""
    }
    
    const style = {
        backgroundColor: backgroundColor,
        color: "white"
    }
    return (
            <div className="displayContainer" style={style}>
                {text}
            </div>
    )
}