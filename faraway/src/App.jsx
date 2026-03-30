import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
