import React from "react";
import Base from "./Base";
import "./Color.css"

function Color() {
  return (
   <Base>
         <div>
      <h3>Color Utilities</h3>
      <p>
        Bootstrap's default utility classes can be found on the official
        Bootstrap Documentation page. The custom utilities below were created to
        extend this theme past the default utility classes built into
        Bootstrap's framework.
      </p>

      <div className="row">
        <div className="col-sm-12 col-lg-4 content">
        <p className="text-primary">.text-primary</p>
        <p className="text-secondary">.text-secondary</p>
        <p className="text-success">.text-success</p>
        <p className="text-danger">.text-danger</p>
        <p className="text-warning">.text-warning</p>
        <p className="text-info">.text-info</p>
        <p className="text-light bg-dark">.text-light</p>
        <p className="text-dark">.text-dark</p>
        <p className="text-muted">.text-muted</p>
        <p className="text-white bg-dark">.text-white</p>

        </div>

        <div className="col-sm-12 col-lg-4 content">
        <p>
          <a href="#" className="text-primary">
            Primary link
          </a>
        </p>
        <p>
          <a href="#" className="text-secondary">
            Secondary link
          </a>
        </p>
        <p>
          <a href="#" className="text-success">
            Success link
          </a>
        </p>
        <p>
          <a href="#" className="text-danger">
            Danger link
          </a>
        </p>
        <p>
          <a href="#" className="text-warning">
            Warning link
          </a>
        </p>
        <p>
          <a href="#" className="text-info">
            Info link
          </a>
        </p>
        <p>
          <a href="#" className="text-light bg-dark">
            Light link
          </a>
        </p>
        <p>
          <a href="#" className="text-dark">
            Dark link
          </a>
        </p>
        <p>
          <a href="#" className="text-muted">
            Muted link
          </a>
        </p>
        <p>
          <a href="#" className="text-white bg-dark">
            White link
          </a>
        </p>
        </div>
        
        <div className="col-sm-12 col-lg-4 content">
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
        <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
        </div>
       

    
      <p className="copyright">Copyright © Your Website 2020</p>
      </div>
    </div>
   </Base>
  );
}

export default Color;
