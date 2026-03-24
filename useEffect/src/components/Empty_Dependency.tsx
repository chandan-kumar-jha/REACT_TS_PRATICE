import { useEffect, useState } from "react"

function Empty_Dependency() {

    const [value, setValue ] = useState<number>(0)

    console.log('render')

    useEffect(()=>{
    console.log(` log on every render ${value}`)
})

const run_On_render = () => {
    setValue((prev) => prev+1)
}
  return (
    <div>
        <h1>log on every render</h1>
        <h1>{value}</h1>
        <button onClick={run_On_render}>Empty_Dependency</button>
    </div>
  )
}

export default Empty_Dependency
