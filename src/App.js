import React, { Component } from "react";

import "./App.css";
import ProvinceList from "./ProvinceList";
import AddProvince from "./AddProvince";
import EditProvince from "./EditProvince";

class App extends Component {
  state = {
    editPanelOpen: false,
    runningIdValue: 4,
    tempId: null,
    tempProvName: "",
    tempCapital: "",
    provinceData: [
      { id: 1, provinceName: "Ontario", capital: "Toronto" },
      { id: 2, provinceName: "Quebec", capital: "Quebec City" },
      { id: 3, provinceName: "Saskatchewan", capital: "Regina" },
      { id: 4, provinceName: "Alberta", capital: "Edmonton" },
    ],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addProvince = (e) => {
    e.preventDefault();
    console.log(`addProvince...`);
    const newProvince = {
      id: this.state.runningIdValue + 1,
      provinceName: this.state.tempProvName,
      capital: this.state.tempCapital,
    };
    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempProvName: "",
      tempCapital: "",
      provinceData: [...this.state.provinceData, newProvince],
    });
  };

  editProvince = (province) => {
    console.log(`editProvince...`);
    this.setState({
      editPanelOpen: true,
      tempId: province.id,
      tempProvName: province.provinceName,
      tempCapital: province.capital,
    });
  };

  closeEditPanel = () => {
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempProvName: "",
      tempCapital: "",
    });
  };

  updateProvince = (e) => {
    e.preventDefault();
    console.log(`editProvince...`);
    const updatedProvince = {
      id: this.state.tempId,
      provinceName: this.state.tempProvName,
      capital: this.state.tempCapital,
    };
    console.log(updatedProvince);
    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempProvName: "",
      tempCapital: "",
      provinceData: this.state.provinceData.map((province) =>
        province.id === updatedProvince.id ? updatedProvince : province
      ),
    });
  };

  deleteProvince = (id) => {
    this.setState({
      provinceData: this.state.provinceData.filter(
        (province) => id !== province.id
      ),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <ProvinceList
          provinceData={this.state.provinceData}
          editProvince={this.editProvince}
          deleteProvince={this.deleteProvince}
        />
        {this.state.editPanelOpen ? (
          <EditProvince
            handleInputChange={this.handleInputChange}
            updateProvince={this.updateProvince}
            closeEditPanel={this.closeEditPanel}
            tempProvName={this.state.tempProvName}
            tempCapital={this.state.tempCapital}
          />
        ) : (
          <AddProvince
            handleInputChange={this.handleInputChange}
            addProvince={this.addProvince}
            tempProvName={this.state.tempProvName}
            tempCapital={this.state.tempCapital}
          />
        )}
      </div>
    );
  }
}
export default App;
