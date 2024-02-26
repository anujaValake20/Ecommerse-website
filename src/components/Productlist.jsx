import { useEffect, useState } from "react";
import productList from "./../Product.json";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Searchbar";

export default function Product() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("./../Product.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  

  // const ViewDetails = (id) => {
  //   navigate('/ProductDetails/'+id);
  // };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <SearchBar/>
      <h1>Products List</h1>
      <div className="row">
        {productList.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <img
                  src={product.photo}
                  className="rounded"
                  alt={product.name}
                  width="150"
                />
                {/* <p>
                  <span>Description:</span> {product.description}
                </p> */}
                <p className="card-text">Price: ${product.price}</p>
                <button onClick={() => navigate(`/ProductDetails/${product.id}`)}>View more details</button>

              </div>
            </div>
   
          </div>
        ))}
      </div>
    </div>
  );
}
