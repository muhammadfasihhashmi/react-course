function ListItem({ item, handleDelete, handlePackedStatus }) {
  return (
    <li className="list-item">
      <input
        className="checkbox"
        onChange={() => handlePackedStatus(item.id)}
        type="checkbox"
      />
      <p className={`item-text ${item.isPacked && "packed"}`}>{item.item}</p>
      <button onClick={() => handleDelete(item.id)} className="delete-btn">
        X
      </button>
    </li>
  );
}

export default ListItem;
