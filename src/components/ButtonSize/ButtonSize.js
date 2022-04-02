import React from "react";
const size = {
  small: "buttonSize_size_small",
  medium: "buttonSize_size_medium",
  big: "buttonSize_size_big",
};
const type = {
  plus: "buttonSize_type_plus",
  minus: "buttonSize_type_minus",
  sizeChart: "buttonSize_type_sizeChart",
};

class ButtonSize extends React.Component {
  render() {
    return (
      <>
        <button
          {...this.props}
          className={
            "buttonSize " + size[this.props.size] + " " + type[this.props.type]
          }
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default ButtonSize;
