import React from 'react'
import "./Forget.css"
import { useHistory } from 'react-router-dom'
import Base from './Base'

function Forget() {
    const history = useHistory()
  return (
<Base>
<div>
<div className='main'>
       <h2>Forget Your Password?</h2> 
       <span>We get it, stuff happens. Just enter your email address</span>
       <span>below and we'll send you a link to reset your</span>
       <span>password!</span> <br></br>

       <input
       type="type"
       placeholder='Enter Email Address...'
       className='input'
       ></input>  <br></br>

       <button >Reset Password</button>
       <hr></hr>
       <a href='#' onClick={()=>history.push("/register")}>Create an Account!</a>
       <a href='#' onClick={()=> history.push("/login")}>Already have an account? Login?</a>

    </div>
</div>
</Base>
  )
}

export default Forget