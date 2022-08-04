
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setRefresh }) {
  return (
    <ul className="cards">{
      plants.map((plant) => {
        return (
          <PlantCard setRefresh={setRefresh} plant={plant} key={plant.id} />
        )
      })
    }</ul>
  );
}

export default PlantList;