
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const getPlants = async () => {
      let req = await fetch('http://localhost:6001/plants')
      let res = await req.json()
      setPlants(res)
    }
    getPlants()
  }, [refresh])
  // console.log(plants)

  const handleAddPlant = (newPlant) => {
    const newPlantsArray = [...plants, newPlant]
    setPlants(newPlantsArray)
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    setPlants(displayedPlants)
  })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} setRefresh={setRefresh} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} setRefresh={setRefresh} />
    </main>
  );
}

export default PlantPage;