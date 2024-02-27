import { createContext, useState, useEffect } from "react";
import { Config } from '../config/config';
export const CategoriesContext = createContext({
    categoriesData: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            console.log("site url", Config.siteUrl)
            try {
                const response = await fetch(`${Config.siteUrl ? "localhost:5000": Config.siteUrl}/products`);
                console.log(response.text())
                const data = await response.json();
                console.log("data products", data);
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
