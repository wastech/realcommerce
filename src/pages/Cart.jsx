import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
// import { Chip } from "primereact/chip";
import { Tag } from "primereact/tag";
import { InputNumber } from "primereact/inputnumber";
const products = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch Watch  WatchWatch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch Watch  WatchWatch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
];

export default function Cart() {
  const [value2, setValue2] = useState(1);
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
        alt={product.image}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  const ratingBodyTemplate = (product) => {
    return (
      <div className="">
        <InputNumber
          inputId="horizontal-buttons"
          value={value2}
          onValueChange={(e) => setValue2(e.value)}
          showButtons
          buttonLayout="horizontal"
          step={1}
          decrementButtonClassName="p-button-danger"
          incrementButtonClassName="p-button-success"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
      </div>
    );
  };

  const statusBodyTemplate = (product) => {
    return (
      <Tag
        value={product.inventoryStatus}
        severity={getSeverity(product)}
      ></Tag>
    );
  };

  const deleteIconTemplate = (product) => {
    return <i className="pi pi-times" style={{ fontSize: "1rem" }}></i>;
  };
  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;
  return (
    <section className="cart__section w-11 m-auto my-6">
      <div className="grid">
        <div className="col-12 md:col-8">
          <div className="card">
            <DataTable
              value={products}
              footer={footer}
              tableStyle={{ minWidth: "100%" }}
              header={false}
            >
              <Column field="name"></Column>
              <Column body={imageBodyTemplate}></Column>
              <Column field="price" body={priceBodyTemplate}></Column>
              <Column field="rating" body={ratingBodyTemplate}></Column>
              <Column body={statusBodyTemplate}></Column>
              <Column body={deleteIconTemplate}></Column>
            </DataTable>
          </div>
        </div>
        <div className="col-4">
          <div className="surface-0">
            <div className="font-medium text-2xl text-700 mb-1">
              Order Summary
            </div>
            <div class="grid border-bottom-1 border-200">
              <div class="col-4">
                <div class=" ">
                  <p className="text-400 text-sm ">Subtotal</p>
                </div>
              </div>
              <div class="col-4 col-offset-4">
                <div class=" ">
                  <p className="text-sm">$55555555</p>
                </div>
              </div>
            </div>

            <div class="grid border-bottom-1 border-200">
              <div class="col-4">
                <div class=" ">
                  <p className="text-400 text-sm ">Shpping estimate</p>
                </div>
              </div>
              <div class="col-4 col-offset-4">
                <div class=" ">
                  <p className="text-sm">$5.00</p>
                </div>
              </div>
            </div>

            <div class="grid border-bottom-1 border-200">
              <div class="col-4">
                <div class=" ">
                  <p className="text-400 text-sm ">Tax estimate</p>
                </div>
              </div>
              <div class="col-4 col-offset-4">
                <div class=" ">
                  <p className="text-sm">$24.90</p>
                </div>
              </div>
            </div>

            <div class="grid border-bottom-1 border-200">
              <div class="col-4">
                <div class=" ">
                  <p className=" text-md font-bold ">Order total</p>
                </div>
              </div>
              <div class="col-4 col-offset-4">
                <div class=" ">
                  <p className="  text-md font-bold">$55555555</p>
                </div>
              </div>
            </div>

            <div className="grid">
              <div className="col-12">
                <Button
                  label="Proceeed To Checkout"
                  className="w-full uppercase "
                  severity="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
