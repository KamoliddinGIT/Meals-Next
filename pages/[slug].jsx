"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Dynamic = () => {
  const params = useParams();
  const route = useRouter();
  console.log(params);
  return (
    <div className="mt-32 text-center text-2xl font-extrabold font-mono">
      You entered any words to here, {route.query.slug}
    </div>
  );
};

export default Dynamic;
