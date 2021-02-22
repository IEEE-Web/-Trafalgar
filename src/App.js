import React ,{useState} from "react"
import {Header} from "./components/Header/index.js"
import {Services} from "./components/Services/index.js"
import {Reviews} from "./components/Reviews/index.js"
import {Footer} from "./components/Footer/index.js"


const App=()=>{
  const [darkMode,setDarkMode]=useState(false)
    const handleDarkModeTheme=()=>{
     setDarkMode(!darkMode)
    }
  return(
  <div className={`${darkMode?"light-mode":"dark-mode"}`}>
      <Header darkMode={darkMode} handleDarkModeTheme={handleDarkModeTheme}/>
      <Services />
      <Reviews />
      <Footer />
    </div>
  )
}


export default App;
