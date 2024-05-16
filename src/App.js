import { useState } from "react";
import "./App.css";

const ititialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "socks", quantity: 5, packed: true },
  { id: 3, description: "luggage", quantity: 3, packed: false },
];
export default function App() {
    const [arr, setArr] = useState(ititialItems);
     
     function handleAddItems(item) {
       setArr((arr) => [...arr, item]);
     } 
     function handleDelete(id) {
       setArr((arr) => arr.filter((item) => item.id !== id));
     }
     function handleChecked(id){
     
        setArr((arr)=>
          arr.map((item)=>item.id === id ? { ...item, packed: !item.packed } : item
      )
        )
     }
  return (
    <div className="App">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        arr={arr}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
      />
      <Footer  arr={arr}/>
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <h1>
        🏝 FAR AWAY 🧳
      </h1>
    </div>
  );
}
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
function PackingList({ arr, handleDelete, handleChecked }) {
  return (
    <ul className="packing-list">
      {arr.map((item) => (
        <li key={item.id} className="list">
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handleChecked(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity}
            {item.description}
          </span>
          <button className="btn2" onClick={() => handleDelete(item.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

 
function Footer({ arr }) {
  const totalItems = arr.length;
  const packedItems = arr.filter((item) => item.packed).length;

  return (
    <div className="footer">
      <p>
        🧳 You have {totalItems} items on your list, and you have already packed {packedItems} ({((packedItems / totalItems) * 100).toFixed(2)}%)
      </p>
    </div>
  );
} 