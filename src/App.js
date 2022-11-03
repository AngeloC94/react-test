import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealdetails/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Crea app con pagine Home e MealDetails

// Nella home mostriamo:

// -Searchbar con ricerca per nome (URL: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)

// La search restituisce elementi cliccabili che reindirizzano alla pagina di dettaglio (URL: www.themealdb.com/api/json/v1/1/lookup.php?i=52772)
