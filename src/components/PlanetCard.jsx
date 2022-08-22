import React from "react";

class PlanetCard extends React.Component {
  render() {
   const { planetName, planetImage } = this.props;
    return (
      <div>
        <p> { planetName } </p>
        <img src={ planetImage } alt={`Planeta ${planetName}`} />
      </div>
    );
  }
}

export default PlanetCard;