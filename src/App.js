import { useState } from "react";
import "./App.css";
import Logo from "./component/Logo";
import Footer from "./component/Footer";
import Form from "./component/Form";
import PackingList from "./component/PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "socks", quantity: 5, packed: true },
  { id: 3, description: "luggage", quantity: 3, packed: false },
];
export default function App() {
  const [arr, setArr] = useState(initialItems);

  function handleAddItems(item) {
    setArr((arr) => [...arr, item]);
  }
  function handleDelete(id) {
    setArr((arr) => arr.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    setArr((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const comfirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (comfirmed) {
      setArr([]);
    }
  }
  console.log(arr);
  return (
    <div className="App">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        arr={arr}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        handleClear={handleClear}
      />
      <Footer arr={arr} />
    </div>
  );
}