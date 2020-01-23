import React from "react";
import DishItem from "./DishItem";

const DishList = ({ dishList }) => {
  return (
    <div className="d-flex flex-column border-top pt-1">
      {dishList.map(dish => (
        <DishItem
          name={dish.name}
          price={dish.price}
          image={dish.img}
          id={dish.id}
          key={dish.id}
        />
      ))}
    </div>
  );
};

export default DishList;
