import React from "react";

const AddProvince = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Province</h2>
      <form className="h-form" onSubmit={props.addProvince}>
        <label className="h-label">Province Name</label>
        <input
          className="h-input"
          type="text"
          name="tempProvName"
          value={props.tempProvName}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Province Capital</label>
        <input
          className="h-input"
          type="text"
          name="tempCapital"
          value={props.tempCapital}
          onChange={props.handleInputChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProvince;
