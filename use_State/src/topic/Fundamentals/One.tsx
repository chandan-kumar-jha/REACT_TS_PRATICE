import { useState} from 'react'

function One() {

  const [state , setState] = useState(0)
  const [funstate , setfunState] = useState(0)

  const update = () => {
    setState(1)
    setState(1)
    console.log(state) // not recommended
  }


  const fun = () => {
    setfunState((prev) => prev + 2)// update the valuse 
    setfunState((prev) => prev + 2)//
    setfunState((prev) => prev + 2)
  }


  return (
    <div>
      hello
      <h1>{funstate}</h1>
      <h1>{state}</h1>
      <button onClick={fun}>functional state</button>
      <button onClick={update}>click button </button>
    </div>
  )
}

export default One
