import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailsmeal/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Crea app con pagine Home e MealDetails

// Nella home mostriamo:

// -Searchbar con ricerca per nome (URL: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)

// La search restituisce elementi cliccabili che reindirizzano alla pagina di dettaglio (URL: www.themealdb.com/api/json/v1/1/lookup.php?i=52772)
