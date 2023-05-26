import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
    categoriesData: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:5000/products"); 
                const data = await response.json();
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }

        };

        fetchCategories()
    }, [])
    
    const data_product = { categoriesData };

    return (
        <CategoriesContext.Provider value={data_product}> {children}</CategoriesContext.Provider>
    )
}
