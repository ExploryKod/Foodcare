import { createContext, useState, useEffect } from "react";

export const CategoriesUploadContext = createContext({
    categoriesUploadData: {},
});

export const CategoriesUploadProvider = ({ children }) => {
    const [categoriesUploadData, setCategoriesUploadData] = useState({});

    useEffect(() => {
        const fetchCategoriesUpload = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}download_files`);
                const data = await response.json();
                setCategoriesUploadData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }

        };

        fetchCategoriesUpload()
    }, [])

    const value = { categoriesUploadData };

    return (
        <CategoriesUploadContext.Provider value={value}> {children}</CategoriesUploadContext.Provider>
    )
}
