import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {count: 0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.state.count > 0 && this.setState({count: this.state.count -1});
  }



    render() {
      return (
        <div className="App">
          <h1 style={ {color: this.props.color} }>Vous avez {this.state.count} articles</h1>
          <button onClick={this.increment}>j'ajoute dans le panier</button> 
          <button onClick={this.decrement}>j'eleve dans le panier</button>       
        </div>
      );
    }
}

export default App;
