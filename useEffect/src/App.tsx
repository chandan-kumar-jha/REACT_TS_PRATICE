import Execution_Order from "./components/Execution_Order"
import Empty_Dependency from './components/Empty_Dependency'
import Empty_array from "./components/Empty_array"
import Dependency from "./components/Dependency"
import Ref from "./components/Ref"
import Stable_Reference from "./components/Stable_Reference"
import Stale_Closure from "./components/Stale_Closure"

function App() {
  return (
    <div>
      <Execution_Order/>
      <hr />
      <Empty_Dependency/>
      <hr />
      <Empty_array/>
      <hr />
      <Dependency/>
      <hr />
      <Ref/>
      <hr />
      <Stable_Reference/>
      <hr />
      <Stale_Closure/>
    </div>
  )
}

export default App
