// import Asconst from "./components/Asconst"
// import ChildrenReactNode from "./components/ChildrenReactNode"
// import DefaultProps from "./components/DefaultProps"

import ComponentProps from "./components/ComponentProps"

// import { UserCard } from "./components/Required_optionalProps"
function App() {


  return (
    <>
      {/* <ChildrenReactNode   title="panal" children={
        <div>
            <UserCard id={"sgedbwjdkjekdwiue"} name="chandan" subtitle={<p>jhvdbjebjdd edebcjehbiuebdebc hjegdyuedb</p>}/>
            <DefaultProps name="chandan" shout={true} />
            <ChildrenReactNode title="hello world"/>
            <Asconst lable="hello world fuck u" variant="second"/>
      </div>}
      /> */}
      <ComponentProps variant="primary" onClick={()=> alert("btn press 👆")}/> 
    </>
  )
}

export default App
