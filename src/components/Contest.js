import React, { useContext, useState } from "react";
import utils from "../Utils";
import ContestBar from "./ContestBar";
import Main from "./Main";

const Contest = () => {
  const data = useContext(utils);
  const [displayPage, setdisplayPage] = useState([]);

  const [click, setClick] = useState(true);

  const handleChange = (e) => {
    setClick(false);
    setdisplayPage(e);
  };
  return click ? (
    <div className="main">
      <div>
        <h1 className="plat">PLATFORMS</h1>
      </div>
      <div>
        {data.map((e, i) => {
          return (
            <div onClick={() => handleChange(e)} className="badge" key={i}>
              <ContestBar id={i} data={e} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Main displayPage={displayPage} />
  );
};

export default Contest;
