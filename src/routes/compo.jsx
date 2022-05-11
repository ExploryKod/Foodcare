import { useContext } from 'react';
import { FoodContext } from '../context/food';
import FoodCard from '../components/food-card';

const Compo = () => {
    // const {foodData} = useContext(FoodContext);
    return (
        <>
            {foodData.map((food) => (
               <FoodCard key={food.id} food={food}/>
            ))}
        
        </>
    )
}

export default Compo;