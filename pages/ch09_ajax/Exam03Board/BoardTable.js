import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getBoardList } from "apis/boards";

function BoardTable(props) {
  const router = useRouter();
  const pageNo = parseInt(router.query.pageNo) || 1; //pageNo가 들어가 있지 않으면, 기본값 1
  // let pageNo = 1;
  // if(queryString.pageNo) {
  //   pageNo = parseInt(queryString.pageNo);
  // }
  const [page, setPage] = useState(null);

  const changePageNo = async (pageNo) => {
    try {
      const response = await getBoardList(pageNo);
      //console.log(response.data);
      
      //백엔드에서 작성 (util-paging.js)
      //페이지 번호(1,2,3,4,5)별로 링크를 만들기 위해서 ~> page.pager.pageArray.map()
      // const pageArray = [];
      // const startPageNo = response.data.pager.startPageNo;
      // const endPageNo = response.data.pager.endPageNo;
      // for(var i=startPageNo; i<=endPageNo; i++) {
      //   pageArray.push(i);
      // }

      setPage(response.data); //data안에 boards와 pager가 같이 저장
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    changePageNo(pageNo);
  }, [pageNo]); // []도 가능하지만 경고표시 나와서 ~> [pageNo]
  //pageNO가 바뀔 때, useEffect 다시 실행 ~> pageNo는 상태가 아니므로 바뀔일(렌더링 되고 나서) 없음.

  return (
    <div className="card">
      <div className="card-header">
        BoardTable
      </div>
      <div className="card-body">
        {page!=null &&
          <div>
            <div className="mb-3">
              <Link href="/ch09_ajax/Exam03Board/BoardWriteForm"><a className="btn btn-success btn-sm">생성</a></Link>
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>글쓴이</th>
                  <th>날짜</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                {page.boards.map(board => {
                  return (
                    <tr key={board.bno}>
                      <td>{board.bno}</td>
                      <td><Link href={`/ch09_ajax/Exam03Board/BoardRead?bno=${board.bno}&pageNo=${page.pager.pageNo}`}><a>{board.btitle}</a></Link></td>
                      <td>{board.bwriter}</td>
                      <td>{new Date(board.bdate).toLocaleDateString()}</td>
                      <td>{board.bhitcount}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td colSpan="5" style={{textAlign: "center"}}>
                    <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => changePageNo(1)}>처음</button> 
                    {(page.pager.groupNo > 1) && 
                      <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.startPageNo-1)}>이전</button>
                    }
                    {page.pager.pageArray.map(i =>
                      <button className={`btn ${i===page.pager.pageNo?"btn-danger":"btn-outline-success"} btn-sm mr-1`} key={i} onClick={() => changePageNo(i)}>{i}</button>
                    )}
                    {page.pager.groupNo < page.pager.totalGroupNo && 
                      <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.endPageNo+1)}>다음</button>
                    }
                    <button className="btn btn-outline-primary btn-sm" onClick={() => changePageNo(page.pager.totalPageNo)}>맨끝</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}

export default BoardTable;