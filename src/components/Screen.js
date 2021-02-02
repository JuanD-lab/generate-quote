import React, { useState }  from 'react';
import QuoteBox from './QuoteBox'

const Screen = () => {
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
  export default Screen