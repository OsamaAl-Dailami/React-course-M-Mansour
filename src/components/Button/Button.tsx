import React from 'react'
import style from "./Button.module.css";

interface Prop{
    children: string;

    onClick: () => void
}

 function Button({children, onClick}: Prop) {
  return (

      <button className= {style.btnPrimary} onClick={onClick}>
        {children}
      </button>

  )
}

export default Button
