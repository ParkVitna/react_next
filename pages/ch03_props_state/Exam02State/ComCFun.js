import { useState } from "react";

function ComCFun(props) {
  const [joinForm, setJoinForm] = useState({
    uid: "",
    uname: "",
    upassword: "",
    ujob: "developer",
    uskill: []
  });

  const handleSubmit = (event) => {
    event.preventDefault(); //가입버튼 누를 때, refresh 막기
    console.log(joinForm);
  };

  const handleChange = (event) => {
    // console.log(event.target.name); //어디서 변화가 생겼는지 name
    // console.log(event.target.value); //현재 바뀐 값
    if(event.target.name !== "uskill") {
      setJoinForm({
        ...joinForm,
        [event.target.name]: event.target.value
      })
    } else {
      if(event.target.checked) {
        //값을 전달
        // setJoinForm({
        //   ...joinForm,
        //   uskill: joinForm.uskill.concat(event.target.value)
        // });

        //함수 형태로 전달
        // setJoinForm(prevJoinForm => {
        //   return {
        //     ...prevJoinForm,
        //     uskill: prevJoinForm.uskill.concat(event.target.value)
        //   };
        // })
        setJoinForm(prevJoinForm => ({
            ...prevJoinForm,
            uskill: prevJoinForm.uskill.concat(event.target.value)
        }));
      } else {
        // setJoinForm({
        //   ...joinForm,
        //   // uskill: joinForm.uskill.filter((item)=>{
        //   //   return item !== event.target.value
        //   // })
        //   uskill: joinForm.uskill.filter(item => item !== event.target.value)
        // });
    
        setJoinForm(prevJoinForm => {
          return {
            ...prevJoinForm,
            uskill: prevJoinForm.uskill.filter(item => item !== event.target.value)
          };
        });
      }
    }
  };

  return (
    <div className="card">
    <div className="card-header">
      ComCFun
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">ID</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uname" onChange={handleChange} autoComplete="username"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" name="upassword" onChange={handleChange} autoComplete="current-password"/>
          </div>
        </div>
        <fieldset className="form-group row">
          <legend className="col-form-label col-sm-2 float-sm-left pt-0">Job</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="ujob" value="developer" onChange={handleChange} checked={joinForm.ujob === "developer"} />
              <label className="form-check-label">
                개발자
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="ujob" value="designer" onChange={handleChange} checked={joinForm.ujob === "designer"} />
              <label className="form-check-label">
                디자이너
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="ujob" value="pm" onChange={handleChange} checked={joinForm.ujob === "pm"} />
              <label className="form-check-label">
                프로젝트 관리자
              </label>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <legend className="col-form-label col-sm-2 float-sm-left pt-0">Skill</legend>
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="java" onChange={handleChange}/>
              <label className="form-check-label">
                자바
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="spring" onChange={handleChange}/>
              <label className="form-check-label">
                스프링
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="react" onChange={handleChange}/>
              <label className="form-check-label">
                리액트
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary btn-sm">가입</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default ComCFun;