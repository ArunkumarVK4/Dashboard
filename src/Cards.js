import React from "react";
import Base from "./Base";
import "./Card.css";

function Cards() {
  const calander = <i className="fa fa-calendar-o" aria-hidden="true"></i>;

  const doller = <i className="fa fa-usd" aria-hidden="true"></i>;

  const clipboard = <i className="fa fa-wpforms" aria-hidden="true"></i>;

  const message = <i className="fa fa-comments-o" aria-hidden="true"></i>;

  const dData = [
    { data1: "EARNINGS", data2: "MONTHLY", data3: "$215,000", data4: calander },
    { data1: "EARNINGS", data2: "ANNUAL", data3: "$40,000", data4: doller },
    { data1: "TASK", data3: "50%", data4: clipboard },
    { data1: "PENDING REQUEST", data3: "18", data4: message },
  ];

  const list = [
    {
      title: "Default Card Example",
      content:
        "This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.",
    },
    {
      title: "Basic Card Example",
      content:
        "The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!",
    },
    {
      title: "Dropdown Card Example",
      content:
        "Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.",
    },
    {
      title: "Collapsable Card Example",
      content:
        "This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!",
    },
  ];

  return (
    <Base>
      <div>
        <h3>Cards</h3>

        <div className="main">
          <div className="row">
            {dData.map((e, idx) => (
              <div className="col-sm-12 col-lg-3" key={idx}>
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div className="icon-flex">
                    <div className="d">
                      <p className="boxText">
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
          </div>

          {list.map((e, idx) => {
            return (
              <div className="card" key={idx}>
                <h5 className="card-header">{e.title}</h5>
                <div className="card-body">
                  <p className="card-text">{e.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}

export default Cards;
