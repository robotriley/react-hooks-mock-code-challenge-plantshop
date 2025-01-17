import React, {useState} from "react";

function PlantCard({ plant, setRefresh } ) {

  const {id, name, image, price} = plant
  const [isInStock, setIsInStock] = useState(true)

  const toggleStock = () => {
    setIsInStock((isInStock) => !isInStock)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    setRefresh(prev => !prev)
  }

  const handlePriceClick = () => {
    let answer = prompt("Enter new price:")
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({
        price: answer
      })
    })
    setRefresh(prev => !prev)
  }

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p onClick={handlePriceClick} >Price: { price } | click to update price</p>
      {isInStock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Sold Out</button>
      )}
        <br></br>
        <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;