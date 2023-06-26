import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import NotFound from "./404";

const Random = () => {
  const [randoms, setRandoms] = useState([]);
  const useFetch = async () => {
    const response = await fetch("http://localhost:3000/api/second");
    const data = await response.json();
    return data;
  };
  const data = useFetch();
  if (!data) {
    return NotFound();
  }
  useEffect(() => {
    data.then((res) => {
      setRandoms(res.meals);
    });
  }, []);
  console.log(randoms);
  return (
    <>
      {randoms.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {randoms.map(
              ({
                idMeal,
                strCategory,
                strMealThumb,
                strInstructions,
                strYoutube,
              }) => (
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
                    <p>{strInstructions.slice(0, 1800)}</p>
                  </div>
                  <br />
                  {/* <a href={strYoutube} className="text-orange-400">
                    YouTube
                  </a> */}
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
