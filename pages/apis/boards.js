import axios from "axios";
import qs from "qs";

export function getBoardList(pageNo=1) { //페이지넘버를 주지 않으면 1
  //const promise = axios.get("/boards", {params:{pageNo:pageNo}}); //{config}
  const promise = axios.get("/boards", {params:{pageNo}});
  return promise;
}

export function createBoardNoAttach(board) {
  const promise = axios.post("/boards", board); //{"btitle":"제목1", "bcontent":"내용1", ...} ~> json포맷 ~> 스프링에서 @RequestBody
  // const promise = axios.post("/boards", qs.stringify(board)); //btitle=제목1&bcontent=내용1&...
  return promise;
}

//

export function createBoard(multipartFormData) { //formData가 들어옴
  return axios.post("/boards", multipartFormData); 
}

export function readBoard(bno) {
  return axios.get("/boards/" + bno);
}

export function deleteBoard(bno) {
  return axios.delete("/boards/" + bno);
}

export function updateBoard(board) {
  return axios.put("/boards", board); //{"btitle":"xxx", "bcontent":"yyy", "bwriter":"zzz"}
}

export function downloadAttach(bno) {
  return axios.get("/boards/battach/" + bno, {responseType: "blob"}); //바이너리데이터 ~> axios의 경우에 이미지(첨부)파일에 반드시 써줘야함
}