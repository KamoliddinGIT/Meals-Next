import Footer from "@/components/Footer";
import NotFound from "./404";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Area = ({ data }) => {
  if (!data) {
    return NotFound();
  }
  return (
    <>
      {data.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {data.map(({ idMeal, strMeal, strMealThumb }) => (
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/fourth");
  const data = await res.json();
  return { props: { data } };
};
