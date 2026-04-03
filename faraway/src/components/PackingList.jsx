import ListItem from "./ListItem";

function PackingList({ packingList, handleDelete, handlePackedStatus }) {
  console.log(packingList);

  return (
    <div className="list-container">
      <ul className="list">
        {packingList.map((item, ind) => (
          <ListItem
            key={ind}
            item={item}
            handleDelete={handleDelete}
            handlePackedStatus={handlePackedStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
