import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "./App";
import Base from "./Base";
import "./Create.css"

export default function CreateAccount() {
  const data = [{ button1: "Register Account" }];
  const history = useHistory()
  const data2 = [
    { button1: "Register with Google" },
    { button1: "Register with Facebook" },
  ];
  return (
 <Base>
   <div className="container">
      <div className="create">

input        <h1>Create an Account!</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="Username" />
          <input
            type="text"
            className="form-control mx-3"
            placeholder="Last Name"
            aria-label="Server" />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username" />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Username" />
          <input
            type="text"
            className="form-control mx-3"
            placeholder="Repeat Password"
            aria-label="Server" />
        </div>

        <hr></hr>
        {data.map((e,idx) => {
          return <Button {...e} key={idx}/>;
        })}
        <hr></hr>
        <div>
          {data2.map((e,idx) => {
            return <Button {...e} key={idx}/>;
          })}
        </div>
        <hr></hr>

        <div>
          <a href="#" onClick={()=>history.push("/forget")}>Forget Password?</a> <br></br>
          <a href="#" onClick={()=> history.push("/login")}>Already have an account? Login!</a>
        </div>

      </div>
    </div>
 </Base>
  );

}

