import { useState } from "react";
import Item from "./Item";
import SortAllList from "./SortAllList";
  
  export default function PackingList({
    arr,
    handleDelete,
    handleChecked,
    handleClear,
    
  }) {
    const [sort, setSort] = useState("input");
  
    const sortedArr = [...arr].sort((a, b) => {
      if (sort === "description") {
        return a.description.localeCompare(b.description);
      } else if (sort === "packed") {
        return Number(a.packed) - Number(b.packed);
      } else {
        return 0; 
      }
    });
    function handleChange3(e) {
      setSort(e.target.value);
    }
    return (
      <div className="listMange">
        <ul className="packing-list">
          {sortedArr.map((item) => (
            <li key={item.id} className="list">
              <Item
                item={item}
                handleDelete={handleDelete}
                handleChecked={handleChecked}
              />
            </li>
          ))}
        </ul>
        <SortAllList
          sort={sort}
          handleChange3={handleChange3}
          handleClear={handleClear}
        />
      </div>
    );
  }