import React from "react"


export const Theme=(props)=>{
    return(
        <button onClick={()=>{
            props.handleDarkModeTheme()
        }}>
            {props.darkMode?"🔆":"🌙"}
        </button>
    )
}