import { useState, useRef } from 'react';
import FileList from '../components/uploadList';
import ImageGallery from '../components/imageList';

export const UploadForm = () => {
  
    const [flashMessage, setFlashMessage] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const fileInputRef = useRef(null);

    const handleNameChange = (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const categoryIdAttribute = selectedOption.getAttribute('data-category-id');
  
      setSelectedName(e.target.value);
      setCategoryId(categoryIdAttribute);
    };

      const sendFile = async (e) => {
          e.preventDefault();
          const form = document.getElementById('form');

          const formData = new FormData(form);
          
          // Check if the required fields are empty
          const requiredInputs = form.querySelectorAll('[required]');
          let isEmpty = false;
          requiredInputs.forEach((input) => {
            if (!input.value) {
              isEmpty = true;
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          });

          if (isEmpty) {
            setFlashMessage('Veuillez remplir tous les champs obligatoires');
            setTimeout(() => {
              setFlashMessage('');
            }, 3000);
            return;
          }
          //   todo: pbm avec le lien image dans le serveur et nom du chemin + si il y a trop d'image (attaque etc.)? + htmlspecialchar
          // TOdo: img par role, dossier client etc...
          //  Si deja un nom en image ca ajoute un 2 mais se bloque pas
          // todo: flash message inopérants
          // todo: images s'affiche pas et liste Se met pas a jour sans rafraichir
          const categoryName = formData.get('category_name');
          const categoryNameId = formData.get('category_name_id');
          const imageName = formData.get('image_name').toLowerCase().split(' ').filter(word => word !== '').join('_');
          const productImageUrl = categoryName+'_'+imageName+'.jpeg';
          const productPrice = formData.get('purchasing_product_price') * 1.2;

          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/upload_files`, {
              method: 'POST',
              body: formData,
            });
            
            if (response.ok) {
              // Handle successful upload
  
              const data = await response.json();

                data.map((item) => {   

                  setFlashMessage('Vous avez bien créer votre fichier image nommé: '+item.filename);
                  setTimeout(() => {
                    setFlashMessage('');
                  }, 3000);
                  return item.filename;
                });

                try {
                  // Post the product data
                  const productResponse = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ categoryNameId: categoryNameId, 
                                           categoryName: categoryName, 
                                           image_name: imageName,
                                           productImageUrl: productImageUrl,
                                           productPrice: productPrice }),
                  });
          
                  if (productResponse.ok) {
                    // Product post successful

                    const productData = await productResponse.json();
                    setFlashMessage('le produit "'+productData.image_name+'" a bien été créé en base de donnée');
                    // Reset the form or perform any additional actions
                  } else {
                    console.error('Product post failed!');
                    setFlashMessage('Il y a eu un problème lors de la soumission du formulaire de produit');
                  }
                } catch (error) {
                  console.error('Product post failed:', error);
                  setFlashMessage('Il y a eu une erreur lors de la soumission du formulaire de produit');
                }
            
            } else if (response.status === 409) {
              const data = await response.json();

              setFlashMessage(data.error);
            } else if (response.status === 403) {
              console.error('number max');
              setFlashMessage('Nombre maximum de fichiers atteint');
            } else if (response.status === 400) {
              console.error('Upload failed!');
              setFlashMessage('Il y a eu un problème avec la création de votre image');
              setTimeout(() => {
                setFlashMessage('');
              }, 3000);
            }
          } catch (error) {
            console.error('Upload failed:', error);
            setFlashMessage('Il y a eu une erreur dans la requête');
            setTimeout(() => {
              setFlashMessage('');
            }, 3000);
          }
        };

      
        const handleFileButtonClick = () => {
          fileInputRef.current.click();
        };
      
  
     return (
        <>
          <div className="upload-container upload-page">
          {flashMessage && <div className="output-message">{flashMessage}</div>}
              <div className="container__inner-start">
                <div className="inner-start__title">
                <h1>Photos de produits</h1>
                  <p>Nous vous invitons à nous faire part de nouveaux produits en envoyant ici des photos et une description.</p>
                </div>
                 
                  <form id='form'>
                  <label htmlFor="category_name">Choix de la catégories d'aliment:</label>
                      <select className="input-select" id="category_name" name="category_name" value={selectedName} onChange={handleNameChange} required>
                        <option value="proteines" data-category-id="1">Proteines</option>
                        <option value="legumes" data-category-id="2">Légumes</option>
                        <option value="fruits" data-category-id="3">Fruits</option>
                        <option value="epices" data-category-id="4">Epices</option>
                          <option value="feculents" data-category-id="5">Féculents</option>
                        <option value="boissons" data-category-id="6">Boissons</option>
                      </select>
                      <input type="hidden" name="category_name_id" value={categoryId} />
                      <div className="input-group">
                          <label htmlFor='image-name'>Nom de l'image: </label>
                          <input name='image_name' id='image-name' placeholder="tomate" required />
                      </div>
                      <div className="input-group product-price">
                          <label htmlFor='product_price'>Proposition de prix <span className="optional">(optionnel)</span> :
                          <p>Cette proposition sera augmentée des coûts de distribution (20%)</p>
                          </label>
                          <input type="number" name='purchasing_product_price' id='product_price' placeholder='0' />
                          <span> €</span>
                      </div>
                      <div className="input-group product-description">
                        <label htmlFor="product-description">Décrivez votre produit <span className="optional">(optionnel)</span> :</label>
                        <textarea id="product-description" name="product-description" rows="10"></textarea>
                      </div>
                      <div className="input-group">
                        <label htmlFor="files">Chargez le fichier: </label>
                        <input name="files" id="files" type="file" multiple required ref={fileInputRef} style={{ display: 'none' }}/>
                        <button className="custom-file-button" type="button" onClick={handleFileButtonClick}>Je choisis mon fichier</button>
                      </div>
                      <div className="container__submit-btn">
                        <button className="submit-btn upload-btn" type='submit' onClick={sendFile}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>
                          Envoyer mon produit

                        </button>
                      </div>
                  </form>
              </div>
          </div>
        </>
      );
  };