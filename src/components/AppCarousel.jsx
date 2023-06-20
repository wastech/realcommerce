import { Galleria } from "primereact/galleria";
import React from "react";

const images = [
  {
    itemImageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg",
    alt: "Description for Image 1",
    title: "Title 1",
  },
  {
    itemImageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg",
    alt: "Description for Image 1",
    title: "Title 1",
  },
  {
    itemImageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg",
    alt: "Description for Image 1",
    title: "Title 1",
  },
];

export default function AppCarousel() {
  const itemTemplate = (item) => {
    return (
      <div className="w-full">
        <div className="grid   text-800">
          <div className="col-12 md:col-6 p-6  ">
            <section>
              <div className="text-xl text-primary font-bold mb-3">
                {item.title}
              </div>
              <p className="mt-0 mb-4 text-700 line-height-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
          </div>
          <div className="col-12 md:col-6 o">
            <img
              src={item.itemImageSrc}
              alt="hero-1"
              className="md:ml-auto md:h-30rem h-15rem "
              style={{ objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="surface-200 my-5">
        <Galleria
          value={images}
          circular
          showItemNavigators
          showItemNavigatorsOnHover
          showThumbnails={false}
          item={itemTemplate}
          style={{ maxWidth: "100%" }}
          className="h-20rem md:h-30rem h-15rem"
        />
      </div>
    </section>
  );
}
