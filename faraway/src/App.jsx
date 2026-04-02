import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [packingList, setPackingList] = useState([]);

  return (
    <div className="app">
      <Header />
      <Form setPackingList={setPackingList} />
      <PackingList packingList={packingList} />
      <Stats />
    </div>
  );
}

export default App;
