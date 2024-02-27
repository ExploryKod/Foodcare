import { useState, useEffect } from 'react';
import { Config } from '../config/config';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${Config.siteUrl}/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [setProducts]);

    console.log('hello -- -'+products.map( (prod, index) => { 
            console.log(prod)
            return prod;
     }) );

     return (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.product_name}</h2>
              {/* <img src={product.product_image ?? "Image not found"} alt={product.product_name} /> */}
              <p>{product.product_price}</p>
            </div>
          ))}
        </div>
      );
};

export default Shopping;