import React, { useState } from "react"

function App(){
  const [name,setName] = useState("")

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName( event.target.value)
  }

  return (
    <div>
     Nome:
     <input type="text" value={name} onChange={handleInput} name="" id="" />
     <hr />
     Seu nome é: {name}
    </div>
  )
}

export default App;