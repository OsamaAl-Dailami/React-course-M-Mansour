import React from 'react'

interface btnProps{
    text: string,
    color?: string ,
    click:()=>void,
    
}


export default function Button({text,color='primary', click} : btnProps) {
    
  return (
    <div>
        
        <button type="button" class={`btn btn-${color}`} onClick={click}>{text}</button>
      
    </div>
  )
}



