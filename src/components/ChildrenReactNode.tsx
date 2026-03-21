import type { ReactNode } from "react";

type panalProps = {
title: string;
children?: ReactNode
}

function ChildrenReactNode({title, children}:panalProps) {
  return (
    <div className='panal'>
      <h1>{title}</h1>
      <h1>i am children here </h1>
      <div>
        {children ?? <h1>no children present here</h1>}
      </div>
     
    </div>
  )
}

export default ChildrenReactNode
