const GenerateQuote = (props) => {

    let minNumber = 0
    let maxNumber = props.quotes.length

    let quote = props.quotes[Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)].quote  
    let author = props.quotes[Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)].author

    return <h2 id='#text'>{quote}</h2>

}

export default GenerateQuote