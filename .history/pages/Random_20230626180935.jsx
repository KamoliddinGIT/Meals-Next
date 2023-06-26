import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import NotFound from "./404";

const Random = ({ data }) => {
  const [randoms, setRandoms] = useState([]);
  data = null;
  if (!data) {
    return NotFound();
  }
  useEffect(() => {
    setRandoms(data.meals);
  }, []);
  console.log(randoms);
  return (
    <>
      {randoms.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {randoms.map(
              ({ idMeal, strCategory, strMealThumb, strInstructions }) => (
                <div
                  key={idMeal}
                  className="flex items-center justify-between random"
                >
                  <div className="items">
                    <span className="font-mono text-3xl text-white">
                      {strCategory}
                    </span>
                    <img src={strMealThumb} className="img" />
                  </div>
                  <div className="insts">
                    <h2 className="text-3xl font-mono">Instructions</h2>
                    <p>{strInstructions.slice(0, 1000)}</p>
                  </div>
                  <br />
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

export default Random;

export const getServerSideProps = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  return { props: { data } };
};
