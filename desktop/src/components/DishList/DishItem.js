import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../../store/action/actions";

const DishItem = ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="row align-items-center py-1 border-bottom">
      <div className="col-2 offset-1">
        <img className="img-fluid img-thumbnail" alt="dish" src={image} />
      </div>
      <div className="col-4">
        <span>{name}</span>
      </div>
      <div className="col-2">
        <span>{price} kgs</span>
      </div>
      <div className="col-1">
        <Link to={`/edit/${id}`} className="btn btn-block btn-outline-warning">
          Edit
        </Link>
      </div>
      <div className="col-1">
        <button
          type="button"
          className="btn btn-block btn-outline-danger"
          onClick={() => dispatch(deleteRequest(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DishItem;
