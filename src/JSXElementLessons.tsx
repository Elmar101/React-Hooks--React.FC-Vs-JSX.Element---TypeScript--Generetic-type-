import React from 'react'
import { useState } from 'react';

interface Props {
   children:(
      data:{
         count: number,
         setCount: React.Dispatch<React.SetStateAction<number>>
      }
   ) => JSX.Element | null
}
const JSXElementLessons:React.FC<Props> = ({children}) => {
   const [count,setCount] = useState(0);
   return (
      <div style={{background: 'green' ,height: '100px', color: '#fff', margin: '10px 0'}}>
         <h1>JSXElementLessons</h1>
         {
            children({count,setCount})
         }
      </div>
   )
}

export default JSXElementLessons;