//상태 초기값 선언
const initialState = {
  color: "yellow"
};

//액션 타입 선언
const SET_COLOR = "color/setColor";

//액션 생성 함수 선언
export const createSetColorAction = (color) => {
  return {type:SET_COLOR, color};
};

//리듀스 선언 ~> 상태 변경, useReduce와 비슷
const colorReducer = (state=initialState, action) => {
  if(action.type === SET_COLOR) {
    return {color: action.color};
  } else {
    return state; //현재 상태 그대로를 리턴
  }
};

export default colorReducer;
