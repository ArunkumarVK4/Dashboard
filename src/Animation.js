import React from "react";
import "./Animation.css";
import Base from "./Base";

function Animation() {
  const data = [
    {
      title: "Grow In Animation Utility",
      head: ".animated--grow-in",
      note:
        "Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.",
    },
    {
      title: "Fade In Animation Utility",
      head: ".animated--fade-in",
      note: "Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.",
    },
  ];
  return (
   <Base>
     <div>
      <h3>Animation Utilities</h3>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

      {/* Cards Create */}
      <div>
        {data.map((e,idx) => {
          return (
            <div className="card" key={idx}>
              <h5 className="card-header">{e.title}</h5>
              <div className="card-body">
                <h5 className="card-title">{e.head}</h5>
                {/* Navbar create */}
                <p>Navbar Dropdown Example:</p>
                <div className="dropdown drop">
                  {/* Drobdown button */}

                  <h3>Navbar</h3>
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
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
                  </ul>
                </div>

                <p className="card-text">
                  {e.note}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </Base>
  );
}

export default Animation;
