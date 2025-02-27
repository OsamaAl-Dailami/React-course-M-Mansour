import React from 'react'

interface props{
    children: string;
}
const Alert = ({children} :props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Alert
