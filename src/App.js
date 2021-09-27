import React from "react"

const App = () => {
  //hooks
  const [dados, setDados] = React.useState([])

  //functions

  function handleClick() {
    setDados([...dados, (Math.random() * 100)])
  }

  function deleteNumber(valor) {
    let new_dado = dados.filter(el => {
      if(el != valor) {
        return el
      } 
    })
    setDados(new_dado)
  }

  return (
    <div>
      <h1>Random Number</h1>
      <button onClick={handleClick}>Novo numero</button>
      <ul>
        {dados.map(dado => (
          <li
            onClick={() => deleteNumber(dado)} 
            style={{cursor: "pointer"}} 
            key={dado}>{dado}</li>
        ))}
      </ul>
    </div>
  )
}

export default App