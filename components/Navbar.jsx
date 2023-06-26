import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { pathname } = useRouter();
  const routes = [
    { id: 2, router: "/Random", name: "Random" },
    { id: 3, router: "/Letters", name: "Letters" },
    { id: 1, router: "/Area", name: "Area" },
  ];
  return (
    <nav>
      <div className="nav-wrapper">
        <Link href="/" className="brand-logo">
          <Image
            src="/imgs/meal.png"
            width={250}
            height={200}
            className="pt-5 pl-5"
          />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {routes.map(({ router, name, id }) => (
            <li key={id}>
              <Link
                key={id}
                className={router === pathname ? "active" : "link"}
                href={router}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
