import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

// Create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [pendientes, setPendientes] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setPendientes((prevPendientes) => [...prevPendientes, inputValue]);
        setInputValue("");
      }
    }
  };

  const deletePendiente = (index) => {
    setPendientes((prevPendientes) =>
      prevPendientes.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="container">
      <h1>Mi lista de Pendientes</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="¿Qué es lo que tienes que hacer?"
          />
        </li>
        {pendientes.map((pendiente, index) => (
          <li key={index}>
            {pendiente}
            <FaTrashAlt onClick={() => deletePendiente(index)} />
          </li>
        ))}
      </ul>
      <div>{pendientes.length} tarea(s)</div>
    </div>
  );
};

export default Home;
