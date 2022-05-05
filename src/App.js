import "./styles/categories.scss";
import imageVeg from "./assets/vegetables.jpeg";
import beverage from "./assets/beverage.jpeg";
import beans from "./assets/beans.jpeg";
import proteines from "./assets/proteines.jpeg";
import spices from "./assets/spices.jpeg";
import feculents from "./assets/feculents.jpeg";

const App = () => {
  const categoriesList = [
    {
      id: 1,
      title: "Légumes",
      imageUrl: imageVeg,
    },

    { id: 2, title: "Protéines", imageUrl: proteines },

    { id: 3, title: "Epices et autres", imageUrl: spices },

    { id: 4, title: "Féculents", imageUrl: feculents },

    {
      id: 5,
      title: "Boissons",
      imageUrl: beverage,
    },
  ];

  return (
    <div className="categories-container">
      {categoriesList.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category">
            <h2>{title}</h2>
            <p>Commander</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

// ------- learning path
// We suppress app.css
// App.js : transform App in arrow function and suppress all inside - creating new div as a parent container
// We creates 5 times encapsulated divs - so no DRY - we change it later
// We import sass

// 1st optimization : see what is not repeated itself precisely (here it is an image and h2)
// So this is the changing value in a loop
// map car be useful : it iterate over an array or other collections
// So what would be our collection ? Where to put it ?
// Outside the return value, in App.js inside the function (to call locally) = above the return we create an object (a collection) - we will use it inside return to call values that change
// Best way here : list of objects as we can create properties inside objects (better than using [0][1][x])
// We use arrayname.map : we pass an temporary iterator as argument of the function inside map which iterate over each objects of the array
// So we can use our object property to display their values at each iteration namely the title in h2
// We pass a function to it that display jsx that will be display at each iteration so the category-container
// For that we need dynamic code { ..} after the mother container

// arrayname.map( ({temporaryiterator}) =>(here what happened using temporaryiterator as a function arg - jsx can be use)  )
// Don't forget {} if a variable is passed as here {title}
// ALSO : adding a key={id} in the map function's body and in JSX : as we map through things we use an id that we have in our array -> object -> property
// BEST WAY at the biginning : do in app.js and LATER you can think how to put in other files.

// div auto-fermante sont possible :  <div className="background-image" />

// -----------

// Adding additional CSS that is dynamic is possible :
// the style object can be used inside JSX tag
// it takes an object where the key is the css property you want to modify as backgroundImage
// We also use object destructuring with backsticks and so on to put a variable in a string: `url(${variable})`
// BE careful to not forget we are in a map function so : not forget add imageUrl as an arg of the function

// Importation des images - voir la documentation, ça marche - faire attention si c'est en fait dans le css qu'on renvoit
// Si l'image est sur un lien http absolue ça ira, on le met comme d'hab. Sinon c la méthode avec import et utilisation de la variable créé
