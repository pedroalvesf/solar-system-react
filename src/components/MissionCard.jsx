import React from "react";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div>
        <p> { name } </p>
        <p> { year } </p>
        <p> { country } </p>
        <p> { destination } </p>
      </div>
    )
  }
}

export default MissionCard;