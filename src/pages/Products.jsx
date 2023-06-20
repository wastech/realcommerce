import React, { useState } from "react";
import Card from "../components/Card";
import { Paginator } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";

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

export default function Products() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <section className="w-11 m-auto">
      <div className="header_text border-bottom-1 surface-border">
        <h2 className="text-3xl">Man collection</h2>
        <p className="w-12 pb-2 md:w-6 text-md">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>

      <section className="sub_nav_section w-full mt-5 mb-4">
        <div className="grid">
          <div className="col-6 md:col-6 lg:col-2">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Categories"
              className="w-full  border-round-xl md:border-round-3xl"
            />
          </div>

          <div className="col-6 md:col-6 lg:col-2">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Availability"
              className="w-full  border-round-xl md:border-round-3xl"
            />
          </div>

          <div className="col-6 md:col-6 lg:col-2">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Price"
              className="w-full  border-round-xl md:border-round-3xl"
            />
          </div>

          <div class="col-6 lg:col-2 lg:col-offset-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Sort Order"
              className="w-full  border-round-xl md:border-round-3xl"
            />
          </div>
        </div>
      </section>

      <section className="product__section">
        <div className="grid">
          {data.map((item) => (
            <div className="col-6 md:col-4 lg:col-3" key={item.id}>
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
    </section>
  );
}
