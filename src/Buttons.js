import React from "react";
import "./Button.css"
import Base from "./Base";

function Buttons() {
  const data = [
    { title: ".btn-circle", class: "class1" },
    { title: ".btn-circle .btn-sm", class: "class2" },
    { title: ".btn-circle .btn-lg", class: "class3" },
  ];
  return (
    <Base>
        <div>
      <div className="card">
        <div className="card-header">Circle Buttons</div>
        <p>
          Use Font Awesome Icons (included with this theme package) along with
          the circle buttons as shown in the examples below!
        </p>

        {/* Buttons */}
        {data.map((e,idx)=>{
            return(
                <div key={idx}>
          <p>{e.title}</p>
          <div >
            <button className={e.class=="class1" ? "class1" : e.class=="class2" ? "class2" : e.class=="class3" ? "class3" : ""}>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </button>
            <button className={e.class=="class1" ? "class1" : e.class=="class2" ? "class2" : e.class=="class3" ? "class3" : ""}>
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button className={e.class=="class1" ? "class1" : e.class=="class2" ? "class2" : e.class=="class3" ? "class3" : ""}>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button className={e.class=="class1" ? "class1" : e.class=="class2" ? "class2" : e.class=="class3" ? "class3" : ""}>
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </button>
            <button className={e.class=="class1" ? "class1" : e.class=="class2" ? "class2" : e.class=="class3" ? "class3" : ""}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
            )
        })}
{/* Cards */}

<div className="card">
    <div className="card-header">
        Brand Buttons
    </div>
    <div className="card-body">
        <div className="card-text">
            <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
            <p>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
        </div>
        {/* Button */}

        <div className="buttons">
            <button><i class="fa fa-google" aria-hidden="true"></i>
.btn-google</button>
            <button><i class="fa fa-facebook" aria-hidden="true"></i>
.btn-facebook</button>

        </div>
            
    </div>

</div>

      </div>
    </div>
    </Base>
  );
}

export default Buttons;
