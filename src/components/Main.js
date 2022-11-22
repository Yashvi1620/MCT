import React from "react";

function Main({ displayPage }) {
  return (
    <div className="mainPage">
      <div className="side">
        <h1>PLATFORMS</h1>
      </div>
      <div className="table-context">
        <table>
          <thead>
            <tr>
              <th>Contest Name</th>
              <th>Site</th>
              <th>Contest Start Date</th>
              <th>Contest End Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{displayPage.name}</td>
              <td>{displayPage.site}</td>
              <td>{new Date(displayPage.start_time).toLocaleString()}</td>
              <td>{new Date(displayPage.end_time).toLocaleString()}</td>
              <td>
                <a id="a" href={displayPage.url} target="_black">
                  <button>Click to start challenge</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
