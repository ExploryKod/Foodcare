import { useState, useEffect } from 'react';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [setProducts]);

    console.log('hello --'+products.map( (prod, index) => { 
            console.log(prod)
            return prod;
     }) );

     return (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      );
};

export default Shopping;