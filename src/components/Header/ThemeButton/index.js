import React from "react"


export const Theme=(props)=>{
    return(
        <button onClick={()=>{
            console.log(props)
            props.handleDarkModeTheme()
        }}>
            {props.darkMode?"🔆":"🌙"}
        </button>
    )
}