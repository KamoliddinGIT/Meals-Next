import React from "react";

const follows = () => {
  return <div>follows</div>;
};

export default follows;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/main");
  const data = await res.json();
  return { props: { data } };
};
