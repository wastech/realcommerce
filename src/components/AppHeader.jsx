import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
export default function AppHeader() {
  const items = [
    {
      label: "Home",
    },
    {
      label: "Men",
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
        size="small"
        className="text-600 font-light"
      />
    </div>
  );

  return (
    <div className="w-11 m-auto my-5  ">
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
