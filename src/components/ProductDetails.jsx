import { useNavigate, useParams } from 'react-router-dom';
import productList from './../Product.json'; 


function ProductDetails() {
  const { id } = useParams();

  
  const product = productList.find(product => product.id === parseInt(id));

  const navigate=useNavigate();
 const checkout=()=>{
  navigate('/Checkout')
 }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.photo}
            className="rounded"
            alt={product.name}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>
            <span>Description:</span> {product.description}
          </p>
          <p>Price: ${product.price}</p>
          <button style={{border:"2px"}} onClick={checkout}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
