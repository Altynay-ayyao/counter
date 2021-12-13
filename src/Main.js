import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
    //we use  state only when we need this data to be dynamic
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }; //we are inside the class components so we don't need const. We are using setState() method(ready made, also called as higher order functions)

  removeOneHandler = () => {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  removeFiveHandler = () => {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 5,
      });
    }
  }; //How to do conditonal styling ?

  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    //conditional rendering:
    let circleClass = "";
    if (this.state.counter === 0) {
      circleClass = "circle";
    } else if (this.state.counter % 2 === 0) {
      circleClass = "circle_even";
    } else {
      circleClass = "circle_odd";
    }
    return (
      <div>
        <h1 className={circleClass}>{this.state.counter}</h1>
        <p>{this.state.text}</p>
        <div className="button_wrapper">
        <button onClick={this.addOneHandler}>Add one</button>
        <button onClick={this.removeOneHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
        <button onClick={this.addFiveHandler}>Add five</button>
        <button onClick={this.removeFiveHandler}>Remove five</button>
        </div>
      </div>
    );
  }
}

export default Main;
