import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from './graphql/queries';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productData = await API.graphql(graphqlOperation(listProducts));
      setProducts(productData.data.listProducts.items);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
