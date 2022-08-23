import personas from './data/personas.json'


const App = () => {
  return (
    <div className="App">
      <h1>Mi app en React: personajes de Friends!</h1>
      {
        personas.map(persona => (
          <div className="box">
            <p>Nombre: {persona.nombre}</p>
            <p>Apellido: {persona.apellido}</p>
            <p>Edad: {persona.edad}</p>

            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default App
