import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Headline from "./components/Headline"
import bap_data from "./data/bap_data"
import VehicleCard from './components/VehicleCard';
import VehicleColorsList from './components/VehicleColorsList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current_color: 0,
      bap_data: bap_data
    };
  }

  updateCurrentColor = (colorIndex)=> {
    this.setState({current_color: colorIndex})
  };

  render() {
    return (
    <div className="App">
      <Header logo={logo} />
      <Headline vehicleName={this.state.bap_data.vehicle_name} />
      <VehicleCard vehicleData={this.state.bap_data.exterior_colors[this.state.current_color]} />
      <VehicleColorsList 
        colorData={this.state.bap_data.exterior_colors} 
        currentColor={this.state.current_color} 
        updateCurrentColor={this.updateCurrentColor} 
      />
    </div>
    );
  }
}

export default App;
