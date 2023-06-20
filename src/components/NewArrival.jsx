import Card from "./Card";
import React from "react";

export default function NewArrival() {
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
    {
      id: 5,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75",
    },
    {
      id: 6,
      title: "wall clock",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-550x550.jpg",
    },

    {
      id: 7,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-550x550.jpg",
    },

    {
      id: 8,
      title: "good cloths",
      price: 340,
      imageUrl:
        "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-550x550.jpg",
    },
  ];

  return (
    <section className="w-11 m-auto my-4">
      <div className="grid">
        {data.map((item) => (
          <div className="col-6 md:col-4 lg:col-3" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
