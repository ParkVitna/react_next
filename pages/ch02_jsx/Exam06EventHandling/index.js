import ComAClassTypeEventHandling from "./ComAClassTypeEventHandling";
import ComBFunTypeEventHandling from "./ComBFunTypeEventHandling";
import ComCTwoWayBinding from "./ComCTwoWayBinding";

function Exam06EventHandling(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam06EventHandling
      </div>
      <div className="card-body">
          <ComAClassTypeEventHandling/>
          <div className="m-2"></div>
          <ComBFunTypeEventHandling/>
          <div className="m-2"></div>
          <ComCTwoWayBinding/>
      </div>
    </div>
  );
}

export default Exam06EventHandling;