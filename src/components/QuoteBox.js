import React, { useState }  from 'react';
import quotes from '../quotes.json'

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
            <div className="buttons">
              <a href={`https://twitter.com/intent/tweet?text=${viewedQuote.quote}%20-${viewedQuote.author}`} className="twitter-share-button" data-show-count="false" target='_blank' rel="noreferrer"><img src="/images/icon-twitter.png" alt="twitter" width="35px"/></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              <button onClick={() => { randomQuote(); bgColor();}}>New quote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default QuoteBox