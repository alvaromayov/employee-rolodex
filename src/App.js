import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ persons: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { persons, searchField } = this.state;
    const filteredpersons = persons.filter(person =>
      person.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <SearchBox
            placeholder="Search person"
            handleChange={this.handleChange}
          />
          <h1>Employee Rolodex</h1>
        <CardList persons={filteredpersons} />
      </div>
    );
  }
}

export default App;
