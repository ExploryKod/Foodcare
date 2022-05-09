import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   
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

// Composant : mettre dans app.js n'est pas une bonne pratique, nous créons donc un composant
// category-food représente toute les catégories d'aliments
// Le props s'appelle category - nous relions le titre et l'url de l'image à ce props dans le composant
// Copie/colle le jsx qui est à l'intérieur de la balise jsx mère.
// l'id en revanche ne peux pas passer comme ça : il doit être au même endroit que là où est appelé map
// pas oublier : export default moncomposant - et de l'importer dans le App.js : le props va donc transférer les data
// la fonction prédéfinis map reste dans le App.js - on lui passe le composant en tant que fonction
// Le props sera mis en tant que argument à la place ded title, imageUrl, id

// On va même prendre la balise mère pour en faire un composant : le categories-container 
// On utilise le props categories pour faire passer les valeurs du tableau d'objets (via map).
//  On importe alors le composant dans App.js qui reste la pièce maîtresse qui précède le index.js qui affiche le site ("render" le site via le DOM virtuel)
// Le return ne prend plus qu'une ligne de jsx avec instanciation du composant avec un props qui permet de relier le tableau au composant et donc à map dans le composant.


// Résolution de bug : 
// Il renvoyé un typeError pour title et ImageUrl undefined => la destructuration de category n'accéder pas
// C'est que le naming était pas respecté : je n'appelais pas chaque objet dans category={...} or c'est bien item qui doit être passé ici entre les {}.
// Dans category-food on décide que category sera le props de CategoryItem
// On utilise la déstructuration pour lui passer imageUrl et title : const { imageUrl, title } = category;
// Dans App.js on a toujours notre fonction map dans les balises mères.
// On instancie CategoryItem en JSX dans App.js ET on appel le props category
// Ce props étant destructuré, il va renvoyer imageUrl et title à notre composant
// Pour les renvoyer il doit acceder à chaque objet de la liste c'est à dire l'iterateur de map (item)
// La clé est obligatoire (renvoi une erreur dans les dev tools sinon même si ça bloque pas l'affichage du site)
// Pour accéder à la clé dans le jsx CategoryItem qui est dans map alors on va l'appeler directement dans App.js 

// Bug : attention à ne pas confondre avec ce qui se met dans {} ou sans cela
// <CategoriesContainer categories={categories} : ici bien noté que entre les {} c'est le tableau et le props issu du composant est "categories="

// Aprés avoir pu importer le router (react router avec npm install) 
// Nous ne voulons pas que App.js affiche le composant ppal jusque là 
// ça doit devenir la home page, l'entrée de notre app. 
// On refais donc un composant
// On va créer une série de composant d'un nouveau genre : ce sont le routes. 
// C'est pas un mot réservé, mais c l'orga selon nous.

// Routes : nous devons maintenant indiquer quelle route sera saisi dans app.js et ce qui sera rendu (affiché)
// const App = () => {

//   return (
//     <Routes>
// Ici le / c'est la racine donc le home - si on met qqchose comme /home la console nous dira qu'elle 
// ne trouve pas le chemin si on charge juste sans le préciser car on charge à la racine
//       <Route path='/' element={<Home/>} />
//     </Routes>
   