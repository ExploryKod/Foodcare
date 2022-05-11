import { createContext, useState } from 'react';
import FOOD from '../compo-data.json';

export const FoodContext = createContext({
    foodData: [],
});

export const FoodProvider = ({ children }) => {
   
    const [foodData] = useState(FOOD);
    const value = { foodData };
    return (
        <FoodContext.Provider value={value}> {children} </FoodContext.Provider>
    );
};

