import "./Base.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useHistory } from "react-router-dom";

function Base({ children }) {
  const history = useHistory();

  return (
    <div className="main-content">
      <div className="left-content">
        <div className="">
          <div className="side">
            <button
              className="btn btn-outline-light border-0"
              onClick={() => history.push("/")}
            >
              <i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard
            </button>
            <hr></hr>

            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                <i className="fa fa-cog" aria-hidden="true"></i>
                Components
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={()=>history.push("/buttons")}
                >
                  Buttons
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/cards")}
                >
                  Cards
                </a>
              </div>
            </div>
            <hr></hr>

            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle border-0 "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-folder" aria-hidden="true"></i>
                Utilities
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/colors")}
                >
                  Colors
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/borders")}
                >
                  Borders
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/animations")}
                >
                  Animations
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/others")}
                >
                  other
                </a>
              </div>
            </div>
            <hr></hr>

            <div className="text-light">ADDONS</div>
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                <i className="fa fa-cog" aria-hidden="true"></i>
                Pages
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/login")}
                >
                  Login
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/register")}
                >
                  Register
                </a>
                <a className="dropdown-item" href="#"
                onClick={()=>history.push("/forget")}
                >
                  Forget Password
                </a>
                <a className="dropdown-item">OTHER PAGES:</a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/errors")}
                >
                  404 Page
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => history.push("/blank")}
                >
                  Blank Page
                </a>
              </div>
            </div>
            <br></br>

            <div>
              <button
                className="btn btn-outline-light border-0"
                onClick={() => history.push("/charts")}
              >
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                Charts
              </button>
            </div>
            <br></br>

            <button
              className="btn btn-outline-light border-0"
              onClick={() => history.push("/table")}
            >
              <i className="fa fa-table" aria-hidden="true"></i>
              Table
            </button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className=" bFlex">
          <input
            className="inputB form-control"
            type="search"
            placeholder="Search for..."
          ></input>
          <button className="btn1 fa fa-search" aria-hidden="true"></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Base;
