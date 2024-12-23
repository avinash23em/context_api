import { useState } from 'react'

import './App.css'

function useCounter(){
  const[count,setcount]=useState(0);
  function increase(){
    setcount(count+1);
  }
return {
  count:count,
  increase:increase
}

}

function App() {
  return (
<div>
  <Counter/>
  <Counter/>
  <Counter/>
  </div>
  )

}
function Counter(){
  const {count,increase}=useCounter();

  return (
    <>
      <button onClick={increase}> increase {count}</button>
    </>
  )
}

export default App
