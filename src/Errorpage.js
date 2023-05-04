import React from 'react'
import "./Error.css"
import Base from './Base'

function Errorcode() {
  return (
   <Base>
         <div className='main'>
        <span className='title'>404</span>
        <p className='page'>Page Not Found</p>

        <p className='text-muted'>It looks like you found a glitch in the matrix...</p>
        <a href='#'>Back to Dashboard</a>


    </div>
   </Base>
  )
}

export default Errorcode
