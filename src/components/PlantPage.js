
import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
  const getPlants = async () => {
    let req = await fetch('http://localhost:6001/plants')
    let res = await req.json()
    setPlants(res)
  }
  getPlants()
}, [refresh])

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm setRefresh={setRefresh} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} setRefresh={setRefresh} />
    </main>
  );
}

export default PlantPage;