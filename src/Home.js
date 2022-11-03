import React from "react";
import axios from "axios";
import { useState,  } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [meal, setMeal] = useState(null);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   const fetchMeal = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  //       );
  //       setMeal(res.data);
  //       console.log(meal)

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMeal();
  // }, []);

  const fetchMeal = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      setMeal(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={fetchMeal}>Click me</button>
      <div className="home">
        {meal &&
          meal.meals.map((item, index) => {
            return (<div key={index}>
              <Link className="link"  to={`/mealdetails/${item.idMeal}`}>
                <h2>{item.strMeal}</h2>
                <img src={item.strMealThumb} alt="aha" />
                <p>{item.strIngredient}</p>
              </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
