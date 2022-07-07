import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Products } from "./pages/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route element={<Products />} path="/"></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
