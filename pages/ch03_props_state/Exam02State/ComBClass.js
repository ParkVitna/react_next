import React from "react";

class ComBClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  addNumber1 = (event) => {
    this.setState({
      number: this.state.number + 1
    });
    this.setState({
      number: this.state.number + 1
    });
  };

  addNumber2 = (event) => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    });
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      }
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComBClass
        </div>
        <div className="card-body">
          <h3>{this.state.number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자 증가</button>
        </div>
      </div>
    );
  }
}

export default ComBClass;