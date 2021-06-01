import React from "react";
import { createRef } from "react";

class ComB extends React.Component {
  constructor(props) {
    super(props);
    this.handleBtn = this.handleBtn.bind(this);
    this.inputRef = createRef();
    this.divRef = createRef();
  }

  handleBtn(event) {
    this.inputRef.current.style.backgroundColor = "orange";
    this.inputRef.current.focus();
    this.divRef.current.innerHTML = "<img src='/resources/img/photo1.jpg' width='200'/>";
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          ComB
        </div>
        <div className="card-body">
          <div className="form-row align-items-center">
            <input type="text" ref={this.inputRef}/>
            <button className="ml-2 btn btn-primary btn-sm" onClick={this.handleBtn}>DOM 변화주기</button>
          </div>
          <div className="mt-2" ref={this.divRef}></div>
        </div>
      </div>
    );
  }
}

export default ComB;