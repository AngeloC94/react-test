import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [meal, setMeal] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
        );
        setMeal(res.data);
        console.log(meal)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeal();
  }, [input]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <ul>
        {meal &&
          meal.meals.map((item, index) => {
            return (
              <Link key={index} to={`/mealdetails/${item.idMeal}`}>
                <li>{item.strMeal}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
