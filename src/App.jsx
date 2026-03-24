import Counter from './counter'
import './App.css'
import Bastman from './Bastman'
import Users from './User'
import { Suspense } from 'react'
import Post from './post'


const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())

const fetchPost=fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())

function App() {

  function handleClick(){
    alert('I am clicke')
  }


  return (
    <>
    <Counter> </Counter>
    <Suspense fallback={<h4>post ar coming</h4>}>
    <Post fetchPost={fetchPost}></Post>

    </Suspense>
    <Suspense fallback={<h3>Loading</h3>}>
      <Users fetchUser={fetchUser}></Users>
    </Suspense>
    <Bastman></Bastman>

    <h1>vite +React</h1>
    <button onClick={handleClick}>click me</button>

      

  
    </>
  )
}

export default App
