import { useEffect, useState } from "react"

function Dependency() {

    const [value, setValue ] = useState<number>(0)

    useEffect(()=>{
    console.log(` log on whenever count update render ${value}`)

    return () => {
        console.log(`i am clean up function `)
    }
},[value])

const run_On_render = () => {
    setValue((prev) => prev+1)

}
  return (
    <div>
        <h1>log on whenever count update render</h1>
        <h1>{value}</h1>
        <button onClick={run_On_render}>Dependency</button>
    </div>
  )
}

export default Dependency
