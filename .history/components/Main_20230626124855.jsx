import NotFound from "@/pages/404";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import Loader from "./Loader";

const Main = ({ data }) => {
  const route = useRouter();
  console.log(data);
  const [meals, setMeals] = useState([]);
  //CSR
  // const useFetch = async () => {
  //   const response = await fetch("http://localhost:3000/api/main");
  //   const data = await response.json();
  //   return data;
  // };
  // const data = useFetch();
  // if (!data) {
  //   setTimeout(() => {
  //     route.push("/Area");
  //   }, 3000);
  //   return NotFound();
  // }
  // useEffect(() => {
  //   data.then((res) => {
  //     setMeals(res.categories);
  //   });
  // }, []);
  return <></>;
};

export default Main;

export const getServerSideProps = async () => {
  const res = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
  const data = await res.json();
  return { props: { data } };
};
