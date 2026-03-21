type GreetProps = {
    name?: string;
    shout?: boolean;
}

function DefaultProps({name = 'guest', shout= false}:GreetProps) {


    const Real_name = name.toUpperCase()


  return (
    <div>
        <h1>here is the real name</h1>
        <p>hello 👌 i am {Real_name}</p>
        
          <h3>will you 😉</h3>
        <h2> give me Shout out</h2>
        {
            shout ? (
                <h1>yeh!! you give  me shout out 👨👨 </h1>
            ):(<h1>shit!! you dont give  me shout out 💣💣💣💥 </h1>)
        }

      
    </div>
  )
}

export default DefaultProps
