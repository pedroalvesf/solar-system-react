import React from "react";
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const head = this.props.headline;
    return (
      <div>
      <div className="subTitle">
        <h2> {head} </h2>
      </div>
      {missions.map(({ name, year, country, destination }) => (
        <MissionsCard
          key={name}
          name={name}
          year={year}
          country={country}
          destination={destination} />
      ))
    }
    </div>
  )}
}

export default Missions;