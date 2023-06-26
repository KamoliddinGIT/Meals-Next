import NotFound from "@/pages/404";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
const API_URL = process.env.API_URL;

const Main = () => {
  const route = useRouter();
  const [meals, setMeals] = useState([]);
  const useFetch = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  };
  const data = useFetch();
  if (!data) {
    setTimeout(() => {
      route.push("/Area");
    }, 3000);
    return NotFound();
  }
  useEffect(() => {
    data.then((res) => {
      setMeals(res.categories);
    });
  }, []);
  return (
    <>
      {meals.length ? (
        <>
          <div className="flex flex-wrap mb-32" id="cards">
            {meals.map(({ idCategory, strCategory, strCategoryThumb }) => (
              <div
                key={idCategory}
                className="flex items-center justify-between flex-col w-80 h-64"
              >
                <img src={strCategoryThumb} className="main-img" />
                <span className="card-title">{strCategory}</span>
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

export default Main;
