import React from "react";

const EditProvince = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Province</h2>
      <form className="h-form">
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
        <button onClick={props.updateProvince}>Submit</button>
        <button onClick={props.closeEditPanel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProvince;
