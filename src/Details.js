import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams("id");

  const fetchMeal = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const json = await response.json();
      setData({
        ...json.meals[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div>
      <h2>{data.strMeal}</h2>
      <img src={data.strMealThumb} alt="aha" />
      <p>{data.strInstructions}</p>
      
    </div>
  );
}
