import React from "react";
import "./Borders.css"
import Base from "./Base";

function borders() {
  const data1 = [
    { data1: ".border-left-primary" , color:"primary"},
    { data1: ".border-left-secondary" },
    { data1: ".border-left-info" },
    { data1: ".border-left-warning" },
    { data1: ".border-left-danger" },
    { data1: ".border-left-dark" },
  ];

  const data2 = [
    { data1: ".border-bottom-primary" },
    { data1: ".border-bottom-secondary" },
    { data1: ".border-bottom-success" },
    { data1: ".border-bottom-info" },
    { data1: ".border-bottom-warning" },
    { data1: ".border-bottom-danger" },
  ];

  return (
  <Base>
      <div>
      <h3>Border Utilities</h3>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

    <div className="row">
        <div className="col">
        <div className="cards">
        {data1.map((e,idx) => {
            return (
                <p key={idx} className={` p-3 mb-5 bg-white rounded`} >{e.data1}</p>   
          );
        })}
      </div>
        </div>

        <div className="col">
        <div className="cards">
        {data2.map((e,idx) => {
            return (
              <div key={idx}>
                <p  className={` border border-primary p-3 mb-5 bg-white rounded`} >{e.data1}</p>    
             </div>
          );
        })}
      </div>
        </div>

    </div>
      
    </div>
  </Base>
  );
}

export default borders;
