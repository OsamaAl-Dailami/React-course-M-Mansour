

interface btnProps{
    text: string,
    color?: string ,
    click:()=>void,
    
}


export default function Button({text,color='primary', click} : btnProps) {
    
  return (
    <div>
        
        <button type="button" className={`btn btn-${color}`} onClick={click}>{text}</button>
      
    </div>
  )
}



