import React from "react";
import "../App.css";

const Card = (props) => {
  const { data } = props;
  return (
    <div>
      <div className=" section__card">
        <div className="image">
          <img
            className="card__image surface-200"
            src={data.imageUrl}
            alt="product__image"
          />
        </div>
        <div className="title text-center -mt-2">
          <h4 className="uppercase text-sm font-medium "> {data.title}</h4>
          <p className="-mt-2 font-medium text-xs text-600 product_price">
            {data.price}
          </p>
          <p className="-mt-2 font-medium uppercase text-xs text-600 add_to_chart">
            add to chart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
