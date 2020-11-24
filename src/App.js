import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const PIZZA_URL = 'http://localhost:3000/pizzas'

class App extends Component {
  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount() {
    fetch(PIZZA_URL)
    .then(response => response.json())
    .then(pizzas => {
      this.setState({pizzas: pizzas})
    })
  }

  returnPizza = pizza => {
    this.setState({editPizza: pizza})
  }

  editPizza = pizza => {
    fetch(`${PIZZA_URL}/${pizza.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pizza)
    })
    .then(r => r.json())
    .then(newPizza => this.setState( {pizzas: Object.values({...this.state.pizzas, [newPizza.id - 1]:newPizza})}))

  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} editPizza={this.editPizza} />
        <PizzaList pizzas={this.state.pizzas} returnPizza={this.returnPizza}/>
      </Fragment>
    );
  }
}

export default App;
