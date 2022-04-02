import React from "react";
const size = {
  small: "primaryButton_size_small",
  big: "primaryButton_size_big",
};
const color = {
  primary: "primaryButton_color_primary",
};

class PrimaryButton extends React.Component {
  render() {
    return (
      <>
        <button
          {...this.props}
          className={
            "primaryButton " +
            size[this.props.size] +
            " " +
            color[this.props.color]
          }
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default PrimaryButton;
