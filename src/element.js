import React from "react"
import Mybutton from "./Mybutton"


export default function Element(props)
{


   
    return(
    <>
    
        <li key={props.key} onClick={props.onClick} style={props.TextDecoration} >{props.children}</li>
        <Mybutton Btn=
        {
           props.function
             
            }
            name="Delate"  
            />
    </>
    )
}