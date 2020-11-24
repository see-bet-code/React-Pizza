import React from "react"

export default class PizzaForm extends React.Component {
  state = {
    id: -1,
    topping: "",
    size: "",
    vegetarian: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pizza !== this.props.pizza) {
      this.setState(this.props.pizza)
    } 
  }

  handleChange = (e) => {
    let val = e.target.value
    if (val.includes('Vegetarian')) {
      val = (val === "Vegetarian") ? true : false
    }
    this.setState({[e.target.name]: val})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(this.initialState)
    this.props.editPizza(this.state)
  }

  render() {
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                this.state.topping
              } onChange={this.handleChange}/>
        </div>
        <div className="col">
          <select value={this.state.size} name="size" className="form-control" onChange={this.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Vegetarian"} checked={this.state.vegetarian} name="vegetarian" onChange={this.handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} name="vegetarian" onChange={this.handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>

  )
  }
  
}

