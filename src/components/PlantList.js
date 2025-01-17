import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setRefresh } ) {
  return (
    <ul className="cards">{
      plants.map((plant) => {

        return (
          <PlantCard key={plant.id} plant={plant} setRefresh={setRefresh} />
        )
      })
      }</ul>
  );
}

export default PlantList;