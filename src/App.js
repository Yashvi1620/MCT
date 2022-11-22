import "./App.css";
import Contest from "./components/Contest";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import utils from "./Utils";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios("https://kontests.net/api/v1/all");
      const newData = response.data;
      setData(newData);
    })();
  }, []);

  return (
    <div className="App">
      <utils.Provider value={data}>
        <Routes>
          <Route path="/" element={<Contest />} />
        </Routes>
      </utils.Provider>
    </div>
  );
}

export default App;
