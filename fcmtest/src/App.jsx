// import { useEffect, useState } from 'react'
import './App.css'
import Notification from './components/Notification'
// import { Notification } from './components/Notification'
// import { getToken,onMessageListner } from './firebaseInit'

function App() {

  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   const getToken2 = async () => {
  //     let resp = await getToken();
  //     setToken(resp)
  //   }
  //   getToken2();
  // }, [])
 


  return (
    <div className="App">
     
     <Notification/>
    

    </div>
  )
}



export default App
