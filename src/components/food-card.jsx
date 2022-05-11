import '../styles/food-card.scss';
import Button from './button';

const FoodCard = (foodObject) => {
    // const { name, imageUrl } = food;
    const foodObject = [
{
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png"
 
  },
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png"
  },
  {
    id: 3,
    name: "Brown Cowboy",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png"
   
  },
  {
    id: 4,
    name: "Grey Brim",
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png"
 
  },
  {
    id: 5,
    name: "Green Beanie",
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png"
  
  },
  {
    id: 6,
    name: "Palm Tree Cap",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png"

  },

  {
    id: 7,
    name: "Red Beanie",
    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png"

  },
  {
    id: 8,
    name: "Wolf Cap",
    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png"

  },
  {
    id: 9,
    name: "Blue Snapback",
    imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png"

  }
    ]
    return(
    
    <div className='product-card-container'>
      
     <img src={foodObject.imageUrl} alt={`${foodObject.name}`}/>
      <div className='footer'>
        <span className='name'>{foodObject.name}</span> 
      </div>
      <Button>ADD</Button>
    </div>);

        };

export default FoodCard; 