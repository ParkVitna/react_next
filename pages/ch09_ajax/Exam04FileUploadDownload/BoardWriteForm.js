import { createBoard, createBoardNoAttach } from "apis/boards";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function BoardWriteForm(props) {
  const router = useRouter();

  const [board, setBoard] = useState({
    btitle: "",
    bcontent: ""
  });

  const inputFile = useRef();

  const globalUid = useSelector(state => state.authReducer.uid);

  const handleAdd = async (event) => {
    event.preventDefault();
    //console.log(board);
    try {
      //멀티파트 ~> 파일첨부
      const formData = new FormData();
      formData.append("btitle", board.btitle);
      formData.append("bcontent", board.bcontent);
      formData.append("bwriter", globalUid);
      formData.append("battach", inputFile.current.files[0]);
      await createBoard(formData);
      router.back();
    } catch(error) {
      console.log(error);
    }
  }; 

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value
    });
  };

  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
    <div className="card-header">
      BoardWriteForm
    </div>
    <div className="card-body">
      <form onSubmit={handleAdd}>
        <div className="form-group row">
          <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
          </div>
        </div>
        
        <div className="form-group row">
            <label htmlFor="battach" className="col-sm-2 col-form-label">battach</label>
            <div className="col-sm-10">
              <input id="battach" name="battach" type="file" className="form-control-file" ref={inputFile}/>
            </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12 d-flex justify-content-center">
            <input type="submit" className="btn btn-primary btn-sm mr-2" value="추가"/>
            <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default BoardWriteForm;