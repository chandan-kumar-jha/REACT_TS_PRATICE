import { useEffect, useState } from "react"

function Empty_array() {

    const [value, setValue ] = useState<number>(0)

    useEffect(()=>{
    console.log(` log on initial render ${value}`)
},[])

const run_On_render = () => {
    setValue((prev) => prev+1)
}
  return (
    <div>
        <h1>log on initial render</h1>
        <h1>{value}</h1>
        <button onClick={run_On_render}>Empty_arrray</button>
    </div>
  )
}

export default Empty_array
