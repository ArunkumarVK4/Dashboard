import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "./Base";
import "./Login.css"



export function Login() {
  const history = useHistory()
  return (
  <Base>
      <div className="container">
      <div className="all">
       <p>Welcome Back!</p>

       <div className="inputGet">
          <input
            type="text"
            className="form-control my-3 input"
            placeholder="Enter Email Address.."
            aria-label="Enter Email Address..." />
          <input
            type="text"
            className="form-control input"
            placeholder="Password"
            aria-label="Password" />
          <div className="form-check m-2 text-left"/>
          </div>

          <div>
          <input type='checkbox'></input>
          <label>Remember Me</label>
          </div>

          <button type="button" className="btn btn-primary">
              Login
            </button>
          <hr></hr>
            <button type="button" className="btn btn-primary">
            Login with Google
            </button>
          <div>
            <button type="button" className="btn btn-primary">
              Login with Facebook
            </button>
<hr></hr>

<div>
            <a href="#" onClick={()=>history.push("/forget")}>Forget Password?</a> <br></br>
            <a href="#" onClick={()=>history.push("/register")}>Create New Account!</a>
          </div>

      </div>
    </div>
    </div>
  </Base>

    );
}
