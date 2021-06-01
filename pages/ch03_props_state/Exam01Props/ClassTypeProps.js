import React from "react";
import PropTypes from "prop-types";

class ClassTypeProps extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    //console.log(props.match);
  }

  render() {
    const {name, version} = this.props;

    return (
      <div className="card">
        <div className="card-header">
            ClassTypePropsame
        </div>
        <div className="card-body">
          <div>name: {name}</div>
          <div>version: {version}</div>
          {this.props.children}
        </div>
      </div>

    );
  }
}

//디폴트 속성값 설정
ClassTypeProps.defaultProps = {
  version: 15
};

//타입과 필수 설정
ClassTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
};

export default ClassTypeProps;