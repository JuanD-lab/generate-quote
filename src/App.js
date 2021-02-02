import './App.css';
import Screen from './components/Screen'

/* const Screen = () => {
  const [actualColor, setActualColor] = useState('#292a2b'),
    changeColor = () => {
        const randomNumber = (number) => {
          return (Math.random()*number).toFixed(0);
        }
        
        function colorRGB(){
          let coolor = "("+randomNumber(255)+"," + randomNumber(255) + "," + randomNumber(255) +")"
          console.log("rgb" + coolor)
          return "rgb" + coolor;
        }
        setActualColor(colorRGB)
    }
  return(
    <div style={{backgroundColor: actualColor, width: "100%"}}>
      <QuoteBox bgColor={changeColor}/>
    </div>
  )
}


const QuoteBox = ({bgColor}) => {
  const [viewedQuote, setChangeQuote] = useState(quotes.quotes[0]),
    randomQuote = () => {
      const randomNumber = Math.floor(Math.random()*101)
      setChangeQuote(quotes.quotes[randomNumber])

    }

  return (
    <div>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>
           {viewedQuote.quote}
          </h1>
          <h4>&mdash;{viewedQuote.author}</h4>
          <button onClick={() => { randomQuote(); bgColor();}}>New quote</button>
        </div>
      </div>
    </div>
  )
} */

function App() {
  return (
    <div className="App">
      <Screen/>
    </div>
  );
}
export default App;