import Card from "./Card";
import React, { useState } from "react";

import { Paginator } from "primereact/paginator";

export default function NewArrival() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const data = [
    {
      id: 1,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75",
    },
    {
      id: 2,
      title: "wall clock",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg",
    },

    {
      id: 3,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-550x550.jpg",
    },

    {
      id: 4,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-550x550.jpg",
    },
  ];

  return (
    <section className="w-11 m-auto">
      <div className="grid">
        {data.map((item) => (
          <div className="col-3" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
      <div className="card">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={10}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}
