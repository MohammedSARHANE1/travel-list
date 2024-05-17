function Item({ item, handleDelete, handleChecked }) {
    return(
    <div >
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        <span> </span>
        {item.description}
      </span>
      <button className="btn2" onClick={() => handleDelete(item.id)}>
        <span>{"  "}</span>❌
      </button>
    </div>)
  }
export default Item
