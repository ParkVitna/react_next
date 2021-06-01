import ClassTypeProps from "./ClassTypeProps";
import FunTypeProps from "./FunTypeProps";

function Exam01Props(props) {
  return(
    <div className="card">
      <div className="card-header">
        Exam01Props
      </div>
      <div className="card-body">
        <ClassTypeProps name="리액트" version={17}>
          <div>자식 내용입니다.</div>
        </ClassTypeProps>
        <FunTypeProps name="리액트"  version={17}>
          <div>자식 내용입니다.</div>
        </FunTypeProps>
      </div>
    </div>
  );
}

export default Exam01Props;