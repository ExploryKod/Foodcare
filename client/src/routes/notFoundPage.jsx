import { Outlet } from 'react-router-dom';
import notFoundImage from '../assets/img/not_found.jpg';

export const NotFoundPage = ({category}) => {
    const path = window.location.pathname;
    const urlParts = path.split('/');
    const searchedPage = urlParts[1];

    return (
    // Source de l'image: Photo de Andrew Neel: https://www.pexels.com/fr-fr/photo/personne-debout-sur-le-chemin-2682462/
      <div className="not-found-container">
            <div className="not-found__sub-container">    
                <img src={notFoundImage} alt="promeneur perdu"/>
                <div className="not-found__text-container">
                    <h1 className="not-found__title">404</h1>
                    {category ? ( <p> Aucune catégorie "{category}" n'a été trouvé.</p>): ( <p> Aucune page "{searchedPage}" n'a été trouvé.</p>)}
                </div>
        </div>
        <Outlet/>
      </div>
    );
  };
  
  export default NotFoundPage;