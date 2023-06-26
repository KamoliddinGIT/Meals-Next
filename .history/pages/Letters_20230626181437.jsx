import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import React, { useState } from "react";
import { useEffect } from "react";
import NotFound from "./404";

const Letters = ({ data }) => {
  if (!data) {
    return NotFound();
  }
  return (
    <>
      {data.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {data.map(
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/third");
  const data = await res.json();
  return { props: { data } };
};
