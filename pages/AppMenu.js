import Link from "next/link";

function AppMenu() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link href="/"><a className="nav-link text-warning">Home</a></Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch01. ComponentDeclaration</h6>
        <Link href="/ch01_component_declaration/Exam01ClassTypeComponent"><a className="nav-link text-warning">ComA 함수형 컴포넌트</a></Link>
        <Link href="/ch01_component_declaration/Exam02FunTypeComponent"><a className="nav-link text-warning">ComB 클래스형 컴포넌트</a></Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch02. JSX(JavaScript XML)</h6>
        <Link href="/ch02_jsx/Exam01WrapElement"><a className="nav-link text-warning">Exam01WrapElement</a></Link>
        <Link href="/ch02_jsx/Exam02Expressions"><a className="nav-link text-warning">Exam02Expressions</a></Link>
        <Link href="/ch02_jsx/Exam03Condition"><a className="nav-link text-warning">Exam03Condition</a></Link>
        <Link href="/ch02_jsx/Exam04InlineCss"><a className="nav-link text-warning">Exam04InlineStyle</a></Link>
        <Link href="/ch02_jsx/Exam05CssClass"><a className="nav-link text-warning">Exam05CssClass</a></Link>
        <Link href="/ch02_jsx/Exam06EventHandling"><a className="nav-link text-warning">Exam06EventHandling</a></Link>
        <Link href="/ch02_jsx/Exam07Repeat"><a className="nav-link text-warning">Exam07Repeat</a></Link>
        <Link href="/ch02_jsx/Exam08Ref"><a className="nav-link text-warning">Exam08Ref</a></Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch03. Props and State</h6>
        <Link href="/ch03_props_state/Exam01Props"><a className="nav-link text-warning">Exam01Props</a></Link>
        <Link href="/ch03_props_state/Exam02State"><a className="nav-link text-warning">Exam02State</a></Link>
        <Link href="/ch03_props_state/Exam03UseReducer"><a className="nav-link text-warning">Exam03UseReducer</a></Link>
        <Link href="/ch03_props_state/Exam04StateInitFun"><a className="nav-link text-warning">Exam04StateInitFun</a></Link>
        <Link href="/ch03_props_state/Exam05StateToProp"><a className="nav-link text-warning">Exam05StateToProp</a></Link>
      </li>
      <li className="nav-item mt-3">
        <h6 className="text-white">Ch09. Ajax</h6>
        <Link href="/ch09_ajax/Exam01AsyncControl"><a className="nav-link text-warning">Exam01AsyncControl</a></Link>
        <Link href="/ch09_ajax/Exam02Auth"><a className="nav-link text-warning">Exam02Auth</a></Link>
        <Link href="/ch09_ajax/Exam03Board/BoardTable"><a className="nav-link text-warning">Exam03Board</a></Link>
        <Link href="/ch09_ajax/Exam04FileUploadDownload/BoardTable"><a className="nav-link text-warning">Exam04FileUploadDownload</a></Link>
      </li>
    </ul>
  );
};

export default AppMenu; 