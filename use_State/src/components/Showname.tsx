import { type ChangeEvent, useState} from 'react'

interface ShowName {
  name: string;
  age : number;
}

const Showname = ()=>{

    const [user_Info, setInfo] = useState<ShowName>({name:"", age:0})

    const handleName = (e:ChangeEvent<HTMLInputElement>) => {
         setInfo((prev)=> ({
            ...prev,
            name: e.target.value
         }))
    }
     const handleAge = (e:ChangeEvent<HTMLInputElement>) => {
         setInfo((prev)=> ({
            ...prev,
            age: Number(e.target.value)
         }))
    }

    const reset = () => {
      setInfo({ name: "", age: 0 })
    }

  return (
    <div>
        <div className="container">
           {user_Info.name ? (<h1>the enter name is :- {user_Info.name}</h1>): (<p>loading user name ....</p>)}
           {user_Info.age ? ( <h2>the enter age is :- {user_Info.age}</h2>): (<p>loading user age ....</p>)}
        </div>

        <input 
        type="text"
        value={user_Info.name}
        onChange={handleName}


         />

         <input 
        type="number"
        value={user_Info.age}
        onChange={handleAge}
         />

         <button onClick={reset}>reset</button>

      
    </div>
  )
}

export default Showname
