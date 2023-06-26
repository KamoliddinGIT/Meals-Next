import Footer from "@/components/Footer";
import NotFound from "./404";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Area = () => {
  const route = useRouter();
  const [area, setArea] = useState([]);
  const useFetch = async () => {
    const response = await fetch("http://localhost:3000/api/fourth");
    const data = await response.json();
    return data;
  };
  const data = useFetch();
  if (!data) {
    return NotFound();
  }
  useEffect(() => {
    data.then((res) => {
      setArea(res.meals);
    });
  }, []);
  console.log(area);
  return (
    <>
      {area.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {area.map(({ idMeal, strMeal, strMealThumb }) => (
              <div key={idMeal} className="ml-5">
                {" "}
                <img src={strMealThumb} alt={strMeal} className="w-64 h-64" />
                <span className="card-title text-md">{strMeal}</span>
              </div>
            ))}
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Area;
