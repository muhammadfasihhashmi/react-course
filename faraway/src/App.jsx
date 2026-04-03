import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [packingList, setPackingList] = useState([]);
  console.log(packingList);

  function handleDelete(id) {
    setPackingList(packingList.filter((item) => item.id !== id));
  }

  function handlePackedStatus(id) {
    setPackingList(
      packingList.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Header />
      <Form setPackingList={setPackingList} />
      <PackingList
        packingList={packingList}
        handleDelete={handleDelete}
        handlePackedStatus={handlePackedStatus}
      />
      <Stats />
    </div>
  );
}

export default App;
