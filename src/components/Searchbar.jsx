import { useState } from 'react';
import productList from './../Product.json'; 

function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
  };

  const filterResults = (term) => {
    const filteredProducts = productList.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  return (
    <form className="mt-3">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
