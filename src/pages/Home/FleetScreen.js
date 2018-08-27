import React from 'react';
import './FleetScreen.css';
import Table from '../../components/Table/Table';
import {constants, composeFetch} from '../../utils';
import ScooterData from '../../utils/data';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class FleetScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allScooters: [],
      searchText: '',
      batteryLowerLevel: 0,
      batteryHigherLevel: 100,
    }
  }

  async componentDidMount() {
    let url = `${constants.SCOOTERS_URL}`; 
    const getScooters = await composeFetch(url, 'get');
    // const getScooters = ScooterData;
    if (getScooters.data.scooters) {
      this.setState({ allScooters: getScooters.data.scooters})
    }
  }

  _handleSearch = (e) => {
    this.setState({ searchText: e.target.value })
  }

  _handleBatterLevelChange = boundry => value => {
    this.setState({
      [boundry]: parseInt(value.target.value)
    })
  } 

  _isBetween = (value) => {

    let higher = this.state.batteryHigherLevel;
    let lower = this.state.batteryLowerLevel;
    
    if(value >= lower && value <= higher) return true;
    return false;
  }

  _isSearch = (item) => {
    if (!this.state.searchText) return true
    let model = item.model.toLocaleLowerCase();
    return model.indexOf(this.state.searchText.toLocaleLowerCase()) > -1
  }

  render() {
    const allScooters = this.state.allScooters.filter((item) => {
      return this._isSearch(item) && this._isBetween(item.energy_level);
    });

    return (
      <div>
        <h1> Scooters Table </h1>
        <div className="container">
          <SearchBar
            textChange={this._handleSearch} 
            batteryLevelChange={this._handleBatterLevelChange}
          />
          <div  className="table-container">
            { allScooters.length && <Table data={allScooters} /> }
          </div>
        </div>
      </div>
    )
  }
}