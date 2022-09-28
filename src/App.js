import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';



class App extends Component {
  // adding State
  constructor() {
    // calls constructor of component
    super()
    // accessing state
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  // function for searchChange states 
  onSearchChange = (event) => {
    // to update state
    this.setState({searchfield: event.target.value});
    
  } 

  render() {
    // using filtered robots as props
    // function for communicating, between robots and searchChange states.
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })

    return (
      // cos we are returning one thing we need to rap it in a div or react.fragment <></> short hand
      <div className='tc'> 
        <h1 className='heading-font2'>RoboFriends</h1>
        <div className='robots-font'>
          <SearchBox searchChange={this.onSearchChange}/>
          {/* robots accessed from the state */}
          <CardList robots={filteredRobots} />
        </div>
         
      </div>
    );
  }
    
}


export default App; //default exports one thing, ...here the App
