import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./NewDish.scss";
import { useDispatch } from "react-redux";
import { addRequestDish, editRequestDish } from "../../store/action/actions";
import useFetch from "../../hooks/useFetch";

const NewDish = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [{ response }, doFetch] = useFetch();
  const apiUrl = `https://ddanshin-af25f.firebaseio.com/menu/${params.id}.json`;

  const submitHandler = e => {
    e.preventDefault();
    if (Object.keys(params).length) {
      dispatch(editRequestDish({ name, price, img, id: params.id }));
    } else {
      dispatch(addRequestDish({ name, price, img }));
    }
    history.push("/");
  };

  useEffect(() => {
    if (Object.keys(params).length) {
      doFetch(apiUrl);
    }
  }, [apiUrl, doFetch, params]);

  useEffect(() => {
    if (response) {
      setName(response.name);
      setPrice(response.price);
      setImg(response.img);
    }
  }, [response]);

  return (
    <div className="NewDish">
      <div className="NewDishForm border rounded p-2 bg-light ">
        <form onSubmit={e => submitHandler(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter price"
              required={true}
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Img url</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter image url"
              required={true}
              value={img}
              onChange={e => setImg(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-block btn-outline-primary mx-1"
            >
              Submit
            </button>
            <Link to="/" className="btn btn-block btn-outline-danger mx-1">
              Close
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewDish;
