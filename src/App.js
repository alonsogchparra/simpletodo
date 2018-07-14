import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      items:[]
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term:'',
      items: [...this.state.items, this.state.term]
    });
  };

  onDelete = (index) => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };


  render() {
    return (
      <div className="App offset-3 col-md-6">
        <form onSubmit={this.onSubmit} className="form-group">
          <h1>Simple TodoApp</h1>
          <input className="form-control mt-2 mb-3" onChange={this.onChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
        <List
          items={this.state.items}
          delete={this.onDelete} />
      </div>
    );
  }
}

export default App;
