import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component  {

  constructor(props) {
    console.log('App constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        // {name: 'Audi', year: 2016},
        // {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: true
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({cars})
  }

  UNSAFE_componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car 
              name={car.name} 
              year={car.year} 
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
          
        )
      })
    }
  
    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}

        <h1>{this.props.title}</h1>

        <Counter />

        <hr/>

        <button 
          className={'app-button'}
          onClick={this.toggleCarsHandler}
        >Toggle cars
        </button>

        <div className="car-list">
          { cars }
        </div>
          
        
        

      </div>        
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//     </div>
//   );

//   // return React.createElement(
//   //   'div',
//   //   {
//   //     className: 'App'
//   //   },
//   //   React.createElement(
//   //     'h1',
//   //     null,
//   //     'Hello world!'
//   //   )
//   // )
// }

export default App;
