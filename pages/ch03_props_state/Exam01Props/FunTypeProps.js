import PropTypes from "prop-types";

function FunTypeProps(props) {
  //console.log(props);
  const {name, version} = props;

  return (
    <div className="card">
      <div className="card-header">
        FunTypeProps
      </div>
      <div className="card-body">
        <div>name: {name}</div>
        <div>version: {version}</div>
        {props.children}
      </div>
    </div>
  );
}

FunTypeProps.defaultProps = {
  name: "React",
  version: 15
};

FunTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
};

export default FunTypeProps;