import React from "react";

class PlanetCard extends React.Component {
  render() {
   const { planetName, planetImage } = this.props;
    return (
      <div>
        <p className="planetName"> { planetName } </p>
        <img src={ planetImage } className="planet" />
      </div>
    );
  }
}

export default PlanetCard;