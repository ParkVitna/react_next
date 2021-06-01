function ComB(props) {
  const items = [
    {id:"i1", text:"눈사람"},
    {id:"i2", text:"얼음"},
    {id:"i3", text:"눈"}
  ];
  return (
    <div className="card">
      <div className="card-header">
        ComB
      </div>
      <div className="card-body">
        <ul>
          {items.map((item) => {
            return(<li key={item.id}>{item.text}</li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default ComB;