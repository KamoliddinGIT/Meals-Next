import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import NotFound from "./404";

const Random = ({ data }) => {
  const [randoms, setRandoms] = useState([]);
  // const useFetch = async () => {
  //   const response = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/random.php"
  //   );
  //   const data = await response.json();
  //   return data;
  // };
  // const data = useFetch();
  if (!data) {
    return NotFound();
  }
  const { meals } = data;

  console.log(meals);
  return (
    <>
      {data.length ? (
        <>
          <div className="flex cards flex-wrap mb-32">
            {meals.map(
              ({ idMeal, strCategory, strMealThumb, strInstructions }) =>
                console.log(idMeal)
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
  const res = await fetch("http://localhost:3000/api/second");
  const data = await res.json();
  return { props: { data } };
};
