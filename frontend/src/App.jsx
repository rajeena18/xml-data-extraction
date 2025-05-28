import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataConverter from './components/DataConverter/DataConverter'
import GetAccessToken from './auth/authTokenAPI'
import DataConverter2 from './components/DataConverter2/DataConverter2'
import ResourceDataConverter from './components/DataConverter2/ResourceDataConverter'
import XMLDataConverter from './components/XMLDataConverter/XMLDataConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DataConverter/>
        {/* <GetAccessToken/> */}
        {/* <DataConverter2/> */}
        {/* <ResourceDataConverter/> */}
        {/* <XMLDataConverter/> */}
      </div>
    </>
  )
}

export default App
