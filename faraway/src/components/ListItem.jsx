function ListItem({ list, handleDelete, handlePackedStatus }) {
  console.log(list);

  return (
    <li className="list-item">
      <input
        className="checkbox"
        onChange={() => handlePackedStatus(list.id)}
        type="checkbox"
      />
      <p className={`item-text ${list.isPacked && "packed"}`}>{list.item}</p>
      <button onClick={() => handleDelete(list.id)} className="delete-btn">
        X
      </button>
    </li>
  );
}

export default ListItem;
