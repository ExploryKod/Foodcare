import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    productsData: {},
});

export const ProductsProvider = ({ children }) => {
    const [productsData, setProductsData] = useState({});
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
                const data = await response.json();
                console.log("data products in context fetch api >> ", data);
                setProductsData(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        };

        fetchProducts()
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/category_food`);
                const data = await response.json();
                console.log("data categories in context fetch api >> ", data);
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        };

        fetchProducts()
    }, [])
    
    const data_product = { productsData, categoriesData };

    return (
        <ProductsContext.Provider value={data_product}> {children}</ProductsContext.Provider>
    )
}
