import { useState } from "react";

function Form({ setPackingList }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  function handleOption(event) {
    setQuantity(event.target.value);
  }
  function handleItem(event) {
    setItem(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const finalitem = {
      id: Date.now(),
      quantity,
      item,
      isPacked: false,
    };
    setPackingList((prev) => [...prev, finalitem]);
    setItem("");
    setQuantity(1);
  }
  return (
    <form className="form">
      <h1 className="form-title">What do you need for your 😍 trip?</h1>
      <select value={quantity} className="select" onChange={handleOption}>
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input value={item} onChange={handleItem} type="text" className="input" />
      <button className="btn" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
}

export default Form;
