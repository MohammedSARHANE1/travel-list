import { useState } from "react";

function Form({handleAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, SetQuantity] = useState(1);
  
    const handleChange = (event) => {
      event.preventDefault();
      setDescription(event.target.value);
    };
  
    const handlechange2 = (e) => {
      SetQuantity(Number(e.target.value));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!description) return;
      const newItem2 = { id: Date.now(), description, quantity, packed: false };
  
        handleAddItems(newItem2);
      setDescription("");
      SetQuantity(1);
    };
  
    return (
      
        <form className="form" onSubmit={handleSubmit}>
          <h3> what need for your trip?</h3>
          <select id="numberDropdown" value={quantity} onChange={handlechange2}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="items"
            placeholder="items..."
            value={description}
            onChange={handleChange}
          />
          <button className="btn"> ADD</button>
        </form>
      
    );
  }
  
export default Form
