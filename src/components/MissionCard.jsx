import React from "react";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missionCard">
        <p className="filho"> { name } </p>
        <p className="filho"> { year } </p>
        <p className="filho"> { country } </p>
        <p className="filho"> { destination } </p>
      </div>
    )
  }
}

export default MissionCard;