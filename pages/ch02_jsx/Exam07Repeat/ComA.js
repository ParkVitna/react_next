function ComA(props) {
  const items = ["눈사람", "얼음", "눈", "바람", "얼음"];
  return (
    <div className="card">
      <div className="card-header">
        ComA
      </div>
      <div className="card-body">
        <ul>
          {items.map((item, index) => {
            return(<li key={index}>{item}</li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default ComA;