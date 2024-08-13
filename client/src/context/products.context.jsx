import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    productsData: {},
});

const PRODUCTS = [
    {
      id: "1",
      category_id: "1",
      category: "proteines",
      product_name: "Poulet Bio",
      product_image_url: "proteines_poulet_bio",
      product_price: "25.00"
    },
    {
      id: "2",
      category_id: "1",
      category: "proteines",
      product_name: "Tofu",
      product_image_url: "proteines_tofu",
      product_price: "18.00"
    },
    {
      id: "3",
      category_id: "1",
      category: "proteines",
      product_name: "Poisson",
      product_image_url: "proteines_poisson",
      product_price: "35.00"
    },
    {
      id: "4",
      category_id: "1",
      category: "proteines",
      product_name: "Edamam",
      product_image_url: "proteines_edamam",
      product_price: "25.00"
    },
    {
      id: "5",
      category_id: "1",
      category: "proteines",
      product_name: "Lentilles",
      product_image_url: "proteines_lentilles",
      product_price: "18.00"
    },
    {
      id: "6",
      category_id: "1",
      category: "proteines",
      product_name: "Pois Chiches",
      product_image_url: "proteines_pois_chiches",
      product_price: "14.00"
    },
    {
      id: "7",
      category_id: "1",
      category: "proteines",
      product_name: "Viande rouge",
      product_image_url: "proteines_viande_rouge",
      product_price: "18.00"
    },
    {
      id: "8",
      category_id: "1",
      category: "proteines",
      product_name: "Sardine",
      product_image_url: "proteines_sardine",
      product_price: "14.00"
    },
    {
      id: "9",
      category_id: "1",
      category: "proteines",
      product_name: "Green Beans",
      product_image_url: "proteines_green_beans",
      product_price: "16.00"
    },
    {
      id: "10",
      category_id: "2",
      category: "legumes",
      product_name: "chou fleur",
      product_image_url: "legumes_chou_fleur",
      product_price: "8.00"
    },
    {
      id: "11",
      category_id: "2",
      category: "legumes",
      product_name: "Poivron",
      product_image_url: "legumes_poivron",
      product_price: "3.00"
    },
    {
      id: "12",
      category_id: "2",
      category: "legumes",
      product_name: "Tomate",
      product_image_url: "legumes_tomate",
      product_price: "4.00"
    },
    {
      id: "13",
      category_id: "2",
      category: "legumes",
      product_name: "Brocoli",
      product_image_url: "legumes_brocoli",
      product_price: "5.00"
    },
    {
      id: "14",
      category_id: "2",
      category: "legumes",
      product_name: "Carotte",
      product_image_url: "legumes_carotte",
      product_price: "2.00"
    },
    {
      id: "15",
      category_id: "3",
      category: "fruits",
      product_name: "Banane",
      product_image_url: "fruits_banane",
      product_price: "1.00"
    },
    {
      id: "16",
      category_id: "3",
      category: "fruits",
      product_name: "Pomme",
      product_image_url: "fruits_pomme",
      product_price: "2.00"
    },
    {
      id: "17",
      category_id: "3",
      category: "fruits",
      product_name: "Orange",
      product_image_url: "fruits_orange",
      product_price: "1.00"
    },
    {
      id: "18",
      category_id: "3",
      category: "fruits",
      product_name: "Fraise",
      product_image_url: "fruits_fraise",
      product_price: "3.00"
    },
    {
      id: "19",
      category_id: "3",
      category: "fruits",
      product_name: "Mangue",
      product_image_url: "fruits_mangue",
      product_price: "5.00"
    },
    {
      id: "20",
      category_id: "3",
      category: "fruits",
      product_name: "Apple",
      product_image_url: "proteines_apple",
      product_price: "8.00"
    }
  ]

export const ProductsProvider = ({ children }) => {
    const [productsData, setProductsData] = useState(PRODUCTS);
    const [categoriesData, setCategoriesData] = useState([]);
   
    useEffect(() => {
        const fetchProducts = async () => {
                
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {mode: 'cors'});
                const data = await response.json();
               
                setProductsData(data.length > 0 ? data : PRODUCTS);
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        };

        fetchProducts()
    }, [])

    console.log('products data', productsData)

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
