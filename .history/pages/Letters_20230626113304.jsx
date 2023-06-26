import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import React, { useState } from "react";
import { useEffect } from "react";
import NotFound from "./404";

const Letters = () => {
  const [ings, setIngs] = useState([]);
  const useFetch = async () => {
    const response = await fetch("http://localhost:3000/api/third");
    const data = await response.json();
    return data;
  };
  const data = useFetch();
  if (!data) {
    return NotFound();
  }
  useEffect(() => {
    data.then((res) => {
      setIngs(res.meals);
    });
  }, []);
  return (
    <>
      {ings.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {ings.map(
              ({ idMeal, strCategory, strMealThumb, strInstructions }) => (
                <div
                  key={idMeal}
                  className="flex items-center justify-between flex-col w-72 h-72"
                >
                  <img src={strMealThumb} className="w-60 h-60" />
                  <span className="card-title">{strCategory}</span>
                  {/* <p>{strInstructions.slice(0, 100)}</p> */}
                </div>
              )
            )}
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Letters;
