import React from "react";

class Title extends React.Component {
  render() {
    const head  = this.props.headline;
    return(
    <div className="subTitle">
      <h2 >
        { head }
      </h2>
    </div>
  )}
}

export default Title;