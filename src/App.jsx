import Counter from './counter'
import './App.css'
import Bastman from './Bastman'

function App() {

  function handleClick(){
    alert('I am clicke')
  }


  return (
    <>
    <Counter> </Counter>
    <Bastman></Bastman>

    <h1>vite +React</h1>
    <button onClick={handleClick}>click me</button>

      

  
    </>
  )
}

export default App
