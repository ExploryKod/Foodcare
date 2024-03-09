import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
    categoriesData: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
                const data = await response.json();
                console.log("data products", data);
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }

        };

        fetchCategories().then(r => console.log(r))
    }, [])
    
    const data_product = { categoriesData };

    return (
        <CategoriesContext.Provider value={data_product}> {children}</CategoriesContext.Provider>
    )
}
