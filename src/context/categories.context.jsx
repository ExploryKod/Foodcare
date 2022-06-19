import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, [])

    useEffect(()  => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])


    // Désactivation car on a en eu besoin que pour la crétion initial de la collection 'categories' dans Firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])




    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
    )
}
