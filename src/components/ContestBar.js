import React from "react";
import logo1 from "../logo/codechef.jpeg";
import logo2 from "../logo/codeforces.png";

function ContestDetails({ data, id }) {
  let seconds = data.duration;
  let days = Math.floor(seconds / (3600 * 24));
  let hours = Math.floor((seconds % (3600 * 24)) / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);

  return (
    <div className="content">
      <div className="sub-content">
        <div className="contest-name">
          <h2 className="cname"> Contest Name:</h2>
          <h2> {data.name}</h2>
        </div>
        <p> Start Date: {new Date(data.start_time).toLocaleString()}</p>
        <p> End Date: {new Date(data.end_time).toLocaleString()}</p>
        <p> Duration: {`${days} days ${hours} hr ${minutes} min `}</p>
      </div>
      <div>
        {id % 2 === 0 ? (
          <img className="logo" src={logo1} alt="logo" />
        ) : (
          <img className="logo" src={logo2} alt="logo" />
        )}
      </div>
    </div>
  );
}

export default ContestDetails;
