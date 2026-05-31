import "./Form.css";
import React, { useState } from "react";

const Form = () => {
  const [enterName, setEnterName] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const storeSeriesName = function (event) {
    setEnterName(event.target.value);
    console.log(enterName);
  };

  const storeSeriesDate = function (event) {
    setEnterDate(event.target.value);
    console.log(enterDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      seriesName: enterName,
      seriesDate: enterDate,
    };

    console.log(userData);
  };

  return (
    <div>
      <form className="series" onSubmit={submitHandler} action>
        <div className="series_name flex">
          <label for="series-name">Series Name:</label>
          <input
            type="text"
            id="series-name"
            placeholder="your Favourite series"
            onChange={storeSeriesName}
          />
        </div>
        <div className="series_date flex">
          <label for="series-date">Realese Date:</label>
          <input
            type="text"
            id="series-date"
            placeholder="xx may, xxxx"
            onChange={storeSeriesDate}
          />
        </div>
        <div className="series__btn">
          <button href="#" type="submit" className="btn btn-button">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
