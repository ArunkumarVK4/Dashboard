import React from "react";
import "./Dash.css";
import Base from "./Base";

function Dashboard() {
  const calander = <i className="fa fa-calendar-o" aria-hidden="true"></i>;

  const doller = <i className="fa fa-usd" aria-hidden="true"></i>;

  const clipboard = <i className="fa fa-wpforms" aria-hidden="true"></i>;

  const message = <i className="fa fa-comments-o" aria-hidden="true"></i>;

  const dData = [
    { data1: "EARNINGS", data2: "MONTHLY", data3: "$40,000", data4: calander },
    { data1: "EARNINGS", data2: "ANNUAL", data3: "$215,000", data4: doller },
    { data1: "TASK", data3: "50%", data4: clipboard },
    { data1: "PENDING REQUEST", data3: "18", data4: message },
  ];
  return (
    <Base>
    <div>
      <div className=" dash">
        <p className="heading">Dashboard</p>
        <button>
          <i className="fa fa-download" aria-hidden="true"></i>
          Generate Report
        </button>
      </div>

      <div className="">
        {dData.map((e,idx) => (
          <div className="div" key={idx}>
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="icon-flex">
                <div className="d">
                  <p className="boxText" >
                    {e.data2 ? (
                      <p>
                        {" "}
                        {e.data1} ({e.data2})
                      </p>
                    ) : (
                      e.data1
                    )}
                  </p>
                  <h5>{e.data3}</h5>
                </div>
                <div>
                  <span className="icons">{e.data4}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="row">
            <div className="p-3 mb-2 bg-primary text-white colorLi">Primary
</div>
            <div className="p-3 mb-2 bg-secondary text-white colorLi">secondary</div>
            <div className="p-3 mb-2 bg-success text-white colorLi">Success</div>
            <div className="p-3 mb-2 bg-danger text-white colorLi">Info</div>
            <div className="p-3 mb-2 bg-warning text-dark colorLi">Warning</div>
            <div className="p-3 mb-2 bg-info text-white colorLi">Info</div>
            <div className="p-3 mb-2 bg-light text-dark colorLi">Light</div>
            <div className="p-3 mb-2 bg-dark text-white colorLi">Dark</div>
          
          </div>
          </div>

          <div className="col">

            <div className="card">
              <div className="card-header">Illustrations</div>
              <div className="card-body">
                <p className="card-text">
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </p>
                <a href="#" className="">
                  Browse Illustrations on unDraw{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-header">Development Approach</div>
              <div className="card-body">
                <p className="card-text">
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classNamees are used to create custom components and custom
                  utility classNamees.
                </p>
                <p className="card-text">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classNamees.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </Base>
  );
}

export default Dashboard;
