import { useState } from "react";

function getBoardList() {
  console.log("getBoardList() 호출");
  return (
    [
      {bno:1, btitle:"제목1", bcontent:"내용1"},
      {bno:2, btitle:"제목2", bcontent:"내용2"},
      {bno:3, btitle:"제목3", bcontent:"내용3"},
    ]
  );
}

function Exam04StateInitFun(props) {
  //const [boardList, setBoardList] = useState(getBoardList()); //리랜더링할 때마다 호출
  const [boardList, setBoardList] = useState(getBoardList); //최초 랜더링 시 딱 한번 호출

  const [newBno, setNewBno] = useState(4);

  const addBoard = (event) => {
    setBoardList(boardList.concat({
      bno: newBno,
      btitle:"제목" + newBno,
      bcontent:"내용" + newBno
    }));
    setNewBno(newBno + 1);
  };

  return (
    <div className="card">
    <div className="card-header">
      Exam04StateInitFun
    </div>
    <div className="card-body">
      <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th>bno</th>
            <th>btitle</th>
            <th>bcontent</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map(board=>(
            <tr className="text-center" key={board.bno}>
              <th>{board.bno}</th>
              <td>{board.btitle}</td>
              <td>{board.bcontent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Exam04StateInitFun;