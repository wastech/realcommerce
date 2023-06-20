import React, { useState } from "react";

import { InputNumber } from "primereact/inputnumber";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import RelatedProduct from "../components/RelatedProduct";

import "../App.css";

export default function Product() {
  const [value2, setValue2] = useState(1);

  return (
    <article className="surface-50">
      <section className="product__section w-full  md:w-11 m-auto my-2 pt-5">
        <div className="grid ">
          <div className="col-12 md:col-12 lg:col-6">
            <div className="image">
              <img
                src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-550x550.jpg"
                alt=""
                className="product__image"
              />
            </div>
          </div>

          <div className="col-12 md:col-12  lg:col-6">
            <div className="title">
              <h2 className="text-2xl font-medium uppercase">ROSE HOLDBACK</h2>
            </div>
            <div className="price my-4">
              <p className="text-2xl font-light">$170</p>
            </div>

            <div className="rating my-4">
              <div className="grid">
                <div className="col-5 md:col-4 lg:col-3">
                  {" "}
                  <Rating
                    value={5}
                    readOnly
                    cancel={false}
                    className="gold-rating text-sm"
                  />
                </div>
                <div className="col-7 md:col-7 lg:col-4">
                  {" "}
                  <span className="text-xs text-500"> (1 CUSTOMER REVIEW)</span>
                </div>
              </div>
            </div>

            <div className="discription">
              <p className="text-500 text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes nascetur ridiculus mus.
                Vestibulum ultricies aliquam convallis.
              </p>
            </div>

            <div className="quantity my-5">
              <div className="flex-auto w-9">
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
            </div>

            <p className="text-sm">
              {" "}
              SKU : <span className="text-500"> 007</span>
            </p>
            <p className="text-sm">
              {" "}
              Categories : <span className="text-500">
                Home Decor, Vases
              </span>{" "}
            </p>
            <p className="text-sm">
              {" "}
              Tags: <span className="text-500">Modern, Pottery</span>{" "}
            </p>

            <div className="card flex justify-content-center mt-5">
              <Button label="Add to Chart" className="w-full uppercase" />
            </div>
          </div>
        </div>

        <div className=" my-5 bg-none">
          <TabView>
            <TabPanel header="DESCRIPTION" className="text-md">
              <h4>Description</h4>
              <p className="m-0 text-500 text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel header="ADDTIONAL INFORMATION " className="text-md">
              <h4>Additional Information</h4>
              <p className=" text-500 text-sm font-medium">
                Weight : <span className="text-500">2kg</span>{" "}
              </p>
              <p className=" text-500 text-sm font-medium">
                Categories : <span className="text-500">Home Decor, Vases</span>{" "}
              </p>
              <p className=" text-500 text-sm font-medium">
                Categories : <span className="text-500">Home Decor, Vases</span>{" "}
              </p>
              <p className=" text-500 text-sm font-medium">
                Categories : <span className="text-500">Home Decor, Vases</span>{" "}
              </p>
            </TabPanel>
            <TabPanel header="REVIEW" className="text-md">
              <h4>Review</h4>
              <p className="m-0 text-md">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
      </section>

      <section className="related__product__section border-top-1 my-8  surface-border">
        <RelatedProduct className="" />
      </section>
    </article>
  );
}
