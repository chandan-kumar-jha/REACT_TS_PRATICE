import {type FC, useState} from 'react'

type counterProps = {
  initial_Value?:number,
  step?: number

}

const Counter:FC<counterProps> = ({ initial_Value = 0, step = 1}) => {

    const [count, setCount] = useState<number>(initial_Value)

    const increment = () => {
      setCount((prev) => prev + step)
      
    }

    console.log(` i am rerender 1`)
    const decrement = () => {
      setCount((prev)=> prev - step)
    }
    const reset = () => {
      setCount(0)
    }

  return (
    <div>
       
    <h1>this is counter app ⏰ </h1>
    <h2>{count}</h2>

     <button className='.button-icon' onClick={increment}> increment 🦋</button>

     <button className='.button-icon' onClick={decrement}> decrement ❌</button>

     <button className='.button-icon' onClick={reset}> reset ⏰</button>

    </div>
  )
}

export default Counter
