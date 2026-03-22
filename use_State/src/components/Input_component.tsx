import { type FC, type ChangeEvent, useState} from 'react'

type inputProps = {
  lable?: string,
  placeholder ? : string
}

const Input_component:FC<inputProps> = ({lable ="enter your text here", placeholder="Enter text"}) => {

  const [input_value, setInput_value] = useState<string>('')

  const handle_Change = (e:ChangeEvent<HTMLInputElement>) => {
     setInput_value(e.target.value)
  }

  const reset_input = () => {
      setInput_value('')
  }

  return (
    <div>

      <h1> project 2</h1>

      <label htmlFor="input">{lable}</label>

      <input 
      type="text" 
      value={input_value} 
      id="input"
      placeholder={placeholder}
      onChange={handle_Change}
       />

      {input_value ? (<p>{input_value}</p>) :(<p>the input_value is empty </p>) }

      <button onClick={reset_input}> reset ⏰</button>
      
    </div>
  )
}

export default Input_component
