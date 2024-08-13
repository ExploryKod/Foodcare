import { useState, useEffect } from 'react';


const Shopping = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
      setLoad(true);
      try {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
        } catch (err) {
          setLoad(false);
          console.error(err);
        } finally {
          setLoad(false);
        }
            
    }, [setProducts]);

    if(load) {
      return <div>Loading...</div>;
    }

    if(products.length <= 0) {
      setLoad(false);
      return <div>Aucun produit</div>;
    }

     return (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.product_name}</h2>
              <p>{product.product_price}</p>
            </div>
          ))}
        </div>
      );
};

export default Shopping;