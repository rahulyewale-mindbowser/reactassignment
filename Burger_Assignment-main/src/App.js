import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import BeverageList from "./container/Beveragelist";
import BurgerList from "./container/Burgerlist";
import CombosList from "./container/Comboslist";
import FriesList from "./container/Frieslist";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>

     <Route path="/burger" element={<BurgerList/>} />
            <Route path="/frieslist" element={<FriesList/>} />
            <Route path='/beverage' element={<BeverageList/>} />
            <Route path="/combos" element={<CombosList/>} />

            <Route path={"*"} element={<Navigate to="/burger" />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
