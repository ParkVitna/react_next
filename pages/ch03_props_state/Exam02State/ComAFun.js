import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16);
}

function ComAFun(props) {
  let name = "홍길동";
  //let number = 0;
  //let color = "black";

  const [state, setState] = useState({
    number: 0,
    color: "black"
  });

  const addNumber = (event) => {
    setState({
      ...state,
      number: state.number + 1
    });
    //setState(state);
    name = "리액트";
    //number = number + 1;
  };
  
  const changeColor = (event) => {
    setState({
      ...state,
      color: getRandomColor()
    });
    //color = getRandomColor();
  };

  //console.log("ComAFun() 실행");

  return (
    <div className="card">
      <div className="card-header">
        ComAFun
      </div>
      <div className="card-body">
        name: {name}
        <h3 style={{color:state.color}}>{state.number}</h3>
        {/*<h3 style={{color:color}}>{number}</h3>*/}
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
        <button className="btn btn-info btn-sm" onClick={changeColor}>색깔 변경</button>
      </div>
    </div>
  );
}

export default ComAFun;