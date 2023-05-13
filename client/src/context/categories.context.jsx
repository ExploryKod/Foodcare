import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";

// import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesData: {},
});

export const CategoriesProvider = ({ children }) => {
    // const [categoriesMap, setCategoriesMap] = useState({});
    const [categoriesData, setCategoriesData] = useState(SHOP_DATA);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:5000/products"); // Replace this with your API endpoint
                const data = await response.json();
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }

        };

        fetchCategories()
    }, [])

    for (let i = 0; i < categoriesData.length; i++) {
        const items = categoriesData[i].items;
        console.log(items);
        for (let j = 0; j < items.length; j++) {
            if (items[j].id === 1) {
                console.log(items[j].name);
            }
        }
    }
    console.log('*********')
    console.log(SHOP_DATA);
    console.log('-----');
    console.log(categoriesData);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    // useEffect(()  => {
    //     const getCategoriesMap = async () => {
    //         const categoryMap = await getCategoriesAndDocuments();
    //
    //         setCategoriesMap(categoryMap);
    //     }
    //     getCategoriesMap();
    // }, [])

    const value = { categoriesData };
    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
    )
}
