import React, {useState} from 'react'
import './index.css'



 function App() {

  const[peso, setPeso] = useState(0)
  const[altura, setAltura] = useState(0)
  const[imc, setImc] = useState(0)
  const[message, setMessage] = useState("")

    //show image based on imc calculation
  let imgSrc;


  let calcImc = (event )=> {
    event.preventDefault()
    if(peso === 0 || altura === 0 ){
      alert("Por favor, digite sua altura e seu peso!")
    } else {
      let imc = (peso/(altura*altura))
      setImc(imc.toFixed(1))
      if(imc < 18.5) {
        setMessage('Você está abaixo do peso.')
      } else if(imc >= 18.5 && imc <=24.9){
        setMessage('Você está saudável.')
      } else if(imc >= 25 && imc <= 29.9 ){
        setMessage('Você está com excesso de Peso.')
      } else if (imc >= 30 && imc <= 34.9 ){
        setMessage('Você está com Obesidade Classe I (Moderada).')
      } else if (imc >= 35 && imc <= 39.9 ){
        setMessage('Você está com Obesidade Classe II (Severa).')
      } else if (imc >= 40){
        setMessage('Você está com Obesidade Classe III (Mórbida).')
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }

  
  return (
    <div className="app">
      <div className="container">
      <h2 className="center"> Calculadora de IMC</h2>
      <form onSubmit={calcImc}>
        
        <div>
        <label>Peso (kg):</label>
        <input value={peso} onChange={(event) => setPeso(event.target.value)}/>
        </div>
        
        <div> 
          <label>Altura (m):</label>
          <input value={altura}  onChange={(event) => setAltura(event.target.value)}/>
        </div>
        
        <div>
          <button className="btn" type="submit">Calcule</button>
          <button className="btn-outline" onClick={reload}>Recarregar</button>
        </div>
     
      </form>
      <div className="center">
        <h3>Seu IMC é: {imc}</h3>
        <p>{message}</p>
      </div>
     
      <div className="img-container">
        
        <img src={imgSrc} alt=""></img>
        
        </div>
     
    </div>
    </div>
  );
}

export default App