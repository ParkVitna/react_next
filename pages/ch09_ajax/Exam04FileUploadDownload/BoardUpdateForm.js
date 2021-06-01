import { readBoard, updateBoard } from "apis/boards";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function BoardUpdateForm(props) {
  const router = useRouter();
  const bno = parseInt(router.query.bno);

  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: ""
  });

  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data);
      }catch(error){
        console.log(error);
      }
    };
    work();
  }, [bno]);

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value
    })
  };

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();
      const dirtyBoard = {...board}; //복사해서 넣기
      await updateBoard(dirtyBoard);
      router.back();
    } catch(error) {
      console.log(error);
    }
  };

  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
    <div className="card-header">
      BoardUpdateForm
    </div>
    <div className="card-body">
      <form onSubmit={handleUpdate}>
        <div className="form-group row">
          <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 d-flex justify-content-center">
            <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
            <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default BoardUpdateForm;