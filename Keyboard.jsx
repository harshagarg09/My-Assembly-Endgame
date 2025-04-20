export default function KeyBoard(props) {
    
    
    const str = "abcdefghijklmnopqrstuvwxyz"
    const arr = [...str]
    
    const buttonElements = arr.map(s => {
        
            let bgColor
            
            if (!props.lettersPressed.includes(s)) {
                bgColor = "#FCBA29"
            } else {
                bgColor = props.word.includes(s) ? "#10A95B" : "#EC5D49"
            }
        
            const style = {
                backgroundColor: bgColor
            }
            return <button key={s} onClick={() => props.addLetter(s)} style={style}>{s}</button>
        })
    return (
        <div className="keyboard">
            {buttonElements}
        </div>
    )
}