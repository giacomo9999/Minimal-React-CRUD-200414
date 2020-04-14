import React from "react";

const ProvinceList = (props) => {
  const provinceTable = props.provinceData.map((province) => (
    <tr key={`PROV_${province.id}`}>
      <td>{province.id}</td>
      <td>{province.provinceName}</td>
      <td>{province.capital}</td>
      <td>
        <button onClick={() => props.editProvince(province)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteProvince(province.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h2>List Of Provinces</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Province Name</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>{provinceTable}</tbody>
      </table>
    </div>
  );
};

export default ProvinceList;
