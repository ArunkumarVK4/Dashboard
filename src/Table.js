import React from "react";
import "./Table.css"
import Base from "./Base";

function Table() {
  const data = [
    {
      data1: "Airi Satou",
      data2: "Accountant",
      data3: "Tokyo",
      data4: "33",
      data5: "2008/11/28",
      data5: "$162,700",
    },
    {
      data1: "Angelica Ramos",
      data2: "Chief Executive Officer (CEO)",
      data3: "London",
      data4: "33",
      data5: "2009/10/09",
      data5: "$1,200,000",
    },
    {
      data1: "Ashton Cox",
      data2: "Junior Technical Author",
      data3: "San Francisco	",
      data4: "66",
      data5: "2009/01/12",
      data5: "$86,000",
    },
    {
      data1: "Bradley Greer	",
      data2: "Software Engineer	",
      data3: "London",
      data4: "41",
      data5: "202012/10/13",
      data5: "$132,000",
    },
    {
      data1: "Brenden Wagner",
      data2: "Software Engineer	",
      data3: "San Francisco	",
      data4: "28",
      data5: "2011/06/07",
      data5: "$206,850",
    },
    {
      data1: "Airi Satou",
      data2: "Accountant",
      data3: "Tokyo",
      data4: "33",
      data5: "2008/11/28",
      data5: "$162,700",
    },
    {
      data1: "Angelica Ramos",
      data2: "Chief Executive Officer (CEO)",
      data3: "London",
      data4: "33",
      data5: "2009/10/09",
      data5: "$1,200,000",
    },
    {
      data1: "Ashton Cox",
      data2: "Junior Technical Author",
      data3: "San Francisco	",
      data4: "66",
      data5: "2009/01/12",
      data5: "$86,000",
    },
    {
      data1: "Bradley Greer	",
      data2: "Software Engineer	",
      data3: "London",
      data4: "41",
      data5: "202012/10/13",
      data5: "$132,000",
    },
    {
      data1: "Brenden Wagner",
      data2: "Software Engineer	",
      data3: "San Francisco	",
      data4: "28",
      data5: "2011/06/07",
      data5: "$206,850",
    },
  ];
  return (
   <Base>
         <div>
      <h3>Tables</h3>
      <p>
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        official DataTables documentation.
      </p>

      <div>
        <div className="card">
          <div className="card-header">Data Tables Example</div>
          <div className="card-body">
            {/* List */}
            <label for="list">Show</label>
            <select id="list">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>entries</span>

            {/* Tabel */}
            <table>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            
            {data.map((e,idx)=>{
                return(
                    <tr key={idx}>
                    <td>{e.data1}</td>
                    <td>{e.data2}</td>
                    <td>{e.data3}</td>
                    <td>{e.data4}</td>
                    <td>{e.data5}</td>
                  </tr>
                )
            })}

            </table>
          </div>
        </div>
        
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>

      </div>
    </div>
   </Base>
  );
}

export default Table;
