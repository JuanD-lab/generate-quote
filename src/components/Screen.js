import React, { useState }  from 'react';
import QuoteBox from './QuoteBox'

const Screen = () => {
    const [actualColor, setActualColor] = useState('#292a2b'),
      changeColor = () => {
          /* las dos funcione generanun numero y crean el texto "RGB" respectivamente */
          const randomNumber = (number) => {
            return (Math.random()*number).toFixed(0);
          }
          function colorRGB(){
            let coolor = "("+randomNumber(255)+"," + randomNumber(255) + "," + randomNumber(255) +")"
            console.log("rgb" + coolor)
            return "rgb" + coolor;
          }
          /* set toma como parametro colorRGB que retorna un color RGB en texto que será usado como valor de una propiedad css para el color de Screen */ 
          setActualColor(colorRGB)
      }
    return(
      <div style={{backgroundColor: actualColor, width: "100%"}}>
        {/* paso como un prop la funcion que genera un color para que pueda ser ejecutado por el boton dentro del coponente QuoteBox */}
        <QuoteBox bgColor={changeColor}/>
      </div>
    )
  }
  export default Screen