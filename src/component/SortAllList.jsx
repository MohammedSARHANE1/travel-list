function SortAllList({ sort, handleChange3, handleClear }) {
    return (
      <div className="sortItems">
        <select id="sortItem" value={sort} onChange={(e) => handleChange3(e)}>
          <option value="input" key="input">
            SORT BY INPUT ORDER
          </option>
          <option value="description" key="description">
            SORT BY DESCRIPTION
          </option>
          <option value="packed" key="packed">
            SORT BY SORT BACKED STATUS
          </option>
        </select>
        <button id="sortItem" onClick={handleClear}>
          clear list
        </button>
      </div>
    );
  }
export default SortAllList
