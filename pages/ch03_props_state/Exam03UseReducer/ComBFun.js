import { useReducer, useState } from "react";

function reducer(prevBoards, action) {
  if(action.type === "ADD") { //{type:"ADD", board:{bno:xx, btitle:xx, bcontent:xx}} (새로운 내용 board)
    //이렇게 action(type, 받을 데이터)이 넘어왔을 때 처리하겠다
    //boards가 배열[{},{},{},...]이기 때문에 새로운 배열을 return 해야함
    const newBoards = prevBoards.concat(action.board);
    return newBoards;
  } else if(action.type === "DELETE") { //{type:"DELETE", bno:1} (삭제할 bno)
    // const newBoards = prevBoards.filter((board) => {
    //   return board.bno !== action.bno
    // });
    const newBoards = prevBoards.filter((board) => board.bno !== action.bno);
    return newBoards;
  } else if(action.type === "UPDATE") { //{type:"UPDATE", board:{bno:xx, btitle:xx, bcontent:xx}} (수정할 내용 board)
    const newBoards = prevBoards.map((board) => {
      if(board.bno === action.board.bno) {
        return action.board;
      } else {
        return board;
      }
    });
    return newBoards;
  } else {
    return null;
  }
}

function ComBFun(props) {
  const [boards, dispatch] = useReducer(reducer, [
    {bno:1, btitle:"제목1", bcontent:"내용1"},
    {bno:2, btitle:"제목2", bcontent:"내용2"},
    {bno:3, btitle:"제목3", bcontent:"내용3"},
  ]);
  const [newBno, setNewBno] = useState(4);
  const [newBoard, setNewBoard] = useState({
    btitle: "",
    bcontent: ""
  });
  const [updateBoard, setUpdateBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: ""
  });

  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]: event.target.value
    });
  };

  const addBoard = (event) => {
    const board = {...newBoard, bno: newBno};
    dispatch({type:"ADD", board: board}); //board로 생략가능
    setNewBno(newBno + 1);
    setNewBoard({
      btitle: "",
      bcontent: ""
    });
  };

  const removeBoard = (bno) => {
    dispatch({type:"DELETE", bno});
  };

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name]: event.target.value
    });
  };

  const selectBoard = (bno) => {
    //배열의 find함수 이용 (또는 for문 이용)
    //const selectedBoard = boards.find(board => { return board.bno === bno; });
    const selectedBoard = boards.find(board => board.bno === bno);
    setUpdateBoard({...selectedBoard}); //복제해서 주기
  };

  const handleUpdate = (event) => {
    dispatch({type:"UPDATE", board:updateBoard});
    setUpdateBoard({
      bno: "",
      btitle: "",
      bcontent: ""
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={newBoard.btitle} onChange={changeNewBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={newBoard.bcontent} onChange={changeNewBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map(board => {
                return (
                  <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td style={{width:"150px"}}>
                    <button className="btn btn-info btn-sm mr-1" onClick={() => selectBoard(board.bno)}>선택</button>
                    <button className="btn btn-danger btn-sm" onClick={() => removeBoard(board.bno)}>삭제</button>
                  </td>
                </tr>
                );
              })}
              {/* {boards.map(board => (
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.btitle}</td>
                  <td>{board.bcontent}</td>
                  <td></td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>bno</td>
                <td><input type="text" name="bno" style={{width:"100%"}} readOnly value={updateBoard.bno}/></td>
              </tr>          
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={updateBoard.btitle} onChange={changeUpdateBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={updateBoard.bcontent} onChange={changeUpdateBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
        </div>      
      </div>
    </div>
  );
}

export default ComBFun;