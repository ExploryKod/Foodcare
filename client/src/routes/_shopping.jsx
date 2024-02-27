import { useState, useEffect } from 'react';
import { Config } from '../config/config';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${Config.siteUrl}/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            {products.map((product, index) => (
                <div key={`${product.title || index}`}>
                    <h2>{product.title}</h2>
                    {product.items.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <img src={item.imageUrl} alt={item.name} />
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Shopping;
