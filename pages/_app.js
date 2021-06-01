import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from 'AppHeader';
import AppMenu from 'AppMenu';
import { createStore } from 'redux';
import rootReducer from 'redux/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';
import { addAuthHeader } from "apis/axiosConfig";
import { createWrapper } from "next-redux-wrapper";

//서버쪽에서 sessionStorage가 없기 때문에 에러가 남.
//브라우저(클라이언트)에서 실행되는지 확인 후 코드 실행
if(typeof window !== "undefined") {
  //Axios에 인증 헤더 추가
  if(sessionStorage.getItem("authToken")) {
    addAuthHeader(sessionStorage.getItem("authToken"));
  }
}

function App({ Component, pageProps }) {
  const dispatch = useDispatch();

  //비동기로 실행하기 때문에 코드가 다 실행되기 전에 다른 AXIOS 통신이 발생할 수 있음
  useEffect(() => {
    //Redux에 인증 정보 설정
    dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
    dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
  }, []); //마운트 될때 한번만 실행
  
  return (
    
    <div className="d-flex flex-column vh-100">
      <AppHeader />
      <div className="flex-grow-1 container-fluid">
        <div className="row h-100">
          <div className="col-md-6 col-lg-4 p-3 bg-dark">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1" style={{ height: "0px", overflowY: "auto", overflowX: "hidden" }}>
                <AppMenu />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8 p-3">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1 overflow-auto pr-3" style={{ height: "0px" }}>
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};
const wrapper = createWrapper(configureStore); //<Provider>제공

export default wrapper.withRedux(App);
