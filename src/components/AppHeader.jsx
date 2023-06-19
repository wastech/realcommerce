import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
export default function AppHeader() {
  const items = [
    {
      label: "Home",
      url: "/",
    },

    {
      label: "Products",
      url: "/products",
    },
    {
      label: "Women",
    },
    {
      label: "Beauty",
    },
    {
      label: "Sport",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const endTemplate = (
    <div className="card flex flex-wrap justify-content-center gap-3">
      <Button label="login" text size="small" className="text-600 font-light" />
      <Button
        label="Register"
        text
        link="/login"
        size="small"
        className="text-600 font-light"
      />
    </div>
  );

  return (
    <div className="w-11 m-auto mt-5 mb-3 ">
      <Menubar
        model={items}
        start={start}
        end={endTemplate}
        breakpoint="960px"
        className=""
      />
    </div>
  );
}
