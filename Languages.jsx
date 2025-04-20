

export default function Languages(props) {
    
    let incorrectlyGuessedLettersCount = props.incorrectlyGuessedLettersCount
    console.log(incorrectlyGuessedLettersCount)
    
    let count = 0
    // console.log(props.languages)
    
    const languageElements = props.languages.map(lang => {
        const style = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        
        let className = count < incorrectlyGuessedLettersCount ? "ghost" : "ghost-not-visible"
        count += 1
        
        return <div style={style} key={lang.name}>
                    {lang.name}
                    <p className={className}>👻</p>
               </div>
    })
    
    return (
    <div className="languages">
        {languageElements}
    </div>
    )
}