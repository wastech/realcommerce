import React, { useState } from "react";

import { InputNumber } from "primereact/inputnumber";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";

import "../App.css";

export default function Product() {
  const [value2, setValue2] = useState(10.5);

  return (
    <section className="product__section w-11 m-auto my-5">
      <div className="grid">
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
            <h3>FLOWER VASE</h3>
          </div>
          <div className="price my-4">
            <p>$170</p>
          </div>

          <div className="rating my-4">
            <div className="grid">
              <div className="col-5 md:col-4 lg:col-3">
                {" "}
                <Rating value={5} readOnly cancel={false} />
              </div>
              <div className="col-7 md:col-7 lg:col-4">
                {" "}
                <span> (1 CUSTOMER REVIEW)</span>
              </div>
            </div>
          </div>

          <div className="discription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
          </div>

          <div className="quantity my-5">
            <div className="flex-auto">
              <label
                htmlFor="horizontal-buttons"
                className="font-bold block mb-2"
              >
                Horizontal with Step
              </label>
              <InputNumber
                inputId="horizontal-buttons"
                value={value2}
                onValueChange={(e) => setValue2(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={0.25}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="currency"
                currency="EUR"
              />
            </div>
          </div>

          <p> SKU: 007</p>
          <p> Categories: Home Decor, Vases</p>
          <p> Tags: Modern, Pottery</p>

          <div className="card flex justify-content-center mt-5">
            <Button label="Add to Chart" className="w-full uppercase" />
          </div>
        </div>
      </div>

      <div className="card">
        <TabView>
          <TabPanel header="DESCRIPTION" className="text-xs">
            <h4>Description</h4>
            <p className="m-0 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel header="ADDTIONAL INFORMATION " className="text-xs">
            <h4>Additional Information</h4>
            <p className="m-0 text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="REVIEW" className="text-xs">
            <h4>Review</h4>
            <p className="m-0 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
      </div>
    </section>
  );
}
