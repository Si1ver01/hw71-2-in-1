import React, { useEffect } from "react";
import DishList from "../../components/DishList/DishList";
import { useDispatch, useSelector } from "react-redux";
import { requestDishes } from "../../store/action/actions";
import { Link } from "react-router-dom";

const Dishes = props => {
  const dishes = useSelector(state => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dishes.length) {
      dispatch(requestDishes());
    }
  }, [dispatch, dishes]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2>Dishes</h2>
        <Link to="/newDish" className="btn btn-outline-success">
          Add new Dish
        </Link>
      </div>
      {dishes.length ? (
        <DishList dishList={dishes} />
      ) : (
        <p className="text-primary text-center my-5">Add dishes</p>
      )}
    </div>
  );
};

export default Dishes;
