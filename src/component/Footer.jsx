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

export default Footer
