import React from "react";
import "./Other.css";
import Base from "./Base";

function Other() {
  return (
    <Base>
    <div>
      <h3>Other Utilities</h3>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

      {/* Card-1 */}
      <div className="card">
        <div className="card-header">Overflow Hidden Utilty</div>
        <div className="card-body">
          <p className="card-text">
            Use .o-hidden to set the overflow property of any element to hidden.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-header">Progress Small Utility</div>
        <div className="card-body">
          <p>Normal Progress Bar</p>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <br></br>

          <p>Small Progress Bar</p>

          <div className="progress small">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <p className="card-text">
            Use the .progress-sm className along with .progress
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-header">Dropdown - No Arrow</div>
        <div className="card-body">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
          </div>

          <p className="card-text">
            Add the .no-arrow className alongside the .dropdown
          </p>
        </div>
      </div>
      {/* card 4 */}
      <div className="card">
  <div className="card-header">
  Rotation utilities
  </div>
  <div className="card-body content">
    <p className="content1">.rotate-15</p>
<hr></hr>
    <p className="content2">.rotate-n-15</p>

  </div>
</div>


    </div>
    </Base>
  );
}

export default Other;
