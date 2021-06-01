import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { deleteBoard, downloadAttach, readBoard } from 'apis/boards';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const BoardRead = (props) => {
  const router = useRouter();
  const bno = parseInt(router.query.bno);
  const pageNo = parseInt(router.query.pageNo);

  // 삭제 버튼 눌렀을 때 
  const handleRemove = async (event) => {
    try{  
      await deleteBoard(bno);
      router.back();
    }catch(error){
      console.log(error);
      // 에러 페이지로 넘기는거는 
      // history.push('/error');
    }
  };

  const [board, setBoard] = useState({});
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
  }, [bno]); //bno만 바꼈을 때 재실행 but, bno는 바뀔 리 없음 // 조횟수 1번만 ,, 이 함수가 한번만 실행됨 

  // REST API - 비동기 호출 
  /*
   * 비동기로 디비 작업하니까, 처음 랜더링될때는 보드 내용이 안들어가니까 
   * board에 디비 내용 들어오면 
   * 다시 리랜더링될수 있또록 보드를 상태로 만들어주는 것이다. 
  */ 

  //방법1
  const [imgSrc, setImgSrc] = useState(null); //이미지 데이터 이므로 없으면 null로 준다
  //const imgTag = useRef(); //DOM 참조 만들어주기
  useEffect(() => { //이미지를 다운로드 하기 위한 useEffect
    if(board.battachoname) {
      const work = async () => {
        try {
          const response = await downloadAttach(board.bno);
          setImgSrc(URL.createObjectURL(response.data));
          //imgTag.current.src = URL.createObjectURL(response.data);
        } catch(error) {
          console.log(error);
        }
      };
      work();
    }
  }, [board]); //처음 마운트 될때 또는 boards 상태가 바뀔 때마다 실행

  //방법2
  const authToken = useSelector(state => state.authReducer.authToken);

  return (
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
        <>
          <div className="row">
            <div className="col-md-6">
              <p>bno: {board.bno}</p>
              <p>btitle: {board.btitle}</p>
              <p>bcontent: {board.bcontent}</p>
              <p>bwriter: {board.bwriter}</p>
              <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
              <p>bhitcount: {board.bhitcount}</p>
              <p>battachoname: {board.battachoname}</p>
              <p>battachsname: {board.battachsname}</p>
              <p>battachtype: {board.battachtype}</p>
            </div>

            <div className="col-md-6">
              {board.battachoname && 
                <div>
                  {/* 방법1 ~> axios 이용 */}
                  <img src={imgSrc} alt="" width="200"/>

                  <hr/>

                  {/* 방법2 ~> axios 이용 안함(authToken이 포함되지 않음, 넣어줘야함) */}
                  <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width="200"/>
                </div>
              }
            </div>
          </div>

          <div>
            <Link href={`/ch09_ajax/Exam04FileUploadDownload/BoardTable?pageNo=${pageNo}`} ><a className="btn btn-info btn-sm mr-2">목록</a></Link>
            <Link href={`/ch09_ajax/Exam04FileUploadDownload/BoardUpdateForm?bno=${board.bno}`}><a className="btn btn-info btn-sm mr-2">수정</a></Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </>
        }
      </div>
    </div>
);
};

export default BoardRead;