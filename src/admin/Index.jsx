import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

import "../App.css";
export default function Index() {
  return (
    <section className="sidebar ">
      <div className="grid" relative>
        <aside className="col-2  shadow-1 border-round-md border-1 border-white-alpha-90 p-1 h-screen ">
          <SideBar />
        </aside>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
