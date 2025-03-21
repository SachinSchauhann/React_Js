import { createContext }from 'react'
import child1 from './child1'

let appdata = createContext()
let name = "from app camponent"

const App = () => {
  
  return (
    <>
      <h1>hello app </h1>
      <appdata.Provider value={name}>
        <child1/>
      </appdata.Provider>
    </>
  )
}

export default App
export {appdata}