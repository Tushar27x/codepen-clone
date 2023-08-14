import CodeSpace from "./components/CodeSpace";
import Header from "./components/Header";
import Result from "./components/Result";
import DataProvider from "./context/DataProvider";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <CodeSpace />
        <Result />
      </DataProvider>
    </div>
  );
}

export default App;
