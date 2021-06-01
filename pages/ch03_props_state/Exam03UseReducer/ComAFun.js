import { useReducer } from "react";

//방법1
//상태를 변경하는 함수
// function reducer(prevState, action) {
//   if(action.type === "INCREMENT") {
//     // 위에 reducer(state, action) 일때
//     // return {
//     //   ...state,
//     //   number: state.number + 1
//     // };
//     return {number: prevState.number + 1};
//   } else if(action.type === "DECREMENT") {
//     return {number: prevState.number - 1};
//   } else {
//     return null;
//   }
// }

//방법2
import reducer from "./number-reducer";

function ComAFun(props) {
  /*
  state: 이전(현재) 상태
  dispatch: 상태 변경 통보 함수 (자동으로 생성됨 호출해서 사용)
  */
  const [state, dispatch] = useReducer(reducer, {number:0});

  //이벤트 처리 함수
  const incrementCounter = (event) => {
    //상태 변경 통보
    dispatch({type:"INCREMENT"});
  };
  const decrementCounter = (event) => {
    dispatch({type:"DECREMENT"});
  };

  return(
    <div className="card">
      <div className="card-header">
          ComAFun
      </div>
      <div className="card-body">
        <p>현재 카운트 값: {state.number}</p>
        <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
        <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
      </div>
    </div>
  );
}

export default ComAFun;