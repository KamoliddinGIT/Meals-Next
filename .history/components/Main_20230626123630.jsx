import NotFound from "@/pages/404";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import Loader from "./Loader";

const Main = () => {
  const route = useRouter();
  const [meals, setMeals] = useState([]);
  //CSR
  const useFetch = async () => {
    const response = await fetch("http://localhost:3000/api/main");
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
                <span className="card-title text-2xl">{strCategory}</span>
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

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URL);
  const repo = await res.json();
  return { props: { repo } };
};
